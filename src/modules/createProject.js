export function createProject(name) {
    return {
        name, 
        tasks:[],
        addTask (task) {
            this.tasks.push(task)
        }
    }
}