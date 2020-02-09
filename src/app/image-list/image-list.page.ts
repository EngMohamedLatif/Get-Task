import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.page.html',
  styleUrls: ['./image-list.page.scss'],
})
export class ImageListPage implements OnInit {

  constructor(private api: ApiServicesService) { }

  ngOnInit() {
  }

}
