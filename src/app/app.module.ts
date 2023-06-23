import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FutComponent } from './fut/fut.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProductCardComponent,
    FutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
