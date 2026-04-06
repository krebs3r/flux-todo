    // ── Notes ─────────────────────────────────────────────────────────────────
    function switchTasksView(view) {
      activeTasksView = view;
      calendarViewActive = view === 'calendar';
      document.getElementById('tasks-view-wrap').style.display = (view === 'tasks' || view === 'calendar') ? '' : 'none';
      document.getElementById('notes-view-wrap').style.display = view === 'notes' ? '' : 'none';
      document.getElementById('view-btn-tasks').classList.toggle('active', view === 'tasks');
      document.getElementById('view-btn-notes').classList.toggle('active', view === 'notes');
      document.getElementById('view-btn-calendar').classList.toggle('active', view === 'calendar');
      const listEl = document.getElementById('todo-list');
      const calEl = document.getElementById('calendar-container');
      const filterRow = document.querySelector('.filter-sort-row');
      const catRow = document.getElementById('cat-filter-row');
      const statsRow = document.getElementById('stats-row');
      const searchWrap = document.querySelector('.search-wrap');
      if (calendarViewActive) {
        if (listEl) listEl.style.display = 'none';
        if (filterRow) filterRow.style.display = 'none';
        if (catRow) catRow.style.display = 'none';
        if (statsRow) statsRow.style.display = 'none';
        if (searchWrap) searchWrap.style.display = 'none';
        if (calEl) calEl.style.display = '';
      } else {
        if (listEl) listEl.style.display = '';
        if (filterRow) filterRow.style.display = '';
        if (catRow) catRow.style.display = '';
        if (statsRow) statsRow.style.display = '';
        if (searchWrap) searchWrap.style.display = '';
        if (calEl) calEl.style.display = 'none';
      }
      const T = t();
      document.getElementById('tasks-title').textContent = view === 'notes' ? T.viewNotes : view === 'calendar' ? T.calendarBtn : T.tasksTitle;
      if (view === 'calendar') renderCalendar();
      if (view === 'notes') renderNotes();
    }

    function addNote() {
      const input = document.getElementById('notes-compose-input');
      const text = (input.value || '').trim();
      if (!text) return;
      notes.unshift({ id: Date.now(), text: text, createdAt: Date.now() });
      input.value = '';
      document.getElementById('notes-compose-preview').style.display = 'none';
      document.getElementById('notes-compose-preview-toggle').classList.remove('active');
      save();
      renderNotes();
      haptic('light');
    }

    function deleteNote(id) {
      notes = notes.filter(function(n) { return n.id !== id; });
      save();
      renderNotes();
      haptic('medium');
    }

    function startEditNote(id) {
      renderNotes(id);
    }

    function saveEditNote(id) {
      const ta = document.getElementById('note-edit-' + id);
      if (!ta) return;
      const text = ta.value.trim();
      if (!text) return;
      const note = notes.find(function(n) { return n.id === id; });
      if (note) { note.text = text; note.updatedAt = Date.now(); }
      save();
      renderNotes();
      haptic('light');
    }

    function cancelEditNote() {
      renderNotes();
    }

    function toggleNotesComposePreview() {
      const T = t();
      const box = document.getElementById('notes-compose-preview');
      const btn = document.getElementById('notes-compose-preview-toggle');
      const input = document.getElementById('notes-compose-input');
      const show = box.style.display === 'none';
      box.style.display = show ? '' : 'none';
      btn.classList.toggle('active', show);
      if (show) box.innerHTML = renderMarkdownSafe(input.value || '');
    }

    function renderNotes(editingId) {
      const T = t();
      const list = document.getElementById('notes-list');
      if (!list) return;
      if (!notes.length) {
        list.innerHTML = '<div class="empty-state">' + SVG.emptyNotes + '<p class="empty-title">' + escHtml(T.notesEmpty) + '</p><p class="empty-sub">' + escHtml(T.notesEmptySub) + '</p></div>';
        return;
      }
      list.innerHTML = notes.map(function(note) {
        const date = new Date(note.createdAt);
        const dateStr = date.toLocaleDateString(T.lang === 'de' ? 'de-DE' : 'en-GB', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
        if (editingId === note.id) {
          return '<div class="note-card">' +
            '<textarea class="note-edit-textarea" id="note-edit-' + note.id + '" rows="4">' + escHtml(note.text) + '</textarea>' +
            '<div class="note-card-actions">' +
            '<button class="note-action-btn" onclick="saveEditNote(' + note.id + ')">' + escHtml(T.notesSave) + '</button>' +
            '<button class="note-action-btn" onclick="cancelEditNote()">' + escHtml(T.notesCancel) + '</button>' +
            '</div>' +
            '</div>';
        }
        return '<div class="note-card">' +
          '<div class="note-card-body">' + renderMarkdownSafe(note.text) + '</div>' +
          '<div class="note-card-meta">' +
          '<span class="note-card-date">' + dateStr + '</span>' +
          '<div class="note-card-actions">' +
          '<button class="note-action-btn" onclick="startEditNote(' + note.id + ')">' + escHtml(T.notesEdit || 'Bearbeiten') + '</button>' +
          '<button class="note-action-btn danger" onclick="deleteNote(' + note.id + ')">' + escHtml(T.notesDelete) + '</button>' +
          '</div></div>' +
          '</div>';
      }).join('');
    }
