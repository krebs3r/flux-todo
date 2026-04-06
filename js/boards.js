    // ── Board management ─────────────────────────────────────────────────────
    function renderBoardBar() {
      const container = document.getElementById('board-chips');
      container.innerHTML = boards.map(b =>
        '<button class="board-chip' + (b.id === currentBoardId ? ' active' : '') + '"' +
        ' onclick="switchBoard(' + b.id + ')"' +
        ' ondblclick="renameBoard(' + b.id + ')"' +
        ' oncontextmenu="boardContextMenu(event,' + b.id + ')">' +
        escHtml(b.name) +
        ' <span class="board-count">' + b.todos.filter(function(t){ return !t.done; }).length + '</span>' +
        '</button>'
      ).join('');
    }
    function switchBoard(boardId) {
      if (boardId === currentBoardId) return;
      const oldBoard = boards.find(b => b.id === currentBoardId);
      if (oldBoard) { oldBoard.todos = todos; oldBoard.history = history; }
      activateBoard(boardId);
      currentCategory = '';
      searchQuery = '';
      const searchEl = document.getElementById('search-input');
      if (searchEl) searchEl.value = '';
      undoSnapshot = null;
      if (activeTasksView !== 'tasks') switchTasksView('tasks');
      save(); render();
    }
    function addBoard() {
      const T = t();
      const name = prompt(T.boardAddPrompt);
      if (!name || !name.trim()) return;
      const board = { id: Date.now(), name: name.trim().substring(0, 20), todos: [], history: [] };
      boards.push(board);
      switchBoard(board.id);
    }
    function renameBoard(boardId) {
      const T = t();
      const board = boards.find(b => b.id === boardId);
      if (!board) return;
      const name = prompt(T.boardRenamePrompt, board.name);
      if (!name || !name.trim() || name.trim() === board.name) return;
      board.name = name.trim().substring(0, 20);
      save(); render();
    }
    function deleteBoard(boardId) {
      if (boards.length <= 1) {
        showToast(t().boardDeleteLast);
        return;
      }
      const T = t();
      const board = boards.find(b => b.id === boardId);
      if (!board) return;
      const msg = T.boardDeleteConfirm.replace('%NAME%', board.name).replace('%COUNT%', board.todos.length);
      showConfirm(msg, function() {
        boards = boards.filter(b => b.id !== boardId);
        if (currentBoardId === boardId) switchBoard(boards[0].id);
        else { save(); render(); }
      }, null, true);
    }
    function boardContextMenu(e, boardId) {
      e.preventDefault();
      deleteBoard(boardId);
    }

    function moveTodoToBoard(todoId, targetBoardId) {
      if (targetBoardId === currentBoardId) return;
      const targetBoard = boards.find(b => b.id === targetBoardId);
      if (!targetBoard) return;
      const idx = todos.findIndex(t => t.id === todoId);
      if (idx === -1) return;
      saveUndo();
      const todo = todos.splice(idx, 1)[0];
      targetBoard.todos.push(todo);
      const T = t();
      showToast(T.moveToBoardDone.replace('%NAME%', targetBoard.name));
      save(); render();
    }

    function renderBoardManager() {
      const T = t();
      document.getElementById('board-manager-title').textContent = T.boardManagerTitle;
      const el = document.getElementById('board-manager-list');
      const sortedBoards = boards.slice().sort(function(a, b) {
        return String(a.name || '').localeCompare(String(b.name || ''), lang === 'de' ? 'de' : 'en', { sensitivity: 'base' });
      });
      if (sortedBoards.length <= 1) {
        el.innerHTML = '<div class="empty-state">' + SVG.emptyBoards + '<p class="empty-title">' + escHtml(T.boardManagerEmpty) + '</p><p class="empty-sub">' + escHtml(T.boardManagerEmptySub) + '</p></div>';
        return;
      }
      el.innerHTML = sortedBoards.map(function(board) {
        const count = (board.todos || []).filter(function(td) { return !td.done; }).length;
        return '<div class="board-manager-item">' +
          '<span class="tag-manager-badge">' + escHtml(board.name) + '</span>' +
          '<span class="tag-manager-count">' + T.boardManagerCount(count) + '</span>' +
          '<div class="board-manager-actions">' +
            '<button class="tag-mgr-btn" onclick="renameBoard(' + board.id + ')">' + escHtml(T.boardManagerRename) + '</button>' +
            '<button class="tag-mgr-btn danger" onclick="deleteBoard(' + board.id + ')">' + escHtml(T.boardManagerDelete) + '</button>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    function toggleBoardManager() {
      const body = document.getElementById('board-manager-body');
      const chevron = document.getElementById('board-manager-chevron');
      const btn = document.getElementById('board-manager-toggle');
      const show = body.style.display === 'none';
      body.style.display = show ? '' : 'none';
      chevron.classList.toggle('open', show);
      btn.classList.toggle('open', show);
      if (show) renderBoardManager();
    }
