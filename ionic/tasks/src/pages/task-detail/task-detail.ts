import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Task } from "../../app/task";

/**
 * Generated class for the TaskDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage {

  task: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.task = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailPage');
  }

}
