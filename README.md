# Flux — Your Todo App

> A lightweight, browser-only todo app with a glassmorphism / acrylic design.
> No server. No dependencies. Just one HTML file.

![Version](https://img.shields.io/badge/version-1.5.4.2-blueviolet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## Try it now — [flux-todo.eu](https://flux-todo.eu)

No sign-up. No download. Just open the link and start organizing.
Works on any device — desktop, tablet, phone. Install it as a PWA for the full app experience.

---

## Overview

**Flux** is a single-file todo application that runs entirely in the browser. All data is stored locally via `localStorage` — no account, no backend, no tracking. Your data stays on your device, always.

The interface follows a glassmorphism / acrylic design language inspired by Windows 11 and macOS — with 9 theme presets, dark mode, and smooth animations. It feels like a native app, but it's just one HTML file.

---

## Features

### Core
- **Create, edit & delete tasks** — inline editing with Save / Cancel buttons
- **Priority levels** — High / Medium / Low with color-coded badges per task
- **Notes field** — add a longer description or details to any task
- **Subtasks** — checklists within a task, with progress badge
- **Drag & drop reordering** — rearrange tasks intuitively
- **Done state with timestamp** — mark tasks as complete, see when they were finished
- **Due dates with time** — set a deadline with date & time per task, color-coded (today / overdue)
- **Browser notifications** — reminders for due and overdue tasks
- **Search** — real-time filtering by title and notes
- **Filters** — view Open / Done tasks
- **Archive** — completed tasks stored as cards, restore or permanently delete them
- **Activity log** — every action logged with timestamp (up to 100,000 entries), collapsible in the archive tab
- **Export & Import** — save and restore your tasks as a JSON file
- **Bulk delete** — clear all tasks at once, with an optional export prompt
- **Statistics view** — completion rate ring, tasks per week bar chart, current & longest streak
- **Multiple tags** — assign multiple #hashtags per task (comma-separated), autocomplete, filter by tag, manage/rename/delete in settings
- **Time tracking** — start/stop timer per task, independent from Pomodoro, pulsing badge shows elapsed time
- **Task colors** — individual color stripe per task as a left-border accent, with settings toggle
- **Sort options** — manual, priority, due date, creation date
- **Undo** — reverse the last action with a 5-second toast
- **Pomodoro timer** — fullscreen focus mode linked to a task (25/5/15 min cycles)
- **Keyboard shortcuts** — N, F, D, S, Z, 1/2/0, [ ], Esc, ? — quick access without mouse
- **Tab navigation** — bottom nav bar with 5 tabs (New, Tasks, Archive, Settings, Help), Liquid Glass style
- **Quick-Add via URL** — `?add=Title&note=Text&priority=high&due=2026-04-01` pre-fills a new task
- **Recurring tasks** — daily, weekly, biweekly, monthly — next instance auto-created on completion
- **Focus mode** — fullscreen overlay with the most important task, complete/skip/start Pomodoro

### Design & Themes
- **Glassmorphism UI** — acrylic-style backdrop-filter effects throughout
- **9 theme presets** — Flux, Ocean, Sunset, Forest, Rose, Mono, Bender, Lumpi, Nobler
- **Dark mode** — default on first launch, toggleable
- **Smooth gradients** — top-to-bottom with fixed background
- **Confetti animation** — reward effect when completing a task

### Mobile & PWA
- **Offline-capable PWA** — Service Worker with network-first caching
- **iOS PWA** — add to home screen, true fullscreen (no gaps), safe area support for Dynamic Island/notch
- **iOS install hint** — banner in Safari guides users to add the app to their home screen
- **Swipe gestures** — swipe left to delete, right to complete
- **Pull-to-refresh** — pull down to reload the app
- **Haptic feedback** — tactile response on touch actions (iOS 17.4+ via checkbox-switch, Android via Vibration API)
- **iOS HIG compliant** — 44pt touch targets, 16px input font size (prevents auto-zoom)

### Localization & Accessibility
- **Language switcher** — German 🇩🇪 and English 🇬🇧
- **Section headings** — clear labels for input and task areas
- **Favicon** — SVG checkmark icon matching the app design
- **No installation required** — open `index.html` in any modern browser

---

## Getting Started

1. Download or clone this repository
2. Open `index.html` in your browser

```bash
git clone https://github.com/krebs3r/flux-todo.git
cd flux-todo
open index.html
```

That's it. No `npm install`, no build step, no server.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, `backdrop-filter`, CSS Grid/Flex) |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | `localStorage` |
| Offline | Service Worker (network-first caching) |
| Dependencies | None |

---

## Browser Support

Flux works in all modern browsers that support `backdrop-filter`. Offline mode requires Service Worker support.

| Browser | UI | Offline | Notifications | Haptic | Swipe |
|---|---|---|---|---|---|
| Chrome / Edge 76+ | ✅ | ✅ | ✅ | ✅ Vibration API | ✅ |
| Firefox 103+ | ✅ | ✅ | ✅ | ✅ Vibration API | ✅ |
| Safari 14+ | ✅ | ✅ | ⚠️ PWA only | ⚠️ 17.4+ | ✅ |
| Android Chrome | ✅ | ✅ | ✅ | ✅ Vibration API | ✅ |
| iOS Safari 17.4+ | ✅ | ✅ | ⚠️ PWA only | ✅ checkbox-switch | ✅ |
| iOS PWA (16.4+) | ✅ | ✅ | ✅ | ✅ 17.4+ | ✅ |
| Legacy browsers | ⚠️ | ❌ | ❌ | ❌ | ❌ |

---

## Roadmap

### Completed
- [x] Due dates with time — deadline per task, color-coded
- [x] Priorities — High / Medium / Low
- [x] Search — real-time filtering by title, notes and tags
- [x] Notes field — details per task
- [x] 9 theme presets — palette picker in header
- [x] Dark mode — default on first launch
- [x] Swipe gestures — left to delete, right to complete
- [x] Pull-to-refresh — reload on pull down
- [x] Haptic feedback — iOS (checkbox-switch) and Android (Vibration API)
- [x] Confetti animation — reward on task completion
- [x] Browser notifications — reminders for due dates
- [x] Service Worker — true offline PWA
- [x] PWA support — installable on mobile home screen
- [x] Drag & drop — reorder tasks
- [x] Pomodoro timer — fullscreen focus mode linked to a task
- [x] Time tracking — start/stop timer per task, independent from Pomodoro
- [x] Sort options — by priority, due date, creation date
- [x] Undo — reverse the last action (e.g. accidental delete)
- [x] Statistics view — completion rate, tasks per week, streaks
- [x] Multiple tags — comma-separated #hashtags per task with autocomplete, filter and tag manager
- [x] Task colors — individual color stripe per task as left-border accent
- [x] Keyboard shortcuts — N, F, D, S, Z, 1/2/0, [ ], Esc, ?
- [x] Tab navigation — bottom nav bar (New, Tasks, Archive, Settings)
- [x] Quick-Add via URL — pre-fill tasks with URL parameters
- [x] Recurring tasks — daily, weekly, biweekly, monthly with auto-creation
- [x] Focus mode — fullscreen overlay showing the most important task
- [x] Subtasks — checklists within a task
- [x] Multiple lists — separate boards, move tasks between boards
- [x] Archive — completed tasks with restore and permanent delete
- [x] Accessibility — ARIA labels on interactive elements
- [x] Task templates — save and reuse pre-configured tasks
- [x] Markdown in notes — bold, italic, links with safe preview
- [x] CSV export — export tasks as spreadsheet-friendly file

### Ideas
- [ ] **Kanban view** — column layout (Open / In Progress / Done)
- [ ] **Productivity heatmap** — GitHub-style contribution graph

---

## Changelog

### v1.5.4.2
- iOS fix: long-press on bottom navbar no longer selects tab labels
- UX polish: disabled text selection/touch callout on tab buttons and labels for cleaner mobile interaction
- Minor UI consistency follow-up for add-form controls

### v1.5.4.1
- UI fix: empty-state text in Tags/Templates manager now centered
- UI fix: spacing between settings toggle rows aligned consistently
- UI fix: color label in new-task planning section aligned with heading style (uppercase/weight/size)
- UI fix: markdown preview button hover state refined to match the neutral button style

### v1.5.4
- Help moved into a dedicated navbar tab (instead of header-only entry)
- Help tab expanded into a full in-app manual (DE/EN) with workflows, feature explanations and review section
- New table of contents in Help tab with quick jump links to sections
- Navbar order adjusted for daily use: Settings before Help
- Settings now include dedicated toggles for Dark Mode and Notifications (synced with header controls)
- New task form simplified: progressive "More options" flow with grouped sections (Planning, Details, Templates)
- New task form: notes/tags shown directly in advanced mode (extra "Note & Tag" toggle removed)
- Markdown preview button alignment adjusted to left for better visual flow
- Manage tab spacing refined for consistent distances between setting rows
- Import/Export labels clarified to explicit JSON actions (`Export JSON`, `Import JSON`)

### v1.5.3
- Import: defensive validation and sanitization for boards, tasks and history
- Import: invalid entries are skipped safely and reported via toast
- CSV export for current board (`;`-separated, UTF-8)
- Mobile quick actions via long-press on task cards
- Search input debounced for smoother typing performance
- Task templates (`templates_v1`) with apply/edit/delete flow
- Safe Markdown preview for notes (new + edit)
- Mobile UX: tag/template action buttons optimized for small screens (e.g. iPhone SE)
- Accessibility: quick-action sheet buttons now have discernible names (`text`, `aria-label`, `title`)

### v1.5.2
- Fix: Tag filter clicks now use safe event delegation (no inline user-input handlers)
- Fix: Due date comparisons now use local date logic for correct today/overdue state at day boundaries
- Fix: Search field is now correctly reset when switching boards
- Improvement: localStorage persistence now fails gracefully with a one-time warning toast when storage is full
- PWA: Service Worker hardened with cache versioning, old-cache cleanup and more targeted asset caching

### v1.5.1
- Time tracking per task — start/stop timer independent from Pomodoro, with pulsing badge
- Multiple tags per task — comma-separated input, duplicate detection, autocomplete
- Archive tab — completed tasks as cards with restore and permanent delete
- Activity log as collapsible section inside archive tab
- Fix: iOS auto-zoom on input focus prevented (16px min font-size on touch devices)
- Fix: Unified spacing between badges, tags and notes

### v1.5.0.4
- Haptic feedback — tactile response on actions (complete, add, delete tasks, buttons)
- iOS-compatible via checkbox-switch workaround (iOS 17.4+), Android via Vibration API

### v1.5.0.3
- Fix: Color picker layout — label now above swatches, full card width for color row
- Fix: Selected color swatch clipped at edge — padding added for scale animation
- Fix: Accessibility — buttons without visible text now have aria-label (Pomodoro, color picker, sort)

### v1.5.0.2
- Task colors — individual color stripe per task as a left-border accent
- Color picker in new task form (below priority) and in edit form
- Settings toggle to enable/disable task colors
- All native dropdowns replaced — recurrence, tag filter and board selector now use styled custom dropdowns

### v1.5.0.1
- Quick-Add via URL parameter — `?add=Title`, `&note=`, `&priority=`, `&due=` pre-fill new tasks
- Fix: URL parameter redirect failed due to naming conflict with internal history variable
- Help modal — keyboard shortcuts and URL parameters combined in one clean dialog
- Sort dropdown — replaced native select with styled custom dropdown
- Created timestamp now shows date and time
- Drag handle vertically centered
- Sun icon in dark mode button correctly centered

### v1.5.0
- Multiple lists / boards — "Work", "Personal", "Shopping" as separate areas
- Calendar view — tasks with due dates on a weekly/monthly calendar
- Move tasks between boards — new dropdown in edit mode
- Board names limited to 20 characters
- Default board renamed: "General" → "Inbox"
- Dark mode: board chips, focus mode & calendar buttons matched to settings buttons
- Dark mode: hover now subtly brightens (no more blue accent)
- Theme popover centered below button (no overflow on small screens)
- Font sizes unified: priority chips, details toggle and form fields set to 0.88rem
- Settings: button spacing and padding unified
- Styled scrollbar — thin, semi-transparent bar matching all themes and dark mode

### v1.4.9.1
- Header buttons reordered logically: Language → Theme → Dark Mode → Notifications → Stats → Keyboard

### v1.4.9
- Tag Manager: grid layout for aligned columns (CSS Subgrid)
- IO buttons: consistent min-height (38px / 44px mobile)
- Tasks tab: unified spacing between all elements (8px)
- Sort label hidden on mobile for more space
- Scheduled section moved above active tasks

### v1.4.8
- Settings: unified spacing between all elements
- Settings: "Manage tags" text color matched to other buttons

### v1.4.7
- Focus mode button: height matched to other buttons (38px / 44px mobile)
- Font-size consistency: all input fields and buttons unified

### v1.4.6
- Subtasks — add checklists within a task, toggle individual items, progress badge (e.g. 2/5)
- Subtask editor in edit mode — add, remove and modify subtasks inline
- Recurring tasks carry over subtasks (reset to unchecked)
- History limit increased from 10,000 to 100,000 entries

### v1.4.5
- Design consistency refactor: unified border-radius across all elements (3-tier system: 8px / 12px / 20px)
- Unified all CSS transitions to 0.2s for smoother, consistent animations
- New design tokens `--gl-border-subtle` / `--gl-border-subtle-dark` for secondary borders
- Font-size standardization: 4-tier system (0.63 / 0.72 / 0.82 / 0.88rem)
- Touch optimization: active-state feedback for all interactive elements (details toggle, focus mode, tag manager, modals, tab bar, theme picker, confirm dialogs)
- Touch targets: 44px minimum for cat-filter, scheduled header, tab buttons, modal close, sort select
- Empty state illustrations with SVG icons for tasks and history
- Tag character counter with warning indicator near limit
- Touch drag & drop: long-press on handle to reorder tasks on mobile
- Recurrence select: placeholder text now correctly uses muted color

### v1.4.4 (previous)
- Tag Manager in Settings — rename or remove tags from all tasks at once
- Scheduled recurring tasks moved to collapsible "Scheduled" section (no longer cluttering the main list)
- Chrome: date/time fields show clean placeholder labels instead of native "dd.mm.yyyy"
- Android: navigation bar color matches app theme (including Xiaomi/MIUI browsers)
- Accessibility: ARIA labels for all buttons, form elements and modals
- Safari compatibility: added -webkit-user-select and -webkit-backdrop-filter prefixes
- Confirm dialog: long text now wraps correctly instead of overflowing

### v1.4.3
- Details toggle styled as segmented control — matches filter button (Offen/Erledigt) appearance
- Toggle highlights with glass background when open, transparent when closed
- Removed conflicting hover color overrides on details toggle
- Date and time fields show placeholder labels on iOS (previously blank)

### v1.4.2
- Focus Mode: fullscreen overlay showing the most important open task
- Complete, skip or start a Pomodoro directly from Focus Mode
- Task sorting: highest priority → earliest due date → oldest task
- Keyboard shortcut `G` to start, `Esc` to exit

### v1.4.1
- New form design: hero input with larger, pill-shaped styling
- Priority selection as inline chip row (High / Medium / Low) instead of cycling button
- Optional fields (note & tag) behind collapsible "Details" toggle — less clutter
- Date, time and recurrence in compact 2-column grid layout
- Add button with accent color and hover lift effect
- Recurrence select with improved placeholder text ("Repeat …")
- Future recurring tasks dimmed (45% opacity) with "Scheduled" badge
- Consistent rounded corners (12px) across all tabs for Liquid Glass consistency

### v1.4.0
- Recurring tasks: daily, weekly, biweekly or monthly — next instance auto-created on completion
- Recurrence picker in New and Edit mode with weekday / day-of-month selection
- Recurring tasks shown with ↻ badge and label (e.g. "Every Monday")
- Due date and recurrence badges aligned in a single row
- Replaced deprecated `apple-mobile-web-app-capable` meta tag

### v1.3.2
- iOS PWA: background gradient now fills the entire physical screen — no more colored strip at the bottom
- iOS PWA: tab bar icons no longer clipped on Face ID iPhones
- Tab bar constrained to content width with rounded corners on desktop
- Background color of all themes matched to gradient end value (seamless transition)
- PWA manifest background_color dynamically adapted to theme and dark mode

### v1.3.1.1
- iOS PWA: background gradient now fills the entire screen (no empty area below the tab bar)

### v1.3.1
- Tab bar more transparent in Liquid Glass style — content scrolls smoothly behind it
- Scrolling now works anywhere on the page (not just over the content area)
- Background gradient without visible edges between content and navigation
- Service Worker no longer registered when opened locally (file://)

### v1.3.0
- Tab navigation: bottom nav bar with 4 tabs (New, Tasks, History, Settings)
- Glassmorphism tab bar in iOS style with rounded corners, matched to content width
- Safe area support for iOS (Home Indicator, Dynamic Island)
- Auto-switch to Tasks tab after adding a todo
- History and Settings as separate tabs — no more collapsing needed
- Delete all button in Settings tab
- Footer (version, GitHub) moved into Settings tab
- Gear icon for the Settings tab
- Keyboard shortcuts: [ / ] to switch tabs
- Keyboard shortcuts auto-switch to the correct tab (e.g. N opens New tab)
- Tag badge moved below creation date — no more layout overflow with long tags

### v1.2.0
- Keyboard shortcuts: N = new task, F = search, D = dark mode, S = statistics, Z = undo, ? = help
- Keyboard button in header — opens shortcut overview
- Tag autocomplete: custom dropdown instead of native datalist — correct positioning on iPhone
- Statistics: week labels show date range (e.g. 10.–16.3.) instead of single date
- Statistics: 6 instead of 8 weeks in bar chart

### v1.1.0
- Tags: label tasks with custom #hashtags — autocomplete from existing tags
- Tag filter: filter task list by tag
- Tag badge: color-coded per tag, click to filter
- Statistics view: completion rate ring, tasks per week, current & longest streak

### v1.0.9.2
- Safari 26 (macOS Tahoe): moved background-color to body — Safari 26 derives toolbar tint from body instead of the theme-color meta tag

### v1.0.9.1
- Sort dropdown: shortened German labels (Fälligkeit, Erstellt) — no more layout overflow on iPhone

### v1.0.9
- Sort options: Manual, Priority, Due Date, Created — dropdown next to filter buttons
- Undo: toast with undo button after delete and bulk delete (5 second window)
- Drag handles hidden when a sort other than Manual is active
- PWA manifest: fixed invalid start_url warning in Chrome
- Note input box-sizing fix (consistent width with other fields)
- Pull-to-refresh spinner repositioned above the header card (no longer overlaps)

### v1.0.8.3
- Unified spacing (8px) between all edit mode fields (note, due date, buttons)

### v1.0.8.2
- Date and time input fields now have equal height on iOS Safari (box-sizing fix)

### v1.0.8.1
- Priority badge always visible (no longer hidden behind hover/opacity)

### v1.0.8
- Todo layout redesigned: text on top, badges and action buttons on a separate row below
- Due date info shown as pill badge below the creation date
- Priority badge aligned left, action buttons aligned right in the bottom row
- Edit mode: explicit Save and Cancel buttons (no more guessing where to click)
- Unified spacing (4px gap) across all todo item elements
- Header spacing improved on mobile (more breathing room)

### v1.0.7.2
- Header badges side by side on iPhone instead of stacked (mobile layout fix)
- Pull-to-refresh: spinner stays below notch/Dynamic Island (safe area)

### v1.0.7.1.1
- Pomodoro timer: session dots visible in both light and dark mode

### v1.0.7.1
- Priority badge moved to the right side — no more layout jump
- Priority badge always visible (no hover toggle)

### v1.0.7
- Pomodoro timer linked to tasks (25 min work / 5 min break / 15 min long break)
- Fullscreen focus overlay with glassmorphism card, minimize to floating button
- Browser notification on phase change (work ↔ break)
- Action buttons optimized for touch devices (visible background, increased spacing)
- Footer text readable in light mode (dark text instead of white)

### v1.0.6.9.1
- Add button hover and active styles matched to Import/Export/Delete buttons

### v1.0.6.9
- "No Subscription" badge added to header
- Add button moved to full width below all input fields
- Button design unified across the app
- All spacing unified (10px between fields, 12px between sections)
- Duplicate calendar/clock icons hidden in Chrome
- Time input height matched to date field (iOS fix)
- Edit mode spacing aligned with input fields
- Dark mode as default on first app launch

### v1.0.6.5
- Service Worker for true offline PWA (app works without internet)
- Section headings added for input and task areas
- Browser notifications for due tasks (bell button in header)
- Due date with separate time input
- Date/time fields auto-fill with current value on focus (Chrome fix)
- Swipe gestures: swipe left to delete, right to complete
- Confetti animation when completing a task
- Pull-to-refresh: pull down to reload (iOS & Android)
- Haptic feedback on touch actions (Android, Vibration API)
- Automatic due status refresh every 60 seconds
- Dark mode follows system preference on first launch

### v1.0.5
- Gradient direction changed from diagonal to top-to-bottom across all themes
- All gradients smoothed — reduced contrast, narrower brightness range in dark mode

### v1.0.4.5
- 3 new conservative themes: Bender (steel blue), Lumpi (sand/caramel), Nobler (stone grey)

### v1.0.4.1
- iOS HIG: touch targets raised to minimum 44×44 pt
- iOS HIG: input font size set to 16 px — prevents automatic zoom on focus
- Touch: action buttons always visible, priority badge and drag handle always tappable
- Touch: :active feedback replaces hover states

### v1.0.4
- 6 theme presets (Flux, Ocean, Sunset, Forest, Rose, Mono) with palette picker in header
- Date format unified to ISO 8601 (YYYY-MM-DD)
- Background fixed — content scrolls over the gradient
- GitHub link with logo in footer

### v1.0.3
- Due dates per task — color-coded display (future / today / overdue)
- Search field for real-time filtering of tasks (title and notes)
- History usage counter: progress bar shows fill level of the 100,000-entry limit

### v1.0.2.6
- iOS: explicit background-color on html element — notch area is correctly colored on first load
- iOS: dark mode class applied before first render — no color flash on load

### v1.0.2.5
- iOS: theme-color is now set before first render — no white flash at the notch on load

### v1.0.2.4
- Header icon updated to match favicon checkmark
- iOS: theme-color adapts to dark mode — notch area is now correctly colored

### v1.0.2.3
- iOS: fixed white bars at top/bottom — background gradient now covers safe areas
- iOS: removed `background-attachment: fixed` (unsupported in Safari)
- iOS: switched `min-height` to `100dvh` for correct height with dynamic address bar

### v1.0.2.2
- iOS install hint: banner text updates automatically when switching language

### v1.0.2.1
- iOS install hint: banner in Safari prompts users to add the app to their home screen

### v1.0.2
- Priority levels (High / Medium / Low) with color-coded badges
- Notes field for longer descriptions per task
- Favicon as SVG checkmark matching the app design
- iOS PWA support: add to home screen, fullscreen mode, safe area insets for Dynamic Island/notch
- Light mode: changelog modal improved readability (higher opacity)

### v1.0.1
- Glassmorphism / acrylic design applied throughout the entire interface
- Add button (`+`) restyled with glass look (backdrop-filter, translucent background)
- Header logo redesigned as a glass icon with proper top alignment
- History limit increased to 100,000 entries

### v1.0.0
- Initial release
- Create, edit and delete tasks
- Drag & drop to reorder entries
- Mark tasks as done with completion timestamp
- Filter: Open / Done
- Full history of all events with timestamps
- Export and import as JSON file
- Delete all tasks at once (with export option)
- Dark mode
- Language switcher: German / English
- Local storage in the browser (no server required)

---

## License

[MIT](LICENSE) — feel free to use, fork, and modify.

---

<p align="center">Made with focus &nbsp;·&nbsp; Flux v1.5.4.2</p>
