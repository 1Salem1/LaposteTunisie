import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nom : string = ''; 
  show_nom : boolean = false ;

  raison_social : string = ''
  show_raison : boolean = false ;

  ad : string = ''
  show_ad : boolean = false ;

  tel : string = ''
  show_tel : boolean = false ;

  code_p : string = ''
  show_code_p : boolean = false ;

  modelChange_addresse(str:string): void{
    this.ad =str
    if (this.ad.length > 5){
      this.show_ad = true
    }
    else{this.show_ad = false}
        
      
        
    

  }
  modelChange_nom(str:string): void{
    this.nom =str
    if (this.nom.length > 5){
      this.show_nom = true
    }
    else{this.show_nom = false}
        
      
        
    

  }
  modelChange_raison_social(str:string):void {
    this.raison_social =str
    if (this.raison_social.length > 5){
      this.show_raison = true
    }
    else{this.show_raison = false}
        
  }
  constructor(){}

 
  modelChange_tel(str:string): void{
    this.tel  = str
    if (isNaN(parseInt(this.tel))){
        
    }
    else{
      if (this.tel.length == 8) 
      {this.show_tel = true}
      else {
        this.show_tel = false ;
      }
    }
        
      
        
    

  }


   
  modelChange_code_p(str:string): void{
    this.code_p  = str
    if (isNaN(parseInt(this.code_p))){
        
    }
    else{
      if (this.code_p.length == 4) 
      {this.show_code_p = true}
      else {
        this.show_code_p = false ;
      }
    }
  }
      

  ngOnInit() {
  }




}
