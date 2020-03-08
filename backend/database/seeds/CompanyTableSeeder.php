<?php

use Illuminate\Database\Seeder;

class CompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Company::class)->create([
            'name' => 'Maklertest GmbH',
            'address' => 'Musterstraße 123',
            'post_code' => '12345',
            'city' => 'Berlin',
            'main_color' => '#241a48',
            'highlight_color' => '#ff650b'
        ]);
    }
}
