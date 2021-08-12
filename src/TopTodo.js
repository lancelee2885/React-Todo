import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo( {todos} ) {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  if(!todos){
    return( <p>You got no todos</p>)
  }

  let todoPriorities = todos.map( todo => todo.priority)

  let minvalue =  Math.min(...todoPriorities)
  let topTodos = todos.filter( todo => todo.priority===minvalue)
  
  let todo = topTodos[ Math.floor(Math.random() * topTodos.length) ]
 
  return  <Todo {...todo}  />;
}

export default TopTodo;