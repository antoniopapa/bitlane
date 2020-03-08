<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class)->create([
            'first_name' => 'Antonio',
            'last_name' => 'Papa',
            'email' => 'antoniopapa1991@gmail.com',
            'company_id' => 1
        ]);
    }
}
