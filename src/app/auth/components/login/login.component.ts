import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordFormControl = new FormControl('', [Validators.required,Validators.minLength(8)]);
  constructor(private authService: AuthService,private router: Router,private activatedroute: ActivatedRoute) { }
  ngOnInit(): void {
   
  }
  login(){

    console.log("login from login")
    let body = {
      username:this.emailFormControl.value,
      password:this.passwordFormControl.value
      
    }
    console.log(body);
    this.authService.login(body).subscribe({next:(response)=>{
     console.log(response)
      this.router.navigateByUrl("/admin/dashboard");      
    },
    error:(error)=>{
      console.log(error);
    },
  });
  }
}