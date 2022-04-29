import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JagzService } from '../jagz.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  emailid:any
  message:any
  constructor(private jagz:JagzService, private aroute:ActivatedRoute) { 
    // url - /recoverpassword
    // method - post
    // body - {email}
    this.emailid = this.jagz.email.toString()
    console.log("the email is",this.jagz.email)
    var url="https://apifromashu.herokuapp.com/api/recoverpassword"
    var body = {
      email:this.emailid
    }
    this.jagz.getpassword(url,body).subscribe({
      next:(response:any)=>{
        console.log("response from forgetpassword ",response)
        this.message = response.message
      },
      error:(error)=>{
        console.log("error from forget is",error)
      }
    })
  }

  ngOnInit(): void {
  }

}
