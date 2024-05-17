export function addToLocalStorage(todoList) {
   const todoListCopy = JSON.parse(JSON.stringify(todoList))
   todoListCopy.forEach(todo => {
     todo.deadline = new Date(todo.deadline).toLocaleDateString()
   })
   localStorage.setItem("todoList", JSON.stringify(todoListCopy))
 }
