    // ── Changelog ────────────────────────────────────────────────────────────
    function openChangelog() {
      const T = t();
      document.getElementById('changelog-heading').textContent = T.changelogHeading;
      document.getElementById('changelog-body').innerHTML = T.changelogVersions.map((v, i) => `
        <div class="changelog-version"${i > 0 ? ' style="margin-top:18px"' : ''}>
          <span class="changelog-tag">${v.version}</span>
          ${v.date ? `<span class="changelog-date">${v.date}</span>` : ''}
        </div>
        <ul class="changelog-list">
          ${v.entries.map(e => `<li>${e}</li>`).join('')}
        </ul>
      `).join('');
      document.getElementById('changelog-backdrop').classList.add('show');
      document.addEventListener('keydown', onEscClose);
    }
    function closeChangelog() {
      document.getElementById('changelog-backdrop').classList.remove('show');
      document.removeEventListener('keydown', onEscClose);
    }
    function handleBackdropClick(e) {
      if (e.target === e.currentTarget) closeChangelog();
    }
    function onEscClose(e) { if (e.key === 'Escape') closeChangelog(); }

    const MICROSOFT_STORE_BADGE_SCRIPT = 'https://get.microsoft.com/badge/ms-store-badge.bundled.js';
    const MICROSOFT_STORE_PRODUCT_ID = '9nc9zvwtdj9v';
    const MICROSOFT_STORE_PRODUCT_NAME = 'Flux — Your ToDo App';
    const MICROSOFT_STORE_PRODUCT_URL = 'https://apps.microsoft.com/detail/9nc9zvwtdj9v';
    let microsoftStoreBadgeRequested = false;

    function ensureMicrosoftStoreBadgeScript() {
      if (typeof customElements !== 'undefined' && customElements.get('ms-store-badge')) return;
      if (document.querySelector('script[data-ms-store-badge="1"]')) return;
      const script = document.createElement('script');
      script.type = 'module';
      script.src = MICROSOFT_STORE_BADGE_SCRIPT;
      script.dataset.msStoreBadge = '1';
      document.head.appendChild(script);
    }

    function renderMicrosoftStoreBadge(languageCode, linkLabel) {
      const container = document.getElementById('help-microsoft-store-badge');
      if (!container) return;
      const isMobileDevice = isMobileDeviceContext();
      const badgeTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      if (!microsoftStoreBadgeRequested) {
        microsoftStoreBadgeRequested = true;
        ensureMicrosoftStoreBadgeScript();
      }
      container.innerHTML = '';
      if (!isMobileDevice) {
        const badge = document.createElement('ms-store-badge');
        badge.setAttribute('productid', MICROSOFT_STORE_PRODUCT_ID);
        badge.setAttribute('productname', MICROSOFT_STORE_PRODUCT_NAME);
        badge.setAttribute('window-mode', 'direct');
        badge.setAttribute('theme', badgeTheme);
        badge.setAttribute('size', 'small');
        badge.setAttribute('language', languageCode);
        badge.setAttribute('animation', 'on');
        container.appendChild(badge);
      }

      const link = document.createElement('a');
      link.className = 'help-store-link';
      link.href = MICROSOFT_STORE_PRODUCT_URL;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = linkLabel;
      container.appendChild(link);
    }

    function isMobileDeviceContext() {
      const ua = navigator.userAgent || '';
      const uaDataMobile = !!(navigator.userAgentData && navigator.userAgentData.mobile);
      const touchMac = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
      const mobileUa = /android|iphone|ipad|ipod|mobile|windows phone|blackberry|kindle|silk/i.test(ua);
      return uaDataMobile || mobileUa || touchMac;
    }

    function isInstalledDesktopAppContext() {
      if (window.chrome && window.chrome.webview) return true;
      if (!window.matchMedia) return false;
      try {
        return window.matchMedia('(display-mode: window-controls-overlay)').matches;
      } catch (e) {
        return false;
      }
    }

    // ── Help / Keyboard Shortcuts ───────────────────────────────────────────
    function scrollHelpTo(blockId) {
      const el = document.getElementById(blockId);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function openHelpSection(blockId) {
      if (typeof switchTab === 'function') switchTab('help');
      const targetId = blockId || 'help-shortcuts';
      const runScroll = function() { scrollHelpTo(targetId); };
      if (window.requestAnimationFrame) {
        requestAnimationFrame(function() {
          requestAnimationFrame(runScroll);
        });
        return;
      }
      setTimeout(runScroll, 30);
    }
    function renderHelpPanel(T) {
      const showMicrosoftStoreBlock =
        !isMobileDeviceContext() &&
        !isInstalledDesktopAppContext();
      const sections = [
        { title: T.helpQuickTitle, items: T.helpQuickItems },
        { title: T.helpMobileTitle, items: T.helpMobileItems },
        { title: T.helpPowerTitle, items: T.helpPowerItems }
      ];
      const markdownRows = (T.helpMarkdownBoxLines || []).map(function(line) {
        return '<div class="help-markdown-line">' + escHtml(line) + '</div>';
      }).join('');
      const shortcutRows = T.kbShortcuts.map(function(s) {
        return '<tr><td><span class="kb-key">' + escHtml(s[0]) + '</span></td><td class="kb-desc">' + escHtml(s[1]) + '</td></tr>';
      }).join('');
      const urlRows = T.kbUrlParams.map(function(s) {
        return '<tr><td><span class="kb-param">' + escHtml(s[0]) + '</span></td><td class="kb-desc">' + escHtml(s[1]) + '</td></tr>';
      }).join('');
      const blocks = [];
      sections.forEach(function(section, idx) {
        blocks.push({
          id: 'help-block-' + idx,
          title: section.title,
          html: '<ul class="help-list">' + section.items.map(function(item) { return '<li>' + escHtml(item) + '</li>'; }).join('') + '</ul>'
        });
      });
      (T.helpManualSections || []).forEach(function(section, idx) {
        blocks.push({
          id: 'help-manual-' + idx,
          title: section.title || '',
          html: '<ul class="help-list">' + (section.items || []).map(function(item) { return '<li>' + escHtml(item) + '</li>'; }).join('') + '</ul>'
        });
      });
      blocks.push({
        id: 'help-markdown',
        title: T.helpMarkdownBoxTitle || 'Markdown',
        html: '<div class="help-markdown-box">' + markdownRows + '</div>'
      });
      blocks.push({
        id: 'help-shortcuts',
        title: T.kbShortcutsHeading,
        html: '<table class="kb-table">' + shortcutRows + '</table>'
      });
      blocks.push({
        id: 'help-url-params',
        title: T.kbUrlHeading,
        html: '<table class="kb-url-table">' + urlRows + '</table>'
      });
      if (showMicrosoftStoreBlock) {
        blocks.push({
          id: 'help-microsoft-store',
          title: T.helpStoreTitle,
          html:
            '<p class="help-store-copy">' + escHtml(T.helpStoreIntro) + '</p>' +
            '<div class="help-store-badge-wrap" id="help-microsoft-store-badge"></div>'
        });
      }
      document.getElementById('help-title').textContent = T.helpTitle;
      document.getElementById('help-intro').textContent = T.helpIntro;
      document.getElementById('help-manual-box').innerHTML =
        '<div class="help-block-title">' + escHtml(T.helpManualHeading) + '</div>' +
        '<p class="help-toc-intro">' + escHtml(T.helpManualIntro || '') + '</p>';
      document.getElementById('help-toc').innerHTML =
        '<div class="help-toc-title">' + escHtml(T.helpTocTitle) + '</div>' +
        '<div class="help-toc-list">' + blocks.map(function(block) {
          return '<button type="button" class="help-toc-link" onclick="scrollHelpTo(\'' + escHtml(block.id) + '\')">' + escHtml(block.title) + '</button>';
        }).join('') + '</div>';
      document.getElementById('help-sections').innerHTML =
      blocks.map(function(block) {
        return '<div class="help-block" id="' + escHtml(block.id) + '">' +
          '<div class="help-block-title">' + escHtml(block.title) + '</div>' +
          block.html +
        '</div>';
      }).join('') +
      '';
      if (showMicrosoftStoreBlock) {
        renderMicrosoftStoreBadge((lang === 'de' ? 'de' : 'en-us'), T.helpStoreLink);
      }
    }
    function openKB() {
      const T = t();
      document.getElementById('kb-heading').textContent = T.kbHeading;
      const rows = T.kbShortcuts.map(function(s) {
        return '<tr><td><span class="kb-key">' + escHtml(s[0]) + '</span></td><td class="kb-desc">' + escHtml(s[1]) + '</td></tr>';
      }).join('');
      const urlRows = T.kbUrlParams.map(function(s) {
        return '<tr><td><span class="kb-param">' + escHtml(s[0]) + '</span></td><td class="kb-desc">' + escHtml(s[1]) + '</td></tr>';
      }).join('');
      document.getElementById('kb-body').innerHTML =
        '<p style="margin:0 0 10px;font-size:0.95rem;font-weight:700;letter-spacing:-0.2px">' + escHtml(T.kbShortcutsHeading) + '</p>' +
        '<table class="kb-table">' + rows + '</table>' +
        '<p style="margin:20px 0 8px;font-size:0.95rem;font-weight:700;letter-spacing:-0.2px">' + escHtml(T.kbUrlHeading) + '</p>' +
        '<table class="kb-url-table">' + urlRows + '</table>';
      document.getElementById('kb-backdrop').classList.add('show');
      document.addEventListener('keydown', onKBEscClose);
    }
    function closeKB() {
      document.getElementById('kb-backdrop').classList.remove('show');
      document.removeEventListener('keydown', onKBEscClose);
    }
    function handleKBBackdropClick(e) { if (e.target === e.currentTarget) closeKB(); }
    function onKBEscClose(e) { if (e.key === 'Escape') closeKB(); }
