import { displayTask } from "./display"

export function addTask () {
    const container = document.querySelector(".container")
    const openBtn = document.querySelector(".openBtn")
    const closeBtn = document.querySelector(".close")
    const submit = document.querySelector(".submit")
    const dialog = document.querySelector("dialog")

    function manageDialog () {
        openBtn.addEventListener("click", () => {
            dialog.showModal()
        })
        
        closeBtn.addEventListener("click", () => {
            dialog.close()
        })
    
        submit.addEventListener("click", (e) => {
            e.preventDefault()
            displayTask()
            dialog.close()
            
        })

    }

    manageDialog()
    
}



