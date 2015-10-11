<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
 */

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Brand::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->company,
    ];
});

$factory->define(App\Inventory::class, function (Faker\Generator $faker) {
    $currencyDecimals = 2;
    $maxDollarValue = 999;
    $minDOllarValue = 0;
    $chanceOfGettingTrue = 80;

    return [
        'name' => $faker->company,
        'price' => $faker->randomFloat($currencyDecimals, $minDOllarValue, $maxDollarValue),
        'active' => $faker->boolean($chanceOfGettingTrue),
    ];
});
