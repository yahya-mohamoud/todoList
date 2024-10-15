import "./style.css"
import {manageDialog} from "./modules/manageDialog"
import { task } from "./modules/addTask"
import { addProjects } from "./modules/addProject"
import { handleDlt } from "./modules/handleDlt"
import { displayTasks } from "./modules/display"
import { getItem } from "./modules/localStorae"

manageDialog()
addProjects()
handleDlt()
displayTasks()
getItem()
