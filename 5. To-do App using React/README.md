# 📝 React Todo App

A simple, responsive, and interactive Todo application built with **React.js**. This project allows users to add, edit, complete, and delete tasks while following React best practices like state management with hooks, immutable updates, and reusable components.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- ⌨️ Add and save tasks using the **Enter** key
- 🎯 Auto-focus while editing a task
- 📱 Responsive design
- ♿ Accessible buttons using `aria-label`
- 🆔 Unique task IDs using UUID
- 📅 Stores task creation time

---

## 📸 Preview


---

## 🛠️ Built With

- React.js
- JavaScript (ES6+)
- CSS3
- HTML5
- UUID

---

## 📂 Project Structure

```
    ├── App.jsx
    ├── main.jsx
    ├── todo.css
    src/
    │
    ├── components/
    │      ├── Todo.jsx
    │      ├── TodoInput.jsx
    │      ├── TodoList.jsx
    │      └── TodoItem.jsx
    │
   
    
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-todo-app.git
```

### 2. Navigate into the project

```bash
cd react-todo-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 📦 Dependencies

```json
{
  "react": "^19.x",
  "react-dom": "^19.x",
  "uuid": "^11.x"
}
```

---

## 🎮 How to Use

### Add a Task

- Type a task into the input field.
- Click **Add Task** or press **Enter**.

### Edit a Task

- Click the **Edit** button.
- Modify the task.
- Press **Enter** or click **Save**.

### Complete a Task

- Click the **✔️** button.
- Click it again to undo.

### Delete a Task

- Click the **❌** button.

---

## 💡 React Concepts Used

- Functional Components
- React Hooks (`useState`)
- Controlled Components
- Conditional Rendering
- Event Handling
- Immutable State Updates
- Array Methods (`map`, `filter`)
- Dynamic Rendering with `key`
- Component-Based Architecture

---

## 📈 Future Improvements

- 🔍 Search tasks
- 📂 Filter (All / Active / Completed)
- 📌 Task priority
- 📅 Due dates
- 🌙 Dark mode
- 💾 Local Storage persistence
- ☁️ Backend integration
- 📱 Drag & Drop task ordering
- 📊 Task statistics
- ⏰ Reminder notifications

---

## 🧠 Learning Outcomes

This project helped practice:

- React state management
- Managing lists with unique keys
- Updating nested state immutably
- Building controlled forms
- Conditional UI rendering
- Responsive CSS layouts
- Accessibility best practices
- Writing cleaner and maintainable React code

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Soyam Kayasth**

GitHub: https://github.com/SoyamKayasth

---

⭐ If you found this project useful, consider giving it a star on GitHub!