import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products = [];

  constructor(private route:ActivatedRoute,private _httpService: HttpService,private _router: Router) { }

  ngOnInit() {
      const obs = this._httpService.getAllProducts();
      obs.subscribe((data) => {
          this.products = data['data'];
      })
  }

  onEdit(id){
    this._router.navigate(['/products/edit/' + id]);
}

deleteProduct(id){
    const obs = this._httpService.deleteProduct(id);
    obs.subscribe((data) => {
        console.log("Deleting Product");
        this._router.navigate(["/products"])
    })

    

    
}


}
