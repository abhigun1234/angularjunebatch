import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myvalue=false

  mystring='bye'

  fruits=['mango','banana','apple']

  clickMe()
  {

    alert(' hi guys how are you')
    this.myvalue=true
  }
}
