import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { OrderComponent } from './order/order.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { CardArticleComponent } from './article/card-article/card-article.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateArticleComponent } from './article/create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    OrderComponent,
    CardArticleComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
