import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FileService {
    url = '';

    constructor(private http: HttpClient) {
        this.url = `${environment.url}/files`;
    }

    all() {
        return this.http.get(this.url);
    }

    create(data: any) {
        return this.http.post(this.url, data);
    }

    destroy(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
