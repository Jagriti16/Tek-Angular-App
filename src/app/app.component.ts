import { Component } from '@angular/core';
import { JagzService } from './jagz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private jagz:JagzService){

  }
}
