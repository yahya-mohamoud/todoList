import { formatDate } from "./formatDate";

export function displayTasks() {
    const container = document.querySelector(".container")
    
    let storedArr = JSON.parse(localStorage.getItem("task")) || [];

    if (storedArr.length === 0) {
        const message = document.createElement("h3");
        message.innerText = "No tasks available.";
        container.appendChild(message);
        return; // Exit if no tasks
    }

    storedArr.forEach((element, index) => {

        element.forEach(task => {
            const title = task.title;
            const desc = task.desc;
            const priority = task.priority;
            const date = task.date;

            const contentDiv = document.createElement("div")
            contentDiv.classList.add("contentDiv")

            const titlePl = document.createElement("h3")
            titlePl.classList.add("titlePl")
            titlePl.innerText = `Title: ${title}`
            contentDiv.appendChild(titlePl)

            const descPl = document.createElement("h3")
            descPl.classList.add("descpl")
            descPl.innerText = `Desctription: ${desc}`
            contentDiv.appendChild(descPl)

            const priorityPl = document.createElement("h3")
            priorityPl.classList.add("priorityPl")
            priorityPl.innerText = `Priority: ${priority}`
            contentDiv.appendChild(priorityPl)

            const datePl = document.createElement("h3")
            datePl.classList.add("datePl")
            datePl.textContent = `Date: ${date}`
            contentDiv.appendChild(datePl)

            const dltBtn = document.createElement("button")
            dltBtn.classList.add("dltBtn")
            dltBtn.innerText = "Delete"
            contentDiv.appendChild(dltBtn)

            container.appendChild(contentDiv)

            const dltBtn1 = document.querySelector(".dltBtn")
            dltBtn1.addEventListener("click", () => {
                storedArr.splice(index, 1);
                localStorage.setItem("task", JSON.stringify(storedArr));
                // location.reload()
            })

        });
    })

}