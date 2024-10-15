import { handleDlt } from "./handleDlt"
import { lclStor, tasks } from "./localStorae"

export function addTasks () {
    const title = document.querySelector("#title")
    const desc = document.querySelector("#desc")
    const priority = document.querySelector("#priority")
    const date = document.querySelector("#date")
    const container = document.querySelector(".container")

    const contentDiv = document.createElement("div")
    contentDiv.classList.add("contentDiv")
    
    const titlePl = document.createElement("h3")
    titlePl.classList.add("titlePl")
    titlePl.innerText = `Title: ${title.value}`
    contentDiv.appendChild(titlePl)

    const descPl = document.createElement("h3")
    descPl.classList.add("descpl")
    descPl.innerText = `Desctription: ${desc.value}`
    contentDiv.appendChild(descPl)

    const priorityPl = document.createElement("h3")
    priorityPl.classList.add("priorityPl")
    priorityPl.innerText = `Priority: ${priority.value}`
    contentDiv.appendChild(priorityPl)

    const datePl = document.createElement("h3")
    datePl.classList.add("datePl")
    datePl.textContent = `Date: ${date.value}`
    contentDiv.appendChild(datePl)

    const dltBtn = document.createElement("button")
    dltBtn.classList.add("dltBtn")
    dltBtn.innerText = "Delete"
    contentDiv.appendChild(dltBtn)

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")
    contentDiv.appendChild(checkbox)

    container.appendChild(contentDiv)

    // const todosObj = {
    //     title: title.value,
    //     desc: desc.value,
    //     date: date.value,
    //     priority: priority.value
    // }

    // tasks.push(todosObj)
    lclStor()
handleDlt()
}

// console.log(task);
