import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../pages/rest.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  errormsg: boolean = false;
  errorres: any

  constructor(private router: Router, private service: RestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['']
    })
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', Validators.required),
    //   password: new FormControl(null)
    // });
  }



  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
        if (res.status == 'success') {
          localStorage.setItem('username', res.response.name)
          this.router.navigate(['pages'])
          this.loginForm.reset()
        } else if (res.status == "failed") {
          this.errormsg = true
          this.errorres = res.response
        }
      })
      console.log(this.loginForm.value);
    }

    // this.service.login(this.loginForm)
    // this.router.navigate(['pages'])
  }
}
