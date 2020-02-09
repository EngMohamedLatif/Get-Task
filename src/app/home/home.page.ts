import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuItems: Array<MenuItem> = [];
  constructor(public navCtrl: NavController) {



    this.menuItems = [
			{
				title: "Posts",
				img: "assets/home/post01.png",
				page: "posts"
			},
			{
				title: "Pick Image",
				img: "assets/home/camera.png",
				page: "/add-image"
      },
    ];
  }

  goToPage(page: any) {
		this.navCtrl.navigateForward(page);
	}

}
interface MenuItem {
	title: string;
	img: string;
	page: any;
}