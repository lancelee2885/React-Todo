import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos(t => [...t, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    let todoCopy = [...todos];

    for (let todo of todoCopy) {
      if (todo.id === updatedTodo.id) {
        todo.title = updatedTodo.title;
        todo.description = updatedTodo.description;
        todo.priority = updatedTodo.priority;
      }
    }
    setTodos(todoCopy);
  }

  /** delete a todo by id */
  function remove(id) {
    let todoCopy = [...todos];
    todoCopy = todoCopy.filter(t => t.id !== id);
    setTodos(todoCopy);
  }
  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          <EditableTodoList
            todos={todos}
            update={update}
            remove={remove}
          /> OR
          <span className="text-muted">You have no todos.</span>
        </div>

        <div className="col-md-6">
          (if no top todo, omit this whole section)
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos} />
          </section>

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm
              initialFormData={
                { title: "New Todo", description: "What to do", priority: 2 }}
              handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;