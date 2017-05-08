import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{foo}}</h1>
    <h2>{{bar}}</h2>
  `,
})
export class AppComponent  {
  foo = 'World';
  bar = 'acelaya';
}
