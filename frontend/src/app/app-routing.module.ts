import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SecureComponent} from "./secure/secure.component";
import {CompanyComponent} from "./secure/company/company.component";
import {FilesComponent} from "./secure/files/files.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '',
        component: SecureComponent,
        children: [
            {path: 'files', component: FilesComponent},
            {path: 'company', component: CompanyComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
