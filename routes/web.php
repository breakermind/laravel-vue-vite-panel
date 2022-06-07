<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Laravel
Route::get('/error', function () {
    return view('error');
});

// Web api dev routes
require('web-api.php');

// Vue login
Route::get('/login', function () {
    return view('welcome');
})->name('login');

// Vue fallback
Route::fallback(function () {
    return view('welcome');
});
