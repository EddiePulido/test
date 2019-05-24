import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;
  productId: any;

  constructor(private route: ActivatedRoute,private _httpService: HttpService,private _router: Router) { }

  ngOnInit() {
      this.productId = this.route.snapshot.paramMap.get("id");
      console.log(this.productId);
      const obs = this._httpService.getProduct(this.productId);
      obs.subscribe((data) => {
          this.product = data['data'];
          console.log("Checking", this.product.id);
      })
  }

  editProduct(id){
      const obs = this._httpService.updateProduct(id,this.product);
      obs.subscribe((data) =>{
          console.log("Updating Product");
      })
  }

  deleteProduct(id){
      const obs = this._httpService.deleteProduct(id);
      obs.subscribe((data) => {
          console.log("Deleting Product");
          this._router.navigate(["/products"])
      })

      
  }

}
