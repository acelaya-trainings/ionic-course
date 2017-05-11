import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Task } from "../../app/task";
import { TaskService } from "../../app/task.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Task[];

  constructor(public navCtrl: NavController, private taskService: TaskService) {
    this.tasks = this.taskService.listTasks();
  }

}
