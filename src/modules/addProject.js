export function  addProjects () {
    const container = document.querySelector(".container")
    const projects = document.querySelector(".projects")
    const svBtn = document.querySelector(".svBtn")
    const projInp = document.querySelector("#proj")

    svBtn.addEventListener("click", () => {
        const label = document.createElement("p")
        label.classList.add("label")
        label.innerText = `${projInp.value}`
        projects.appendChild(label)
        
        const btn = document.createElement("button")
        btn.classList.add("btn")
        btn.innerText = "Delete"
        projects.appendChild(btn)
    })

    

    
}   