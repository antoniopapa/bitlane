import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(protected http: HttpClient) {
    }

    login(email, password) {
        return this.http.post(`${environment.url}/login`, {
            email: email,
            password: password
        });
    }
}
