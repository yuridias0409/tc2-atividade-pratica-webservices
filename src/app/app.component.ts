import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Comunicação de um service Angular com Webservices';
  show2 = true;

  hiddenOrShow(){
    this.show2 = !this.show2;
  }
  
}
