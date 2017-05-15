import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Task } from "./task";

@Injectable()
export class TaskService {
    constructor(private storage: Storage) {}

    listTasks(): Promise<Task[]> {
        return new Promise<Task[]>((resolve, reject) => {
            this.storage.ready().then(() => {
                /*this.storage.set('tasks', [
                    {
                        title: 'Foo',
                        completed: false,
                    },
                    {
                        title: 'Bar',
                        completed: false,
                    },
                    {
                        title: 'Baz',
                        completed: true,
                    },
                ]);*/

                this.storage.get('tasks').then((tasks) => {
                    resolve(tasks || []);
                });
            });
        });
    }

    createTask(task: Task): Promise<Task[]> {
        return new Promise<Task[]>((resolve, reject) => {
            this.listTasks().then((tasks) => {
                tasks.push(task);
                this.storage.set('tasks', tasks).then(() => {
                    resolve(tasks);
                });
            });
        });
    }
}