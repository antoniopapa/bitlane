import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email = '';
    password = '';
    error = '';

    constructor(private loginService: LoginService, private router: Router) {
    }

    ngOnInit() {

    }

    submit(event) {
        event.preventDefault();
        this.loginService.login(this.email, this.password).subscribe(
            (res: any) => {
                localStorage.setItem('token', res.token);
                this.router.navigate(['/files'])
                this.error = '';
            },
            err => {
                console.log(err);
                this.error = err.error.error;
            }
        );
    }
}
