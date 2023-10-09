<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name' => 'John Doe',
            'email' => 'John@exemple.com',
            'password' => bcrypt('password'),
        ]);

        $user->createToken('JohnDoe')->plainTextToken;

        User::factory()->count(5)->create();
    }

}
