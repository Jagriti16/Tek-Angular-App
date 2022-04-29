import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { JagzService } from '../jagz.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartitems:any
  totalPrice:any = 0
  constructor(private jagz:JagzService,private toastr:ToastrService,private route:Router) { 
    var url = "https://apifromashu.herokuapp.com/api/cakecart"
    let myheader = new HttpHeaders()
    myheader = myheader.append("authtoken",localStorage["token"])
    var options = {
      headers: myheader
    }
    var body = {}
    this.jagz.getCartItems(url,body,options).subscribe({
      next:(response:any)=>{
        console.log("response form cart items is ", response)
        this.cartitems = response.data
        if(this.cartitems){
          for(let x of this.cartitems){
            this.totalPrice += x.price * x.quantity
            console.log(`price ${x.price} and quantity ${x.quantity}`)
          }
        }
        this.jagz.cartitems = this.cartitems
        this.jagz.totalprice = this.totalPrice
      },
      error:(error)=>{
        console.log("error from cart items is  ", error)
      }
    })
    
  }
  paynow(){

    if(this.cartitems.length>0){
    var url = "https://apifromashu.herokuapp.com/api/addcakeorder"
    let myheader = new HttpHeaders()
    myheader = myheader.append("authtoken",localStorage["token"])
    var options = {
      headers: myheader
    }
    var body = {
      cakes: this.cartitems,
      price:this.totalPrice,
      name:localStorage["name"],
      address:localStorage["address"],
      city: localStorage["city"],
      pincode: localStorage["pincode"],
      phone: localStorage["phone"]

    }
    console.log("body is ",body)
    this.jagz.postForPayment(url,body,options).subscribe({
      next:(response)=>{
        console.log("response from payment is", response)
      },
      error:(error)=>{
        console.log("error from payment is", error)
      }
    })
    this.toastr.success('succesfully Placed')
    console.log(this.jagz.cakes,this.cartitems)
    //this.route.navigate(["/orderdetails"])
  }
  else{
    alert("Your cart is empty please add items")
    this.route.navigate([""])
  }
}
  ngOnInit(): void {
  }

}
