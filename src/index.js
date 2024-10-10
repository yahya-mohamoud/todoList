import "./style.css"
import {manageDialog} from "./modules/manageDialog"
import { getItem, lclStor } from "./modules/localStorae"
import { task } from "./modules/addTask"
import { addProjects } from "./modules/addProject"
import { handleDlt } from "./modules/handleDlt"

manageDialog()
lclStor()
addProjects()
handleDlt()
if (localStorage.getItem('tasks')) {
    getItem()
    
}