# Flux — Your Todo App

> A lightweight, browser-only todo app with a glassmorphism / acrylic design.
> No server. No dependencies. Just one HTML file.

![Version](https://img.shields.io/badge/version-1.0.2-blueviolet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

**[▶ Live Demo](https://krebs3r.github.io/flux-todo/)**

---

## Overview

**Flux** is a single-file todo application that runs entirely in the browser. All data is stored locally via `localStorage` — no account, no backend, no tracking. The interface follows a glassmorphism / acrylic design language inspired by Windows 11 and macOS.

---

## Features

- **Create, edit & delete tasks** — inline editing with a single click
- **Drag & drop reordering** — rearrange tasks intuitively
- **Done state with timestamp** — mark tasks as complete, see when they were finished
- **Filters** — view All / Open / Done tasks
- **Full event history** — every action is logged with a timestamp (up to 10,000 entries)
- **Export & Import** — save and restore your tasks as a JSON file
- **Bulk delete** — clear all tasks at once, with an optional export prompt
- **Dark mode** — toggles system-aware between light and dark
- **Language switcher** — German 🇩🇪 and English 🇬🇧
- **Glassmorphism UI** — acrylic-style backdrop-filter effects throughout
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
| Dependencies | None |

---

## Browser Support

Flux works in all modern browsers that support `backdrop-filter`.

| Browser | Support |
|---|---|
| Chrome / Edge 76+ | ✅ Full |
| Firefox 103+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Legacy browsers | ⚠️ Works without blur effect |

---

## Roadmap

Planned features for future versions:

### High Priority
- [ ] **Due dates** — set a deadline per task, highlight overdue items
- [x] **Priorities** — High / Medium / Low with color coding
- [ ] **Search** — filter tasks by keyword in real time
- [ ] **Undo** — reverse the last action with `Ctrl+Z`

### Medium Priority
- [ ] **Tags / Labels** — custom categories for filtering
- [x] **Notes field** — longer description or details per task
- [ ] **Subtasks** — nested checklist inside a task
- [ ] **Sort options** — by date, priority, or alphabetically
- [ ] **Keyboard shortcuts** — e.g. `N` for new task, `D` for dark mode toggle

### Nice to Have
- [ ] **Statistics view** — completion rate, streaks, tasks per week
- [ ] **Focus mode** — show only the next open task
- [ ] **Pomodoro timer** — time tracking linked to a task
- [ ] **Browser notifications** — reminders for due dates
- [ ] **Multiple lists** — separate boards (e.g. Work / Personal / Shopping)
- [x] **PWA support** — installable on mobile home screen, offline-capable

---

## Changelog

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

<p align="center">Made with focus &nbsp;·&nbsp; Flux v1.0.2</p>
