<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var User $user */
                $user = Auth::user();

                $token = $user->createToken('auth')->accessToken;

                return [
                    'token' => $token
                ];
            }
        } catch (\Exception $exception) {
            return response([
                'error' => $exception->getMessage()
            ], 400);
        }

        return response([
            'error' => 'Invalid email/password'
        ], 400);
    }
}
