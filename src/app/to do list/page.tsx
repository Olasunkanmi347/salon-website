"use client"

import React, { useState } from 'react'

// Define the structure of a single Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type FilterStatus = 'all' | 'active' | 'completed';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<FilterStatus>('all');

  // Handle adding a new task
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: Date.now(), // Simple unique ID
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Handle toggling completion status
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle deleting a task
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter logic based on current state
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r gold bg-clip-text text-transparent from-sky-400 to-indigo-500 mb-6">
          Task Manager
        </h1>

        {/* Input Form */}
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm px-4 py-2 rounded-xl transition-colors shadow-lg shadow-sky-500/20"
          >
            Add
          </button>
        </form>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-4 text-xs font-medium">
          {(['all', 'active', 'completed'] as FilterStatus[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                filter === type
                  ? 'bg-slate-700 text-sky-400 border border-slate-600'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {filteredTodos.length === 0 ? (
            <p className="text-center text-sm text-slate-500 py-4">No tasks found.</p>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between bg-slate-900/40 border border-slate-800 rounded-xl p-3 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    className="w-4 h-4 rounded border-slate-700 text-sky-500 focus:ring-sky-500 focus:ring-offset-slate-900 bg-slate-800 cursor-pointer"
                  />
                  <span
                    className={`text-sm truncate select-none cursor-pointer ${
                      todo.completed ? 'line-through text-slate-500' : 'text-slate-200'
                    }`}
                    onClick={() => handleToggleTodo(todo.id)}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-slate-500 hover:text-rose-400 transition-colors p-1 opacity-100 sm:opacity-0 group-hover:opacity-100 focus:opacity-100"
                  aria-label="Delete task"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Counter Footer */}
        {todos.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-500">
            <span>
              {todos.filter((t) => !t.completed).length} items remaining
            </span>
            <button
              type="button"
              onClick={() => setTodos(todos.filter((t) => !t.completed))}
              className="hover:text-rose-400 transition-colors"
            >
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};