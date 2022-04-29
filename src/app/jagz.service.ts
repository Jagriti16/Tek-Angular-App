import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JagzService {

  PORT = 8080
  navigate:any = "/"
  email:any = ""
  cakeid:any
  address:any
  totalprice:any
  cakes:any
  cartitems:any
  length:any
  loggedinUser:any
  
  
  postForPayment(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  signup(url:any,body:any){
    return this.http.post(url,body)
  }

  login(url:any,body:any){
    return this.http.post(url,body)
  }

  getCakedetails(url:any){
      return this.http.get(url)
  }

  searchCakes(url:any){
    return this.http.get(url)
  }

  addCakeToCart(url:any,body:any , options:any){
    return this.http.post(url,body,options)

  }
  getCartItems(url:any,body:any , options:any){
    return this.http.post(url,body,options)

  }
  uploadImage(url:any,body:any,options:any){
    return this.http.post(url,body,options)

  }
  removeCakeFromCart(url:any,body:any,options:any){
    return this.http.post(url,body,options)

  }
  getpassword(url:any,body:any){

    return this.http.post(url,body)

  }

  price:any
  userdetails:any

  ascending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj1.price - obj2.price
    })
    return data
  }

  descending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj2.price - obj1.price
    })
    return data
  }
  constructor(private http: HttpClient) { }
}
