export function addToLocalStorage(todoList) {
  const todoListCopy = JSON.parse(JSON.stringify(todoList))
  todoListCopy.forEach(todo => {
    todo.deadline = [todo.deadline.getday(),todo.deadline.getHours(),todo.deadline.getMinutes()]
  })
  console.log(todoListCopy)
  localStorage.setItem("todoList", JSON.stringify(todoListCopy))
}
