import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {OrderComponent} from "./order/order.component";
import {CreateArticleComponent} from "./article/create-article/create-article.component";

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'articles/create', component: CreateArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
