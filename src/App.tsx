import React, { useState } from 'react';
import './App.css';
import { Task } from './types';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterTabs from './components/FilterTabs';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (title: string) => {
    setTasks(prev => [...prev, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filtered = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <AddTask onAdd={addTask} />
      <FilterTabs current={filter} onChange={setFilter} />
      <TaskList tasks={filtered} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
