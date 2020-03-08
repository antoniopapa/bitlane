<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function company(Request $request)
    {
        return $request->user()->company;
    }

    public function update($id, Request $request)
    {
        $company = Company::find($id);

        $company->update($request->all());

        return $company;
    }
}
