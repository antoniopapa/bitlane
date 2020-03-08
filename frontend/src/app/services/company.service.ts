import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = `${environment.url}/company`;
    }

    company() {
        return this.http.get(this.url);
    }

    update(id: number, data: any) {
        return this.http.put(`${this.url}/${id}`, data);
    }
}
