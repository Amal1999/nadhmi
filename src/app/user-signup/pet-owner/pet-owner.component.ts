import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-owner',
  templateUrl: './pet-owner.component.html',
  styleUrls: ['./pet-owner.component.css']
})
export class PetOwnerComponent implements OnInit {

   
  cities : string[] = ["Ariana",
    "Ben Arous",
    "Bizerte",
    "El Kef",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Le Kef",
    "Mahdia",
    "Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
   "Tozeur",
    "Tunis",
    "Zaghouan"]
  genders : string[] = ["female","male"]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    email:['', Validators.required],
    birthDate:['', Validators.required],
    city:['', Validators.required],
    gender:['', Validators.required],
    password:['', Validators.required],
    confirmPassword:['',Validators.required],
   
     
  }, {
    validators: MustMatch('password', 'confirmPassword')
  }
  );
 
 
  

 
  
  onSubmit(){
 
      console.log('Name:' + this.profileForm.get('lastName')?.value);
       
     
    
  }

 

 










  

}
// custom validator to check that two fields match
function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }

}
