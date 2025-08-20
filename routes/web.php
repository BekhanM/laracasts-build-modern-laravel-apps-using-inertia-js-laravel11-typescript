<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'frameworks' => [
            'Laravel',
            'Vue',
            'Inertia'
        ]
    ]);
});

Route::get('/users', function () {
    return Inertia::render('Users', [
        'time' => now()->addHours(2)->locale('da_DK')->toTimeString()
    ]);
});

Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::post('/logout', function () {
    dd('logging');
});
