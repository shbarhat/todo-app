# React TypeScript To-Do App

A responsive and well-tested To-Do List application built with React and TypeScript using only native React state management.

## Features

- Add, complete, delete tasks
- Filter by All / Active / Completed
- Responsive layout with Flexbox
- 90%+ test coverage with Jest + React Testing Library

## Getting Started

### Clone the repo

```bash
git clone https://github.com/shbarhat/todo-app.git
cd todo-app
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

### Run tests with coverage

```bash
npm test -- --coverage
```

## Folder Structure

```
src/
  components/
    AddTask.tsx
    TaskItem.tsx
    TaskList.tsx
    FilterTabs.tsx
  __tests__/
    App.test.tsx
  components/__tests__/
    AddTask.test.tsx
    TaskItem.test.tsx
  types.d.ts
  App.tsx
  App.css
```

## License

MIT