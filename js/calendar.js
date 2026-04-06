    // ── Calendar View ──────────────────────────────────────────────────────
    function toggleCalendarView() {
      switchTasksView(calendarViewActive ? 'tasks' : 'calendar');
    }

    function updateCalendarToggleLabel() {
      calendarViewActive = activeTasksView === 'calendar';
    }

    function renderCalendar() {
      const T = t();
      const year = Math.floor(calendarMonth / 12);
      const month = calendarMonth % 12;

      document.getElementById('calendar-month-label').textContent =
        T.calendarMonthNames[month] + ' ' + year;
      document.getElementById('calendar-today-btn').textContent = T.calendarToday;

      const grid = document.getElementById('calendar-grid');
      let html = '';

      // Day headers (Mon–Sun)
      T.calendarDayNamesShort.forEach(function(d) {
        html += '<div class="calendar-day-header">' + d + '</div>';
      });

      // First day & last day of month
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDow = (firstDay.getDay() + 6) % 7; // Monday = 0

      const now = new Date();
      const todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');

      // Build tasks-by-date map
      const tasksByDate = {};
      todos.forEach(function(todo) {
        if (!todo.dueDate) return;
        const dateStr = todo.dueDate.split('T')[0];
        if (!tasksByDate[dateStr]) tasksByDate[dateStr] = [];
        tasksByDate[dateStr].push(todo);
      });

      // Previous month padding
      const prevLast = new Date(year, month, 0);
      for (let i = startDow - 1; i >= 0; i--) {
        const d = prevLast.getDate() - i;
        const ds = formatCalDate(year, month - 1, d);
        html += renderCalendarDay(d, ds, todayStr, tasksByDate[ds], true);
      }

      // Current month
      for (let d = 1; d <= lastDay.getDate(); d++) {
        const ds = formatCalDate(year, month, d);
        html += renderCalendarDay(d, ds, todayStr, tasksByDate[ds], false);
      }

      // Next month padding
      const totalCells = startDow + lastDay.getDate();
      const remainder = totalCells % 7;
      if (remainder) {
        for (let d = 1; d <= 7 - remainder; d++) {
          const ds = formatCalDate(year, month + 1, d);
          html += renderCalendarDay(d, ds, todayStr, tasksByDate[ds], true);
        }
      }

      grid.innerHTML = html;
    }

    function formatCalDate(year, month, day) {
      const d = new Date(year, month, day);
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function renderCalendarDay(dayNum, dateStr, todayStr, tasks, isOther) {
      const isToday = dateStr === todayStr;
      let cls = 'calendar-day';
      if (isToday) cls += ' today';
      if (isOther) cls += ' other-month';

      let dots = '';
      if (tasks && tasks.length) {
        dots = '<div class="calendar-dots">' + tasks.slice(0, 5).map(function(t) {
          if (t.done) return '<span class="calendar-dot done"></span>';
          const dc = getDueClass(t.dueDate);
          if (dc === 'due-overdue') return '<span class="calendar-dot overdue"></span>';
          return '<span class="calendar-dot"></span>';
        }).join('') + '</div>';
      }

      return '<div class="' + cls + '" onclick="openCalDay(\'' + dateStr + '\')">' +
        '<span class="calendar-day-num">' + dayNum + '</span>' + dots + '</div>';
    }

    function calendarPrev() { calendarMonth--; renderCalendar(); }
    function calendarNext() { calendarMonth++; renderCalendar(); }
    function calendarGoToday() {
      const now = new Date();
      calendarMonth = now.getFullYear() * 12 + now.getMonth();
      renderCalendar();
    }

    function openCalDay(dateStr) {
      const T = t();
      const dayTasks = todos.filter(function(todo) {
        return todo.dueDate && todo.dueDate.split('T')[0] === dateStr;
      });

      // Format heading date nicely
      const parts = dateStr.split('-');
      const dayDate = new Date(+parts[0], +parts[1] - 1, +parts[2]);
      const dayLabel = dayDate.getDate() + '. ' + T.calendarMonthNames[dayDate.getMonth()] + ' ' + dayDate.getFullYear();
      document.getElementById('calday-heading').textContent = dayLabel;

      if (!dayTasks.length) {
        document.getElementById('calday-body').innerHTML =
          '<p style="text-align:center;opacity:0.6;margin:20px 0">' + T.calendarNoTasks + '</p>';
      } else {
        const prioLabel = { high: T.priorityHigh, medium: T.priorityMedium, low: T.priorityLow };
        document.getElementById('calday-body').innerHTML = dayTasks.map(function(todo) {
          const timeStr = todo.dueDate.includes('T') ? todo.dueDate.split('T')[1] : '';
          return '<div class="calday-task">' +
            '<label class="checkbox-wrap" style="flex-shrink:0">' +
              '<input type="checkbox" ' + (todo.done ? 'checked' : '') + ' onchange="toggleTodo(' + todo.id + ');openCalDay(\'' + dateStr + '\')" />' +
              '<span class="checkbox-box"><span class="checkbox-check">' + SVG.check + '</span></span>' +
            '</label>' +
            '<div style="flex:1;min-width:0">' +
              '<div class="todo-text" style="' + (todo.done ? 'text-decoration:line-through;opacity:0.5' : '') + '">' + escHtml(todo.text) + '</div>' +
              '<div class="calday-meta">' +
                (timeStr ? '<span class="calday-time">' + timeStr + '</span>' : '') +
                (todo.priority ? '<span class="prio-badge" data-p="' + todo.priority + '">' + prioLabel[todo.priority] + '</span>' : '') +
                ((todo.categories || []).map(function(c) { return '<span class="cat-badge" style="' + catStyle(c) + '">#' + escHtml(c) + '</span>'; }).join('')) +
              '</div>' +
            '</div>' +
            '<div class="calday-actions">' +
              '<button class="action-btn" title="' + T.editTitle + '" onclick="calDayEdit(' + todo.id + ')">' + SVG.edit + '</button>' +
              '<button class="action-btn danger" title="' + T.deleteTitle + '" onclick="calDayDelete(' + todo.id + ',\'' + dateStr + '\')">' + SVG.trash + '</button>' +
            '</div>' +
          '</div>';
        }).join('');
      }

      document.getElementById('calday-backdrop').classList.add('show');
      document.addEventListener('keydown', onCalDayEscClose);
    }

    function calDayEdit(id) {
      closeCalDay();
      if (calendarViewActive) toggleCalendarView();
      switchTab('tasks');
      setTimeout(function() { startEdit(id); }, 100);
    }

    function calDayDelete(id, dateStr) {
      deleteTodo(id);
      openCalDay(dateStr);
    }

    function closeCalDay() {
      document.getElementById('calday-backdrop').classList.remove('show');
      document.removeEventListener('keydown', onCalDayEscClose);
      if (calendarViewActive) renderCalendar();
    }
    function handleCalDayBackdropClick(e) { if (e.target === e.currentTarget) closeCalDay(); }
    function onCalDayEscClose(e) { if (e.key === 'Escape') closeCalDay(); }
