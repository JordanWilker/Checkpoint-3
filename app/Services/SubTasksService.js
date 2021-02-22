import {ProxyState} from "../AppState.js"
import SubTask from "../Models/SubTask.js"
import {saveState} from "../Utils/LocalStorage.js"
class SubTasksService{
    constructor(){
        ProxyState.on('subtasks', saveState)

    }
    create(rawSubTask,taskId){
        let temp = ProxyState.subtasks
        let newSubTask = new SubTask(rawSubTask)
        temp.push(newSubTask)
        ProxyState.subtasks = temp
        console.log(ProxyState.tasks);
      

    }

    delete(taskItemId){
        
        if (window.confirm("Are You Sure")){
        let temp = ProxyState.subtasks
        let taskIndex = temp.findIndex(p => p.id == taskItemId)
        temp.splice(taskIndex, 1)
        ProxyState.subtasks = temp
        }else{ProxyState.subtasks=ProxyState.subtasks}
    }
    complete(taskItemId){
        ProxyState.subtasks.find(i => i.id == taskItemId).completed = true
        console.log(ProxyState.tasks.find(i => i.id == taskItemId))
        let completeButton = document.getElementById("complete")
        let completedText = document.getElementById("completed")
        completeButton.setAttribute("hidden","")
        completedText.removeAttribute("hidden")
        ProxyState.subtasks = ProxyState.subtasks
    }
}

export const subtasksService = new SubTasksService