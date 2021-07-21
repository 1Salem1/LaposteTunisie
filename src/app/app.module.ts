import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DestinataireComponent } from './destinataire/destinataire.component';
import { ArticleComponent } from './article/article.component';
import { ReviewComponent } from './review/review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedirectionComponent } from './redirection/redirection.component';
import { FormsModule } from '@angular/forms';








const routes: Routes = [ 
{ path: 'login', component: LoginComponent },
{ path: 'review', component: ReviewComponent },
{ path: 'inscription',component: RegisterComponent },
{ path: 'destinataire',component: DestinataireComponent },
{ path: 'article' ,component: ArticleComponent },
{ path: 'redirection',component: RedirectionComponent },
{ path: '', component: LoginComponent },

]


@NgModule({
  imports: [BrowserModule,ReactiveFormsModule, RouterModule.forRoot(routes),FormsModule],
  declarations: [AppComponent, LoginComponent, RegisterComponent, DestinataireComponent, ArticleComponent, ReviewComponent, RedirectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}