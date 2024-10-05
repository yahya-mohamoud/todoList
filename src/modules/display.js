import { handleCheck } from "./handleCheck";
import { handleDlt } from "./handleDlt";
import { addTask } from "./task";

export function displayTask () {
    const container = document.querySelector(".container")
    const title = document.querySelector("#title")
    const desc = document.querySelector("#desc").value;
    const priority = document.querySelector("#priority")
    const date = document.querySelector("#date")

         let tasks = [];
        function AddTask (title, desc, priority, date) {
            this.title = title;
            this.desc = desc;
            this.priority = priority;
            this.date = date;
    
        }
    
        const task1 = new AddTask (title.value, desc.value, priority.value, date.value)
        tasks.push(task1)
        console.log(tasks);
                

    const allDiv = document.createElement("div")
    allDiv.classList.add("allDiv")

    const titleH3 = document.createElement("h3")
    titleH3.classList.add("titleH3")
    titleH3.innerText = `Title: ${title.value}`

    const descr = document.createElement("p")
    descr.classList.add("para")
    descr.textContent = `Description: ${desc}`

    const prior  = document.createElement("p")
    prior.classList.add("prior")
    prior.textContent = `priority: ${priority.value}`

     const dateT = document.createElement("p")
    dateT.innerText = `Date:${date.value}`

    const dltBtn = document.createElement("button")
    dltBtn.type = "button"
    dltBtn.classList.add("dltBtn")
    dltBtn.textContent = "Delete"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")


    
    allDiv.appendChild(titleH3)
    allDiv.appendChild(descr)
    allDiv.appendChild(prior)
    allDiv.appendChild(dateT)
    allDiv.appendChild(dltBtn)
    allDiv.appendChild(checkbox)
    container.appendChild(allDiv)

    

    handleDlt()
    handleCheck()
}

