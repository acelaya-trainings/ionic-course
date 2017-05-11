import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Task } from "../../app/task";

/**
 * Generated class for the TaskDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-task-create',
  templateUrl: 'task-create.html',
})
export class TaskCreatePage {

  title: string;

  constructor(private viewController: ViewController) {}

  close() {
    this.viewController.dismiss();
  }

  save() {
    let newTask: Task = {
      completed: false,
      title: this.title
    }
    this.viewController.dismiss(newTask);
  }
}