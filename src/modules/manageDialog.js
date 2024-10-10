export function manageDialog () {
    const dialog = document.querySelector("dialog")
    const title = document.querySelector("#title")
    const desc = document.querySelector("#desc")
    const priority = document.querySelector("#priority")
    const date = document.querySelector("#date")
    const container = document.querySelector(".container")
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
       console.log("wrk") 
    })

} 