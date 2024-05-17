import { todoElement } from "../../components/todoElement";

export function todos(parentElement,todoList,todosConfig) {
  const todos = document.createElement("div");
  parentElement.append(todos);
  todos.className = "mt-16 lg:mx-64 md:mx-32 mx-8 flex flex-col space-y-8"
  todos.id = "todos"
  for (const todo of todoList) {
    const date = new Date()
    date.setDay(todo.deadline[0])
    date.setHours(todo.deadline[1])
    dare.getMinutes(todo.deadline[2])
    todo.deadline = date
    const interval = todoElement(todos, todo, todoList,todosConfig)
    todo.interval = interval
  }
}
