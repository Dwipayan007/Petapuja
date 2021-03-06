"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var productService_1 = require('../Services/productService');
var ProductModel_1 = require('../Models/ProductModel');
var productComponent = (function () {
    function productComponent(productService) {
        this.productService = productService;
        this.productData = new ProductModel_1.ProductModel(0, "Pappad");
    }
    productComponent.prototype.getProduct = function (id) {
        this.productService.getProductDataById(id);
    };
    productComponent = __decorate([
        core_1.Component({
            selector: "product-detail",
            templateUrl: "../App/Views/product.html"
        }), 
        __metadata('design:paramtypes', [productService_1.ProductService])
    ], productComponent);
    return productComponent;
}());
exports.productComponent = productComponent;
//# sourceMappingURL=productComponent.js.map