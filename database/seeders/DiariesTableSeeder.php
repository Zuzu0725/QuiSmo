<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiariesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('diaries')->insert([
            [
                'date' => '2022-04-28',
                'status' => 1,
                'comment' => 'テスト1'
            ],
            [
                'date' => '2022-04-29',
                'status' => 2,
                'comment' => 'テスト2'
            ],
            [
                'date' => '2022-04-30',
                'status' => 3,
                'comment' => 'テスト3'
            ]
            ]);
    }
}
