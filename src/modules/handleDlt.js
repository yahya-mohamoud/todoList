export function handleDlt () {
    const dltBtn = document.querySelectorAll(".dltBtn")
    dltBtn.forEach(child => {
        
        child.addEventListener("click", () => {
            const parent = child.parentNode
            parent.remove()
        })
    })
}
