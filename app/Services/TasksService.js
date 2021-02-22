import {ProxyState} from "../AppState.js"
import Task from "../Models/Task.js"
import {saveState} from "../Utils/LocalStorage.js"

class TasksService{

    constructor(){
        ProxyState.on('tasks', saveState)

    }

    create(rawTask){

        let temp = ProxyState.tasks
        let newTask = new Task(rawTask)
        temp.push(newTask)
        ProxyState.tasks = temp
    }

    complete(taskItemId){
        ProxyState.tasks.find(i => i.id == taskItemId).completed = true
        console.log(ProxyState.tasks.find(i => i.id == taskItemId))
        let completeButton = document.getElementById("complete")
        let completedText = document.getElementById("completed")
        // completeButton.setAttribute("hidden","")
        // completedText.removeAttribute("hidden")
    }
    delete(taskItemId){
        
        if (window.confirm("Are You Sure")){
        let temp = ProxyState.tasks
        let taskIndex = temp.findIndex(p => p.id == taskItemId)
        temp.splice(taskIndex, 1)
        ProxyState.tasks = temp
        }
    }
    addSubTaskCount(taskItemId){
        ProxyState.tasks.find(i => i.id == taskItemId).subtasksCount++
    }



}


export const tasksService = new TasksService