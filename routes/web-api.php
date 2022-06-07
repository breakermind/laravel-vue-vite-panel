<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::post('/web/api/login', function () {
    if(!empty(request()->input('password'))) {
        return response()->json([
            'message' => trans('User has been logged'),
            'user' => ['id' => 123, 'name' => 'Zenek', 'image' => 'https://www.w3schools.com/howto/img_avatar.png'],
        ], 200);
    } else {
        throw new Exception(trans("Invalid credentials"), 401);
    }
});

Route::get('/web/api/logged', function () {
    if(Auth::user()) {
        return response()->json([
            'message' => trans('Authenticated via remember me'),
            'user' => ['id' => 123, 'name' => 'Zenek', 'image' => 'https://www.w3schools.com/howto/img_avatar.png'],
            // 'user' => Auth::user(),
        ], 200);
    } else {
        throw new Exception(trans("Unauthenticated"), 401);
    }
});

Route::get('/web/api/locale/:locale', function ($locale) {
    if($locale) {
        app()->setLocale($locale);
        request()->session()->put('locale', $locale);

        return response()->json([
            'message' => trans('Locale has been changed')
        ], 200);
    } else {
        throw new Exception(trans("Unauthenticated"), 401);
    }
});