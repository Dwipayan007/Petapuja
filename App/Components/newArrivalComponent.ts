import { Component } from '@angular/core';
import {ProductService} from '../Services/productService';
import {  ProductModel} from '../Models/ProductModel';


@Component({
    selector: "new-arrival",
    templateUrl: "App/Views/newarrival.html",
    providers:[ProductService]
})

export class newArrivalComponent {
    public errorMessage:string;
    public products: ProductModel[];
     constructor(
    private productService : ProductService
    ){ }
     //private productData=new ProductModel(0,"Pappad");
   
    getProduct(id:number){
    this.productService.getProductDataById(id).subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error);
    } 
} 