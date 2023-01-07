import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup,  Validators } from '@angular/forms';




 
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})

export class UserSignupComponent implements OnInit {
 
 
 
  simpleUser : boolean = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
   
switchUser(){
 
     this.simpleUser= true ;
     
}
switchToDocter(){
 
  this.simpleUser= false;
  
}

 

 










  

}
// custom validator to check that two fields match
 

