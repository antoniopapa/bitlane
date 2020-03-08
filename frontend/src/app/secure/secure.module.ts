import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilesComponent} from './files/files.component';
import {SecureComponent} from './secure.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {CompanyComponent} from './company/company.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    declarations: [
        FilesComponent,
        SecureComponent,
        CompanyComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule
    ]
})
export class SecureModule {
}
