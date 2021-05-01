import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">404 Invalid</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 80px;
      text-align: center; 
      color: red;
    }`]
})
export class Error404Component{
  constructor() {

  }

}