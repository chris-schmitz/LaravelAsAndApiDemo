# Laravel as an API demo

## Prerequisites
- [Laravel](laravel.com)
- [Composer](https://getcomposer.org/)
- A development environment with mysql and a web server (apache or nginx suggested)
    - [Homestead](http://laravel.com/docs/5.1/homestead) suggested

## Setup
- Download or checkout this project
    - If you download the project, unzip it
    - Download it to a directory that is accessible by your web server
- Open a terminal and navigate to the root of the project
- Run the command `composer install` to install Laravel's dependencies
- Rename the file `.env.example` to `.env`
- In Mysql, create the database `inventory_demo`
- Open the `.env` file and set the `DB_DATABASE` value to `inventory_demo`
    - If you're not using homestead, you'll need to change the rest of the `DB_...` values to point to your mysql server
- Run the command `php artisan key:generate` to generate the laravel application key
- Run the command `php artisan db:seed`
    - This will create 10 random brands each with 50 random inventory records in your mysql database
 