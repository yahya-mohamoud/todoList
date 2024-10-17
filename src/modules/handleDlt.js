export function handleDlt () {
    const dltBtn = document.querySelectorAll(".dltBtn")
    let storedArr = JSON.parse(localStorage.getItem("task")) || [];
    // console.log(storedArr);
    
    
    storedArr.forEach((element, index) => {
        const { title, desc, date, priority } = element;

    dltBtn.forEach(child => {
        
        child.addEventListener("click", () => {
            storedArr.splice(index, 1);
            const parent = child.parentNode
            parent.remove()
        })
    })

})
}
