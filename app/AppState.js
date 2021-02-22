import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Task from "./Models/Task.js"
import SubTask from "./Models/SubTask.js"
//let task1 = new Task ({title:"Clean Room"})
//let task2 = new Task ({title: "Wash Dishes"})

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

   /** @type {Task[]} */
  tasks = []
  
  /** @type {SubTask[]} */
  subtasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
