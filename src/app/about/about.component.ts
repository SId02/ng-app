import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: any;
  constructor(private data: ServiceService) {}

  ngOnInit() {
    this.data.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
