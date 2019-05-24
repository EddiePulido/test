import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get("/allProducts");
  }

  createProduct(obj){
    return this._http.post('/newProduct',obj);
  }

  deleteProduct(id){
      console.log(id);
    return this._http.get("/products/delete/" + id)
  }

  updateProduct(id,body){
    return this._http.put("/products/update/" + id,body);
  }

  getProduct(id){
    return this._http.get("/product/" + id);
  }
}
