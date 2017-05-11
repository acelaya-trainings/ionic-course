import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Task } from "./task";

@Injectable()
export class TaskService {
    constructor(private storage: Storage) {}

    listTasks(): Task[] {
        /*let promise = new Promise<Task[]>();

        this.storage.ready().then(() => {
            this.storage.get('tasks').then((tasks) => {
                observable.;
            });
        });

        return promise;*/

        return [
            {
                completed: false,
                title: 'Foo',
            },
            {
                completed: false,
                title: 'Bar',
            },
        ];
    }
}