import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  UsernameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required,Validators.minLength(8)]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  

  mustMatch(){
   let password =  this.passwordFormControl.value;
   let confirmPassword= this.confirmPasswordFormControl.value;
   if(password === confirmPassword){ 
    return 

   }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
