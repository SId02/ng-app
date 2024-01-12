import { Component } from '@angular/core';
import UsersJson from '../users.json';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {

// Display data uisng json file
  Users: USERS[] = UsersJson;
  constructor(){
    console.log(this.Users);
  }

// Counter app
  public counter: number = 0;
  public increment() {
    this.counter++;
    return this.counter;
  }

  public decrement() {
    this.counter--;
    return this.counter;
  }

  public reset() {
    this.counter = 0;
    return this.counter;
  }

}
