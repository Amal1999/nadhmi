import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DropdownWithIconComponent } from './form/dropdown-with-icon/dropdown-with-icon.component';
import { TextInputWithIconComponent } from './form/text-input-with-icon/text-input-with-icon.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PetOwnerComponent } from './user-signup/pet-owner/pet-owner.component';
import { DoctorComponent } from './user-signup/doctor/doctor.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    DropdownWithIconComponent,
    TextInputWithIconComponent,
    PetOwnerComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot()
   
    
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>""),
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
