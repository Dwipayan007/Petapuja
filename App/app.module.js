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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var appComponent_1 = require('./appComponent');
var bottomContentComponent_1 = require('./Components/bottomContentComponent');
var footerComponent_1 = require('./Components/footerComponent');
var headerComponent_1 = require('./Components/headerComponent');
var newArrivalComponent_1 = require('./Components/newArrivalComponent');
var productNavComponent_1 = require('./Components/productNavComponent');
var producteasyComponent_1 = require('./Components/producteasyComponent');
var routeComponent_1 = require('./Components/routeComponent');
var dropdownComponent_1 = require('./Components/dropdownComponent');
var productComponent_1 = require('./Components/productComponent');
var tabComponent_1 = require('./Components/tabComponent');
var Tabs_1 = require('./Components/Tabs');
var productService_1 = require('./Services/productService');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                routeComponent_1.routing
            ],
            declarations: [
                appComponent_1.AppComponent,
                bottomContentComponent_1.bottomContentComponent,
                footerComponent_1.footerComponent,
                headerComponent_1.headerComponent,
                newArrivalComponent_1.newArrivalComponent,
                productNavComponent_1.productNavComponent,
                producteasyComponent_1.producteasyComponent,
                dropdownComponent_1.dropdownComponent,
                productComponent_1.productComponent,
                tabComponent_1.tabComponent,
                Tabs_1.Tabs
            ],
            providers: [
                productService_1.ProductService
            ],
            bootstrap: [appComponent_1.AppComponent, headerComponent_1.headerComponent, footerComponent_1.footerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map