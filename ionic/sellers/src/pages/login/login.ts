import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController, LoadingController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {

  password: string = '';
  @ViewChild('mainSlide')
  slides: Slides;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authProvider: AuthProvider,
    public toast: ToastController,
    public loadingCtrl: LoadingController,
  ) {}

  doLogin() {
    let loading = this.loadingCtrl.create({content: 'Validating key...'});
    loading.present();
    
    this.authProvider.validate(this.password).then((isValid: boolean) => {
      loading.dismiss();

      if (! isValid) {
        this.toast.create({
          message: 'Oops! Invalid password',
          duration: 3000,
          position: 'top'
        }).present();

        return;
      }

      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
    });
  }

  access() {

  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = 'progress';
  }

}
