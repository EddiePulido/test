import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
    newProduct = {title:"",price:0, url:""};

  constructor(private _httpService: HttpService,private _router: Router) { }

  ngOnInit() {
  }

  createProduct(){
      console.log("Creating a new Product");
      const obs = this._httpService.createProduct(this.newProduct);
      obs.subscribe((data) => {
          console.log("Successfully created Product");
          this._router.navigate(["/products"]);
      })
      
      
  }



}
