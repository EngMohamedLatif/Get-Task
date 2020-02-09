import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { PostDetailsPage } from '../post-details/post-details.page';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  postRequests: PostRequests[];
  postUrl="https://jsonplaceholder.typicode.com/posts/";
  newUrl: any;


  today: number = Date.now();
  constructor(public router: Router, public navCtrl: NavController, private api: ApiServicesService) { }

  ngOnInit() {
    this.getPostData();
  }

  async getPostData() {
    await this.api.getPostData(this.postUrl)
      .subscribe(res => {
        console.log("GGGGGGGGGGGGGGGGGG", res);
        this.postRequests = res;
      });
  }

  async showDetails(post: PostRequests) {
    var postID = post.id;
    this.newUrl = this.postUrl + postID
    await this.api.getPostData(this.newUrl)
      .subscribe(res => {
        // console.log("GGGGGGGGGGGGGGGGGG", res);
        this.api.tmpVar = res;
        this.navCtrl.navigateForward('/post-details');
      });
  }



  // doInfinite(infiniteScroll) {
  //   this.page = this.page + 1;
  //   setTimeout(() => {
  //     this.api.getPostData(this.page)
  //       .subscribe(
  //         res => {
  //           this.data = res;
  //           this.perPage = this.data.per_page;
  //           this.totalData = this.data.total;
  //           this.totalPage = this.data.total_pages;
  //           for (let i = 0; i < this.data.data.length; i++) {
  //             this.posts.push(this.data.data[i]);
  //           }
  //         },
  //         error => this.errorMessage = <any>error);

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 1000);
  // }




}


export interface PostRequests {
  id?: any;
  userId?: any;
  title?: any;
  body?: any;
}
