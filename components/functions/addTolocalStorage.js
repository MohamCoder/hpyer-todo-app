export function addToLocalStorage(todoList) 
  const todoListCopy = []
  todoList.forEach(todo => {
    const todoCopy = {}
    todoCopy.deadline = new Date(todo.deadline).toLocaleDateString()
    todoCopy.id = todo.id
    todoCopy.description = todo.description
    todoCopy.interval = null
    todoListCopy.push(todoCopy)
  })
  console.log(todoListCopy)
  localStorage.setItem("todoList", JSON.stringify(todoListCopy))
}
