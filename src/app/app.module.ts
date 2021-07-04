import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DestinataireComponent } from './destinataire/destinataire.component';
import { ArticleComponent } from './article/article.component';
import { ReviewComponent } from './review/review.component';
const routes: Routes = [ 
{ path: 'login', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'review', component: ReviewComponent },
{ path: 'inscription',component: RegisterComponent },
{ path: 'destinataire',component: DestinataireComponent },
{ path: 'article' ,component: ArticleComponent },
{ path: '', component: LoginComponent }
]


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, LoginComponent, RegisterComponent, DestinataireComponent, ArticleComponent, ReviewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}