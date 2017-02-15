import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ProductModel} from '../Models/ProductModel';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
   
    //ProductModel =new ProductModel();
     constructor (private http: Http) {}
     
     // private instance variable to hold base url
     private baseUrl = 'http://localhost:58044/api/product/'; 
  getProductDataById(id:number):Observable<ProductModel[]> {
      debugger;
    let headers = new Headers({'Content-Type':'application/json'});
    
    //headers.append('Accept','application/json');
       let options = new RequestOptions({ headers: headers });
    return this.http.get(this.baseUrl+id)
        // ...and calling .json() on the response to return data
        .map(this.extractData)
        .catch(this.handleError); 
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}