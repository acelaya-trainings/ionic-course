import { Picture } from "../types/picture";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Injectable } from "@angular/core";

export interface SharingProviderInterface {
    share(photo: Picture);
}

@Injectable()
export class SharingProvider implements SharingProviderInterface {
    constructor(private socialSharing: SocialSharing) {}

    share(picture: Picture): Promise<any> {
        return this.socialSharing.shareViaTwitter('Take a look at this cool #picture!', picture.path);
    }
}
