export function createTask (title, date, priority) {
    return {
        title,
        date,
        priority,
        completed: false,
    }
}