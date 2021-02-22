import { ProxyState } from "../AppState.js"
import {subtasksService} from "../Services/SubTasksService.js"

export default class SubTasksController{
    constructor(){
        
    }

    createSubTask(event,taskId){
    event.preventDefault()
        let form = event.target
        let rawSubTask = {title: form.title.value, taskId: taskId}
        subtasksService.create(rawSubTask)

    }

    delete(taskItemId){
        subtasksService.delete(taskItemId)
    }
    complete(taskItemId){
        subtasksService.complete(taskItemId)
    }
}