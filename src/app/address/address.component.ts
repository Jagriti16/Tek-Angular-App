import { Component, OnInit } from '@angular/core';
import { JagzService } from '../jagz.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userdetails:any = {}
  constructor(private jagz : JagzService) {
   }

  addAddress(){
    this.jagz.userdetails = this.userdetails
  }

  ngOnInit(): void {
  }

}
