    // ── Persistence ──────────────────────────────────────────────────────────
    function activateBoard(boardId) {
      currentBoardId = boardId;
      const board = boards.find(b => b.id === boardId);
      if (board) { todos = board.todos; history = board.history; }
    }
    const STORAGE_DB_NAME = 'flux-db';
    const STORAGE_DB_VERSION = 1;
    const STORAGE_DB_STORE = 'kv';
    const APP_STATE_STORAGE_KEYS = [
      'boards',
      'currentBoardId',
      'templates_v1',
      'flux_notes'
    ];
    const UI_STORAGE_KEYS = [
      'lang',
      'theme',
      'notify',
      'taskColors',
      'sort',
      'catFilter',
      'activeTab',
      'exportReminder',
      'exportReminderDays',
      'dark',
      'lastExport',
      'flux_ios_banner_dismissed'
    ];
    const STORAGE_KEYS = APP_STATE_STORAGE_KEYS.concat(UI_STORAGE_KEYS);
    let storageDbPromise = null;
    let indexedDbReady = false;
    let indexedDbPersistScheduled = false;
    let indexedDbPersistChain = Promise.resolve();
    function openStorageDb() {
      if (!('indexedDB' in window)) return Promise.resolve(null);
      if (storageDbPromise) return storageDbPromise;
      storageDbPromise = new Promise(function(resolve) {
        try {
          const request = indexedDB.open(STORAGE_DB_NAME, STORAGE_DB_VERSION);
          request.onupgradeneeded = function() {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORAGE_DB_STORE)) {
              db.createObjectStore(STORAGE_DB_STORE, { keyPath: 'key' });
            }
          };
          request.onsuccess = function() { resolve(request.result); };
          request.onerror = function() { resolve(null); };
        } catch (e) {
          resolve(null);
        }
      });
      return storageDbPromise;
    }
    function idbRequest(request) {
      return new Promise(function(resolve, reject) {
        request.onsuccess = function() { resolve(request.result); };
        request.onerror = function() { reject(request.error); };
      });
    }
    function setLocalCacheValue(key, value) {
      try {
        if (value === null || value === undefined) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      } catch (e) {}
    }
    function serializeAppStateSnapshot() {
      let boardsRaw = '[]';
      let templatesRaw = '[]';
      let notesRaw = '[]';
      try { boardsRaw = JSON.stringify(boards || []); } catch (e) {}
      try { templatesRaw = JSON.stringify(templates || []); } catch (e) {}
      try { notesRaw = JSON.stringify(notes || []); } catch (e) {}
      return {
        boards: boardsRaw,
        currentBoardId: String(currentBoardId || ''),
        templates_v1: templatesRaw,
        flux_notes: notesRaw
      };
    }
    function serializeUiSettingsSnapshot() {
      return {
        lang: lang || (navigator.language && navigator.language.startsWith('de') ? 'de' : 'en'),
        theme: currentTheme || 'flux',
        notify: notifyEnabled ? '1' : '0',
        taskColors: taskColorsEnabled ? '1' : '0',
        sort: currentSort || 'priority',
        catFilter: currentCategory || '',
        activeTab: activeTab || 'tasks',
        exportReminder: exportReminderEnabled ? '1' : '0',
        exportReminderDays: String(exportReminderDays || 14),
        dark: darkPref === 'dark' ? '1' : darkPref === 'light' ? '0' : 'auto',
        lastExport: getStoredValue('lastExport'),
        flux_ios_banner_dismissed: getStoredValue('flux_ios_banner_dismissed')
      };
    }
    function clearAppStateLocalMirror() {
      APP_STATE_STORAGE_KEYS.forEach(function(key) {
        setLocalCacheValue(key, null);
      });
    }
    function captureStorageSnapshot() {
      const snapshot = Object.assign({}, serializeAppStateSnapshot(), serializeUiSettingsSnapshot());
      Object.keys(snapshot).forEach(function(key) {
        if (snapshot[key] === null || snapshot[key] === undefined) delete snapshot[key];
      });
      return snapshot;
    }
    async function readIndexedDbSnapshot(db) {
      db = db || await openStorageDb();
      if (!db) return null;
      try {
        const tx = db.transaction(STORAGE_DB_STORE, 'readonly');
        const store = tx.objectStore(STORAGE_DB_STORE);
        const rows = await idbRequest(store.getAll());
        const snapshot = {};
        (rows || []).forEach(function(row) {
          if (row && typeof row.key === 'string' && typeof row.value === 'string') {
            snapshot[row.key] = row.value;
          }
        });
        return snapshot;
      } catch (e) {
        return null;
      }
    }
    async function writeIndexedDbSnapshot(snapshot) {
      const db = await openStorageDb();
      if (!db) return false;
      try {
        const tx = db.transaction(STORAGE_DB_STORE, 'readwrite');
        const store = tx.objectStore(STORAGE_DB_STORE);
        STORAGE_KEYS.forEach(function(key) {
          if (Object.prototype.hasOwnProperty.call(snapshot, key)) {
            store.put({ key, value: snapshot[key] });
          } else {
            store.delete(key);
          }
        });
        await new Promise(function(resolve, reject) {
          tx.oncomplete = function() { resolve(); };
          tx.onerror = function() { reject(tx.error); };
          tx.onabort = function() { reject(tx.error); };
        });
        return true;
      } catch (e) {
        return false;
      }
    }
    function scheduleIndexedDbPersist() {
      if (!indexedDbReady) return;
      if (indexedDbPersistScheduled) return;
      indexedDbPersistScheduled = true;
      setTimeout(function() {
        indexedDbPersistScheduled = false;
        const snapshot = captureStorageSnapshot();
        indexedDbPersistChain = indexedDbPersistChain
          .catch(function() {})
          .then(function() { return writeIndexedDbSnapshot(snapshot); })
          .then(function(success) {
            if (success) clearAppStateLocalMirror();
            return success;
          });
      }, 0);
    }
    async function hydrateStorageFromIndexedDb() {
      const db = await openStorageDb();
      indexedDbReady = !!db;
      if (!db) return null;
      const snapshot = await readIndexedDbSnapshot(db);
      if (!snapshot || !Object.keys(snapshot).length) return null;
      UI_STORAGE_KEYS.forEach(function(key) {
        if (Object.prototype.hasOwnProperty.call(snapshot, key)) {
          setLocalCacheValue(key, snapshot[key]);
        } else {
          setLocalCacheValue(key, null);
        }
      });
      return snapshot;
    }
    function getStoredValue(key) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return null;
      }
    }
    function parseStoredJSON(key, fallback) {
      const raw = getStoredValue(key);
      if (!raw) return fallback;
      try {
        const parsed = JSON.parse(raw);
        return parsed == null ? fallback : parsed;
      } catch (e) {
        return fallback;
      }
    }
    function safeSetItem(key, value) {
      try {
        localStorage.setItem(key, value);
        scheduleIndexedDbPersist();
        return true;
      } catch (e) {
        return false;
      }
    }
    function removeStoredValue(key) {
      try {
        localStorage.removeItem(key);
        scheduleIndexedDbPersist();
      } catch (e) {}
    }
    function loadAppStateData(sourceSnapshot) {
      const boardsRaw = sourceSnapshot && typeof sourceSnapshot.boards === 'string' ? sourceSnapshot.boards : getStoredValue('boards');
      const currentBoardRaw = sourceSnapshot && typeof sourceSnapshot.currentBoardId === 'string' ? sourceSnapshot.currentBoardId : getStoredValue('currentBoardId');
      const templatesRaw = sourceSnapshot && typeof sourceSnapshot.templates_v1 === 'string' ? sourceSnapshot.templates_v1 : getStoredValue('templates_v1');
      const notesRaw = sourceSnapshot && typeof sourceSnapshot.flux_notes === 'string' ? sourceSnapshot.flux_notes : getStoredValue('flux_notes');
      const legacyTodos = getStoredValue('todos');
      const data = {
        boards: [],
        currentBoardId: null,
        templates: [],
        notes: [],
        usedLegacyMigration: false
      };
      if (templatesRaw) {
        try { data.templates = JSON.parse(templatesRaw) || []; } catch { data.templates = []; }
      }
      if (notesRaw) {
        try { data.notes = JSON.parse(notesRaw) || []; } catch { data.notes = []; }
      }
      if (boardsRaw) {
        try { data.boards = JSON.parse(boardsRaw) || []; } catch { data.boards = []; }
      } else if (legacyTodos) {
        data.usedLegacyMigration = true;
        data.boards = [{
          id: 1,
          name: 'Inbox',
          todos: parseStoredJSON('todos', []),
          history: parseStoredJSON('history', [])
        }];
      }
      data.currentBoardId = parseInt(currentBoardRaw) || null;
      return data;
    }
    function saveAppStateData(appState) {
      let allSaved = true;
      try {
        JSON.stringify(appState.boards || []);
        JSON.stringify(appState.templates || []);
        JSON.stringify(appState.notes || []);
      } catch (e) {
        allSaved = false;
      }
      if (allSaved) scheduleIndexedDbPersist();
      return allSaved;
    }
    function loadUiSettings(sourceSnapshot) {
      function getUiValue(key) {
        return sourceSnapshot && typeof sourceSnapshot[key] === 'string' ? sourceSnapshot[key] : getStoredValue(key);
      }
      return {
        lang: getUiValue('lang') || (navigator.language && navigator.language.startsWith('de') ? 'de' : 'en'),
        dark: getUiValue('dark'),
        theme: getUiValue('theme') || 'flux',
        notify: getUiValue('notify') === '1',
        taskColors: getUiValue('taskColors'),
        sort: getUiValue('sort') || 'priority',
        catFilter: getUiValue('catFilter') || '',
        activeTab: getUiValue('activeTab') || 'tasks',
        exportReminder: getUiValue('exportReminder'),
        exportReminderDays: parseInt(getUiValue('exportReminderDays') || '14') || 14,
        lastExport: parseInt(getUiValue('lastExport') || '0') || 0,
        iosBannerDismissed: getUiValue('flux_ios_banner_dismissed')
      };
    }
    function saveUiSettings(settings) {
      let allSaved = true;
      allSaved = safeSetItem('lang', settings.lang) && allSaved;
      allSaved = safeSetItem('theme', settings.theme) && allSaved;
      allSaved = safeSetItem('notify', settings.notify ? '1' : '0') && allSaved;
      allSaved = safeSetItem('taskColors', settings.taskColors ? '1' : '0') && allSaved;
      allSaved = safeSetItem('sort', settings.sort) && allSaved;
      allSaved = safeSetItem('catFilter', settings.catFilter) && allSaved;
      allSaved = safeSetItem('activeTab', settings.activeTab) && allSaved;
      allSaved = safeSetItem('exportReminder', settings.exportReminder ? '1' : '0') && allSaved;
      allSaved = safeSetItem('exportReminderDays', String(settings.exportReminderDays)) && allSaved;
      return allSaved;
    }
    function save() {
      const board = boards.find(b => b.id === currentBoardId);
      if (board) { board.todos = todos; board.history = history; }
      let allSaved = saveAppStateData({
        boards,
        currentBoardId,
        templates,
        notes
      });
      allSaved = saveUiSettings({
        lang,
        theme: currentTheme,
        notify: notifyEnabled,
        taskColors: taskColorsEnabled,
        sort: currentSort,
        catFilter: currentCategory,
        activeTab,
        exportReminder: exportReminderEnabled,
        exportReminderDays
      }) && allSaved;
      if (!allSaved && !storageWarningShown) {
        storageWarningShown = true;
        showToast(t().toastStorageWarning);
      } else if (allSaved) {
        storageWarningShown = false;
      }
    }
    function load(sourceSnapshot) {
      const appState = loadAppStateData(sourceSnapshot);
      const uiSettings = loadUiSettings(sourceSnapshot);
      lang = uiSettings.lang;
      const shouldSeedStarterContent = !appState.usedLegacyMigration && !appState.boards.length && !appState.notes.length && !appState.templates.length;
      if (shouldSeedStarterContent && typeof createStarterContent === 'function') {
        const starter = createStarterContent();
        if (starter && Array.isArray(starter.boards) && starter.boards.length) {
          appState.boards = starter.boards;
          appState.currentBoardId = starter.currentBoardId || starter.boards[0].id;
          if (Array.isArray(starter.notes)) appState.notes = starter.notes;
          if (Array.isArray(starter.templates)) appState.templates = starter.templates;
        }
      }
      boards = appState.boards;
      if (appState.usedLegacyMigration) {
        removeStoredValue('todos');
        removeStoredValue('history');
      }
      if (!boards.length) {
        boards = [{ id: 1, name: 'Inbox', todos: [], history: [] }];
      }
      currentBoardId = appState.currentBoardId || boards[0].id;
      if (!boards.find(b => b.id === currentBoardId)) currentBoardId = boards[0].id;
      // Migrate category (string) → categories (array)
      boards.forEach(function(b) {
        (b.todos || []).forEach(function(t) {
          if (!t.categories) {
            t.categories = t.category ? [t.category] : [];
            delete t.category;
          }
        });
      });
      activateBoard(currentBoardId);
      const savedDark = uiSettings.dark;
      darkPref = savedDark === '1' ? 'dark' : savedDark === '0' ? 'light' : 'auto';
      dark = darkPref === 'auto' ? window.matchMedia('(prefers-color-scheme: dark)').matches : darkPref === 'dark';
      currentTheme = uiSettings.theme;
      notifyEnabled = uiSettings.notify && 'Notification' in window && Notification.permission === 'granted';
      const savedTaskColors = uiSettings.taskColors;
      taskColorsEnabled = savedTaskColors !== null ? savedTaskColors === '1' : true;
      currentSort = uiSettings.sort;
      currentCategory = uiSettings.catFilter;
      activeTab = uiSettings.activeTab;
      templates = Array.isArray(appState.templates) ? appState.templates : [];
      if (!Array.isArray(templates)) templates = [];
      templates = templates.map(function(tp, i) { return sanitizeTemplateItem(tp, i); }).filter(Boolean);
      notes = Array.isArray(appState.notes) ? appState.notes : [];
      if (!Array.isArray(notes)) notes = [];
      exportReminderEnabled = uiSettings.exportReminder !== '0';
      exportReminderDays = uiSettings.exportReminderDays;
      return { usedLegacyMigration: appState.usedLegacyMigration };
    }
