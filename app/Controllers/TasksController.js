import { ProxyState } from "../AppState.js"
import {tasksService} from "../Services/TasksService.js"



function _draw(){
    let tasksElem = document.getElementById("tasks")
    let template = ""
    ProxyState.tasks.forEach(task => template += task.Template)
    tasksElem.innerHTML = template 
    

}

export default class TasksController{

    constructor(){
        ProxyState.on("tasks", _draw)
        ProxyState.on("subtasks",_draw)
        _draw()
    }

    create(event){
    event.preventDefault()
        let form = event.target
        let rawTask = {title: form.title.value}
        tasksService.create(rawTask)


    }
    addSubTaskCount(taskItemId){
        tasksService.addSubTaskCount(taskItemId)
    }

    complete(event, taskItemId){
        event.preventDefault()
        tasksService.complete(taskItemId)
    }
    delete(taskItemId){
        tasksService.delete(taskItemId)
    }

}