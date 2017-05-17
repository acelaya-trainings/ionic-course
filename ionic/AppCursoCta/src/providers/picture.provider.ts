import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Picture } from "../types/picture";

export interface PictureProviderInterface {
    listPictures(): Promise<Picture[]>;

    createPicture(picture: Picture): Promise<Picture[]>;
}

@Injectable()
export class PictureProvider implements PictureProviderInterface {
    constructor(private storage: Storage) {

    }

    listPictures(): Promise<Picture[]> {
        return new Promise<Picture[]>((resolve, reject) => {
            this.storage.ready().then(() => {
                this.storage.get('pictures').then((pictures) => {
                    resolve(pictures || []);
                });
            });
        });
    }

    createPicture(picture: Picture): Promise<Picture[]> {
        return new Promise<Picture[]>((resolve, reject) => {
            this.listPictures().then((pictures) => {
                picture.id = new Date().getTime();
                pictures.push(picture);

                this.storage.set('pictures', pictures).then(() => {
                    resolve(pictures || []);
                });
            });
        });
    }
}