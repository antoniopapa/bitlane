import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {File} from "../../models/file";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
    files: File[];
    file: any;
    upload_text = 'Choose file';

    error = '';

    constructor(private fileService: FileService, private router: Router) {
    }

    ngOnInit() {
        this.fileService.all().subscribe(
            (files: File[]) => {
                this.files = files;
            }
        )
    }

    view(file: File) {
        return `${environment.url}/${file.path}${file.name}.${file.ext}`;
    }

    destroy(file: File) {
        this.fileService.destroy(file.id).subscribe(
            res => {
                this.files = this.files.filter(f => f.id != file.id);
            }
        )
    }

    changeFile(files: FileList) {
        this.file = files.item(0);
        this.upload_text = this.file.name;
    }

    upload(event) {
        event.preventDefault();
        if (!this.file) {
            alert('Please select a file!');
            return;
        }
        const data = new FormData();
        data.append('file', this.file);

        this.fileService.create(data).subscribe(
            (file: File) => {
                this.files.push(file);
                this.upload_text = 'Choose file';
                this.file = null;
                this.error = '';
            },
            err => {
                this.error = err.error.error;

                if (err.status == 401) {
                    this.router.navigate(['/login']);
                }
            }
        );
    }
}
