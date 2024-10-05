export function handleCheck () {
    const checkBox = document.querySelectorAll(".checkbox")

    checkBox.forEach(check => {
        check.addEventListener("change", () => {

            if(check.checked) {

                const para = document.querySelectorAll(".para")
                const h3 = document.querySelector("h3")
                h3.style.textDecoration = "line-through"

                para.forEach(p => {
                    p.style.textDecoration = "line-through";
                })
                
            } else {
                const para = document.querySelectorAll(".para")
                const h3 = document.querySelector("h3")
                h3.style.textDecoration = "none"
                para.forEach(p => {
                    p.style.textDecoration = "none"
                })
                
            }
        })

        
    })
}