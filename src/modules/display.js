export function displayTasks () {
    
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
}