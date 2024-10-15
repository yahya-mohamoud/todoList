export let tasks = []
export function lclStor () {
    localStorage.setItem("task", JSON.stringify(tasks))
    
}

export function getItem () {
    const storedArr = JSON.parse(localStorage.getItem("task"))
    
    storedArr.forEach(element => {
        const title = element.title;
        const desc = element.desc;
        const date = element.date;
        const priority = element.priority;

        
        console.log(`title: ${title}`, `desc: ${desc}`, `date: ${date}, Priority: ${priority}`);
        
        
    });
    
} 
  
    
 