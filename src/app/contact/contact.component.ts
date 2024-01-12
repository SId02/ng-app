import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    { img: "https://source.unsplash.com/1600x900/?electronics", title: "Slide 1" },
    { img: "https://source.unsplash.com/1600x900/?architecture", title: "Slide 2" },
    { img: "https://source.unsplash.com/1600x900/?nature", title: "Slide 3" }
  ];
}
