import { Component } from '@angular/core';
import {ProductService} from '../Services/productService';
import {  ProductModel} from '../Models/ProductModel';

@Component({
    selector: "product-detail",
    templateUrl: "../App/Views/product.html"
})
export class productComponent{
    constructor(
    public productService : ProductService
    ){ }
    public productData=new ProductModel(0,"Pappad");

    getProduct(id:number){
    this.productService.getProductDataById(id);
    }
    
} 
