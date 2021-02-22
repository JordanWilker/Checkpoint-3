import ValuesController from "./Controllers/ValuesController.js";
import TasksController from "./Controllers/TasksController.js";
import SubTasksController from "./Controllers/SubTasksController.js";
import { loadState } from "./Utils/LocalStorage.js";


class App {
  //valuesController = new ValuesController();
  tasksController = new TasksController();
  subtasksController = new SubTasksController();
}

window["app"] = new App();
loadState()
