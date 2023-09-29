import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRoutingModule } from 'src/app/modules/admin/admin-routing.module';
import { AuthenservicesService } from 'src/app/services/authenservices.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthenservicesService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);   //not allowed to after login to loginpage
    }

  }

  onSubmit() {
    // Handle login logic here
    console.log('Login form submitted:', this.loginForm.value);

    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.loginForm.reset();

          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          this.loginForm.reset();

          alert(err.message);
        }
      );
    }
  }
  }


