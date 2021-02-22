import { generateId } from "../Utils/GenerateId.js";
import {ProxyState} from "../AppState.js"


export default class SubTask {
    constructor({title, id=generateId(), completed = false, taskId, color }){
        this.title = title
        this.id = id
        this.completed = completed
        this.taskId = taskId
        this.color = Math.ceil(Math.random()*6)
    }

    get Template(){
        return /*html*/ `
        <div class="card col-12">
            <div class="card-body color1 ${this.color==2 ? 'color2':'color1'} ${this.color ==3 ? 'color3': 'color1'} ${this.color ==4 ? 'color4': 'color1'} ${this.color ==5 ? 'color5': 'color1'} ${this.color ==6 ? 'color6': 'color1'}">
                <h4>${this.title} <button class=" btn ${this.completed==true ? 'btn-success':'btn-danger'}" onclick="app.subtasksController.complete('${this.id}')">Done</button>
                <button class="text-danger close mt-3"
                onclick="app.subtasksController.delete('${this.id}')"><span>&times;</span></button> </h4>
            </div>
            </div>
            `
    }

   
}