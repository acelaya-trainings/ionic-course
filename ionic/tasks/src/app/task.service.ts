import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Task } from "./task";

@Injectable()
export class TaskService {
    constructor(private storage: Storage) {}

    listTasks(): Promise<Task[]> {
        return new Promise<Task[]>((resolve, reject) => {
            this.storage.ready().then(() => {
                this.storage.get('tasks').then((tasks) => {
                    resolve(tasks);
                });
            });
        });
    }
}