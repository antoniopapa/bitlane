import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {Router} from "@angular/router";
import {Company} from "../../models/company";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
    company = new Company();
    form: FormGroup;

    main_color = '';
    highlight_color = '';

    constructor(private companyService: CompanyService,
                private router: Router,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            'name': '',
            'address': '',
            'post_code': '',
            'city': ''
        });

        this.companyService.company().subscribe(
            (company: Company) => {
                this.company = company;
                this.form.patchValue(this.company);
                this.main_color = this.company.main_color;
                this.highlight_color = this.company.highlight_color;
            },
            err => {
                console.log(err);
                if (err.status == 401) {
                    this.router.navigate(['/login']);
                }
            }
        )
    }

    submit(event) {
        event.preventDefault();
        const formData = this.form.getRawValue();

        formData['main_color'] = this.main_color;
        formData['highlight_color'] = this.highlight_color;

        this.companyService.update(this.company.id, formData).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }

}
