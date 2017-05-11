import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Task } from "../../app/task";
import { TaskService } from "../../app/task.service";
import { TaskDetailPage } from "../task-detail/task-detail";
import { TaskCreatePage } from "../task-create/task-create";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Task[];

  constructor(
    public navCtrl: NavController,
    private taskService: TaskService,
    private modalController: ModalController,
  ) {
    this.taskService.listTasks().then((tasks) => {
      this.tasks = tasks;
    });
  }

  showDetail(task: Task) {
    this.navCtrl.push(TaskDetailPage, task);
  }

  addTask() {
    this.modalController.create(TaskCreatePage).present();
  }
}
