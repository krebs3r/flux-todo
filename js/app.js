    // ── SVG Icons ────────────────────────────────────────────────────────────
    const THEMES = {
      flux:   { light: '#c8d6e5', dark: '#0c1648' },
      ocean:  { light: '#6dd5ed', dark: '#041530' },
      sunset: { light: '#ffd166', dark: '#2e1206' },
      forest: { light: '#74c69d', dark: '#152b20' },
      rose:   { light: '#ffb3c6', dark: '#2a0e1a' },
      mono:   { light: '#c5c9d0', dark: '#141618' },
      bender: { light: '#b8c8e0', dark: '#0e1828' },
      lumpi:  { light: '#e2d0b8', dark: '#1c100a' },
      nobler: { light: '#d0d0d8', dark: '#10101a' },
    };
    /* Gradient-end colors — used for body background so Android navbar picks up the color */
    const THEME_BG = {
      flux:   { light: '#a8b8d0', dark: '#160832' },
      ocean:  { light: '#90e0ef', dark: '#0a2a52' },
      sunset: { light: '#f08060', dark: '#4a2210' },
      forest: { light: '#95d5b2', dark: '#1e4030' },
      rose:   { light: '#ffc8d6', dark: '#421828' },
      mono:   { light: '#e2e5ea', dark: '#22252a' },
      bender: { light: '#ccdaea', dark: '#182638' },
      lumpi:  { light: '#ecdec8', dark: '#2c1c12' },
      nobler: { light: '#e0e0e8', dark: '#1c1c26' },
    };
    const SWATCH_BG = {
      flux:   'linear-gradient(to bottom,#c8d6e5,#b0bfd4,#a8b8d0)',
      ocean:  'linear-gradient(to bottom,#48cae4,#00b4d8,#90e0ef)',
      sunset: 'linear-gradient(to bottom,#ffd166,#ef8c5c,#f4845f)',
      forest: 'linear-gradient(to bottom,#74c69d,#52b788,#95d5b2)',
      rose:   'linear-gradient(to bottom,#ffb3c6,#ff85a1,#fbb1bd)',
      mono:   'linear-gradient(to bottom,#d1d5db,#9ca3af,#e5e7eb)',
      bender: 'linear-gradient(to bottom,#b8c8e0,#8fa5c8,#c8d5e8)',
      lumpi:  'linear-gradient(to bottom,#e2d0b8,#c8b090,#ead8c0)',
      nobler: 'linear-gradient(to bottom,#d0d0d8,#b0b0bc,#dcdce4)',
    };

    const SVG = {
      moon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
      sun:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      autoMode: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 0 0 20z" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="10"/></svg>`,
      grip: `<svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><circle cx="3" cy="2.5" r="1.3"/><circle cx="9" cy="2.5" r="1.3"/><circle cx="3" cy="7" r="1.3"/><circle cx="9" cy="7" r="1.3"/><circle cx="3" cy="11.5" r="1.3"/><circle cx="9" cy="11.5" r="1.3"/></svg>`,
      edit: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
      trash:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
      check:`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
      inbox:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>`,
      emptyHistory:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      bell:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
      bellOff:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
      timer:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><line x1="9" y1="1" x2="15" y2="1"/><line x1="12" y1="1" x2="12" y2="4"/></svg>`,
      pause:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="10" y1="4" x2="10" y2="20"/><line x1="14" y1="4" x2="14" y2="20"/></svg>`,
      play:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      stopIcon:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
      repeat:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
      stopwatch:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="8"/><line x1="12" y1="14" x2="12" y2="10"/><line x1="9" y1="1" x2="15" y2="1"/><line x1="12" y1="1" x2="12" y2="4"/><line x1="20" y1="5" x2="18" y2="7"/></svg>`,
      emptyNotes:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      emptyStats:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
      emptyArchive:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
      emptyTags:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
      emptyBoards:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="8" height="7" rx="1.5"/><rect x="13" y="4" width="8" height="7" rx="1.5"/><rect x="3" y="13" width="8" height="7" rx="1.5"/><rect x="13" y="13" width="8" height="7" rx="1.5"/></svg>`,
      emptyTemplates:`<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    };

    // ── State ────────────────────────────────────────────────────────────────
    let boards = [];
    let currentBoardId = null;
    let todos = [];
    let history = [];
    let notes = [];
    let activeTasksView = 'tasks'; // 'tasks' or 'notes'
    let currentFilter = 'open';
    let lang = 'de';
    let dark = false;
    let darkPref = 'auto'; // 'auto' | 'dark' | 'light'
    let currentTheme = 'flux';
    let dragSrcIndex = null;
    let touchDragActive = false;
    let newPriority = '';
    let searchQuery = '';
    let currentSort = 'priority';
    let currentCategory = '';
    let activeTab = 'tasks';
    let newAdvancedOpen = false;
    let notifyEnabled = false;
    let taskColorsEnabled = true;
    let newTaskColor = '';
    const TASK_COLORS = ['#ef5350','#ff9800','#ffd600','#66bb6a','#26c6da','#3d5afe','#ab47bc','#ec407a'];
    const notifiedIds = new Set();
    let storageWarningShown = false;
    let exportReminderEnabled = true;
    let exportReminderDays = 14;
    let templates = [];
    let editingTemplateId = null;
    let searchDebounceTimer = null;
    let quickActionTodoId = null;
    let quickActionsOpen = false;
    let minuteSignature = '';

    const t = () => window.i18n[lang];
    const STARTER_NOTES_VERSION = 1;

    function getStarterCatalog(langCode) {
      const T = window.i18n[langCode] || window.i18n.de;
      return {
        boardName: T.starterBoardName || 'Welcome',
        tasks: {
          tryComplete: { text: T.starterTaskTryComplete, note: T.starterTaskTryCompleteNote },
          explore: {
            text: T.starterTaskExplore,
            note: T.starterTaskExploreNote,
            subtasks: {
              edit: T.starterSubtaskEdit,
              color: T.starterSubtaskColor,
              tag: T.starterSubtaskTag
            }
          },
          due: { text: T.starterTaskDue, note: T.starterTaskDueNote },
          today: { text: T.starterTaskToday, note: T.starterTaskTodayNote },
          recurring: { text: T.starterTaskRecurring, note: T.starterTaskRecurringNote },
          weekly: { text: T.starterTaskWeekly, note: T.starterTaskWeeklyNote },
          focus: { text: T.starterTaskFocus, note: T.starterTaskFocusNote },
          search: { text: T.starterTaskSearch, note: T.starterTaskSearchNote },
          boards: { text: T.starterTaskBoards, note: T.starterTaskBoardsNote },
          inbox: { text: T.starterTaskInbox, note: T.starterTaskInboxNote },
          done: { text: T.starterTaskDone, note: T.starterTaskDoneNote }
        }
      };
    }

    function createStarterContent(langCode) {
      const starter = getStarterCatalog(langCode || lang);
      const now = Date.now();
      const day = 86400000;
      const welcomeBoardId = now - 1000;
      const inboxBoardId = now - 999;
      const completedAt = now - day;

      function starterTodo(taskKey, extra) {
        const task = starter.tasks[taskKey] || {};
        return Object.assign(
          {
            text: task.text,
            starterKey: taskKey
          },
          task.note ? { note: task.note } : {},
          extra || {}
        );
      }

      function datePlus(daysFromNow, time) {
        const d = new Date(now + daysFromNow * day);
        const iso = formatDateISO(d);
        return time ? iso + 'T' + time : iso;
      }
      function weekdayPlus(daysFromNow) {
        return new Date(now + daysFromNow * day).getDay();
      }

      return {
        boards: [
          {
            id: welcomeBoardId,
            name: starter.boardName,
            starterBoard: true,
            starterNotesVersion: STARTER_NOTES_VERSION,
            todos: [
              starterTodo('tryComplete', { id: now - 700, done: false, created: now - day * 6, priority: 'high', categories: ['welcome'] }),
              starterTodo('explore', {
                id: now - 699,
                done: false,
                created: now - day * 5,
                priority: 'medium',
                categories: ['welcome', 'demo'],
                color: '#3d5afe',
                subtasks: [
                  { text: starter.tasks.explore.subtasks.edit, done: false, starterSubtaskKey: 'edit' },
                  { text: starter.tasks.explore.subtasks.color, done: false, starterSubtaskKey: 'color' },
                  { text: starter.tasks.explore.subtasks.tag, done: false, starterSubtaskKey: 'tag' }
                ]
              }),
              starterTodo('due', { id: now - 698, done: false, created: now - day * 4, dueDate: datePlus(1, '09:30'), categories: ['planning'] }),
              starterTodo('today', { id: now - 697, done: false, created: now - day * 4 + 1, dueDate: datePlus(0), priority: 'high', categories: ['today'] }),
              starterTodo('recurring', { id: now - 696, done: false, created: now - day * 3, dueDate: datePlus(1, '09:00'), recurrence: 'daily', categories: ['routine'] }),
              starterTodo('weekly', { id: now - 695, done: false, created: now - day * 3 + 1, dueDate: datePlus(3, '16:00'), recurrence: 'weekly:' + weekdayPlus(3), categories: ['routine'] }),
              starterTodo('focus', { id: now - 694, done: false, created: now - day * 2, priority: 'low', categories: ['focus'] }),
              starterTodo('search', { id: now - 693, done: false, created: now - day * 2 + 1, categories: ['demo', 'search'], color: '#26c6da' }),
              starterTodo('boards', { id: now - 692, done: false, created: now - day, categories: ['boards'] }),
              starterTodo('inbox', { id: now - 691, done: false, created: now - day + 1, categories: ['welcome'] }),
              starterTodo('done', { id: now - 690, done: true, created: now - day * 3, completedAt, categories: ['archive'] })
            ],
            history: [
              { type: 'done', text: starter.tasks.done.text, ts: completedAt }
            ]
          },
          {
            id: inboxBoardId,
            name: (window.i18n[langCode || lang] || window.i18n.de).boardDefault || 'Inbox',
            todos: [],
            history: []
          }
        ],
        currentBoardId: welcomeBoardId
      };
    }

    function translateStarterBoardContent(prevLang, nextLang) {
      const prevStarter = getStarterCatalog(prevLang);
      const nextStarter = getStarterCatalog(nextLang);
      const welcomeBoard = boards.find(function(board) {
        return board && (board.starterBoard || board.name === prevStarter.boardName || board.name === nextStarter.boardName);
      });
      if (!welcomeBoard) return false;
      let didChange = false;

      if (!welcomeBoard.starterBoard) {
        welcomeBoard.starterBoard = true;
        didChange = true;
      }
      if (welcomeBoard.name === prevStarter.boardName || welcomeBoard.name === nextStarter.boardName) {
        if (welcomeBoard.name !== nextStarter.boardName) {
          welcomeBoard.name = nextStarter.boardName;
          didChange = true;
        }
      }

      const shouldBackfillStarterNotes = (welcomeBoard.starterNotesVersion || 0) < STARTER_NOTES_VERSION;
      const starterKeys = Object.keys(nextStarter.tasks);
      const subtaskKeys = ['edit', 'color', 'tag'];
      (welcomeBoard.todos || []).forEach(function(todo) {
        if (!todo || typeof todo.text !== 'string') return;
        let key = todo.starterKey || starterKeys.find(function(starterKey) {
          const prevText = prevStarter.tasks[starterKey] && prevStarter.tasks[starterKey].text;
          const nextText = nextStarter.tasks[starterKey] && nextStarter.tasks[starterKey].text;
          return todo.text === prevText || todo.text === nextText;
        });
        if (!key || !nextStarter.tasks[key]) return;
        if (todo.starterKey !== key) {
          todo.starterKey = key;
          didChange = true;
        }
        const prevTask = prevStarter.tasks[key] || {};
        const nextTask = nextStarter.tasks[key] || {};
        if (todo.text === prevTask.text || todo.text === nextTask.text) {
          if (todo.text !== nextTask.text) {
            todo.text = nextTask.text;
            didChange = true;
          }
        }
        if (Object.prototype.hasOwnProperty.call(prevTask, 'note') || Object.prototype.hasOwnProperty.call(nextTask, 'note')) {
          const currentNote = todo.note || '';
          if (shouldBackfillStarterNotes && !currentNote && nextTask.note) {
            if (todo.note !== nextTask.note) {
              todo.note = nextTask.note;
              didChange = true;
            }
          } else if (currentNote === (prevTask.note || '') || currentNote === (nextTask.note || '')) {
            if (nextTask.note) {
              if (todo.note !== nextTask.note) {
                todo.note = nextTask.note;
                didChange = true;
              }
            } else if (Object.prototype.hasOwnProperty.call(todo, 'note')) {
              delete todo.note;
              didChange = true;
            }
          }
        }
        if (Array.isArray(todo.subtasks) && prevTask.subtasks && nextTask.subtasks) {
          todo.subtasks.forEach(function(subtask) {
            if (!subtask || typeof subtask.text !== 'string') return;
            let subKey = subtask.starterSubtaskKey || subtaskKeys.find(function(candidate) {
              return subtask.text === prevTask.subtasks[candidate] || subtask.text === nextTask.subtasks[candidate];
            });
            if (!subKey) return;
            if (subtask.starterSubtaskKey !== subKey) {
              subtask.starterSubtaskKey = subKey;
              didChange = true;
            }
            if (subtask.text !== nextTask.subtasks[subKey]) {
              subtask.text = nextTask.subtasks[subKey];
              didChange = true;
            }
          });
        }
      });

      (welcomeBoard.history || []).forEach(function(entry) {
        if (!entry || typeof entry.text !== 'string') return;
        if (entry.text === prevStarter.tasks.done.text || entry.text === nextStarter.tasks.done.text) {
          if (entry.text !== nextStarter.tasks.done.text) {
            entry.text = nextStarter.tasks.done.text;
            didChange = true;
          }
        }
      });
      if (welcomeBoard.starterNotesVersion !== STARTER_NOTES_VERSION) {
        welcomeBoard.starterNotesVersion = STARTER_NOTES_VERSION;
        didChange = true;
      }
      return didChange;
    }

    // ── History helpers ──────────────────────────────────────────────────────
    function addHistory(type, text) {
      history.unshift({ type, text, ts: Date.now() });
      if (history.length > 100000) history.pop();
    }
    function formatDate(ts) {
      const d = new Date(ts);
      const pad = n => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }
    function formatShortDate(ts) {
      const d = new Date(ts);
      const pad = n => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    }
    function formatDateLocalISO(d) {
      const pad = n => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    }

    function getDueClass(dueDate) {
      const now = new Date();
      const today = formatDateLocalISO(now);
      const dateOnly = dueDate.split('T')[0];
      if (dueDate.includes('T')) {
        const due = new Date(dueDate);
        if (due < now) return 'due-overdue';
        if (dateOnly === today) return 'due-today';
        return 'due-future';
      }
      if (dateOnly < today) return 'due-overdue';
      if (dateOnly === today) return 'due-today';
      return 'due-future';
    }
    function formatDueDate(dueDate) {
      if (!dueDate.includes('T')) return dueDate;
      const [d, tm] = dueDate.split('T');
      return d + ' · ' + tm;
    }

    // ── Recurring tasks ────────────────────────────────────────────────────
    function ordSuffix(n) {
      const s = ['th','st','nd','rd'], v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    }
    function getNextOccurrence(recurrence, currentDueDate) {
      if (!recurrence || !currentDueDate) return '';
      const dateOnly = currentDueDate.split('T')[0];
      const timePart = currentDueDate.includes('T') ? currentDueDate.split('T')[1] : '';
      const parts = dateOnly.split('-');
      const d = new Date(+parts[0], +parts[1] - 1, +parts[2]);
      const type = recurrence.split(':')[0];
      const param = recurrence.split(':')[1];
      function advance(dt) {
        if (type === 'daily') { dt.setDate(dt.getDate() + 1); }
        else if (type === 'weekly') { dt.setDate(dt.getDate() + 7); }
        else if (type === 'biweekly') { dt.setDate(dt.getDate() + 14); }
        else if (type === 'monthly') {
          let m = dt.getMonth() + 1, y = dt.getFullYear();
          if (m > 11) { m = 0; y++; }
          if (param === 'last') { dt.setTime(new Date(y, m + 1, 0).getTime()); }
          else { const mx = new Date(y, m + 1, 0).getDate(); dt.setTime(new Date(y, m, Math.min(parseInt(param,10), mx)).getTime()); }
        }
      }
      advance(d);
      // Advance past today if result is overdue
      const today = new Date(); today.setHours(0,0,0,0);
      let safety = 0;
      while (d < today && safety < 400) { advance(d); safety++; }
      const iso = formatDateISO(d);
      return timePart ? iso + 'T' + timePart : iso;
    }
    function formatDateISO(d) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return y + '-' + m + '-' + day;
    }
    function recurrenceLabel(recurrence) {
      if (!recurrence) return '';
      const T = t();
      const type = recurrence.split(':')[0];
      const param = recurrence.split(':')[1];
      if (type === 'daily') return T.recurLabelDaily;
      if (type === 'weekly') return T.recurLabelWeekly(T.recurDayNamesFull[parseInt(param, 10)]);
      if (type === 'biweekly') return T.recurLabelBiweekly(T.recurDayNamesFull[parseInt(param, 10)]);
      if (type === 'monthly') {
        if (param === 'last') return T.recurLabelMonthlyLast;
        return T.recurLabelMonthlyDay(parseInt(param, 10));
      }
      return '';
    }
    function onRecurChange(prefix) {
      const sel = document.getElementById(prefix + '-todo-recur');
      const detail = document.getElementById(prefix + '-todo-recur-detail');
      const detailWrap = document.getElementById(prefix + '-todo-recur-detail-wrap');
      const val = sel.value;
      const T = t();
      if (val === 'weekly' || val === 'biweekly') {
        let dayVal = '';
        const dueInput = document.getElementById(prefix + '-todo-due');
        if (dueInput && dueInput.value) {
          const p = dueInput.value.split('-');
          dayVal = String(new Date(+p[0], +p[1]-1, +p[2]).getDay());
        }
        if (detail) {
          detail.innerHTML = T.recurDayNames.map(function(name, i) { return '<option value="' + i + '">' + name + '</option>'; }).join('');
          if (dayVal) detail.value = dayVal;
        }
        if (detailWrap) detailWrap.style.display = '';
        populateRecurDetailDD(prefix, 'week', T, dayVal || '0');
      } else if (val === 'monthly') {
        let dayNum = '';
        const dueInput2 = document.getElementById(prefix + '-todo-due');
        if (dueInput2 && dueInput2.value) dayNum = String(parseInt(dueInput2.value.split('-')[2], 10));
        if (detail) {
          let opts = '';
          for (let i = 1; i <= 31; i++) opts += '<option value="' + i + '">' + i + '.</option>';
          opts += '<option value="last">' + T.recurMonthlyLast + '</option>';
          detail.innerHTML = opts;
          if (dayNum) detail.value = dayNum;
        }
        if (detailWrap) detailWrap.style.display = '';
        populateRecurDetailDD(prefix, 'month', T, dayNum || '1');
      } else {
        if (detail) { detail.innerHTML = ''; }
        if (detailWrap) detailWrap.style.display = 'none';
      }
      // Auto-fill due date if empty and recurrence selected
      if (val) {
        const dueInp = document.getElementById(prefix + '-todo-due');
        if (dueInp && !dueInp.value) {
          dueInp.value = formatDateISO(new Date());
          if ((val === 'weekly' || val === 'biweekly') && detail) {
            detail.value = new Date().getDay();
            syncRecurDetailLabel(prefix);
          } else if (val === 'monthly' && detail) {
            detail.value = new Date().getDate();
            syncRecurDetailLabel(prefix);
          }
        }
      }
    }
    function getRecurValue(prefix) {
      const sel = document.getElementById(prefix + '-todo-recur');
      if (!sel) return '';
      const val = sel.value;
      if (!val) return '';
      if (val === 'daily') return 'daily';
      const detail = document.getElementById(prefix + '-todo-recur-detail');
      return val + ':' + (detail ? detail.value : '0');
    }
    function populateRecurSelect(prefix, T) {
      const sel = document.getElementById(prefix + '-todo-recur');
      if (!sel) return;
      const opts = [
        { val: '', label: T.recurNone },
        { val: 'daily', label: T.recurDaily },
        { val: 'weekly', label: T.recurWeekly },
        { val: 'biweekly', label: T.recurBiweekly },
        { val: 'monthly', label: T.recurMonthly }
      ];
      sel.innerHTML = opts.map(o => '<option value="' + o.val + '">' + o.label + '</option>').join('');
      const ac = document.getElementById(prefix + '-todo-recur-ac');
      if (ac) {
        ac.innerHTML = opts.map(o =>
          '<div class="cat-ac-item' + (o.val === sel.value ? ' active' : '') + '" data-val="' + o.val + '" onclick="selectRecurOpt(\'' + prefix + '\',\'' + o.val + '\',\'' + o.label.replace(/'/g, "\\'") + '\')">' + o.label + '</div>'
        ).join('');
      }
      syncRecurLabel(prefix, T);
    }
    function syncRecurLabel(prefix, T) {
      const sel = document.getElementById(prefix + '-todo-recur');
      const labelEl = document.getElementById(prefix + '-todo-recur-label');
      const btnEl = document.getElementById(prefix + '-todo-recur-btn');
      if (!sel || !labelEl) return;
      const map = { '': T.recurNone, daily: T.recurDaily, weekly: T.recurWeekly, biweekly: T.recurBiweekly, monthly: T.recurMonthly };
      labelEl.textContent = map[sel.value] || T.recurNone;
      if (btnEl) btnEl.classList.toggle('placeholder', !sel.value);
    }
    function syncRecurDetailLabel(prefix) {
      const sel = document.getElementById(prefix + '-todo-recur-detail');
      const ac = document.getElementById(prefix + '-todo-recur-detail-ac');
      const labelEl = document.getElementById(prefix + '-todo-recur-detail-label');
      if (!sel || !ac || !labelEl) return;
      const val = sel.value;
      const item = ac.querySelector('[data-val="' + val + '"]');
      if (item) {
        labelEl.textContent = item.textContent;
        ac.querySelectorAll('.cat-ac-item').forEach(el => el.classList.toggle('active', el.dataset.val === val));
      }
    }
    function toggleRecurDD(id) {
      const ac = document.getElementById(id + '-ac');
      if (!ac) return;
      const isOpen = ac.classList.contains('open');
      document.querySelectorAll('.sort-ac').forEach(el => el.classList.remove('open'));
      if (!isOpen) ac.classList.add('open');
    }
    function selectRecurOpt(prefix, val, label) {
      const sel = document.getElementById(prefix + '-todo-recur');
      if (sel) sel.value = val;
      const labelEl = document.getElementById(prefix + '-todo-recur-label');
      if (labelEl) labelEl.textContent = label;
      const btnEl = document.getElementById(prefix + '-todo-recur-btn');
      if (btnEl) btnEl.classList.toggle('placeholder', !val);
      const ac = document.getElementById(prefix + '-todo-recur-ac');
      if (ac) {
        ac.classList.remove('open');
        ac.querySelectorAll('.cat-ac-item').forEach(el => el.classList.toggle('active', el.dataset.val === val));
      }
      onRecurChange(prefix);
    }
    function selectRecurDetailOpt(prefix, val, label) {
      const sel = document.getElementById(prefix + '-todo-recur-detail');
      if (sel) sel.value = val;
      const labelEl = document.getElementById(prefix + '-todo-recur-detail-label');
      if (labelEl) labelEl.textContent = label;
      const ac = document.getElementById(prefix + '-todo-recur-detail-ac');
      if (ac) {
        ac.classList.remove('open');
        ac.querySelectorAll('.cat-ac-item').forEach(el => el.classList.toggle('active', el.dataset.val === val));
      }
    }
    function populateRecurDetailDD(prefix, type, T, currentVal) {
      const ac = document.getElementById(prefix + '-todo-recur-detail-ac');
      const labelEl = document.getElementById(prefix + '-todo-recur-detail-label');
      if (!ac) return;
      let opts = [];
      if (type === 'week') {
        opts = T.recurDayNames.map(function(name, i) { return { val: String(i), label: name }; });
      } else {
        for (var i = 1; i <= 31; i++) opts.push({ val: String(i), label: i + '.' });
        opts.push({ val: 'last', label: T.recurMonthlyLast });
      }
      ac.innerHTML = opts.map(o =>
        '<div class="cat-ac-item' + (o.val === currentVal ? ' active' : '') + '" data-val="' + o.val + '" onclick="selectRecurDetailOpt(\'' + prefix + '\',\'' + o.val + '\',\'' + o.label.replace(/'/g, "\\'") + '\')">' + o.label + '</div>'
      ).join('');
      if (labelEl) {
        const cur = opts.find(o => o.val === currentVal) || opts[0];
        if (cur) labelEl.textContent = cur.label;
      }
    }

    // ── CRUD ─────────────────────────────────────────────────────────────────
    function addTodo() {
      const input = document.getElementById('new-todo-input');
      const text = input.value.trim();
      if (!text) return;
      const noteInput = document.getElementById('new-todo-note');
      const dueInput = document.getElementById('new-todo-due');
      const timeInput = document.getElementById('new-todo-time');
      const catInput = document.getElementById('new-todo-cat');
      const dueDate = dueInput.value ? (timeInput.value ? dueInput.value + 'T' + timeInput.value : dueInput.value) : '';
      const recur = getRecurValue('new');
      const cats = [...new Set(catInput.value.split(',').map(function(s) { return s.trim().replace(/^#/, ''); }).filter(Boolean))];
      todos.unshift({ id: Date.now(), text, done: false, created: Date.now(), priority: newPriority, note: noteInput.value.trim(), dueDate: dueDate, categories: cats, recurrence: recur, color: newTaskColor || undefined });
      addHistory('created', text);
      input.value = '';
      noteInput.value = '';
      dueInput.value = '';
      timeInput.value = '';
      catInput.value = '';
      document.getElementById('new-todo-recur').value = '';
      const recurDetailWrap = document.getElementById('new-todo-recur-detail-wrap');
      if (recurDetailWrap) recurDetailWrap.style.display = 'none';
      syncRecurLabel('new', t());
      newPriority = '';
      newTaskColor = '';
      currentCategory = '';
      updatePrioChips();
      renderColorPicker('new-color-picker', newTaskColor, function(c) { newTaskColor = c; });
      updateFieldLabels();
      haptic('success');
      save(); render();
      switchTab('tasks');
    }
    function toggleTodo(id) {
      saveUndo();
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      todo.done = !todo.done;
      if (todo.done) {
        if (todo.timerStarted) {
          todo.timeSpent = (todo.timeSpent || 0) + (Date.now() - todo.timerStarted);
          delete todo.timerStarted;
        }
        todo.completedAt = Date.now();
        addHistory('done', todo.text);
        confetti();
        // Create next recurring instance
        if (todo.recurrence && todo.dueDate) {
          const nextDue = getNextOccurrence(todo.recurrence, todo.dueDate);
          if (nextDue) {
            todos.unshift({
              id: Date.now() + 1,
              text: todo.text,
              done: false,
              created: Date.now(),
              priority: todo.priority,
              note: todo.note,
              dueDate: nextDue,
              categories: todo.categories ? todo.categories.slice() : [],
              recurrence: todo.recurrence,
              subtasks: todo.subtasks ? todo.subtasks.map(s => ({ text: s.text, done: false })) : undefined
            });
            addHistory('recurring', todo.text);
          }
        }
      } else {
        delete todo.completedAt;
        addHistory('undone', todo.text);
      }
      haptic('success');
      save(); render();
    }
    function toggleSubtask(todoId, subtaskIndex) {
      const todo = todos.find(t => t.id === todoId);
      if (!todo || !todo.subtasks || !todo.subtasks[subtaskIndex]) return;
      todo.subtasks[subtaskIndex].done = !todo.subtasks[subtaskIndex].done;
      haptic('light');
      save(); render();
    }
    function deleteTodo(id) {
      saveUndo();
      const todo = todos.find(t => t.id === id);
      if (todo) addHistory('deleted', todo.text);
      todos = todos.filter(t => t.id !== id);
      haptic('warning');
      save(); render();
      showToast(t().deleteTitle, true);
    }
    function closeQuickActions() {
      quickActionsOpen = false;
      quickActionTodoId = null;
      document.body.classList.remove('quick-actions-open');
      document.getElementById('quick-actions-backdrop').classList.remove('show');
    }
    function openQuickActions(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      const T = t();
      quickActionTodoId = id;
      quickActionsOpen = true;
      document.body.classList.add('quick-actions-open');
      document.getElementById('quick-actions-title').textContent = T.quickActionsTitle + ': ' + todo.text.slice(0, 40);
      const toggleLabel = todo.done ? T.quickActionUndone : T.quickActionDone;
      const timerLabel = todo.timerStarted ? T.quickActionTimerStop : T.quickActionTimerStart;
      document.getElementById('qa-edit-btn').textContent = T.quickActionEdit;
      document.getElementById('qa-edit-btn').setAttribute('aria-label', T.quickActionEdit);
      document.getElementById('qa-edit-btn').title = T.quickActionEdit;
      document.getElementById('qa-toggle-btn').textContent = toggleLabel;
      document.getElementById('qa-toggle-btn').setAttribute('aria-label', toggleLabel);
      document.getElementById('qa-toggle-btn').title = toggleLabel;
      document.getElementById('qa-timer-btn').textContent = timerLabel;
      document.getElementById('qa-timer-btn').setAttribute('aria-label', timerLabel);
      document.getElementById('qa-timer-btn').title = timerLabel;
      document.getElementById('qa-pomo-btn').textContent = T.quickActionPomodoro;
      document.getElementById('qa-pomo-btn').setAttribute('aria-label', T.quickActionPomodoro);
      document.getElementById('qa-pomo-btn').title = T.quickActionPomodoro;
      document.getElementById('qa-delete-btn').textContent = T.quickActionDelete;
      document.getElementById('qa-delete-btn').setAttribute('aria-label', T.quickActionDelete);
      document.getElementById('qa-delete-btn').title = T.quickActionDelete;
      document.getElementById('qa-close-btn').textContent = T.quickActionClose;
      document.getElementById('qa-close-btn').setAttribute('aria-label', T.quickActionClose);
      document.getElementById('qa-close-btn').title = T.quickActionClose;
      document.getElementById('qa-timer-btn').disabled = !!todo.done;
      document.getElementById('qa-pomo-btn').disabled = !!todo.done;
      document.getElementById('quick-actions-backdrop').classList.add('show');
    }
    function handleQuickActionsBackdrop(e) {
      if (e.target === e.currentTarget) closeQuickActions();
    }
    function quickActionEdit() {
      if (quickActionTodoId === null) return;
      const id = quickActionTodoId;
      closeQuickActions();
      startEdit(id);
    }
    function quickActionToggleDone() {
      if (quickActionTodoId === null) return;
      const id = quickActionTodoId;
      closeQuickActions();
      toggleTodo(id);
    }
    function quickActionTimer() {
      if (quickActionTodoId === null) return;
      const id = quickActionTodoId;
      closeQuickActions();
      toggleTaskTimer(id);
    }
    function quickActionPomodoro() {
      if (quickActionTodoId === null) return;
      const id = quickActionTodoId;
      closeQuickActions();
      startPomodoro(id);
    }
    function quickActionDelete() {
      if (quickActionTodoId === null) return;
      const id = quickActionTodoId;
      closeQuickActions();
      deleteTodo(id);
    }
    function catHue(str) {
      let h = 0;
      for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
      return ((h % 360) + 360) % 360;
    }
    function catStyle(tag) {
      const h = catHue(tag);
      if (dark) return 'background:hsla(' + h + ',72%,50%,0.18);border:1px solid hsla(' + h + ',72%,62%,0.34)';
      return 'background:hsla(' + h + ',78%,40%,0.16);border:1px solid hsla(' + h + ',78%,36%,0.30)';
    }
    function getAllTags() {
      const tags = {};
      todos.forEach(function(t) { (t.categories || []).forEach(function(c) { tags[c] = true; }); });
      return Object.keys(tags).sort();
    }
    function getTagCounts() {
      const counts = {};
      todos.forEach(function(t) {
        (t.categories || []).forEach(function(c) { counts[c] = (counts[c] || 0) + 1; });
      });
      return counts;
    }
    function renderTagManager() {
      const T = t();
      document.getElementById('tag-manager-title').textContent = T.tagManagerTitle;
      document.getElementById('footer-disclaimer').innerHTML = T.footerDisclaimer;
      document.getElementById('footer-project-hint').innerHTML = T.footerProjectHint;
      const el = document.getElementById('tag-manager-list');
      const counts = getTagCounts();
      const tags = Object.keys(counts).sort();
      if (!tags.length) {
        el.innerHTML = '<div class="empty-state">' + SVG.emptyTags + '<p class="empty-title">' + escHtml(T.tagManagerEmpty) + '</p><p class="empty-sub">' + escHtml(T.tagManagerEmptySub) + '</p></div>';
        return;
      }
      el.innerHTML = tags.map(function(tag) {
        return '<div class="tag-manager-item">' +
          '<span class="cat-badge" style="' + catStyle(tag) + '">#' + escHtml(tag) + '</span>' +
          '<span class="tag-manager-count">' + T.tagManagerCount(counts[tag]) + '</span>' +
          '<div class="tag-manager-actions">' +
            '<button class="tag-mgr-btn" onclick="renameTag(\'' + escHtml(tag).replace(/'/g, "\\'") + '\')">' + T.tagManagerRename + '</button>' +
            '<button class="tag-mgr-btn danger" onclick="deleteTag(\'' + escHtml(tag).replace(/'/g, "\\'") + '\')">' + T.tagManagerDelete + '</button>' +
          '</div>' +
        '</div>';
      }).join('');
    }
    function sanitizeTemplateItem(raw, idx) {
      if (!raw || typeof raw !== 'object') return null;
      const name = asTrimmedStr(raw.name, 60);
      const text = asTrimmedStr(raw.text, 200);
      if (!name || !text) return null;
      return {
        id: parseSafeTs(raw.id, Date.now() + idx + 1),
        name,
        text,
        note: asTrimmedStr(raw.note, 1000),
        priority: sanitizePriority(raw.priority),
        categories: sanitizeCategories(raw.categories),
        recurrence: sanitizeRecurrence(raw.recurrence),
        color: (typeof raw.color === 'string' && TASK_COLORS.includes(raw.color)) ? raw.color : '',
        subtasks: sanitizeSubtasks(raw.subtasks)
      };
    }
    function getTemplatePayloadFromForm() {
      const text = asTrimmedStr((document.getElementById('new-todo-input').value || ''), 200);
      const note = asTrimmedStr((document.getElementById('new-todo-note').value || ''), 1000);
      const catRaw = (document.getElementById('new-todo-cat').value || '').split(',').map(function(s) { return s.trim().replace(/^#/, ''); });
      const categories = [...new Set(catRaw.filter(Boolean))].slice(0, 50);
      const recurrence = sanitizeRecurrence(getRecurValue('new'));
      if (!text) return null;
      return {
        text,
        note,
        priority: sanitizePriority(newPriority),
        categories,
        recurrence,
        color: newTaskColor || '',
        subtasks: undefined
      };
    }
    function applyTemplateToForm(template) {
      const dueInput = document.getElementById('new-todo-due');
      const timeInput = document.getElementById('new-todo-time');
      const recurSel = document.getElementById('new-todo-recur');
      const recurDetail = document.getElementById('new-todo-recur-detail');
      const textEl = document.getElementById('new-todo-input');
      const noteEl = document.getElementById('new-todo-note');
      const catEl = document.getElementById('new-todo-cat');
      if (!textEl || !noteEl || !catEl || !recurSel || !recurDetail || !dueInput || !timeInput) return;
      textEl.value = template.text || '';
      noteEl.value = template.note || '';
      catEl.value = (template.categories || []).join(', ');
      dueInput.value = '';
      timeInput.value = '';
      newPriority = template.priority || '';
      newTaskColor = template.color || '';
      updatePrioChips();
      renderColorPicker('new-color-picker', newTaskColor, function(c) { newTaskColor = c; });
      const type = (template.recurrence || '').split(':')[0] || '';
      const param = (template.recurrence || '').split(':')[1];
      recurSel.value = type;
      onRecurChange('new');
      if (param !== undefined) {
        recurDetail.value = param;
        syncRecurDetailLabel('new');
      }
      syncRecurLabel('new', t());
      updateFieldLabels();
      updateNewNotePreview();
      setNewAdvancedOpen(true);
    }
    function renderTemplateManager() {
      const T = t();
      document.getElementById('template-manager-title').textContent = T.templateManagerTitle;
      const el = document.getElementById('template-list');
      const clean = templates.map(function(tp, i) { return sanitizeTemplateItem(tp, i); }).filter(Boolean);
      templates = clean;
      if (!clean.length) {
        el.innerHTML = '<div class="empty-state">' + SVG.emptyTemplates + '<p class="empty-title">' + escHtml(T.templateEmpty) + '</p><p class="empty-sub">' + escHtml(T.templateEmptySub) + '</p></div>';
        return;
      }
      el.innerHTML = clean.map(function(tp) {
        return '<div class="template-item">' +
          '<div class="template-name">' + escHtml(tp.name) + '</div>' +
          '<div class="template-actions">' +
            '<button class="template-btn" onclick="useTemplate(' + tp.id + ')">' + T.templateUse + '</button>' +
            '<button class="template-btn" onclick="editTemplate(' + tp.id + ')">' + T.templateEdit + '</button>' +
            '<button class="template-btn danger" onclick="deleteTemplate(' + tp.id + ')">' + T.templateDelete + '</button>' +
          '</div>' +
        '</div>';
      }).join('');
    }
    function createTemplateFromForm() {
      const T = t();
      const payload = getTemplatePayloadFromForm();
      if (!payload) {
        switchTab('new');
        const input = document.getElementById('new-todo-input');
        if (input) input.focus();
        showToast(T.templateMissingData);
        return;
      }
      const name = prompt(T.templateNamePrompt, payload.text.slice(0, 40));
      if (!name || !name.trim()) return;
      const template = {
        id: Date.now(),
        name: asTrimmedStr(name, 60),
        text: payload.text,
        note: payload.note,
        priority: payload.priority,
        categories: payload.categories,
        recurrence: payload.recurrence,
        color: payload.color,
        subtasks: payload.subtasks
      };
      templates.unshift(template);
      editingTemplateId = null;
      save();
      renderTemplateManager();
      showToast(T.templateSaved);
    }
    function useTemplate(id) {
      const template = templates.find(function(tp) { return tp.id === id; });
      if (!template) return;
      applyTemplateToForm(template);
      switchTab('new');
      setTimeout(function() {
        const input = document.getElementById('new-todo-input');
        if (input) input.focus();
      }, 60);
      haptic('light');
    }
    function editTemplate(id) {
      const template = templates.find(function(tp) { return tp.id === id; });
      if (!template) return;
      editingTemplateId = id;
      applyTemplateToForm(template);
      switchTab('new');
      showToast(t().templateEditToast);
      save();
      renderTemplateManager();
    }
    function updateEditingTemplateFromForm() {
      if (editingTemplateId === null) return;
      const T = t();
      const payload = getTemplatePayloadFromForm();
      if (!payload) { showToast(T.templateMissingData); return; }
      const idx = templates.findIndex(function(tp) { return tp.id === editingTemplateId; });
      if (idx === -1) return;
      templates[idx] = {
        ...templates[idx],
        text: payload.text,
        note: payload.note,
        priority: payload.priority,
        categories: payload.categories,
        recurrence: payload.recurrence,
        color: payload.color,
        subtasks: payload.subtasks
      };
      save();
      renderTemplateManager();
      showToast(T.templateUpdated);
    }
    function cancelTemplateEdit() {
      editingTemplateId = null;
      const input = document.getElementById('new-todo-input');
      if (input) input.focus();
      renderTemplateManager();
    }
    function deleteTemplate(id) {
      const idx = templates.findIndex(function(tp) { return tp.id === id; });
      if (idx === -1) return;
      templates.splice(idx, 1);
      if (editingTemplateId === id) editingTemplateId = null;
      save();
      renderTemplateManager();
      showToast(t().templateDeleted);
    }
    function escMd(str) {
      return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function renderMarkdownSafe(text) {
      let out = escMd(text || '');
      out = out.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, function(_, label, url) {
        return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
      });
      out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
      out = out.replace(/\n/g, '<br>');
      return out;
    }
    function updateNewNotePreview() {
      const el = document.getElementById('new-note-preview');
      const inp = document.getElementById('new-todo-note');
      if (!el || !inp) return;
      el.innerHTML = renderMarkdownSafe(inp.value || '');
    }
    function toggleNewNotePreview() {
      const T = t();
      const wrap = document.getElementById('new-note-preview');
      const btn = document.getElementById('new-note-preview-toggle');
      if (!wrap || !btn) return;
      const show = wrap.style.display === 'none';
      wrap.style.display = show ? '' : 'none';
      btn.classList.toggle('active', show);
      btn.textContent = T.notePreviewToggle;
      if (show) updateNewNotePreview();
    }
    function renderTemplatePicker() {
      const T = t();
      const el = document.getElementById('template-picker-list');
      const title = document.getElementById('template-picker-title');
      if (title) title.textContent = T.templateUseLabel;
      if (!el) return;
      if (!templates.length) {
        el.innerHTML = '<div class="empty-state empty-state-compact">' + SVG.emptyTemplates + '<p class="empty-title">' + escHtml(T.templateEmpty) + '</p><p class="empty-sub">' + escHtml(T.templateEmptySub) + '</p></div>';
        return;
      }
      el.innerHTML = templates.map(function(tp) {
        return '<div class="template-item">' +
          '<div class="template-name">' + escHtml(tp.name) + '</div>' +
          '<div class="template-actions">' +
            '<button class="template-btn" onclick="useTemplate(' + tp.id + ');closeTemplatePicker()">' + T.templateUse + '</button>' +
          '</div>' +
        '</div>';
      }).join('');
    }
    function openTemplatePicker() {
      renderTemplateManager();
      renderTemplatePicker();
      document.getElementById('template-picker-backdrop').classList.add('show');
    }
    function closeTemplatePicker() {
      document.getElementById('template-picker-backdrop').classList.remove('show');
    }
    function handleTemplatePickerBackdrop(e) {
      if (e.target === e.currentTarget) closeTemplatePicker();
    }
    function updateTagCounter(inputId, counterId) {
      const input = document.getElementById(inputId);
      const counter = document.getElementById(counterId);
      if (!input || !counter) return;
      const len = input.value.replace(/^#/, '').length;
      const max = parseInt(input.getAttribute('maxlength'), 10) || 30;
      if (len > 0) {
        counter.textContent = len + '/' + max;
        counter.classList.add('visible');
        counter.classList.toggle('warn', len >= max - 5);
      } else {
        counter.classList.remove('visible');
      }
    }
    function renameTag(oldTag) {
      const T = t();
      let newTag = prompt(T.tagManagerRenamePrompt, oldTag);
      if (!newTag || !newTag.trim()) return;
      newTag = newTag.trim().replace(/^#/, '');
      if (newTag === oldTag) return;
      saveUndo();
      let changed = 0;
      todos.forEach(function(todo) {
        const idx = (todo.categories || []).indexOf(oldTag);
        if (idx !== -1) { todo.categories[idx] = newTag; changed++; }
      });
      if (changed) { save(); render(); haptic('success'); }
    }
    function deleteTag(tag) {
      const T = t();
      const count = todos.filter(function(todo) { return (todo.categories || []).includes(tag); }).length;
      showConfirm(T.tagManagerDeleteConfirm(tag, count), function() {
        saveUndo();
        todos.forEach(function(todo) {
          todo.categories = (todo.categories || []).filter(function(c) { return c !== tag; });
        });
        if (currentCategory === tag) currentCategory = '';
        save(); render(); haptic('success');
      }, null, true);
    }

    /* ── Custom tag autocomplete ── */
    function getLastTagSegment(value) {
      const parts = value.split(',');
      return parts[parts.length - 1].trim().replace(/^#/, '').toLowerCase();
    }
    function showTagAC(input, acEl) {
      const val = getLastTagSegment(input.value);
      const existing = input.value.split(',').slice(0, -1).map(function(s) { return s.trim().replace(/^#/, ''); });
      const tags = getAllTags().filter(function(t) { return !existing.includes(t) && (!val || t.toLowerCase().indexOf(val) !== -1); });
      if (!tags.length) { acEl.classList.remove('open'); return; }
      acEl.innerHTML = tags.map(function(t) {
        return '<div class="cat-ac-item" data-tag="' + escHtml(t) + '">#' + escHtml(t) + '</div>';
      }).join('');
      acEl.classList.add('open');
    }
    function bindTagAC(input, acEl) {
      input.addEventListener('input', function() { showTagAC(input, acEl); });
      input.addEventListener('focus', function() { showTagAC(input, acEl); });
      acEl.addEventListener('mousedown', function(e) {
        const item = e.target.closest('.cat-ac-item');
        if (!item) return;
        e.preventDefault();
        const parts = input.value.split(',').slice(0, -1).map(function(s) { return s.trim(); });
        parts.push(item.getAttribute('data-tag'));
        input.value = parts.join(', ') + ', ';
        acEl.classList.remove('open');
      });
      input.addEventListener('blur', function() { acEl.classList.remove('open'); });
    }
    (function() {
      const inp = document.getElementById('new-todo-cat');
      const ac = document.getElementById('cat-ac');
      if (inp && ac) bindTagAC(inp, ac);
    })();

    function startEdit(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      const wrap = document.querySelector(`[data-id="${id}"] .todo-text-wrap`);
      const oldText = todo.text;
      const oldNote = todo.note || '';
      const oldDue = todo.dueDate || '';
      const oldCat = (todo.categories || []).join(', ');
      const oldRecur = todo.recurrence || '';
      const oldColor = todo.color || '';
      const oldDueDate = oldDue.split('T')[0] || '';
      const oldDueTime = oldDue.includes('T') ? oldDue.split('T')[1] : '';
      const T = t();
      const moveBoardLabel = (T.moveToBoardLabel || '').replace(/:\s*$/, '');
      wrap.innerHTML = `
        <div class="todo-edit-layout">
          <section class="new-section-card todo-edit-section">
            <div class="new-group-title">${escHtml(T.newGroupDetails)}</div>
            <div class="new-field-label">${escHtml(T.editFieldTitle)}</div>
            <input class="todo-edit-input" value="${escHtml(oldText)}" maxlength="200" aria-label="${escHtml(T.editFieldTitle)}" />
            <div class="new-field-label">${escHtml(T.newFieldNote)}</div>
            <textarea class="note-edit-input" rows="4" maxlength="1000" aria-label="${escHtml(T.newFieldNote)}">${escHtml(oldNote)}</textarea>
            <div class="note-md-help">${escHtml(T.markdownHelp)}</div>
            <div class="note-preview-toolbar">
              <button type="button" class="note-preview-toggle" id="edit-note-preview-toggle-${id}">${T.notePreviewToggle}</button>
            </div>
            <div class="note-preview" id="edit-note-preview-${id}" style="display:none"></div>
            <div class="new-field-label">${escHtml(T.newFieldTags)}</div>
            <div class="cat-input-wrap">
              <input class="cat-input" type="text" id="edit-cat-${id}" value="${escHtml(oldCat)}" maxlength="100" autocomplete="off" placeholder="${T.catPlaceholder}" aria-label="${escHtml(T.newFieldTags)}" />
              <div class="cat-ac" id="edit-cat-ac-${id}"></div>
            </div>
          </section>
          <section class="new-section-card todo-edit-section">
            <div class="new-group-title">${escHtml(T.newGroupPlanning)}</div>
            <div class="new-field-label">${escHtml(T.newFieldPriority)}</div>
            <div class="prio-chips" id="edit-prio-chips-${id}">
              <button class="prio-chip${todo.priority === 'high' ? ' active' : ''}" data-p="high">${T.priorityHigh}</button>
              <button class="prio-chip${todo.priority === 'medium' ? ' active' : ''}" data-p="medium">${T.priorityMedium}</button>
              <button class="prio-chip${todo.priority === 'low' ? ' active' : ''}" data-p="low">${T.priorityLow}</button>
            </div>
            <div class="color-picker-row" id="edit-color-picker-${id}"></div>
            <div class="new-field-label">${escHtml(T.newFieldSchedule)}</div>
            <div class="due-edit-row">
              <div class="due-edit-wrap">
                <input class="due-edit-input${oldDueDate ? ' has-value' : ''}" type="date" id="edit-todo-due" value="${oldDueDate}" />
                <span class="due-edit-label">${T.formDate}</span>
              </div>
              <div class="due-edit-wrap time-wrap">
                <input class="due-edit-input due-time${oldDueTime ? ' has-value' : ''}" type="time" value="${oldDueTime}" />
                <span class="due-edit-label">${T.formTime}</span>
              </div>
            </div>
            <div class="new-field-label">${escHtml(T.newFieldRecurrence)}</div>
            <div class="todo-edit-recur-stack">
              <div class="recur-input-row">
                <span class="due-input-icon">${SVG.repeat}</span>
                <div class="recur-dd-detail-wrap" id="edit-todo-recur-wrap">
                  <button type="button" class="sort-select recur-dd-btn-edit" id="edit-todo-recur-btn" onclick="toggleRecurDD('edit-todo-recur')">
                    <span id="edit-todo-recur-label">${T.recurNone}</span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <div class="sort-ac recur-dd-ac" id="edit-todo-recur-ac"></div>
                </div>
                <select id="edit-todo-recur" style="display:none"></select>
              </div>
              <div class="recur-input-row" id="edit-todo-recur-detail-wrap" style="display:none">
                <span class="due-input-icon" style="visibility:hidden">${SVG.repeat}</span>
                <div class="recur-dd-detail-wrap">
                  <button type="button" class="sort-select recur-dd-btn-edit" id="edit-todo-recur-detail-btn" onclick="toggleRecurDD('edit-todo-recur-detail')">
                    <span id="edit-todo-recur-detail-label"></span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <div class="sort-ac recur-dd-ac" id="edit-todo-recur-detail-ac"></div>
                </div>
                <select id="edit-todo-recur-detail" style="display:none"></select>
              </div>
            </div>
            ${boards.length > 1 ? `<div class="new-field-label">${escHtml(moveBoardLabel)}</div>
            <div class="recur-input-row">
              <span class="due-input-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
              <div class="recur-dd-detail-wrap">
                <button type="button" class="sort-select recur-dd-btn-edit" id="edit-move-board-btn-${id}" title="${T.moveToBoardCurrent}" onclick="toggleRecurDD('edit-move-board-${id}')">
                  <span id="edit-move-board-label-${id}">${escHtml(boards.find(b => b.id === currentBoardId)?.name || '')}</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="sort-ac recur-dd-ac" id="edit-move-board-${id}-ac">
                  ${boards.map(b => '<div class="cat-ac-item' + (b.id === currentBoardId ? ' active' : '') + '" data-val="' + b.id + '" onclick="selectMoveBoardOpt(' + id + ',' + b.id + ',\'' + escHtml(b.name).replace(/'/g, "\\'") + '\')">' + escHtml(b.name) + (b.id === currentBoardId ? ' ' + T.moveToBoardCurrent : '') + '</div>').join('')}
                </div>
              </div>
              <select id="edit-move-board-${id}" style="display:none">
                ${boards.map(b => '<option value="' + b.id + '"' + (b.id === currentBoardId ? ' selected' : '') + '>' + escHtml(b.name) + '</option>').join('')}
              </select>
            </div>` : ''}
            ${getTaskElapsed(todo) ? `<div class="new-field-label">${escHtml(T.timeTrackLabel)}</div>
            <div class="todo-edit-inline-meta">
              <span class="due-input-icon">${SVG.stopwatch}</span>
              <span class="todo-edit-inline-text">${T.timeTrackLabel}: ${formatElapsed(getTaskElapsed(todo))}</span>
              <button type="button" class="edit-btn todo-edit-inline-btn" onclick="resetTaskTimer(${id})">${T.timeTrackReset}</button>
            </div>` : ''}
          </section>
          <section class="new-section-card todo-edit-section">
            <div class="new-group-title">${escHtml(T.editGroupSubtasks)}</div>
            <div class="subtask-edit-list" id="edit-subtasks-${id}"></div>
            <button class="subtask-add-btn" type="button" id="edit-subtask-add-${id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              ${T.subtaskAdd}
            </button>
          </section>
          <div class="edit-btn-row todo-edit-actions">
            <button class="edit-btn" id="edit-cancel-${id}">${T.editCancel}</button>
            <button class="edit-btn edit-save" id="edit-save-${id}">${T.editSave}</button>
          </div>
        </div>
      `;
      const inp = wrap.querySelector('.todo-edit-input');
      const noteInp = wrap.querySelector('.note-edit-input');
      const catInp = document.getElementById('edit-cat-' + id);
      const editCatAc = document.getElementById('edit-cat-ac-' + id);
      if (catInp && editCatAc) bindTagAC(catInp, editCatAc);
      const dueDateInp = wrap.querySelector('.due-edit-input[type="date"]');
      const dueTimeInp = wrap.querySelector('.due-edit-input[type="time"]');
      if (dueDateInp) dueDateInp.addEventListener('change', function() { this.classList.toggle('has-value', !!this.value); });
      if (dueTimeInp) dueTimeInp.addEventListener('change', function() { this.classList.toggle('has-value', !!this.value); });
      const editPreviewBtn = document.getElementById('edit-note-preview-toggle-' + id);
      const editPreview = document.getElementById('edit-note-preview-' + id);
      noteInp.placeholder = T.notePlaceholder;
      if (editPreviewBtn && editPreview) {
        editPreviewBtn.onclick = function() {
          const show = editPreview.style.display === 'none';
          editPreview.style.display = show ? '' : 'none';
          editPreviewBtn.classList.toggle('active', show);
          if (show) editPreview.innerHTML = renderMarkdownSafe(noteInp.value || '');
        };
        noteInp.addEventListener('input', function() {
          if (editPreview.style.display !== 'none') editPreview.innerHTML = renderMarkdownSafe(noteInp.value || '');
        });
      }
      // Subtask editor state
      let editSubtasks = (todo.subtasks || []).map(s => ({ text: s.text, done: s.done }));
      function renderEditSubtasks() {
        const container = document.getElementById('edit-subtasks-' + id);
        container.innerHTML = editSubtasks.map((st, i) => `
          <div class="subtask-edit-item">
            <input class="subtask-edit-input" value="${escHtml(st.text)}" data-st-idx="${i}" placeholder="${T.subtaskPlaceholder}" maxlength="200" />
            <button class="subtask-remove-btn" type="button" data-st-rm="${i}" title="${T.deleteTitle}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>`).join('');
        // Bind events
        container.querySelectorAll('.subtask-edit-input').forEach(inp => {
          inp.oninput = () => { editSubtasks[parseInt(inp.dataset.stIdx)].text = inp.value; };
          inp.onkeydown = e => {
            if (e.key === 'Enter') { e.preventDefault(); document.getElementById('edit-subtask-add-' + id).click(); }
          };
        });
        container.querySelectorAll('.subtask-remove-btn').forEach(btn => {
          btn.onclick = () => { editSubtasks.splice(parseInt(btn.dataset.stRm), 1); renderEditSubtasks(); };
        });
      }
      renderEditSubtasks();
      document.getElementById('edit-subtask-add-' + id).onclick = () => {
        editSubtasks.push({ text: '', done: false });
        renderEditSubtasks();
        const inputs = document.querySelectorAll('#edit-subtasks-' + id + ' .subtask-edit-input');
        if (inputs.length) inputs[inputs.length - 1].focus();
      };
      // Populate custom recur dropdown
      populateRecurSelect('edit', T);
      // Restore recurrence state
      if (oldRecur) {
        const rType = oldRecur.split(':')[0];
        const rParam = oldRecur.split(':')[1];
        document.getElementById('edit-todo-recur').value = rType;
        onRecurChange('edit');
        if (rParam !== undefined) {
          document.getElementById('edit-todo-recur-detail').value = rParam;
          syncRecurDetailLabel('edit');
        }
        syncRecurLabel('edit', T);
      }
      let editColor = oldColor;
      renderColorPicker('edit-color-picker-' + id, editColor, function(c) { editColor = c; });
      let editPriority = todo.priority || '';
      document.getElementById('edit-prio-chips-' + id).querySelectorAll('.prio-chip').forEach(function(chip) {
        chip.onclick = function() {
          editPriority = editPriority === this.dataset.p ? '' : this.dataset.p;
          document.getElementById('edit-prio-chips-' + id).querySelectorAll('.prio-chip').forEach(function(c) {
            c.classList.toggle('active', c.dataset.p === editPriority);
          });
        };
      });
      inp.focus(); inp.select();
      function getEditDue() {
        const d = dueDateInp.value;
        if (!d) return '';
        const tm = dueTimeInp.value;
        return tm ? d + 'T' + tm : d;
      }
      function getEditSubtasks() {
        return editSubtasks.filter(s => s.text.trim()).map(s => ({ text: s.text.trim(), done: s.done }));
      }
      inp.onkeydown = e => {
        if (e.key === 'Enter') { e.preventDefault(); noteInp.focus(); }
        if (e.key === 'Escape') commitEdit(id, oldText, oldText, oldNote, oldDue, oldCat, oldRecur, null, oldColor, todo.priority);
      };
      noteInp.onkeydown = e => {
        if (e.key === 'Escape') commitEdit(id, oldText, oldText, oldNote, oldDue, oldCat, oldRecur, null, oldColor, todo.priority);
      };
      document.getElementById('edit-save-' + id).onclick = () => {
        const moveSel = document.getElementById('edit-move-board-' + id);
        if (moveSel && parseInt(moveSel.value) !== currentBoardId) {
          commitEdit(id, inp.value, oldText, noteInp.value, getEditDue(), catInp.value, getRecurValue('edit'), getEditSubtasks(), editColor, editPriority);
          moveTodoToBoard(id, parseInt(moveSel.value));
          return;
        }
        commitEdit(id, inp.value, oldText, noteInp.value, getEditDue(), catInp.value, getRecurValue('edit'), getEditSubtasks(), editColor, editPriority);
      };
      document.getElementById('edit-cancel-' + id).onclick = () => {
        commitEdit(id, oldText, oldText, oldNote, oldDue, oldCat, oldRecur, null, oldColor, todo.priority);
      };
    }
    function commitEdit(id, newText, oldText, newNote, newDue, newCat, newRecur, newSubtasks, newColor, newPriority) {
      newText = newText.trim();
      if (!newText) { render(); return; }
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      const noteValue = newNote !== undefined ? newNote.trim() : (todo.note || '');
      const dueValue = newDue !== undefined ? newDue : (todo.dueDate || '');
      const catsValue = newCat !== undefined ? [...new Set(newCat.split(',').map(function(s) { return s.trim().replace(/^#/, ''); }).filter(Boolean))] : (todo.categories || []);
      const recurValue = newRecur !== undefined ? newRecur : (todo.recurrence || '');
      const subtasksValue = newSubtasks !== null && newSubtasks !== undefined ? newSubtasks : (todo.subtasks || []);
      const subtasksChanged = JSON.stringify(subtasksValue) !== JSON.stringify(todo.subtasks || []);
      const colorValue = newColor !== undefined ? (newColor || undefined) : todo.color;
      const priorityValue = newPriority !== undefined ? (newPriority || undefined) : todo.priority;
      if (newText === oldText && noteValue === (todo.note || '') && dueValue === (todo.dueDate || '') && JSON.stringify(catsValue) === JSON.stringify(todo.categories || []) && recurValue === (todo.recurrence || '') && !subtasksChanged && colorValue === todo.color && priorityValue === todo.priority) { render(); return; }
      saveUndo();
      todo.text = newText;
      todo.note = noteValue;
      todo.dueDate = dueValue;
      todo.categories = catsValue;
      todo.recurrence = recurValue;
      todo.subtasks = subtasksValue.length ? subtasksValue : undefined;
      todo.color = colorValue;
      todo.priority = priorityValue;
      save(); render();
    }

    // ── Filter ───────────────────────────────────────────────────────────────
    function setFilter(f) {
      haptic('light');
      currentFilter = f;
      document.querySelectorAll('#filters .filter-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.filter === f));
      render();
    }
    function setSort(s) {
      haptic('light');
      currentSort = s;
      save(); render();
    }
    function toggleSortDropdown() {
      document.getElementById('sort-ac').classList.toggle('open');
    }
    function pickSort(s) {
      document.getElementById('sort-ac').classList.remove('open');
      setSort(s);
    }
    function setCategoryFilter(c) {
      haptic('light');
      currentCategory = c;
      save(); render();
    }
    function renderCatFilterDD(T, allTags) {
      const ac = document.getElementById('cat-filter-ac');
      const labelEl = document.getElementById('cat-filter-label');
      if (!ac || !labelEl) return;
      const opts = [{ val: '', label: T.catAll }].concat(allTags.map(function(tg) { return { val: tg, label: '#' + tg }; }));
      ac.innerHTML = opts.map(function(o) {
        return '<div class="cat-ac-item' + (o.val === currentCategory ? ' active' : '') + '" data-val="' + escHtml(o.val) + '" onclick="setCatFilterFromDD(\'' + escHtml(o.val).replace(/'/g, "\\'") + '\')">' + escHtml(o.label) + '</div>';
      }).join('');
      const cur = opts.find(function(o) { return o.val === currentCategory; }) || opts[0];
      labelEl.textContent = cur ? cur.label : T.catAll;
    }
    function toggleCatFilterDD() {
      const ac = document.getElementById('cat-filter-ac');
      if (!ac) return;
      const isOpen = ac.classList.contains('open');
      document.querySelectorAll('.sort-ac').forEach(function(el) { el.classList.remove('open'); });
      if (!isOpen) ac.classList.add('open');
    }
    function setCatFilterFromDD(val) {
      const ac = document.getElementById('cat-filter-ac');
      if (ac) ac.classList.remove('open');
      setCategoryFilter(val);
    }
    function selectMoveBoardOpt(taskId, boardId, boardName) {
      const sel = document.getElementById('edit-move-board-' + taskId);
      if (sel) sel.value = boardId;
      const labelEl = document.getElementById('edit-move-board-label-' + taskId);
      if (labelEl) labelEl.textContent = boardName;
      const ac = document.getElementById('edit-move-board-' + taskId + '-ac');
      if (ac) {
        ac.classList.remove('open');
        ac.querySelectorAll('.cat-ac-item').forEach(function(el) { el.classList.toggle('active', el.dataset.val === String(boardId)); });
      }
    }
    function filteredTodos() {
      let result = todos;
      if (currentFilter === 'open') result = result.filter(t => !t.done);
      else if (currentFilter === 'done') result = result.filter(t => t.done);
      if (currentCategory) result = result.filter(t => (t.categories || []).includes(currentCategory));
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        result = result.filter(t =>
          t.text.toLowerCase().includes(q) || (t.note && t.note.toLowerCase().includes(q)) || (t.categories || []).some(function(c) { return c.toLowerCase().includes(q); })
        );
      }
      if (currentSort === 'priority') {
        const p = { high: 0, medium: 1, low: 2, '': 3 };
        result = [...result].sort((a, b) => (p[a.priority || ''] ?? 3) - (p[b.priority || ''] ?? 3));
      } else if (currentSort === 'dueDate') {
        result = [...result].sort((a, b) => {
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        });
      } else if (currentSort === 'created') {
        result = [...result].sort((a, b) => b.created - a.created);
      }
      return result;
    }
    function onSearch(val) {
      searchQuery = val.trim();
      document.getElementById('search-clear').classList.toggle('visible', searchQuery.length > 0);
      if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(function() {
        render();
      }, 140);
    }
    function clearSearch() {
      if (searchDebounceTimer) { clearTimeout(searchDebounceTimer); searchDebounceTimer = null; }
      searchQuery = '';
      const inp = document.getElementById('search-input');
      if (inp) inp.value = '';
      document.getElementById('search-clear').classList.remove('visible');
      render();
    }

    // ── Drag & Drop ──────────────────────────────────────────────────────────
    function onDragStart(e, id) {
      dragSrcIndex = todos.findIndex(t => t.id === id);
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => e.target.classList.add('dragging'), 0);
    }
    function onDragEnd(e) {
      e.target.classList.remove('dragging');
      document.querySelectorAll('.todo-item').forEach(el => el.classList.remove('drag-over'));
    }
    function onDragOver(e, id) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      document.querySelectorAll('.todo-item').forEach(el => el.classList.remove('drag-over'));
      const el = document.querySelector(`[data-id="${id}"]`);
      if (el) el.classList.add('drag-over');
    }
    function onDrop(e, id) {
      e.preventDefault();
      const targetIndex = todos.findIndex(t => t.id === id);
      if (dragSrcIndex === null || dragSrcIndex === targetIndex) return;
      const [moved] = todos.splice(dragSrcIndex, 1);
      todos.splice(targetIndex, 0, moved);
      dragSrcIndex = null;
      save(); render();
    }

    // ── Touch Drag & Drop ─────────────────────────────────────────────────
    (function() {
      const HOLD_MS = 200;
      let holdTimer = null;
      let dragItem = null;
      let dragWrap = null;
      let dragId = null;
      let dragIndex = null;
      let startY = 0;
      let offsetY = 0;
      let placeholder = null;
      let allWraps = [];
      let itemHeight = 0;

      document.addEventListener('touchstart', function(e) {
        if (quickActionsOpen) return;
        if (currentSort !== 'manual') return;
        const handle = e.target.closest('.drag-handle');
        if (!handle) return;
        const wrap = handle.closest('.swipe-wrap');
        if (!wrap) return;
        const item = wrap.querySelector('.todo-item');
        if (!item) return;

        const touch = e.touches[0];
        startY = touch.clientY;
        const rect = item.getBoundingClientRect();
        offsetY = touch.clientY - rect.top;

        holdTimer = setTimeout(function() {
          holdTimer = null;
          touchDragActive = true;
          dragWrap = wrap;
          dragItem = item;
          dragId = parseInt(wrap.dataset.swipeId);
          dragIndex = todos.findIndex(function(t) { return t.id === dragId; });

          // Gather all visible wraps
          allWraps = Array.from(document.querySelectorAll('#todo-list > .swipe-wrap'));
          itemHeight = rect.height + 4; // include gap

          // Create placeholder
          placeholder = document.createElement('div');
          placeholder.className = 'swipe-wrap';
          placeholder.style.height = rect.height + 'px';
          placeholder.style.opacity = '0';
          wrap.parentNode.insertBefore(placeholder, wrap);

          // Float the item
          dragItem.classList.add('touch-dragging');
          dragItem.style.width = rect.width + 'px';
          dragItem.style.top = rect.top + 'px';

          haptic('light');
        }, HOLD_MS);
      }, { passive: true });

      document.addEventListener('touchmove', function(e) {
        if (holdTimer && Math.abs(e.touches[0].clientY - startY) > 10) {
          clearTimeout(holdTimer);
          holdTimer = null;
        }
        if (!dragItem) return;
        e.preventDefault();

        const touch = e.touches[0];
        const y = touch.clientY - offsetY;
        dragItem.style.top = y + 'px';

        // Find drop target
        const cy = touch.clientY;
        let targetWrap = null;
        for (let i = 0; i < allWraps.length; i++) {
          if (allWraps[i] === dragWrap || allWraps[i] === placeholder) continue;
          const wr = allWraps[i].getBoundingClientRect();
          if (cy > wr.top && cy < wr.bottom) {
            targetWrap = allWraps[i];
            break;
          }
        }

        // Move placeholder
        if (targetWrap) {
          const tRect = targetWrap.getBoundingClientRect();
          const mid = tRect.top + tRect.height / 2;
          if (cy < mid) {
            targetWrap.parentNode.insertBefore(placeholder, targetWrap);
          } else {
            targetWrap.parentNode.insertBefore(placeholder, targetWrap.nextSibling);
          }
        }
      }, { passive: false });

      document.addEventListener('touchend', function() {
        if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
        if (!dragItem) return;

        // Find new index based on placeholder position
        const finalWraps = Array.from(document.querySelectorAll('#todo-list > .swipe-wrap'));
        const placeholderIdx = finalWraps.indexOf(placeholder);

        // Clean up
        dragItem.classList.remove('touch-dragging');
        dragItem.style.width = '';
        dragItem.style.top = '';
        if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);

        // Calculate real target index
        // Count only real wraps (not placeholder) before placeholder position
        let realIdx = 0;
        for (let i = 0; i < finalWraps.length; i++) {
          if (finalWraps[i] === placeholder) break;
          if (finalWraps[i] !== dragWrap) realIdx++;
        }

        // Get filtered view to map visual position to todos array
        const visible = filteredTodos();
        if (dragIndex !== null && realIdx !== dragIndex && realIdx < visible.length) {
          const targetTodo = visible[realIdx];
          const targetIdx = todos.findIndex(function(t) { return t.id === targetTodo.id; });
          const srcIdx = todos.findIndex(function(t) { return t.id === dragId; });
          if (srcIdx !== -1 && targetIdx !== -1 && srcIdx !== targetIdx) {
            const moved = todos.splice(srcIdx, 1)[0];
            todos.splice(targetIdx, 0, moved);
            save();
          }
        }

        dragItem = null;
        dragWrap = null;
        dragId = null;
        dragIndex = null;
        placeholder = null;
        allWraps = [];
        touchDragActive = false;
        render();
      }, { passive: true });

      document.addEventListener('touchcancel', function() {
        if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
        if (!dragItem) return;
        dragItem.classList.remove('touch-dragging');
        dragItem.style.width = '';
        dragItem.style.top = '';
        if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);
        dragItem = null; dragWrap = null; dragId = null; dragIndex = null;
        placeholder = null; allWraps = [];
        touchDragActive = false;
      }, { passive: true });
    })();

    // ── Import / Export ──────────────────────────────────────────────────────
    function exportData() {
      const board = boards.find(b => b.id === currentBoardId);
      if (board) { board.todos = todos; board.history = history; }
      const blob = new Blob([JSON.stringify({ boards, currentBoardId, notes, exportedAt: new Date().toISOString(), version: 2 }, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `tasks-${new Date().toISOString().slice(0,10)}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
      safeSetItem('lastExport', String(Date.now()));
      checkExportReminder();
      showToast(t().toastExported);
    }
    function csvCell(v) {
      const s = String(v === undefined || v === null ? '' : v);
      return '"' + s.replace(/"/g, '""') + '"';
    }
    function exportCSV() {
      const rows = [];
      const headers = ['id','text','done','priority','note','dueDate','categories','recurrence','created','completedAt','timeSpent'];
      rows.push(headers.join(';'));
      todos.forEach(function(todo) {
        const createdIso = todo.created ? new Date(todo.created).toISOString() : '';
        const doneIso = todo.completedAt ? new Date(todo.completedAt).toISOString() : '';
        const cats = (todo.categories || []).join(',');
        const values = [
          todo.id || '',
          todo.text || '',
          !!todo.done,
          todo.priority || '',
          todo.note || '',
          todo.dueDate || '',
          cats,
          todo.recurrence || '',
          createdIso,
          doneIso,
          Number.isFinite(Number(todo.timeSpent)) ? Math.floor(Number(todo.timeSpent)) : ''
        ];
        rows.push(values.map(csvCell).join(';'));
      });
      const csv = '\uFEFF' + rows.join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `tasks-${new Date().toISOString().slice(0,10)}.csv`;
      a.click();
      URL.revokeObjectURL(a.href);
      showToast(t().toastCsvExported);
    }
    function isPlainObj(v) {
      return !!v && typeof v === 'object' && !Array.isArray(v);
    }
    function asTrimmedStr(v, maxLen) {
      if (typeof v !== 'string') return '';
      return v.trim().slice(0, maxLen);
    }
    function parseSafeTs(v, fallback) {
      const n = Number(v);
      return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
    }
    function sanitizeDueDate(v) {
      if (typeof v !== 'string') return '';
      const s = v.trim();
      const m = s.match(/^(\d{4})-(\d{2})-(\d{2})(?:T([0-2]\d):([0-5]\d))?$/);
      if (!m) return '';
      const y = Number(m[1]), mo = Number(m[2]), d = Number(m[3]);
      const hh = m[4] !== undefined ? Number(m[4]) : null;
      const mm = m[5] !== undefined ? Number(m[5]) : null;
      if (mo < 1 || mo > 12 || d < 1 || d > 31) return '';
      const dt = new Date(y, mo - 1, d);
      if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d) return '';
      if (hh !== null && (hh < 0 || hh > 23)) return '';
      if (mm !== null && (mm < 0 || mm > 59)) return '';
      return hh === null ? `${m[1]}-${m[2]}-${m[3]}` : `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}`;
    }
    function sanitizeRecurrence(v) {
      if (typeof v !== 'string') return '';
      const s = v.trim();
      if (!s) return '';
      if (s === 'daily') return 'daily';
      const type = s.split(':')[0];
      const param = s.split(':')[1];
      if ((type === 'weekly' || type === 'biweekly') && /^[0-6]$/.test(param || '')) return `${type}:${param}`;
      if (type === 'monthly' && (param === 'last' || /^(?:[1-9]|[12]\d|3[01])$/.test(param || ''))) return `${type}:${param}`;
      return '';
    }
    function sanitizePriority(v) {
      return (v === 'high' || v === 'medium' || v === 'low') ? v : '';
    }
    function sanitizeCategories(v) {
      if (!Array.isArray(v)) return [];
      const out = [];
      const seen = new Set();
      v.forEach(function(tag) {
        const t = asTrimmedStr(String(tag || '').replace(/^#/, ''), 30);
        if (!t || seen.has(t)) return;
        seen.add(t);
        out.push(t);
      });
      return out.slice(0, 50);
    }
    function sanitizeSubtasks(v) {
      if (!Array.isArray(v)) return undefined;
      const out = v.map(function(st) {
        if (!isPlainObj(st)) return null;
        const text = asTrimmedStr(st.text, 200);
        if (!text) return null;
        return { text, done: !!st.done };
      }).filter(Boolean);
      return out.length ? out.slice(0, 200) : undefined;
    }
    function sanitizeHistoryEntries(v) {
      if (!Array.isArray(v)) return { items: [], dropped: 0 };
      const allowed = new Set(['done', 'created', 'deleted', 'undone', 'recurring']);
      let dropped = 0;
      const items = v.map(function(h) {
        if (!isPlainObj(h)) { dropped++; return null; }
        const type = allowed.has(h.type) ? h.type : '';
        const text = asTrimmedStr(h.text, 200);
        if (!type || !text) { dropped++; return null; }
        return { type, text, ts: parseSafeTs(h.ts, Date.now()) };
      }).filter(Boolean);
      return { items, dropped };
    }
    function sanitizeTodoItem(todo, fallbackId) {
      if (!isPlainObj(todo)) return null;
      const text = asTrimmedStr(todo.text, 200);
      if (!text) return null;
      const done = !!todo.done;
      const clean = {
        id: parseSafeTs(todo.id, fallbackId),
        text,
        done,
        created: parseSafeTs(todo.created, Date.now()),
        priority: sanitizePriority(todo.priority),
        note: asTrimmedStr(todo.note, 1000),
        dueDate: sanitizeDueDate(todo.dueDate),
        categories: sanitizeCategories(todo.categories),
        recurrence: sanitizeRecurrence(todo.recurrence)
      };
      if (Array.isArray(todo.subtasks)) clean.subtasks = sanitizeSubtasks(todo.subtasks);
      if (typeof todo.color === 'string' && TASK_COLORS.includes(todo.color)) clean.color = todo.color;
      if (Number.isFinite(Number(todo.timeSpent)) && Number(todo.timeSpent) >= 0) clean.timeSpent = Math.floor(Number(todo.timeSpent));
      if (Number.isFinite(Number(todo.timerStarted)) && Number(todo.timerStarted) > 0 && !done) clean.timerStarted = Math.floor(Number(todo.timerStarted));
      if (done) {
        const completedAt = parseSafeTs(todo.completedAt, 0);
        if (completedAt > 0) clean.completedAt = completedAt;
      }
      return clean;
    }
    function sanitizeBoardItem(board, index) {
      if (!isPlainObj(board)) return { board: null, dropped: 1 };
      const id = parseSafeTs(board.id, Date.now() + index + 1);
      const name = asTrimmedStr(board.name, 20) || (index === 0 ? 'Inbox' : `Board ${index + 1}`);
      const rawTodos = Array.isArray(board.todos) ? board.todos : [];
      let dropped = 0;
      const todosOut = [];
      const usedIds = new Set();
      rawTodos.forEach(function(t, i) {
        const sanitized = sanitizeTodoItem(t, Date.now() + index * 100000 + i + 1);
        if (!sanitized) { dropped++; return; }
        if (usedIds.has(sanitized.id)) sanitized.id = Date.now() + index * 100000 + i + 1;
        usedIds.add(sanitized.id);
        todosOut.push(sanitized);
      });
      const hist = sanitizeHistoryEntries(board.history);
      dropped += hist.dropped;
      return { board: { id, name, todos: todosOut, history: hist.items }, dropped };
    }
    function sanitizeImportPayload(data) {
      if (!isPlainObj(data)) throw new Error('invalid');
      let dropped = 0;
      if (data.version === 2 && Array.isArray(data.boards)) {
        const cleanedBoards = data.boards.map(function(b, i) { return sanitizeBoardItem(b, i); });
        const boardsOut = cleanedBoards.map(x => { dropped += x.dropped; return x.board; }).filter(Boolean);
        if (!boardsOut.length) throw new Error('invalid');
        const idWanted = parseSafeTs(data.currentBoardId, boardsOut[0].id);
        const current = boardsOut.find(b => b.id === idWanted) ? idWanted : boardsOut[0].id;
        return { boards: boardsOut, currentBoardId: current, dropped };
      }
      if (Array.isArray(data.todos)) {
        const legacy = sanitizeBoardItem({ id: 1, name: 'Inbox', todos: data.todos, history: data.history }, 0);
        if (!legacy.board) throw new Error('invalid');
        return { boards: [legacy.board], currentBoardId: legacy.board.id, dropped: legacy.dropped };
      }
      throw new Error('invalid');
    }
    function importData(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        try {
          const data = JSON.parse(e.target.result);
          const normalized = sanitizeImportPayload(data);
          boards = normalized.boards;
          currentBoardId = normalized.currentBoardId;
          if (Array.isArray(data.notes)) {
            notes = data.notes.filter(function(n) { return n && typeof n.text === 'string'; })
              .map(function(n) { return { id: Number(n.id) || Date.now(), text: String(n.text), createdAt: Number(n.createdAt) || Date.now() }; });
          }
          activateBoard(currentBoardId);
          save(); render();
          const T = t();
          showToast(normalized.dropped > 0 ? T.toastImportedSanitized(normalized.dropped) : T.toastImported);
        } catch { showToast(t().toastInvalidFile); }
      };
      reader.readAsText(file);
      event.target.value = '';
    }
    let _confirmCb = null;
    function showConfirm(message, onYes, onNo, yesIsDanger) {
      const T = t();
      document.getElementById('confirm-message').textContent = message;
      document.getElementById('confirm-yes').textContent = T.btnYes;
      document.getElementById('confirm-no').textContent = T.btnNo;
      document.getElementById('confirm-yes').classList.toggle('danger', !!yesIsDanger);
      document.getElementById('confirm-backdrop').classList.add('show');
      _confirmCb = { onYes, onNo };
    }
    function resolveConfirm(answer) {
      document.getElementById('confirm-backdrop').classList.remove('show');
      const cb = _confirmCb; _confirmCb = null;
      if (answer && cb?.onYes) cb.onYes();
      else if (!answer && cb?.onNo) cb.onNo();
    }

    function clearAllTodos() {
      const hasAnyContent = boards.some(function(board) {
        return (board.todos && board.todos.length) || (board.history && board.history.length);
      }) || notes.length || templates.length || boards.length > 1;
      const T = t();
      if (!hasAnyContent) {
        doDeleteAll();
        return;
      }
      showConfirm(T.confirmClearAll, () => {
        showConfirm(T.confirmExportFirst, () => {
          exportData();
          doDeleteAll();
        }, () => {
          doDeleteAll();
        });
      }, null, true);
    }
    function doDeleteAll() {
      const T = t();
      const starter = typeof createStarterContent === 'function' ? createStarterContent(lang) : null;
      if (starter && Array.isArray(starter.boards) && starter.boards.length) {
        boards = starter.boards;
        currentBoardId = starter.currentBoardId || starter.boards[0].id;
        notes = Array.isArray(starter.notes) ? starter.notes : [];
        templates = Array.isArray(starter.templates) ? starter.templates : [];
      } else {
        boards = [{ id: 1, name: T.boardDefault || 'Inbox', todos: [], history: [] }];
        currentBoardId = boards[0].id;
        notes = [];
        templates = [];
      }
      activateBoard(currentBoardId);
      activeTab = 'tasks';
      activeTasksView = 'tasks';
      currentFilter = 'open';
      currentCategory = '';
      searchQuery = '';
      const searchEl = document.getElementById('search-input');
      if (searchEl) searchEl.value = '';
      const notesInput = document.getElementById('notes-compose-input');
      if (notesInput) notesInput.value = '';
      const notesPreview = document.getElementById('notes-compose-preview');
      if (notesPreview) notesPreview.style.display = 'none';
      const notesPreviewBtn = document.getElementById('notes-compose-preview-toggle');
      if (notesPreviewBtn) notesPreviewBtn.classList.remove('active');
      save();
      render();
      switchTab('tasks');
      showToast(T.toastAppReset || T.toastAllCleared);
    }

    // ── Tab navigation ──────────────────────────────────────────────────────
    function switchTab(tab) {
      if (activeTab !== tab) haptic('light');
      if (quickActionsOpen) closeQuickActions();
      activeTab = tab;
      document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      const panel = document.getElementById('panel-' + tab);
      const btn = document.querySelector('.tab-btn[data-tab="' + tab + '"]');
      if (panel) panel.classList.add('active');
      if (btn) btn.classList.add('active');
      safeSetItem('activeTab', tab);
      const appEl = document.querySelector('.app');
      if (appEl) appEl.scrollTo({ top: 0, behavior: 'instant' });
      if (tab === 'manage') checkExportReminder();
      if (tab === 'new') showTip();
    }
    function cycleTabs(dir) {
      const tabs = ['new', 'tasks', 'history', 'manage', 'help'];
      const idx = tabs.indexOf(activeTab);
      const next = (idx + dir + tabs.length) % tabs.length;
      switchTab(tabs[next]);
    }

    function clearHistory() {
      if (!confirm(t().confirmClear)) return;
      history = []; save(); render(); showToast(t().toastHistoryCleared);
    }

    function toggleArchiveSection(section) {
      const idMap = { stats: 'stats-collapsible', heatmap: 'heatmap-collapsible', archive: 'archive-collapsible', log: 'log-collapsible' };
      const toggleMap = { stats: 'stats-section-toggle', heatmap: 'heatmap-section-toggle', archive: 'archive-section-toggle', log: 'log-section-toggle' };
      const col = document.getElementById(idMap[section]);
      const chevron = document.getElementById(toggleMap[section]).querySelector('.scheduled-chevron');
      col.classList.toggle('open');
      if (chevron) chevron.classList.toggle('open', col.classList.contains('open'));
      haptic('light');
    }

    function restoreTask(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      todo.done = false;
      delete todo.completedAt;
      addHistory('undone', todo.text);
      haptic('success');
      save(); render();
    }

    function deleteArchived(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      addHistory('deleted', todo.text);
      todos = todos.filter(t => t.id !== id);
      haptic('warning');
      save(); render();
    }

    // ── Undo ─────────────────────────────────────────────────────────────────
    let undoSnapshot = null;
    let undoHistorySnapshot = null;
    function saveUndo() {
      undoSnapshot = JSON.parse(JSON.stringify(todos));
      undoHistorySnapshot = JSON.parse(JSON.stringify(history));
    }
    function performUndo() {
      if (!undoSnapshot) return;
      todos = undoSnapshot;
      history = undoHistorySnapshot;
      undoSnapshot = null;
      undoHistorySnapshot = null;
      save(); render();
      showToast(t().toastUndo);
    }

    // ── Toast ────────────────────────────────────────────────────────────────
    let toastTimer;
    function showToast(msg, duration, actionLabel, actionCb) {
      const withUndo = duration === true || duration === undefined && actionLabel === undefined;
      const el = document.getElementById('toast');
      const messageHtml = `<span class="toast-message">${escHtml(msg)}</span>`;
      if (withUndo) {
        el.innerHTML = messageHtml + `<button class="toast-undo" onclick="performUndo()">${t().undoBtn}</button>`;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { el.classList.remove('show'); undoSnapshot = null; }, 5000);
      } else if (actionLabel && actionCb) {
        window._toastActionCb = actionCb;
        el.innerHTML = messageHtml + `<button class="toast-undo" onclick="if(window._toastActionCb){window._toastActionCb();window._toastActionCb=null;}">${escHtml(actionLabel)}</button>`;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('show'), duration || 2400);
      } else {
        el.innerHTML = messageHtml;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { el.classList.remove('show'); undoSnapshot = null; }, duration || 2400);
      }
    }

    // ── Haptic Feedback (Android only — iOS Safari has no Vibration API) ────
    // ── Haptic Feedback (iOS + Android) ────────────────────────────────────
    const hapticEl = (function() {
      // iOS 17.4+ supports <input type="checkbox" switch> which triggers native haptic
      const inp = document.createElement('input');
      inp.type = 'checkbox';
      inp.setAttribute('switch', '');
      inp.style.cssText = 'position:fixed;top:-100px;left:-100px;opacity:0;pointer-events:none';
      const lbl = document.createElement('label');
      lbl.style.cssText = 'position:fixed;top:-100px;left:-100px;opacity:0;pointer-events:none';
      lbl.appendChild(inp);
      document.documentElement.appendChild(lbl);
      return { inp: inp, lbl: lbl };
    })();
    function hapticPulse() {
      if (navigator.vibrate) { navigator.vibrate(10); return; }
      try { hapticEl.lbl.click(); } catch(e) {}
    }
    function haptic(type) {
      switch (type) {
        case 'light':   hapticPulse(); break;
        case 'medium':  hapticPulse(); break;
        case 'success': hapticPulse(); setTimeout(hapticPulse, 50); break;
        case 'warning': hapticPulse(); setTimeout(hapticPulse, 60); setTimeout(hapticPulse, 120); break;
      }
    }

    // ── Confetti ──────────────────────────────────────────────────────────────
    function confetti() {
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      const colors = ['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#ff922b','#cc5de8','#20c997','#f06595'];
      const pieces = [];
      for (let i = 0; i < 80; i++) {
        pieces.push({
          x: canvas.width * 0.5 + (Math.random() - 0.5) * canvas.width * 0.4,
          y: canvas.height * 0.45,
          vx: (Math.random() - 0.5) * 12,
          vy: -Math.random() * 14 - 4,
          w: Math.random() * 8 + 4,
          h: Math.random() * 6 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          rot: Math.random() * Math.PI * 2,
          rv: (Math.random() - 0.5) * 0.3,
          gravity: 0.25 + Math.random() * 0.1
        });
      }
      let frame = 0;
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        pieces.forEach(p => {
          p.vy += p.gravity;
          p.x += p.vx;
          p.y += p.vy;
          p.rot += p.rv;
          p.vx *= 0.99;
          if (p.y < canvas.height + 20) alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, 1 - frame / 90);
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        });
        frame++;
        if (alive && frame < 100) requestAnimationFrame(draw);
        else canvas.remove();
      }
      requestAnimationFrame(draw);
    }

    // ── Task Colors ───────────────────────────────────────────────────────────
    function renderColorPicker(containerId, selectedColor, onChange) {
      const el = document.getElementById(containerId);
      if (!el || !taskColorsEnabled) { if (el) el.innerHTML = ''; return; }
      const label = t().colorPickerLabel;
      el.innerHTML = `<span class="sort-label color-picker-label">${label}</span><div class="color-picker-swatches">` + ['', ...TASK_COLORS].map(c => {
        const isNone = c === '';
        const isActive = c === selectedColor;
        return `<button type="button" class="color-swatch${isNone ? ' none-swatch' : ''}${isActive ? ' active' : ''}"
          style="${c ? 'background:' + c + ';' : ''}"
          data-color="${c}"
          aria-label="${isNone ? label + ': –' : label + ': ' + c}"
          onclick="(function(btn){ var wrap=btn.closest('.color-picker-row'); wrap.querySelectorAll('.color-swatch').forEach(function(s){s.classList.remove('active')}); btn.classList.add('active'); })(this)"
          ></button>`;
      }).join('') + '</div>';
      el.querySelectorAll('.color-swatch').forEach(btn => {
        btn.addEventListener('click', function() { onChange(this.dataset.color); });
      });
    }
    function applySettingsToggles() {
      const colorsEl = document.getElementById('task-colors-toggle');
      if (colorsEl) colorsEl.checked = taskColorsEnabled;
      ['auto','dark','light'].forEach(function(p) {
        const el = document.getElementById('dm-chip-' + p);
        if (el) el.classList.toggle('active', darkPref === p);
      });
      const notifyEl = document.getElementById('notify-setting-toggle');
      if (notifyEl) notifyEl.checked = !!notifyEnabled;
    }
    function toggleTaskColors() {
      taskColorsEnabled = !taskColorsEnabled;
      applySettingsToggles();
      renderColorPicker('new-color-picker', newTaskColor, function(c) { newTaskColor = c; });
      save(); render();
    }

    // ── Notifications ────────────────────────────────────────────────────────
    function applyNotifyIcon() {
      document.getElementById('notify-icon').innerHTML = notifyEnabled ? SVG.bell : SVG.bellOff;
      document.getElementById('notify-btn').style.opacity = notifyEnabled ? '1' : '0.5';
      applySettingsToggles();
    }
    function toggleNotify() {
      haptic('light');
      const T = t();
      if (!('Notification' in window)) { showToast(T.notifyDenied); applySettingsToggles(); return; }
      if (notifyEnabled) {
        notifyEnabled = false;
        save(); applyNotifyIcon();
        showToast(T.notifyOff);
        return;
      }
      if (Notification.permission === 'granted') {
        notifyEnabled = true;
        save(); applyNotifyIcon();
        showToast(T.notifyOn);
        return;
      }
      if (Notification.permission === 'denied') {
        showToast(T.notifyDenied);
        applySettingsToggles();
        return;
      }
      Notification.requestPermission().then(function(perm) {
        if (perm === 'granted') {
          notifyEnabled = true;
          save(); applyNotifyIcon();
          showToast(T.notifyOn);
        } else {
          showToast(T.notifyDenied);
          applySettingsToggles();
        }
      });
    }
    function checkDueNotifications() {
      if (!notifyEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;
      const T = t();
      const now = new Date();
      const today = formatDateLocalISO(now);
      const icon = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><polyline points="7,16 13,22 25,10" stroke="%234d96ff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      const allBoardTodos = boards.flatMap(function(b){ return b.todos; });
      allBoardTodos.forEach(function(todo) {
        if (todo.done || !todo.dueDate || notifiedIds.has(todo.id)) return;
        let title = '', body = todo.text;
        const dateOnly = todo.dueDate.split('T')[0];
        if (todo.dueDate.includes('T')) {
          const due = new Date(todo.dueDate);
          if (due <= now) title = due < now ? '⚠️ ' + T.notifyOverdue : '📅 ' + T.notifyDueToday;
        } else {
          if (dateOnly < today) title = '⚠️ ' + T.notifyOverdue;
          else if (dateOnly === today) title = '📅 ' + T.notifyDueToday;
        }
        if (title) {
          notifiedIds.add(todo.id);
          try { new Notification(title, { body: body, icon: icon }); } catch(e) {}
        }
      });
    }

    // ── Time Tracking ────────────────────────────────────────────────────────
    let timeTrackInterval = null;

    function formatElapsed(ms) {
      const s = Math.floor(ms / 1000);
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sec = s % 60;
      if (h > 0) return h + ':' + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
      return m + ':' + String(sec).padStart(2, '0');
    }

    function getTaskElapsed(todo) {
      const base = todo.timeSpent || 0;
      if (todo.timerStarted) return base + (Date.now() - todo.timerStarted);
      return base;
    }

    function toggleTaskTimer(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      if (todo.timerStarted) {
        todo.timeSpent = (todo.timeSpent || 0) + (Date.now() - todo.timerStarted);
        delete todo.timerStarted;
        haptic('light');
      } else {
        todo.timerStarted = Date.now();
        haptic('success');
      }
      save(); render();
      updateTimeTrackTicker();
    }

    function resetTaskTimer(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      delete todo.timerStarted;
      todo.timeSpent = 0;
      haptic('warning');
      save(); render();
      updateTimeTrackTicker();
    }

    function updateTimeTrackTicker() {
      const hasRunning = todos.some(t => t.timerStarted);
      if (hasRunning && !timeTrackInterval) {
        timeTrackInterval = setInterval(function() {
          document.querySelectorAll('.timer-badge.running').forEach(function(el) {
            const id = parseInt(el.dataset.taskId);
            const todo = todos.find(t => t.id === id);
            if (todo) el.querySelector('.timer-value').textContent = formatElapsed(getTaskElapsed(todo));
          });
        }, 1000);
      } else if (!hasRunning && timeTrackInterval) {
        clearInterval(timeTrackInterval);
        timeTrackInterval = null;
      }
    }

    // ── Pomodoro Timer ──────────────────────────────────────────────────────
    const POMO_WORK = 25 * 60;
    const POMO_SHORT_BREAK = 5 * 60;
    const POMO_LONG_BREAK = 15 * 60;
    let pomodoroState = null;
    let pomodoroMinimized = false;

    function startPomodoro(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      if (pomodoroState && pomodoroState.intervalId) clearInterval(pomodoroState.intervalId);
      pomodoroState = {
        taskId: id,
        taskText: todo.text,
        timeLeft: POMO_WORK,
        running: true,
        isBreak: false,
        sessions: 0,
        intervalId: null
      };
      pomodoroState.intervalId = setInterval(pomodoroTick, 1000);
      pomodoroMinimized = false;
      haptic('success');
      renderPomo();
    }

    function togglePomodoro() {
      if (!pomodoroState) return;
      pomodoroState.running = !pomodoroState.running;
      haptic('light');
      if (pomodoroState.running) {
        pomodoroState.intervalId = setInterval(pomodoroTick, 1000);
      } else {
        clearInterval(pomodoroState.intervalId);
        pomodoroState.intervalId = null;
      }
      renderPomo();
    }

    function stopPomodoro() {
      if (!pomodoroState) return;
      if (pomodoroState.intervalId) clearInterval(pomodoroState.intervalId);
      pomodoroState = null;
      pomodoroMinimized = false;
      haptic('warning');
      document.getElementById('pomo-overlay').style.display = 'none';
      document.getElementById('pomo-mini').style.display = 'none';
    }

    function minimizePomodoro() {
      pomodoroMinimized = true;
      haptic('light');
      renderPomo();
    }

    function maximizePomodoro() {
      pomodoroMinimized = false;
      haptic('light');
      renderPomo();
    }

    function pomodoroTick() {
      if (!pomodoroState || !pomodoroState.running) return;
      pomodoroState.timeLeft--;
      if (pomodoroState.timeLeft <= 0) {
        haptic('success');
        if (pomodoroState.isBreak) {
          pomodoroState.isBreak = false;
          pomodoroState.timeLeft = POMO_WORK;
          pomodoroNotify(t().pomodoroBreakOver);
        } else {
          pomodoroState.sessions++;
          pomodoroState.isBreak = true;
          pomodoroState.timeLeft = pomodoroState.sessions % 4 === 0 ? POMO_LONG_BREAK : POMO_SHORT_BREAK;
          pomodoroNotify(t().pomodoroDone);
        }
        // Show fullscreen when phase changes
        if (pomodoroMinimized) {
          pomodoroMinimized = false;
        }
      }
      renderPomo();
    }

    function pomodoroNotify(msg) {
      if ('Notification' in window && Notification.permission === 'granted') {
        try { new Notification('Flux — Pomodoro', { body: msg }); } catch(e) {}
      }
    }

    function renderPomo() {
      const overlay = document.getElementById('pomo-overlay');
      const mini = document.getElementById('pomo-mini');
      if (!pomodoroState) {
        overlay.style.display = 'none';
        mini.style.display = 'none';
        return;
      }
      const todo = todos.find(t => t.id === pomodoroState.taskId);
      if (!todo) { stopPomodoro(); return; }

      const T = t();
      const mins = Math.floor(pomodoroState.timeLeft / 60);
      const secs = pomodoroState.timeLeft % 60;
      const timeStr = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

      if (pomodoroMinimized) {
        overlay.style.display = 'none';
        mini.style.display = 'flex';
        document.getElementById('pomo-mini-time').textContent = timeStr;
        document.getElementById('pomo-mini-icon').innerHTML = SVG.timer;
        return;
      }

      overlay.style.display = 'flex';
      mini.style.display = 'none';

      const phase = document.getElementById('pomo-phase');
      if (pomodoroState.isBreak) {
        const isLong = pomodoroState.sessions % 4 === 0 && pomodoroState.sessions > 0;
        phase.textContent = isLong ? T.pomodoroLongBreak : T.pomodoroBreak;
        phase.className = 'pomo-phase break';
      } else {
        phase.textContent = T.pomodoroWork;
        phase.className = 'pomo-phase work';
      }
      document.getElementById('pomo-task').textContent = pomodoroState.taskText;
      document.getElementById('pomo-time').textContent = timeStr;

      let filledDots = pomodoroState.sessions % 4;
      if (filledDots === 0 && pomodoroState.sessions > 0 && pomodoroState.isBreak) filledDots = 4;
      document.getElementById('pomo-dots').innerHTML = Array.from({length: 4}, (_, i) =>
        '<span class="pomo-dot' + (i < filledDots ? ' filled' : '') + '"></span>'
      ).join('');

      const pomoToggleBtn = document.getElementById('pomo-toggle');
      pomoToggleBtn.innerHTML = pomodoroState.running ? SVG.pause : SVG.play;
      pomoToggleBtn.setAttribute('aria-label', pomodoroState.running ? 'Pause' : 'Play');
      document.getElementById('pomo-stop').innerHTML = SVG.stopIcon;
    }

    // ── Theme / Lang ─────────────────────────────────────────────────────────
    function toggleDark() {
      const next = darkPref === 'auto' ? 'dark' : darkPref === 'dark' ? 'light' : 'auto';
      setDarkMode(next);
    }
    function setDarkMode(pref) {
      darkPref = pref;
      safeSetItem('dark', pref === 'dark' ? '1' : pref === 'light' ? '0' : 'auto');
      dark = pref === 'auto' ? window.matchMedia('(prefers-color-scheme: dark)').matches : pref === 'dark';
      applyDark(); render(); save(); haptic('light');
    }
    // Follow system when in auto mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (darkPref !== 'auto') return;
      dark = e.matches; applyDark(); render();
    });
    function updateNavbarColor() {
      const bg = THEME_BG[currentTheme] || THEME_BG.flux;
      document.body.style.backgroundColor = dark ? bg.dark : bg.light;
    }
    function applyDark() {
      document.body.classList.toggle('dark', dark);
      document.documentElement.classList.toggle('dark', dark);
      document.getElementById('dark-icon').innerHTML = darkPref === 'auto' ? SVG.autoMode : (dark ? SVG.moon : SVG.sun);
      const th = THEMES[currentTheme] || THEMES.flux;
      document.getElementById('theme-color-meta').content = dark ? th.dark : th.light;
      updateNavbarColor();
      applySettingsToggles();
    }
    function toggleLang() {
      haptic('light');
      const prevLang = lang;
      lang = lang === 'de' ? 'en' : 'de';
      translateStarterBoardContent(prevLang, lang);
      document.getElementById('lang-label').textContent = lang === 'de' ? 'DE' : 'EN';
      document.documentElement.lang = lang;
      syncPwaInstall();
      save(); render();
      if (activeTab === 'new') showTip();
      checkExportReminder();
      const banner = document.getElementById('ios-banner');
      if (banner && banner.style.display !== 'none') {
        const T = t();
        document.getElementById('ios-banner-title').textContent = T.iosBannerTitle;
        document.getElementById('ios-banner-hint').innerHTML = T.iosBannerHint;
      }
    }
    function applyLang() {
      document.getElementById('lang-label').textContent = lang === 'de' ? 'DE' : 'EN';
      document.documentElement.lang = lang;
      syncPwaInstall();
    }
    function syncPwaInstall() {
      const el = document.getElementById('pwa-install');
      if (!el) return;
      const T = t();
      el.setAttribute('name', T.appTitle);
      el.setAttribute('description', T.claim);
      el.setAttribute('icon', './icons/icon-192.png');
    }

    // ── Theme Picker ──────────────────────────────────────────────────────────
    function applyTheme(id) {
      currentTheme = id;
      const html = document.documentElement;
      Object.keys(THEMES).forEach(k => html.classList.remove('theme-' + k));
      if (id !== 'flux') html.classList.add('theme-' + id);
      const th = THEMES[id] || THEMES.flux;
      document.getElementById('theme-color-meta').content = dark ? th.dark : th.light;
      updateNavbarColor();
    }
    function selectTheme(id) {
      applyTheme(id);
      haptic('light');
      save();
      renderSettingsThemeSwatches();
    }
    function getThemeSwatchesMarkup(extraClass) {
      const names = t().themeNames;
      const classSuffix = extraClass ? ' ' + extraClass : '';
      return Object.keys(THEMES).map(id => `
        <button type="button" class="theme-swatch${classSuffix}${currentTheme === id ? ' active' : ''}" onclick="selectTheme('${id}')" aria-label="${names[id]}" title="${names[id]}">
          <div class="swatch-circle" style="background:${SWATCH_BG[id]}"></div>
          <span class="swatch-label">${names[id]}</span>
        </button>`).join('');
    }
    function renderSettingsThemeSwatches() {
      const grid = document.getElementById('theme-settings-grid');
      if (grid) grid.innerHTML = getThemeSwatchesMarkup('settings-theme-swatch');
    }

    // ── Priority ─────────────────────────────────────────────────────────────
    function setPriority(p) {
      newPriority = newPriority === p ? '' : p;
      updatePrioChips();
    }
    function updatePrioChips() {
      const chips = document.querySelectorAll('.prio-chip');
      const T = t();
      const labels = { high: T.priorityHigh, medium: T.priorityMedium, low: T.priorityLow };
      chips.forEach(function(c) {
        c.textContent = labels[c.dataset.p] || '';
        c.classList.toggle('active', c.dataset.p === newPriority);
      });
    }
    function updateFieldLabels() {
      const due = document.getElementById('new-todo-due');
      const time = document.getElementById('new-todo-time');
      due.classList.toggle('has-value', !!due.value);
      time.classList.toggle('has-value', !!time.value);
    }
    function setNewAdvancedOpen(open) {
      newAdvancedOpen = !!open;
      const wrap = document.getElementById('new-advanced');
      const chevron = document.getElementById('new-options-chevron');
      const btn = document.getElementById('new-options-toggle');
      const label = document.getElementById('new-options-toggle-label');
      if (!wrap || !chevron || !btn || !label) return;
      wrap.style.display = newAdvancedOpen ? '' : 'none';
      chevron.classList.toggle('open', newAdvancedOpen);
      btn.classList.toggle('open', newAdvancedOpen);
      const T = t();
      label.textContent = newAdvancedOpen ? T.newOptionsLess : T.newOptionsMore;
      if (newAdvancedOpen) {
        const details = document.getElementById('form-details');
        if (details) details.style.display = '';
      } else {
        const details = document.getElementById('form-details');
        if (details) details.style.display = 'none';
      }
    }
    function toggleNewAdvanced() {
      setNewAdvancedOpen(!newAdvancedOpen);
    }
    function toggleTagManager() {
      const body = document.getElementById('tag-manager-body');
      const chevron = document.getElementById('tag-manager-chevron');
      const btn = document.getElementById('tag-manager-toggle');
      const show = body.style.display === 'none';
      body.style.display = show ? '' : 'none';
      chevron.classList.toggle('open', show);
      btn.classList.toggle('open', show);
    }
    function toggleTemplateManager() {
      const body = document.getElementById('template-manager-body');
      const chevron = document.getElementById('template-manager-chevron');
      const btn = document.getElementById('template-manager-toggle');
      const show = body.style.display === 'none';
      body.style.display = show ? '' : 'none';
      chevron.classList.toggle('open', show);
      btn.classList.toggle('open', show);
      if (show) renderTemplateManager();
    }
    function toggleScheduledSection() {
      scheduledSectionOpen = !scheduledSectionOpen;
      const body = document.getElementById('scheduled-body');
      const chevron = document.getElementById('scheduled-chevron');
      if (body) body.style.display = scheduledSectionOpen ? '' : 'none';
      if (chevron) chevron.classList.toggle('open', scheduledSectionOpen);
    }
    function cycleTodoPriority(id) {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      const cycle = ['', 'high', 'medium', 'low'];
      todo.priority = cycle[(cycle.indexOf(todo.priority || '') + 1) % cycle.length];
      save(); render();
    }

    // ── Focus Mode ─────────────────────────────────────────────────────────
    let scheduledSectionOpen = false;
    let focusModeActive = false;
    let focusSkippedIds = [];
    let calendarViewActive = false;
    let calendarMonth = new Date().getFullYear() * 12 + new Date().getMonth();

    function getNextFocusTask(skipIds) {
      const prioOrder = { high: 0, medium: 1, low: 2, '': 3 };
      const open = todos.filter(function(t) {
        if (t.done || skipIds.indexOf(t.id) !== -1) return false;
        // Exclude future recurring tasks
        if (t.recurrence && t.dueDate && getDueClass(t.dueDate) === 'due-future') return false;
        return true;
      });
      if (!open.length) return null;
      open.sort(function(a, b) {
        const pa = prioOrder[a.priority || ''] !== undefined ? prioOrder[a.priority || ''] : 3;
        const pb = prioOrder[b.priority || ''] !== undefined ? prioOrder[b.priority || ''] : 3;
        if (pa !== pb) return pa - pb;
        if (a.dueDate && b.dueDate) {
          const diff = new Date(a.dueDate) - new Date(b.dueDate);
          if (diff !== 0) return diff;
        } else if (a.dueDate) return -1;
        else if (b.dueDate) return 1;
        return a.created - b.created;
      });
      return open[0];
    }

    function enterFocusMode() {
      haptic('medium');
      focusModeActive = true;
      focusSkippedIds = [];
      renderFocusMode();
      document.getElementById('focus-overlay').style.display = 'flex';
    }

    function exitFocusMode() {
      haptic('light');
      focusModeActive = false;
      focusSkippedIds = [];
      document.getElementById('focus-overlay').style.display = 'none';
    }

    function focusComplete() {
      const task = getNextFocusTask(focusSkippedIds);
      if (!task) return;
      focusSkippedIds = focusSkippedIds.filter(function(id) { return id !== task.id; });
      toggleTodo(task.id);
      renderFocusMode();
    }

    function focusStartPomo() {
      const task = getNextFocusTask(focusSkippedIds);
      if (!task) return;
      exitFocusMode();
      startPomodoro(task.id);
    }

    function focusSkip() {
      haptic('light');
      const task = getNextFocusTask(focusSkippedIds);
      if (!task) return;
      focusSkippedIds.push(task.id);
      if (!getNextFocusTask(focusSkippedIds)) focusSkippedIds = [];
      renderFocusMode();
    }

    function renderFocusMode() {
      const overlay = document.getElementById('focus-overlay');
      if (!focusModeActive) return;
      const T = t();
      document.getElementById('focus-badge').textContent = T.focusModeTitle;
      const task = getNextFocusTask(focusSkippedIds);
      const emptyEl = document.getElementById('focus-empty');
      const textEl = document.getElementById('focus-task-text');
      const metaEl = document.getElementById('focus-meta');
      const noteEl = document.getElementById('focus-note');
      const ctrlEl = document.getElementById('focus-controls');

      if (!task) {
        emptyEl.textContent = T.focusModeNoTasks;
        emptyEl.style.display = '';
        textEl.style.display = 'none';
        metaEl.style.display = 'none';
        noteEl.style.display = 'none';
        ctrlEl.style.display = 'none';
        return;
      }

      emptyEl.style.display = 'none';
      textEl.style.display = '';
      textEl.textContent = task.text;

      const prioLabel = { high: T.priorityHigh, medium: T.priorityMedium, low: T.priorityLow };
      let metaHtml = '';
      if (task.priority) {
        metaHtml += '<span class="prio-badge" data-p="' + task.priority + '">' + prioLabel[task.priority] + '</span> ';
      }
      if (task.dueDate) {
        const dc = getDueClass(task.dueDate);
        const dueLabels = { 'due-overdue': T.metaOverdue, 'due-today': T.metaDueToday, 'due-future': T.metaDue };
        metaHtml += '<span class="todo-due ' + dc + '">' + (dueLabels[dc] || '') + ': ' + formatDueDate(task.dueDate) + '</span>';
      }
      if (task.recurrence) {
        metaHtml += ' <span class="recur-badge">' + SVG.repeat + ' ' + recurrenceLabel(task.recurrence) + '</span>';
      }
      (task.categories || []).forEach(function(c) {
        metaHtml += ' <span class="cat-badge" style="' + catStyle(c) + '">#' + escHtml(c) + '</span>';
      });
      metaEl.innerHTML = metaHtml;
      metaEl.style.display = metaHtml ? '' : 'none';

      if (task.note) {
        noteEl.textContent = task.note;
        noteEl.style.display = '';
      } else {
        noteEl.style.display = 'none';
      }

      ctrlEl.style.display = '';
      document.getElementById('focus-complete-btn').innerHTML = SVG.check + ' ' + T.focusModeComplete;
      document.getElementById('focus-skip-btn').textContent = '⇥ ' + T.focusModeSkip;
      document.getElementById('focus-pomo-btn').innerHTML = SVG.timer + ' ' + T.pomodoroStart;
    }

    // ── Statistics ─────────────────────────────────────────────────────────

    function computeCompletionRate() {
      const total = todos.length;
      if (!total) return { done: 0, total: 0, pct: 0 };
      const done = todos.filter(function(t) { return t.done; }).length;
      return { done: done, total: total, pct: Math.round((done / total) * 100) };
    }

    function getISOWeekKey(date) {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
      const yearStart = new Date(d.getFullYear(), 0, 4);
      const weekNo = 1 + Math.round(((d - yearStart) / 86400000 - 3 + (yearStart.getDay() + 6) % 7) / 7);
      return d.getFullYear() + '-W' + String(weekNo).padStart(2, '0');
    }

    function getWeekLabel(date) {
      const d = new Date(date);
      const day = d.getDay();
      const diff = d.getDate() - day + (day === 0 ? -6 : 1);
      d.setDate(diff);
      const mon = new Date(d);
      const sun = new Date(d);
      sun.setDate(sun.getDate() + 6);
      const mM = mon.getMonth() + 1;
      const mS = sun.getMonth() + 1;
      if (mM === mS) return mon.getDate() + '.\u2013' + sun.getDate() + '.' + mM + '.';
      return mon.getDate() + '.' + mM + '.\u2013' + sun.getDate() + '.' + mS + '.';
    }

    function computeTasksPerWeek() {
      const completedDates = todos
        .filter(function(t) { return t.done && t.completedAt; })
        .map(function(t) { return t.completedAt; });
      const weekMap = {};
      completedDates.forEach(function(ts) {
        const key = getISOWeekKey(new Date(ts));
        weekMap[key] = (weekMap[key] || 0) + 1;
      });
      history.forEach(function(h) {
        if (h.type === 'done' && h.ts) {
          const key = getISOWeekKey(new Date(h.ts));
          if (!weekMap[key]) weekMap[key] = 0;
        }
      });
      const weeks = [];
      const now = new Date();
      for (let i = 5; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i * 7);
        const key = getISOWeekKey(d);
        if (!weeks.find(function(w) { return w.key === key; })) {
          weeks.push({ key: key, count: weekMap[key] || 0, label: getWeekLabel(d) });
        }
      }
      return weeks;
    }

    function computeStreaks() {
      const completedDays = {};
      todos.forEach(function(t) {
        if (t.done && t.completedAt) {
          const d = new Date(t.completedAt);
          const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
          completedDays[key] = true;
        }
      });
      history.forEach(function(h) {
        if (h.type === 'done' && h.ts) {
          const d = new Date(h.ts);
          const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
          completedDays[key] = true;
        }
      });
      const sortedDays = Object.keys(completedDays).sort();
      if (!sortedDays.length) return { current: 0, longest: 0 };
      let longestStreak = 1;
      let streak = 1;
      for (let i = 1; i < sortedDays.length; i++) {
        const prev = new Date(sortedDays[i - 1]);
        const curr = new Date(sortedDays[i]);
        const diffDays = Math.round((curr - prev) / 86400000);
        if (diffDays === 1) {
          streak++;
        } else {
          if (streak > longestStreak) longestStreak = streak;
          streak = 1;
        }
      }
      if (streak > longestStreak) longestStreak = streak;
      let currentStreak = 0;
      const today = new Date();
      const todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.getFullYear() + '-' + String(yesterday.getMonth() + 1).padStart(2, '0') + '-' + String(yesterday.getDate()).padStart(2, '0');
      if (completedDays[todayStr] || completedDays[yesterdayStr]) {
        const startDay = completedDays[todayStr] ? todayStr : yesterdayStr;
        currentStreak = 1;
        const checkDate = new Date(startDay);
        while (true) {
          checkDate.setDate(checkDate.getDate() - 1);
          const checkStr = checkDate.getFullYear() + '-' + String(checkDate.getMonth() + 1).padStart(2, '0') + '-' + String(checkDate.getDate()).padStart(2, '0');
          if (completedDays[checkStr]) { currentStreak++; } else { break; }
        }
      }
      return { current: currentStreak, longest: longestStreak };
    }

    function renderStatsInline(T) {
      const rate = computeCompletionRate();
      if (!rate.total) {
        document.getElementById('stats-inline-body').innerHTML = '<div class="empty-state">' + SVG.emptyStats + '<p class="empty-title">' + escHtml(T.statsNoData) + '</p><p class="empty-sub">' + escHtml(T.statsNoDataSub) + '</p></div>';
        return;
      }
      const circumference = 2 * Math.PI * 28;
      const offset = circumference - (rate.pct / 100) * circumference;
      const completionHtml = '<div class="stat-card">' +
        '<div class="stat-card-title">' + T.statsCompletionRate + '</div>' +
        '<div class="stat-completion">' +
          '<svg class="stat-ring" viewBox="0 0 64 64">' +
            '<circle class="stat-ring-bg" cx="32" cy="32" r="28" fill="none" stroke-width="5"/>' +
            '<circle class="stat-ring-fill" cx="32" cy="32" r="28" fill="none" stroke-width="5" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset + '" stroke-linecap="round" transform="rotate(-90 32 32)"/>' +
          '</svg>' +
          '<div>' +
            '<div class="stat-big-number">' + rate.pct + '%</div>' +
            '<div class="stat-sub">' + rate.done + ' / ' + rate.total + ' ' + T.statsCompleted + '</div>' +
          '</div>' +
        '</div></div>';
      const weeks = computeTasksPerWeek();
      let chartHtml = '';
      if (weeks.length) {
        const maxCount = Math.max.apply(null, weeks.map(function(w) { return w.count; }).concat([1]));
        const bars = weeks.map(function(w) {
          const h = w.count ? Math.max((w.count / maxCount) * 80, 4) : 2;
          return '<div class="stat-bar-col">' +
            '<span class="stat-bar-count">' + (w.count || '') + '</span>' +
            '<div class="stat-bar" style="height:' + h + 'px"></div>' +
            '<span class="stat-bar-label">' + w.label + '</span></div>';
        }).join('');
        chartHtml = '<div class="stat-card">' +
          '<div class="stat-card-title">' + T.statsTasksPerWeek + '</div>' +
          '<div class="stat-chart">' + bars + '</div></div>';
      }
      const streaks = computeStreaks();
      const streakHtml = '<div class="stat-card">' +
        '<div class="stat-card-title">' + T.statsStreak + '</div>' +
        '<div class="stat-streaks">' +
          '<div class="stat-streak-item">' +
            '<div class="stat-streak-number">' + streaks.current + '</div>' +
            '<div class="stat-streak-label">' + T.statsCurrentStreak + '</div>' +
            '<div class="stat-sub">' + T.statsStreakDays(streaks.current) + '</div>' +
          '</div>' +
          '<div class="stat-streak-item">' +
            '<div class="stat-streak-number">' + streaks.longest + '</div>' +
            '<div class="stat-streak-label">' + T.statsLongestStreak + '</div>' +
            '<div class="stat-sub">' + T.statsStreakDays(streaks.longest) + '</div>' +
          '</div>' +
        '</div></div>';
      document.getElementById('stats-inline-body').innerHTML = completionHtml + chartHtml + streakHtml;
    }

    function computeHeatmap() {
      const dayMap = {};
      function addDay(ts) {
        const d = new Date(ts);
        const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        dayMap[key] = (dayMap[key] || 0) + 1;
      }
      todos.forEach(function(todo) {
        if (todo.done && todo.completedAt) addDay(todo.completedAt);
      });
      return dayMap;
    }

    function renderHeatmap(T) {
      const dayMap = computeHeatmap();
      const WEEKS = 52;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      // Find Sunday of current week, then go back WEEKS weeks
      const dayOfWeek = today.getDay(); // 0=Sun
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - dayOfWeek - (WEEKS * 7));

      // Build columns (each column = one week, Sun→Sat)
      const cols = [];
      const monthLabels = [];
      let d = new Date(startDate);
      for (let w = 0; w <= WEEKS; w++) {
        const col = [];
        let monthLabelText = '';
        for (let day = 0; day < 7; day++) {
          const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
          const count = dayMap[key] || 0;
          const isFuture = d > today;
          col.push({ key, count: isFuture ? -1 : count, date: new Date(d) });
          // Mark month start for label
          if (day === 0 && d.getDate() <= 7) {
            monthLabelText = d.toLocaleDateString(T.lang || 'de', { month: 'short' });
          }
          d.setDate(d.getDate() + 1);
        }
        cols.push(col);
        monthLabels.push(monthLabelText);
      }

      // Reverse so today is on the left
      cols.reverse();
      monthLabels.reverse();

      const monthRow = monthLabels.map(function(label) {
        return '<div class="heatmap-month-label">' + (label || '') + '</div>';
      }).join('');

      const isDark = document.body.classList.contains('dark');
      const emptyColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
      const cellColors = [emptyColor, 'rgba(74,222,128,0.85)', 'rgba(163,230,53,0.9)', 'rgba(251,146,60,0.95)', 'rgba(239,68,68,1)'];
      const colsHtml = cols.map(function(col) {
        const cells = col.map(function(cell) {
          if (cell.count < 0) return '<div class="heatmap-cell" style="opacity:0.15"></div>';
          const level = cell.count === 0 ? 0 : cell.count === 1 ? 1 : cell.count <= 2 ? 2 : cell.count <= 4 ? 3 : 4;
          const label = cell.date.toLocaleDateString(T.lang || 'de', { day: 'numeric', month: 'short' }) + ': ' + cell.count + (cell.count === 1 ? ' ' + T.heatmapDay : ' ' + T.heatmapDays);
          return '<div class="heatmap-cell" style="background:' + cellColors[level] + '" title="' + label + '"></div>';
        }).join('');
        return '<div class="heatmap-col">' + cells + '</div>';
      }).join('');

      const legendHtml = '<div class="heatmap-legend">' +
        '<span class="heatmap-legend-label">' + T.heatmapLess + '</span>' +
        cellColors.map(function(c) {
          return '<div class="heatmap-legend-cell" style="background:' + c + '"></div>';
        }).join('') +
        '<span class="heatmap-legend-label">' + T.heatmapMore + '</span>' +
        '</div>';

      document.getElementById('heatmap-body').innerHTML =
        '<div class="stat-card" style="padding-bottom:10px">' +
          '<div class="stat-card-title">' + T.heatmapTitle + '</div>' +
          '<div class="heatmap-scroll" id="heatmap-scroll">' +
            '<div class="heatmap-month-labels">' + monthRow + '</div>' +
            '<div class="heatmap-grid">' + colsHtml + '</div>' +
          '</div>' +
          legendHtml +
        '</div>';
    }

    function isModalOpen() {
      return document.getElementById('kb-backdrop').classList.contains('show') ||
             document.getElementById('changelog-backdrop').classList.contains('show') ||
             document.getElementById('calday-backdrop').classList.contains('show') ||
             document.getElementById('template-picker-backdrop').classList.contains('show') ||
             document.getElementById('quick-actions-backdrop').classList.contains('show') ||
             (document.getElementById('pomo-overlay').style.display !== 'none' && !pomodoroMinimized) ||
             document.getElementById('focus-overlay').style.display !== 'none';
    }

    document.addEventListener('keydown', function(e) {
      const tag = document.activeElement && document.activeElement.tagName;
      const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

      // Esc works even in inputs — closes modals/search/pomodoro
      if (e.key === 'Escape') {
        if (document.getElementById('calday-backdrop').classList.contains('show')) { closeCalDay(); return; }
        if (document.getElementById('kb-backdrop').classList.contains('show')) { closeKB(); return; }
        if (document.getElementById('changelog-backdrop').classList.contains('show')) { closeChangelog(); return; }
        if (document.getElementById('template-picker-backdrop').classList.contains('show')) { closeTemplatePicker(); return; }
        if (document.getElementById('quick-actions-backdrop').classList.contains('show')) { closeQuickActions(); return; }
        if (document.getElementById('focus-overlay').style.display !== 'none') { exitFocusMode(); return; }
        if (document.getElementById('pomo-overlay').style.display !== 'none' && !pomodoroMinimized) { minimizePomodoro(); return; }
        if (isInput) { document.activeElement.blur(); return; }
        return;
      }

      // All other shortcuts only when no input is focused and no modal is open
      if (isInput || isModalOpen()) return;

      const key = e.key.toLowerCase();

      if (key === 'n') { e.preventDefault(); switchTab('new'); setTimeout(function() { document.getElementById('new-todo-input').focus(); }, 20); return; }
      if (key === 'f') { e.preventDefault(); switchTab('tasks'); setTimeout(function() { document.getElementById('search-input').focus(); }, 20); return; }
      if (key === 'd') { e.preventDefault(); toggleDark(); return; }
      if (key === 's') { e.preventDefault(); switchTab('history'); return; }
      if (key === '1') { e.preventDefault(); switchTab('tasks'); setFilter('open'); return; }
      if (key === '2') { e.preventDefault(); switchTab('tasks'); setFilter('done'); return; }
      if (key === '0') { e.preventDefault(); switchTab('tasks'); setFilter('all'); return; }
      if (key === 'z') { e.preventDefault(); performUndo(); return; }
      if (key === 'g') { e.preventDefault(); enterFocusMode(); return; }
      if (key === 'c') { e.preventDefault(); if (activeTab !== 'tasks') switchTab('tasks'); toggleCalendarView(); return; }
      if (key === 'b') { e.preventDefault(); const idx = boards.findIndex(b => b.id === currentBoardId); switchBoard(boards[(idx + 1) % boards.length].id); return; }
      if (e.key === '[') { e.preventDefault(); cycleTabs(-1); return; }
      if (e.key === ']') { e.preventDefault(); cycleTabs(1); return; }
      if (e.key === '?') { e.preventDefault(); if (typeof openHelpSection === 'function') openHelpSection('help-shortcuts'); else switchTab('help'); return; }
    });

    // ── Utilities ────────────────────────────────────────────────────────────
    function escHtml(str) {
      return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }
    function handleKey(e) { if (e.key === 'Enter') addTodo(); }

    // ── Render ───────────────────────────────────────────────────────────────
    function render() {
      const T = t();

      document.getElementById('app-title').textContent = T.appTitle;
      document.title = T.appTitle;
      document.getElementById('app-claim').textContent = T.claim;
      renderBoardBar();
      document.getElementById('header-badges').innerHTML = T.headerBadges.map(b => `<span class="header-badge">${b}</span>`).join('');
      document.getElementById('new-todo-input').placeholder = T.placeholder;
      document.getElementById('add-title').textContent = T.addTitle;
      document.getElementById('add-btn-label').textContent = T.addBtn;
      document.getElementById('tasks-title').textContent = T.tasksTitle;
      document.getElementById('board-bar-label').textContent = T.boardsLabel;
      document.getElementById('board-add-label').textContent = T.boardManagerAdd;
      document.getElementById('focus-mode-btn').title = T.focusModeBtn;
      document.getElementById('focus-mode-btn-label').textContent = T.focusModeBtn;
      updateCalendarToggleLabel();
      if (calendarViewActive) renderCalendar();
      updatePrioChips();
      document.getElementById('new-todo-note').placeholder = T.notePlaceholder;
      document.getElementById('new-note-preview-toggle').textContent = T.notePreviewToggle;
      document.getElementById('new-note-md-help').textContent = T.markdownHelp;
      document.getElementById('new-template-save-label').textContent = T.templateSaveLabel;
      document.getElementById('new-template-use-label').textContent = T.templateUseLabel;
      document.getElementById('new-template-update-label').textContent = T.templateUpdateLabel;
      document.getElementById('new-template-cancel-label').textContent = T.templateCancelLabel;
      document.getElementById('new-group-plan-label').textContent = T.newGroupPlanning;
      document.getElementById('new-field-priority-label').textContent = T.newFieldPriority;
      document.getElementById('new-field-schedule-label').textContent = T.newFieldSchedule;
      document.getElementById('new-field-recur-label').textContent = T.newFieldRecurrence;
      document.getElementById('new-field-note-label').textContent = T.newFieldNote;
      document.getElementById('new-field-tags-label').textContent = T.newFieldTags;
      document.getElementById('new-group-details-label').textContent = T.newGroupDetails;
      document.getElementById('new-group-templates-label').textContent = T.newGroupTemplates;
      const isTplEdit = editingTemplateId !== null;
      const newTplUpdate = document.getElementById('new-template-update-btn');
      const newTplCancel = document.getElementById('new-template-cancel-btn');
      if (newTplUpdate) newTplUpdate.style.display = isTplEdit ? '' : 'none';
      if (newTplCancel) newTplCancel.style.display = isTplEdit ? '' : 'none';
      if (isTplEdit && !newAdvancedOpen) newAdvancedOpen = true;
      setNewAdvancedOpen(newAdvancedOpen);
      document.getElementById('new-todo-due-label').textContent = T.formDate;
      document.getElementById('new-todo-time-label').textContent = T.formTime;
      updateFieldLabels();
      populateRecurSelect('new', T);
      document.getElementById('history-title').textContent = T.historyTitle;
      document.getElementById('io-title').textContent = T.ioTitle;
      renderTagManager();
      renderBoardManager();
      document.getElementById('export-label').textContent = T.exportLabel;
      document.getElementById('export-csv-label').textContent = T.exportCsvLabel;
      document.getElementById('import-label').textContent = T.importLabel;
      renderTemplateManager();

      document.getElementById('view-btn-tasks').innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> <span>' + escHtml(T.viewTasks) + '</span>';
      document.getElementById('view-btn-notes').innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> <span>' + escHtml(T.viewNotes) + '</span>';
      document.getElementById('view-btn-calendar').innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> <span>' + escHtml(T.calendarBtn) + '</span>';
      document.getElementById('view-btn-tasks').setAttribute('aria-label', T.viewTasks);
      document.getElementById('view-btn-notes').setAttribute('aria-label', T.viewNotes);
      document.getElementById('view-btn-calendar').setAttribute('aria-label', T.calendarBtn);
      const filterLabels = [T.filterOpen, T.filterDone];
      document.querySelectorAll('#filters .filter-btn').forEach((b, i) => { b.textContent = filterLabels[i]; });
      const notesInput = document.getElementById('notes-compose-input');
      if (notesInput) notesInput.placeholder = T.notesPlaceholder;
      const notesAddBtn = document.getElementById('notes-add-btn');
      if (notesAddBtn) notesAddBtn.textContent = T.notesAdd;
      const notesPreviewToggle = document.getElementById('notes-compose-preview-toggle');
      if (notesPreviewToggle) notesPreviewToggle.textContent = T.notesPreviewToggle;
      const notesMdHelp = document.getElementById('notes-compose-md-help');
      if (notesMdHelp) notesMdHelp.textContent = T.markdownHelp;
      document.getElementById('sort-label').textContent = T.sortLabel;
      const sortLabels = { manual: T.sortManual, priority: T.sortPriority, dueDate: T.sortDueDate, created: T.sortCreated };
      document.getElementById('sort-btn-label').textContent = sortLabels[currentSort] || T.sortManual;
      document.querySelectorAll('#sort-ac .cat-ac-item').forEach(function(el) {
        const v = el.getAttribute('data-sort');
        el.textContent = sortLabels[v] || v;
        el.classList.toggle('active', v === currentSort);
      });
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.placeholder = T.searchPlaceholder;

      // Category tags
      const allTags = getAllTags();
      if (currentCategory && !allTags.includes(currentCategory)) { currentCategory = ''; }
      document.getElementById('new-todo-cat').placeholder = T.catPlaceholder;
      document.getElementById('tab-label-new').textContent = T.tabNew;
      document.getElementById('tab-label-tasks').textContent = T.tabTasks;
      document.getElementById('tab-label-history').textContent = T.tabHistory;
      document.getElementById('tab-label-help').textContent = T.tabHelp;
      document.getElementById('tab-label-manage').textContent = T.tabManage;
      renderHelpPanel(T);
      document.getElementById('delete-all-label').textContent = T.deleteAllLabel;
      document.getElementById('theme-setting-label').textContent = T.themeSettingLabel;
      document.getElementById('theme-setting-sub').textContent = T.themeSettingSub;
      renderSettingsThemeSwatches();
      document.getElementById('darkmode-setting-label').textContent = T.darkModeSettingLabel;
      document.getElementById('darkmode-setting-sub').textContent = T.darkModeSettingSub;
      document.getElementById('dm-chip-auto').textContent = T.darkModeAuto;
      document.getElementById('dm-chip-dark').textContent = T.darkModeDark;
      document.getElementById('dm-chip-light').textContent = T.darkModeLight;
      document.getElementById('notify-setting-label').textContent = T.notifySettingLabel;
      document.getElementById('notify-setting-sub').textContent = T.notifySettingSub;
      document.getElementById('task-colors-label').textContent = T.taskColorsLabel;
      document.getElementById('task-colors-sub').textContent = T.taskColorsSub;
      document.getElementById('export-reminder-label').textContent = T.exportReminderLabel;
      document.getElementById('export-reminder-sub').textContent = T.exportReminderSub;
      document.getElementById('export-reminder-interval-label').textContent = T.exportReminderInterval;
      document.getElementById('export-reminder-toggle').checked = exportReminderEnabled;
      document.getElementById('export-reminder-interval-row').style.display = exportReminderEnabled ? '' : 'none';
      document.querySelectorAll('.export-interval-btn').forEach(b =>
        b.classList.toggle('active', parseInt(b.dataset.days) === exportReminderDays));
      applySettingsToggles();
      renderColorPicker('new-color-picker', newTaskColor, function(c) { newTaskColor = c; });
      const catFilterRow = document.getElementById('cat-filter-row');
      catFilterRow.style.display = allTags.length ? '' : 'none';
      renderCatFilterDD(T, allTags);

      // Stats + progress
      const doneCount = todos.filter(t => t.done).length;
      const total = todos.length;
      const pct = total ? Math.round((doneCount / total) * 100) : 0;
      const statsRow = document.getElementById('stats-row');
      if (total) {
        statsRow.innerHTML = `
          <div class="stats-row">
            <button class="clear-all-btn" onclick="clearAllTodos()">${T.clearAllBtn}</button>
            <div style="display:flex;align-items:center;gap:10px">
              <span class="stats-text">${T.stats(doneCount, total)}</span>
              <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
            </div>
          </div>`;
      } else {
        statsRow.innerHTML = '';
      }

      // Todo list
      const prioLabel = { high: T.priorityHigh, medium: T.priorityMedium, low: T.priorityLow };
      const dueLabel = { 'due-overdue': T.metaOverdue, 'due-today': T.metaDueToday, 'due-future': T.metaDue };
      const list = document.getElementById('todo-list');
      const visible = filteredTodos();

      function renderTodoItem(todo) {
        const dc = todo.dueDate && !todo.done ? getDueClass(todo.dueDate) : '';
        const isRecurFuture = !todo.done && todo.recurrence && dc === 'due-future';
        return `
          <div class="swipe-wrap" data-swipe-id="${todo.id}">
            <div class="swipe-action left">${SVG.check} &nbsp;${T.metaDone}</div>
            <div class="swipe-action right">${SVG.trash} &nbsp;${T.deleteTitle}</div>
            <div class="todo-item${todo.done ? ' done' : ''}${dc === 'due-overdue' ? ' overdue' : ''}${isRecurFuture ? ' recurring-future' : ''}" data-id="${todo.id}"
                 ${taskColorsEnabled && todo.color && dc !== 'due-overdue' ? `style="box-shadow: inset 3px 0 0 ${todo.color}"` : ''}
                 ${currentSort === 'manual' ? 'draggable="true"' : ''}
                 ${currentSort === 'manual' ? `ondragstart="onDragStart(event,${todo.id})"
                 ondragend="onDragEnd(event)"
                 ondragover="onDragOver(event,${todo.id})"
                 ondrop="onDrop(event,${todo.id})"` : ''}>
              ${currentSort === 'manual' ? `<span class="drag-handle">${SVG.grip}</span>` : ''}
              <label class="checkbox-wrap">
                <input type="checkbox" ${todo.done ? 'checked' : ''} onchange="toggleTodo(${todo.id})" />
                <span class="checkbox-box"><span class="checkbox-check">${SVG.check}</span></span>
              </label>
              <div class="todo-content">
                <div class="todo-text-wrap">
                  <div class="todo-text">${escHtml(todo.text)}</div>
                  <div class="todo-meta">${
                    todo.done && todo.completedAt
                      ? T.metaDone + ': ' + formatDate(todo.completedAt)
                      : T.metaCreated + ': ' + formatDate(todo.created)
                  }</div>
                  ${todo.priority || dc || todo.recurrence || getTaskElapsed(todo) ? `<div class="todo-badges-row">${todo.priority ? `<span class="prio-badge" data-p="${todo.priority}">${prioLabel[todo.priority]}</span>` : ''}${isRecurFuture ? `<span class="recur-scheduled-badge">${T.recurScheduled}</span>` : ''}${dc ? `<span class="todo-due ${dc}">${dueLabel[dc]}: ${formatDueDate(todo.dueDate)}</span>` : ''}${todo.recurrence ? `<span class="recur-badge">${SVG.repeat} ${recurrenceLabel(todo.recurrence)}</span>` : ''}${getTaskElapsed(todo) ? `<span class="timer-badge${todo.timerStarted ? ' running' : ''}" data-task-id="${todo.id}">${SVG.stopwatch} <span class="timer-value">${formatElapsed(getTaskElapsed(todo))}</span></span>` : ''}</div>` : ''}
                  ${todo.categories && todo.categories.length ? `<div class="todo-cat-row">${todo.categories.map(function(c) { return `<span class="cat-badge todo-cat-filter" style="${catStyle(c)}" data-tag="${escHtml(c)}">#${escHtml(c)}</span>`; }).join(' ')}</div>` : ''}
                  ${todo.note ? `<div class="todo-note">${renderMarkdownSafe(todo.note)}</div>` : ''}
                  ${todo.subtasks && todo.subtasks.length ? `<div class="subtask-list">${todo.subtasks.map((st, si) => `<div class="subtask-item${st.done ? ' done' : ''}" onclick="toggleSubtask(${todo.id},${si})"><span class="subtask-check"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span class="subtask-text">${escHtml(st.text)}</span></div>`).join('')}</div>` : ''}
                </div>
                <div class="todo-bottom-row">
                  ${todo.subtasks && todo.subtasks.length ? `<div class="todo-actions-row"><span class="subtask-progress">${T.subtaskProgress(todo.subtasks.filter(s=>s.done).length, todo.subtasks.length)}</span></div>` : ''}
                  <div class="todo-actions">
                    ${!todo.done ? `<button class="action-btn${todo.timerStarted ? ' timer-active' : ''}" title="${todo.timerStarted ? T.timeTrackStop : T.timeTrackStart}" onclick="toggleTaskTimer(${todo.id})" aria-label="${T.timeTrackLabel}">${SVG.stopwatch}<span>${todo.timerStarted ? T.timeTrackShortStop : T.timeTrackShortStart}</span></button>` : ''}
                    ${!todo.done ? `<button class="action-btn${pomodoroState && pomodoroState.taskId === todo.id ? ' pomo-active' : ''}" title="${T.pomodoroStart}" onclick="startPomodoro(${todo.id})">${SVG.timer}<span>Pomodoro</span></button>` : ''}
                    <button class="action-btn" title="${T.editTitle}" onclick="startEdit(${todo.id})">${SVG.edit}<span>${T.editTitle}</span></button>
                    <button class="action-btn danger" title="${T.deleteTitle}" onclick="deleteTodo(${todo.id})">${SVG.trash}<span>${T.deleteTitle}</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      }

      if (!visible.length) {
        list.innerHTML = `<div class="empty-state">${SVG.inbox}<p class="empty-title">${T.emptyTodos}</p><p class="empty-sub">${T.emptyTodosSub}</p></div>`;
      } else {
        // Split into active and scheduled (recurring-future) tasks
        const active = [];
        const scheduled = [];
        visible.forEach(todo => {
          const dc = todo.dueDate && !todo.done ? getDueClass(todo.dueDate) : '';
          if (!todo.done && todo.recurrence && dc === 'due-future') {
            scheduled.push(todo);
          } else {
            active.push(todo);
          }
        });

        let html = '';

        if (scheduled.length) {
          html += `<div class="scheduled-section">
            <button class="scheduled-header" onclick="toggleScheduledSection()">
              <svg class="scheduled-chevron${scheduledSectionOpen ? ' open' : ''}" id="scheduled-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              <span>${T.scheduledSection}</span>
              <span class="scheduled-count">${scheduled.length}</span>
            </button>
            <div class="scheduled-body" id="scheduled-body" style="${scheduledSectionOpen ? '' : 'display:none'}">
              ${scheduled.map(renderTodoItem).join('')}
            </div>
          </div>`;
        }

        html += active.map(renderTodoItem).join('');

        list.innerHTML = html;
      }

      // Stats inline section
      const statsToggle = document.getElementById('stats-section-toggle');
      const statsCol = document.getElementById('stats-collapsible');
      const statsOpen = statsCol.classList.contains('open');
      statsToggle.innerHTML = `<span class="scheduled-chevron${statsOpen ? ' open' : ''}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span> ${T.statsHeading}`;
      renderStatsInline(T);

      // Heatmap section
      const heatmapToggle = document.getElementById('heatmap-section-toggle');
      const heatmapCol = document.getElementById('heatmap-collapsible');
      const heatmapOpen = heatmapCol.classList.contains('open');
      heatmapToggle.innerHTML = `<span class="scheduled-chevron${heatmapOpen ? ' open' : ''}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span> ${T.heatmapTitle}`;
      renderHeatmap(T);

      // Archive section (completed tasks)
      const archived = todos.filter(t => t.done);
      const archiveToggle = document.getElementById('archive-section-toggle');
      const archiveCol = document.getElementById('archive-collapsible');
      const archiveOpen = archiveCol.classList.contains('open');
      archiveToggle.innerHTML = `<span class="scheduled-chevron${archiveOpen ? ' open' : ''}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span> ${T.archiveSection} <span class="board-count">${archived.length}</span>`;
      const aList = document.getElementById('archive-list');
      if (!archived.length) {
        aList.innerHTML = `<div class="empty-state">${SVG.emptyArchive}<p class="empty-title">${escHtml(T.archiveEmpty)}</p><p class="empty-sub">${escHtml(T.archiveEmptySub)}</p></div>`;
      } else {
        aList.innerHTML = archived.map(todo => `
          <div class="archive-item">
            <div class="archive-item-content">
              <div class="archive-item-text">${escHtml(todo.text)}</div>
              <div class="archive-item-meta">${todo.completedAt ? T.metaDone + ': ' + formatDate(todo.completedAt) : T.metaCreated + ': ' + formatDate(todo.created)}</div>
              ${todo.timeSpent ? `<div class="todo-badges-row"><span class="timer-badge">${SVG.stopwatch} <span class="timer-value">${formatElapsed(todo.timeSpent)}</span></span></div>` : ''}
              ${(todo.categories || []).length ? `<div class="todo-cat-row">${(todo.categories || []).map(c => `<span class="cat-badge" style="${catStyle(c)}">#${escHtml(c)}</span>`).join(' ')}</div>` : ''}
            </div>
            <div class="archive-item-actions">
              <button type="button" class="action-btn" title="${T.archiveRestore}" onclick="restoreTask(${todo.id})" aria-label="${T.archiveRestore}">${SVG.repeat}</button>
              <button type="button" class="action-btn danger" title="${T.archiveDeletePermanent}" onclick="deleteArchived(${todo.id})" aria-label="${T.archiveDeletePermanent}">${SVG.trash}</button>
            </div>
          </div>`).join('');
      }

      // Activity Log section
      const logToggle = document.getElementById('log-section-toggle');
      const logCol = document.getElementById('log-collapsible');
      const logOpen = logCol.classList.contains('open');
      logToggle.innerHTML = `<span class="scheduled-chevron${logOpen ? ' open' : ''}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span> ${T.archiveLogSection} <span class="board-count">${history.length}</span>`;
      const hList = document.getElementById('history-list');
      if (!history.length) {
        hList.innerHTML = `<div class="history-empty">${SVG.emptyHistory}<p class="empty-title">${T.emptyHistory}</p><p class="empty-sub">${T.emptyHistorySub}</p></div>`;
      } else {
        const dotClass = { done:'h-dot-done', created:'h-dot-created', deleted:'h-dot-deleted', undone:'h-dot-undone', recurring:'h-dot-recurring' };
        const labelMap = { done: T.badgeDone, created: T.badgeCreated, deleted: T.badgeDeleted, undone: T.badgeUndone, recurring: T.badgeRecurring };
        hList.innerHTML = history.map(h => `
          <div class="history-item">
            <span class="h-dot ${dotClass[h.type] || ''}"></span>
            <span class="h-label">${labelMap[h.type] || h.type}</span>
            <span class="h-text">${escHtml(h.text)}</span>
            <span class="h-time">${formatDate(h.ts)}</span>
          </div>`).join('');
      }
      const hUsage = document.getElementById('history-usage');
      if (history.length) {
        const hPct = Math.min(Math.round((history.length / 100000) * 100), 100);
        hUsage.innerHTML = `
          <div class="stats-row" style="margin-top:8px">
            <button class="clear-all-btn" onclick="clearHistory()">${T.clearLabel}</button>
            <div style="display:flex;align-items:center;gap:10px">
              <span class="stats-text">${T.historyUsage(history.length.toLocaleString())}</span>
              <div class="progress-bar"><div class="progress-fill" style="width:${hPct}%;background:${hPct > 80 ? 'var(--danger)' : 'var(--accent)'}"></div></div>
            </div>
          </div>`;
      } else {
        hUsage.innerHTML = '';
      }
      renderPomo();
      if (focusModeActive) renderFocusMode();
      minuteSignature = computeMinuteSignature();
    }

    // ── iOS Install Banner ────────────────────────────────────────────────────
    // ── Tip of the day ───────────────────────────────────────────────────────
    let lastTipIndex = -1;
    function showTip() {
      const T = t();
      const tips = T.tips || [];
      if (!tips.length) return;
      let idx;
      do { idx = Math.floor(Math.random() * tips.length); } while (idx === lastTipIndex && tips.length > 1);
      lastTipIndex = idx;
      const label = document.getElementById('tip-label');
      const text = document.getElementById('tip-text');
      if (label) label.textContent = T.tipLabel || 'Tipp';
      if (text) text.textContent = tips[idx];
    }

    function toggleExportReminder() {
      exportReminderEnabled = !exportReminderEnabled;
      document.getElementById('export-reminder-toggle').checked = exportReminderEnabled;
      document.getElementById('export-reminder-interval-row').style.display = exportReminderEnabled ? '' : 'none';
      save(); haptic('light');
    }
    function setExportReminderDays(days) {
      exportReminderDays = days;
      document.querySelectorAll('.export-interval-btn').forEach(b =>
        b.classList.toggle('active', parseInt(b.dataset.days) === days));
      save(); haptic('light');
    }

    // ── Export Reminder ───────────────────────────────────────────────────────
    function checkExportReminder() {
      const banner = document.getElementById('export-reminder-banner');
      const textEl = document.getElementById('export-reminder-banner-text');
      const btnEl = document.getElementById('export-reminder-banner-btn');
      if (!banner || !textEl || !btnEl) return;
      if (!exportReminderEnabled) { banner.style.display = 'none'; return; }
      const T = t();
      const last = loadUiSettings().lastExport;
      const daysSince = last ? Math.floor((Date.now() - last) / 86400000) : null;
      btnEl.textContent = T.exportLabel;
      if (daysSince === null) {
        textEl.textContent = T.exportReminderNever;
        banner.style.display = '';
      } else if (daysSince >= exportReminderDays) {
        textEl.textContent = T.exportReminderToast(daysSince);
        banner.style.display = '';
      } else {
        banner.style.display = 'none';
      }
    }

    function setupIOSBanner() {
      if (customElements.get('pwa-install') && document.getElementById('pwa-install')) {
        const banner = document.getElementById('ios-banner');
        if (banner) banner.style.display = 'none';
        return;
      }
      const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
      const isSafari = /safari/i.test(navigator.userAgent) && !/chrome|crios|fxios/i.test(navigator.userAgent);
      const isStandalone = window.navigator.standalone === true;
      const dismissed = loadUiSettings().iosBannerDismissed;
      if (!isIOS || !isSafari || isStandalone || dismissed) return;
      const banner = document.getElementById('ios-banner');
      const T = t();
      document.getElementById('ios-banner-title').textContent = T.iosBannerTitle;
      document.getElementById('ios-banner-hint').innerHTML = T.iosBannerHint;
      banner.style.display = 'flex';
    }
    // ── iOS PWA: hide tab-bar when keyboard opens ─────────────────────────────
    function setupIOSTabBarKeyboardPin() {
      const tabBar = document.getElementById('tab-bar');
      if (!tabBar) return;
      const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      if (!isIOS) return;
      let keyboardOpen = false;
      let focusOutTimer = null;

      function hasKeyboardTarget() {
        const active = document.activeElement;
        return !!(active && active.matches('input, textarea, [contenteditable]') && !active.readOnly && !active.disabled);
      }

      function setKeyboard(open) {
        keyboardOpen = open;
        tabBar.classList.toggle('keyboard-open', open);
      }

      function syncKeyboard() {
        const viewport = window.visualViewport;
        const diff = viewport ? window.innerHeight - viewport.height : 0;
        const keyboardFromViewport = diff > 120;
        const keyboardFromFocus = hasKeyboardTarget() && (!viewport || diff > 60);
        setKeyboard(keyboardFromViewport || keyboardFromFocus);
      }

      // Primary: input focus events (most reliable on iOS)
      document.addEventListener('focusin', function(e) {
        if (e.target.matches('input, textarea, [contenteditable]')) {
          clearTimeout(focusOutTimer);
          syncKeyboard();
        }
      });
      document.addEventListener('focusout', function() {
        // Debounce: iOS keyboard close has ~1s delay
        focusOutTimer = setTimeout(syncKeyboard, 150);
      });

      // Fallback: visualViewport for edge cases (e.g. autocomplete selection)
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', syncKeyboard);
        window.visualViewport.addEventListener('scroll', syncKeyboard);
      }
      window.addEventListener('orientationchange', function() { setTimeout(syncKeyboard, 80); });
      syncKeyboard();
    }

    function setupPreventDoubleTapZoomOnNavControls() {
      let lastTapTs = 0;
      let lastTapEl = null;
      document.addEventListener('touchend', function(e) {
        const target = e.target.closest('.tab-btn, .ctrl-btn');
        if (!target) return;
        const now = Date.now();
        if (lastTapEl === target && (now - lastTapTs) < 350) {
          e.preventDefault();
        }
        lastTapTs = now;
        lastTapEl = target;
      }, { passive: false });
    }
    function dismissIOSBanner() {
      safeSetItem('flux_ios_banner_dismissed', '1');
      const banner = document.getElementById('ios-banner');
      banner.style.transition = 'opacity 0.25s, transform 0.25s';
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(16px)';
      setTimeout(() => banner.style.display = 'none', 260);
    }

    // ── PWA Setup ────────────────────────────────────────────────────────────
    function setupPWA() {
      if ('serviceWorker' in navigator && location.protocol !== 'file:') {
        const swUrl = new URL('./service-worker.js', window.location.href);
        const swScope = new URL('./', window.location.href).pathname;
        navigator.serviceWorker.register(swUrl.pathname, {
          scope: swScope,
          updateViaCache: 'none'
        }).catch(() => {});
      }
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist();
      }
    }

    // ── Mobile Quick Actions (long-press) ───────────────────────────────────
    (function() {
      const HOLD_MS = 430;
      let holdTimer = null;
      let startX = 0;
      let startY = 0;
      let targetId = null;

      function clearHold() {
        if (holdTimer) {
          clearTimeout(holdTimer);
          holdTimer = null;
        }
        targetId = null;
      }

      document.addEventListener('touchstart', function(e) {
        if (touchDragActive || quickActionsOpen) return;
        if (e.target.closest('.drag-handle, input, textarea, button, a, .action-btn, .checkbox-wrap')) return;
        const wrap = e.target.closest('.swipe-wrap');
        if (!wrap) return;
        const id = parseInt(wrap.dataset.swipeId, 10);
        if (!id) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        targetId = id;
        holdTimer = setTimeout(function() {
          holdTimer = null;
          if (touchDragActive || quickActionsOpen || targetId === null) return;
          haptic('light');
          openQuickActions(targetId);
        }, HOLD_MS);
      }, { passive: true });

      document.addEventListener('touchmove', function(e) {
        if (!holdTimer) return;
        const dx = Math.abs(e.touches[0].clientX - startX);
        const dy = Math.abs(e.touches[0].clientY - startY);
        if (dx > 10 || dy > 10) clearHold();
      }, { passive: true });

      document.addEventListener('touchend', clearHold, { passive: true });
      document.addEventListener('touchcancel', clearHold, { passive: true });
      document.addEventListener('contextmenu', function(e) {
        if (!quickActionsOpen) return;
        e.preventDefault();
      });
    })();

    // ── Swipe Gestures ─────────────────────────────────────────────────────
    (function() {
      const THRESHOLD = 90;
      let startX = 0, startY = 0, swiping = false, swipeItem = null, swipeWrap = null, dx = 0;

      document.addEventListener('touchstart', function(e) {
        if (touchDragActive || quickActionsOpen) return;
        if (e.target.closest('.drag-handle')) return;
        const wrap = e.target.closest('.swipe-wrap');
        if (!wrap) return;
        const item = wrap.querySelector('.todo-item');
        if (!item) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        swiping = false;
        swipeWrap = wrap;
        swipeItem = item;
        dx = 0;
        item.style.transition = 'none';
      }, { passive: true });

      document.addEventListener('touchmove', function(e) {
        if (touchDragActive) return;
        if (quickActionsOpen) { resetSwipe(); return; }
        if (!swipeItem) return;
        const cx = e.touches[0].clientX;
        const cy = e.touches[0].clientY;
        dx = cx - startX;
        const dy = cy - startY;
        if (!swiping && Math.abs(dy) > Math.abs(dx)) { swipeItem = null; return; }
        if (Math.abs(dx) > 10) swiping = true;
        if (!swiping) return;
        swipeItem.style.transform = 'translateX(' + dx + 'px)';
        const leftAction = swipeWrap.querySelector('.swipe-action.left');
        const rightAction = swipeWrap.querySelector('.swipe-action.right');
        leftAction.classList.toggle('visible', dx > 40);
        rightAction.classList.toggle('visible', dx < -40);
        leftAction.style.width = Math.max(0, dx) + 'px';
        rightAction.style.width = Math.max(0, -dx) + 'px';
      }, { passive: true });

      document.addEventListener('touchend', function() {
        if (touchDragActive) return;
        if (quickActionsOpen) { resetSwipe(); return; }
        if (!swipeItem || !swiping) { resetSwipe(); return; }
        const id = parseInt(swipeWrap.dataset.swipeId);
        if (dx > THRESHOLD) {
          swipeItem.style.transition = 'transform 0.25s';
          swipeItem.style.transform = 'translateX(100%)';
          setTimeout(function() { toggleTodo(id); }, 200);
        } else if (dx < -THRESHOLD) {
          swipeItem.style.transition = 'transform 0.25s';
          swipeItem.style.transform = 'translateX(-100%)';
          setTimeout(function() { deleteTodo(id); }, 200);
        } else {
          swipeItem.style.transition = 'transform 0.2s';
          swipeItem.style.transform = '';
          const left = swipeWrap.querySelector('.swipe-action.left');
          const right = swipeWrap.querySelector('.swipe-action.right');
          left.classList.remove('visible'); left.style.width = '';
          right.classList.remove('visible'); right.style.width = '';
        }
        swipeItem = null; swipeWrap = null; swiping = false;
      }, { passive: true });

      function resetSwipe() {
        if (swipeItem) {
          swipeItem.style.transition = '';
          swipeItem.style.transform = '';
        }
        swipeItem = null; swipeWrap = null; swiping = false;
      }
    })();

    // ── Pull to Refresh ────────────────────────────────────────────────────
    (function() {
      const indicator = document.getElementById('pull-indicator');
      const spinner = indicator.querySelector('.pull-spinner');
      const arrow = indicator.querySelector('.pull-arrow');
      const THRESHOLD = 80;
      let startY = 0;
      let active = false;
      let refreshing = false;
      document.addEventListener('touchstart', function(e) {
        if (refreshing || touchDragActive) return;
        const appScroll = document.querySelector('.app');
        if ((appScroll ? appScroll.scrollTop : window.scrollY) <= 0) {
          startY = e.touches[0].clientY;
          active = true;
          spinner.style.transition = 'none';
        }
      }, { passive: true });

      document.addEventListener('touchmove', function(e) {
        if (!active || refreshing) return;
        const dy = e.touches[0].clientY - startY;
        const appScroll = document.querySelector('.app');
        if (dy < 0 || (appScroll ? appScroll.scrollTop : window.scrollY) > 0) { active = false; return; }
        const progress = Math.min(dy / THRESHOLD, 1);
        const translateY = Math.min(dy * 0.35, 44);
        spinner.style.opacity = progress;
        spinner.style.transform = 'translateY(' + translateY + 'px) scale(' + (0.6 + progress * 0.4) + ')';
        arrow.style.transform = 'rotate(' + (progress * 180) + 'deg)';
      }, { passive: true });

      document.addEventListener('touchend', function() {
        if (!active || refreshing) return;
        active = false;
        const opacity = parseFloat(spinner.style.opacity) || 0;
        if (opacity >= 1) {
          refreshing = true;
          haptic('medium');
          spinner.style.transition = 'transform 0.3s';
          spinner.style.transform = 'translateY(16px) scale(1)';
          indicator.classList.add('refreshing');
          setTimeout(function() { location.reload(); }, 600);
        } else {
          spinner.style.transition = 'opacity 0.25s, transform 0.25s';
          spinner.style.opacity = '0';
          spinner.style.transform = 'translateY(-50px) scale(0.6)';
        }
      }, { passive: true });
    })();

    function computeMinuteSignature() {
      return [
        currentFilter,
        currentSort,
        currentCategory,
        searchQuery,
        activeTab,
        todos.map(function(td) {
          const dueStatus = (!td.done && td.dueDate) ? getDueClass(td.dueDate) : '';
          return [
            td.id,
            td.done ? 1 : 0,
            td.dueDate || '',
            dueStatus,
            td.timerStarted ? 1 : 0,
            td.timeSpent || 0
          ].join(':');
        }).join('|')
      ].join('||');
    }
    function minuteTick() {
      checkDueNotifications();
      const sig = computeMinuteSignature();
      if (sig !== minuteSignature) {
        minuteSignature = sig;
        render();
      }
    }

    // ── Init ─────────────────────────────────────────────────────────────────
    async function bootstrapApp() {
      const indexedSnapshot = await hydrateStorageFromIndexedDb();
      const loadResult = load(indexedSnapshot);
      if (indexedSnapshot) clearAppStateLocalMirror();
      if (!indexedSnapshot || (loadResult && loadResult.usedLegacyMigration)) {
        scheduleIndexedDbPersist();
      }
      const starterContentChanged =
        translateStarterBoardContent('de', lang) ||
        translateStarterBoardContent('en', lang);
      if (starterContentChanged) save();
      setupIOSTabBarKeyboardPin();
      setupPreventDoubleTapZoomOnNavControls();
      applyDark();
      applyTheme(currentTheme);
      applyLang();
      applyNotifyIcon();
      setupIOSBanner();
      showTip();
      render();
      minuteSignature = computeMinuteSignature();
      updateTimeTrackTicker();
      switchTab(activeTab);
      checkDueNotifications();
      setInterval(minuteTick, 60000);
      document.getElementById('new-todo-note').addEventListener('input', function() {
        updateNewNotePreview();
      });
      document.getElementById('new-todo-due').addEventListener('focus', function() {
        if (!this.value) this.value = formatDateLocalISO(new Date());
        updateFieldLabels();
      });
      document.getElementById('new-todo-time').addEventListener('focus', function() {
        if (!this.value) {
          const n = new Date();
          this.value = String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
        }
        updateFieldLabels();
      });
      document.getElementById('new-todo-due').addEventListener('change', updateFieldLabels);
      document.getElementById('new-todo-time').addEventListener('change', updateFieldLabels);
      document.addEventListener('focusin', function(e) {
        if (e.target.matches('.due-edit-input[type="date"]') && !e.target.value) {
          e.target.value = formatDateLocalISO(new Date());
        }
        if (e.target.matches('.due-edit-input[type="time"]') && !e.target.value) {
          const n = new Date();
          e.target.value = String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
        }
      });
      document.addEventListener('click', function(e) {
        const tag = e.target.closest('.todo-cat-filter');
        if (!tag) return;
        const val = tag.dataset.tag || '';
        if (val) setCategoryFilter(val);
      });
      document.addEventListener('click', function(e) {
        const dd = document.getElementById('sort-dropdown');
        if (dd && !dd.contains(e.target)) {
          document.getElementById('sort-ac').classList.remove('open');
        }
      });

      // ── Quick-Add via URL parameter ─────────────────────────────────────────
      (function() {
        const params = new URLSearchParams(window.location.search);
        let usedParams = false;
        const tab = params.get('tab');
        if (tab && ['new', 'tasks', 'history', 'manage', 'help'].includes(tab)) {
          switchTab(tab);
          usedParams = true;
          if (tab === 'new') {
            setTimeout(function() {
              const input = document.getElementById('new-todo-input');
              if (input) input.focus();
            }, 20);
          }
        }
        const addText = params.get('add');
        if (addText) {
          usedParams = true;
          switchTab('new');
          const input = document.getElementById('new-todo-input');
          if (input) { input.value = addText.trim(); input.focus(); updateFieldLabels(); }
          const note = params.get('note');
          if (note) {
            const n = document.getElementById('new-todo-note');
            if (n) {
              n.value = note.trim();
              updateNewNotePreview();
            }
          }
          const prio = params.get('priority');
          if (prio) { const p = prio.toLowerCase(); if (['high','medium','low'].includes(p)) { newPriority = p; updatePrioChips(); } }
          const due = params.get('due');
          if (due) { const d = document.getElementById('new-todo-due'); if (d) { d.value = due; updateFieldLabels(); } }
          if (note || prio || due) setNewAdvancedOpen(true);
        }
        if (usedParams) window.history.replaceState({}, '', window.location.pathname);
      })();
    }
    // Register as early as possible so browsers and PWA auditors detect the
    // service worker before the async app bootstrap finishes.
    setupPWA();

    bootstrapApp().catch(function() {
      const loadResult = load();
      if (loadResult && loadResult.usedLegacyMigration) save();
      const starterContentChanged =
        translateStarterBoardContent('de', lang) ||
        translateStarterBoardContent('en', lang);
      if (starterContentChanged) save();
      setupIOSTabBarKeyboardPin();
      setupPreventDoubleTapZoomOnNavControls();
      applyDark();
      applyTheme(currentTheme);
      applyLang();
      applyNotifyIcon();
      setupIOSBanner();
      showTip();
      render();
      minuteSignature = computeMinuteSignature();
      updateTimeTrackTicker();
      switchTab(activeTab);
      checkDueNotifications();
      setInterval(minuteTick, 60000);
    });
