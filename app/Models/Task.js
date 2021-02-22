import { generateId } from "../Utils/GenerateId.js";
import {ProxyState} from "../AppState.js"


export default class Task{
    constructor({title, id=generateId(), completed = false, subtasksCount=0,color }){
        this.title = title
        this.id = id
        this.completed = completed
        this.subtasksCount = subtasksCount
        this.color = Math.ceil(Math.random()*6)
    }

    get Template(){

        return /*html*/ `
        <div class="card col-4">
            <div class="card-body color1 ${this.color==2 ? 'color2':'color1'} ${this.color ==3 ? 'color3': 'color1'} ${this.color ==4 ? 'color4': 'color1'} ${this.color ==5 ? 'color5': 'color1'} ${this.color ==6 ? 'color6': 'color1'} ">
                <h4>${this.title} <button id="complete" class="btn btn-success"onclick="app.tasksController.complete('${this.id}')">Done</button>
                <span class="h5"id ="completed" hidden>-     - Completed</span><span id="amount-complete">${this.subtasksCount}</span>
                <button class="text-danger close mt-3" onclick="app.tasksController.delete('${this.id}')"><span>&times;</span></button> </h4>
                <h5>Sub Tasks</h5>
                <form onsubmit="app.subtasksController.createSubTask(event,'${this.id}')">
                    <div class="form-group">
                        <input type="text" name="title" required maxlength=15 minlength=3 placeholder="Enter Task...">
                        <button class="btn-success btn" type="submit">Create SubTask</button>
                    </div>
                    <div class = "row">
                        ${this.Subtasks}
                    </div>
                </form>
            </div>
        </div>
        `
    }

    get Subtasks() {
        let template = ''
        let toppings = ProxyState.subtasks.filter(t => t.taskId == this.id)
        toppings.forEach(t => template += t.Template)
        console.log(toppings)
        return template
    }
}