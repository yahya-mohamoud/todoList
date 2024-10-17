export let tasks = []
export function lclStor (todo) {
    let todos = JSON.parse(localStorage.getItem('task')) || [];

    todos.push(todo)
    console.log(todos);
    


    localStorage.setItem("task", JSON.stringify(todos))
    
}

export function getItem () {
    const storedArr = JSON.parse(localStorage.getItem("task")) || [];
    
//     // storedArr.forEach(element => {
//     //     const title = element.title;
//     //     const desc = element.desc;
//     //     const date = element.date;
//     //     const priority = element.priority;

        
//     //     console.log(`title: ${title}`, `desc: ${desc}`, `date: ${date}, Priority: ${priority}`);
        
        
//     // });
    
} 
  
    
 