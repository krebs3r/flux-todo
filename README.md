# Flux — Your Todo App

> A lightweight, browser-only todo app with a glassmorphism / acrylic design.
> No server. No dependencies. Just one HTML file.

![Version](https://img.shields.io/badge/version-1.0.7.1-blueviolet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

**[▶ Live Demo](https://krebs3r.github.io/flux-todo/)**

---

## Overview

**Flux** is a single-file todo application that runs entirely in the browser. All data is stored locally via `localStorage` — no account, no backend, no tracking. The interface follows a glassmorphism / acrylic design language inspired by Windows 11 and macOS.

---

## Features

### Core
- **Create, edit & delete tasks** — inline editing with a single click
- **Priority levels** — High / Medium / Low with color-coded badges per task
- **Notes field** — add a longer description or details to any task
- **Drag & drop reordering** — rearrange tasks intuitively
- **Done state with timestamp** — mark tasks as complete, see when they were finished
- **Due dates with time** — set a deadline with date & time per task, color-coded (today / overdue)
- **Browser notifications** — reminders for due and overdue tasks
- **Search** — real-time filtering by title and notes
- **Filters** — view Open / Done tasks
- **Full event history** — every action is logged with a timestamp (up to 10,000 entries)
- **History usage indicator** — progress bar shows fill level of the 10,000-entry limit
- **Export & Import** — save and restore your tasks as a JSON file
- **Bulk delete** — clear all tasks at once, with an optional export prompt

### Design & Themes
- **Glassmorphism UI** — acrylic-style backdrop-filter effects throughout
- **9 theme presets** — Flux, Ocean, Sunset, Forest, Rose, Mono, Bender, Lumpi, Nobler
- **Dark mode** — default on first launch, toggleable
- **Smooth gradients** — top-to-bottom with fixed background
- **Confetti animation** — reward effect when completing a task

### Mobile & PWA
- **Offline-capable PWA** — Service Worker with network-first caching
- **iOS PWA** — add to home screen, fullscreen mode, safe area support for Dynamic Island/notch
- **iOS install hint** — banner in Safari guides users to add the app to their home screen
- **Swipe gestures** — swipe left to delete, right to complete
- **Pull-to-refresh** — pull down to reload the app
- **Haptic feedback** — vibration on touch actions (Android)
- **iOS HIG compliant** — 44pt touch targets, 16px input font size

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
| Chrome / Edge 76+ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Firefox 103+ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Safari 14+ | ✅ | ✅ | ⚠️ PWA only | ❌ | ✅ |
| Android Chrome | ✅ | ✅ | ✅ | ✅ | ✅ |
| iOS Safari | ✅ | ✅ | ❌ | ❌ | ✅ |
| iOS PWA (16.4+) | ✅ | ✅ | ✅ | ❌ | ✅ |
| Legacy browsers | ⚠️ | ❌ | ❌ | ❌ | ❌ |

---

## Roadmap

### Completed
- [x] Due dates with time — deadline per task, color-coded
- [x] Priorities — High / Medium / Low
- [x] Search — real-time filtering
- [x] Notes field — details per task
- [x] 9 theme presets — palette picker in header
- [x] Dark mode — default on first launch
- [x] Swipe gestures — left to delete, right to complete
- [x] Pull-to-refresh — reload on pull down
- [x] Haptic feedback — Vibration API (Android)
- [x] Confetti animation — reward on task completion
- [x] Browser notifications — reminders for due dates
- [x] Service Worker — true offline PWA
- [x] PWA support — installable on mobile home screen
- [x] Drag & drop — reorder tasks
- [x] Pomodoro timer — fullscreen focus mode linked to a task

### Planned
- [ ] **Categories / Tags** — group todos (Work, Personal, Shopping…)
- [ ] **Subtasks** — checklists within a task
- [ ] **Sort options** — by priority, due date, creation date
- [ ] **Recurring tasks** — e.g. "Every Monday: weekly report"
- [ ] **Undo** — reverse the last action (e.g. accidental delete)
- [ ] **Streak counter** — "5 days in a row with all tasks done"
- [ ] **Statistics view** — completion rate, tasks per week, streaks
- [ ] **Focus mode** — show only the next open task
- [ ] **Keyboard shortcuts** — `N` = new todo, `Esc` = close, etc.
- [ ] **Accessibility** — ARIA labels, improved screen reader support
- [ ] **Cloud Sync** — optional backend sync (e.g. Firebase, Supabase)
- [ ] **Multiple lists** — separate boards (e.g. Work / Personal / Shopping)

---

## Changelog

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
- History usage counter: progress bar shows fill level of the 10,000-entry limit

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
- History limit increased to 10,000 entries

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

<p align="center">Made with focus &nbsp;·&nbsp; Flux v1.0.7.1</p>
