export let tasks = []
export function lclStor () {
    localStorage.setItem("task", JSON.stringify(tasks))
    
}

export function getItem () {
    const storedArr = localStorage.getItem("task")
    tasks = storedArr ? JSON.parse(storedArr):[];
    tasks.forEach(element => {
        console.log(element);
        
        
    });

  
} 
    
 export function addingTask (task) {
    tasks.push(task)
    lclStor()
 }   