import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './appComponent';
import { bottomContentComponent } from './Components/bottomContentComponent';
import { footerComponent } from './Components/footerComponent';
import { headerComponent } from './Components/headerComponent';
import { newArrivalComponent } from './Components/newArrivalComponent';
import { productNavComponent } from './Components/productNavComponent';
import { producteasyComponent } from './Components/producteasyComponent';
import { routing } from './Components/routeComponent';
import {dropdownComponent} from './Components/dropdownComponent';
import {productComponent} from './Components/productComponent';
import {tabComponent} from './Components/tabComponent';
import {Tabs} from './Components/Tabs';
import {ProductService} from './Services/productService';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    bottomContentComponent,
    footerComponent,
    headerComponent,
    newArrivalComponent,
    productNavComponent,
    producteasyComponent,
    dropdownComponent,
    productComponent,
    tabComponent,
    Tabs
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent,headerComponent,footerComponent]
})
export class AppModule { }
