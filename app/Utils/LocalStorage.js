import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import SubTask from "../Models/SubTask.js";

export function saveState() {
    localStorage.setItem('taskCard', JSON.stringify({
        tasks: ProxyState.tasks,
        subtasks: ProxyState.subtasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskCard'))
    if (data) {
        ProxyState.tasks = data.tasks.map(coldPizza => new Task(coldPizza))
        ProxyState.subtasks = data.subtasks.map(t=> new SubTask(t))
    }
}