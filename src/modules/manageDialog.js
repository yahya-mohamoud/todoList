import { addTasks } from "./addTask"
import { addingTask, getItem, lclStor, tasks } from "./localStorae"

export function manageDialog () {
    const dialog = document.querySelector("dialog")
    const addTask = document.querySelector(".openBtn")
    const submitBtn = document.querySelector(".submit")
    const  closeBtn = document.querySelector(".close")

    addTask.addEventListener("click", () => {
        dialog.showModal()
    }) 

    closeBtn.addEventListener("click", () => {
        dialog.close()
    })

    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault()
        addTasks()
        const title = document.querySelector("#title").value;
        const desc = document.querySelector("#desc").value;
        const priority = document.querySelector("#priority").value;
        const date = document.querySelector("#date").value;
        // task.push(title)
        // task.push(desc)
        // task.push(priority)
        // task.push(date)
       addingTask(title, desc, priority, date)
        console.log(tasks);

        dialog.close()
        lclStor()
        getItem()        
    })

} 