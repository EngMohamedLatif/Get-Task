import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})


export class PostDetailsPage implements OnInit {
   postDetails:any;
  constructor(private api: ApiServicesService) { }

  ngOnInit() {
    this.postDetails = this.api.tmpVar;
    console.log("FFFFFFFFFFF",this.postDetails);
  }

}


export interface PostRequests {
  id?: any;
  userId?: any;
  title?: any;
  body?: any;
}
