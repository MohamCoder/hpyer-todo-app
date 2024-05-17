import './style.css'
import { hero } from './src/hero/hero'
import { navBar } from './src/navbar'
import { line } from './components/line'
const todoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []
let todosConfig = {
  editing: false,
  editTodo: null,
  isCountDown: true,
  sortMethod: (a,b) => a.deadline - b.deadline,
  sortType: "asc"
}
const appElement = document.getElementById('app')
navBar(appElement,todoList,todosConfig)
line(appElement)
hero(appElement,todoList,todosConfig)

