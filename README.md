# ✅ ToDoList App

A clean, modern **To-Do List** web app built with **React**, **Tailwind CSS**, and **React Router**. No backend needed — everything runs in your browser!

---

## 🚀 Features

### 📌 Add Tasks
- Type a task name and click **+ Add** (or press Enter)
- Each task can have:
  - **Priority** — choose **High** (🔴), **Medium** (🟡), or **Low** (🔵)
  - **Due Date** — pick an optional date; overdue tasks are highlighted in red ⚠️

### ✅ Complete Tasks
- Click the **checkbox** next to any task to mark it done
- Completed tasks move to the **Completed** tab and show a green "Done!" badge

### 🗑️ Delete Tasks
- Click the **trash icon** on any task to remove it permanently

### 🔍 Search
- Use the **search bar** in the top navigation to filter tasks by name in real time

### 🔄 Drag & Drop Reordering
- Grab the **⠿ grip handle** on the left of any task and drag it up or down to reorder your list

### 💾 LocalStorage (Saves Automatically)
- Your tasks are **automatically saved to your browser** — they survive page refresh and browser restarts
- No account or internet connection needed

### 🧭 Two Pages
| Page | What it shows |
|------|--------------|
| 📝 All Tasks | Every task you've added |
| ✅ Completed | Only the tasks you've checked off |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev/) | UI framework |
| [React Router v7](https://reactrouter.com/) | Client-side routing (All Tasks / Completed) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Vite](https://vite.dev/) | Dev server & bundler |
| [@dnd-kit](https://dndkit.com/) | Drag-and-drop reordering |
| [Lucide React](https://lucide.dev/) | Icons |
| `localStorage` (browser API) | Persistent storage — no backend |

---

## 📁 Project Structure

```
src/
├── App.jsx                   # Root — state management, routing, localStorage
├── components/
│   ├── Layout.jsx            # Shared page wrapper (NavBar + SubNav + page content)
│   ├── NavBar.jsx            # Top bar with logo and search
│   ├── SearchBar.jsx         # Search input component
│   ├── SubNav.jsx            # Tab navigation (All Tasks / Completed)
│   ├── TaskForm.jsx          # Form to add a new task (title + priority + due date)
│   ├── TaskItem.jsx          # Single task row with drag handle, badge, and delete
│   └── TaskList.jsx          # List of tasks with drag-and-drop context
└── pages/
    ├── AllTasks.jsx          # All Tasks page
    ├── CompletedTasks.jsx    # Completed Tasks page
    └── NotFound.jsx          # 404 error page
```

---

## ⚙️ How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/) (or npm / yarn)

### Steps

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ToDoList

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev

# 4. Open your browser
# Go to: http://localhost:5173
```

### Build for Production

```bash
pnpm build       # Creates an optimised build in the /dist folder
pnpm preview     # Preview the production build locally
```

---

## 🧠 How the App Works (Simple Explanation)

1. **Tasks live in React state** inside `App.jsx` — this is the "brain" of the app.
2. **localStorage** keeps a copy of your tasks in the browser, so they don't disappear on refresh.
3. When you **add, complete, delete, or reorder** a task, the state updates and React re-renders only what changed.
4. **React Router** handles switching between the two pages without reloading the browser.
5. **@dnd-kit** tracks mouse/pointer movements and tells the app when to swap two tasks' positions.

---

## 📸 Screenshots

> Add a task with High priority and a past due date — it will show ⚠️ Overdue in red.
> Drag the grip handle (⠿) to change task order.
> Refresh the page — your tasks are still there!

---

Made with ❤️ using React + Tailwind CSS
