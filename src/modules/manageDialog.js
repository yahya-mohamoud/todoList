import { addTasks } from "./addTask"
import {  lclStor, tasks } from "./localStorage"

export function manageDialog () {
    const dialog = document.querySelector("dialog")
    const addTask = document.querySelector(".openBtn")
    const submitBtn = document.querySelector(".submit")
    const  closeBtn = document.querySelector(".close")

    addTask.addEventListener("click", () => {
        dialog.showModal()
    }) 

    closeBtn.addEventListener("click", () => {
        const input = document.querySelector("#title")
        const date = document.querySelector("#date")
        if(input.checkValidity() && date.checkValidity()) {
            dialog.close()

        }
    })

    submitBtn.addEventListener("click", (e) =>{
        e.preventDefault()
        addTasks()
        const title = document.querySelector("#title").value;
        const desc = document.querySelector("#desc").value;
        const priority = document.querySelector("#priority").value;
        const date = document.querySelector("#date").value;
      
        const taskObj = {
            title: title,
            desc: desc,
            priority: priority,
            date: date
        };

        tasks.push(taskObj)
        lclStor(tasks)

        dialog.close()
    })

} 