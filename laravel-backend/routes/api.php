<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ArticleController;

// Test route
Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'API is working!'
    ]);
});

// Article CRUD routes
Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::get('/articles/{id}', [ArticleController::class, 'show']);
Route::put('/articles/{id}', [ArticleController::class, 'update']);
Route::delete('/articles/{id}', [ArticleController::class, 'destroy']);

// Custom article routes
Route::get('/articles/search/{keyword}', [ArticleController::class, 'search']);
Route::get('/articles/latest/{count?}', [ArticleController::class, 'latest']);

// Storage route (keep this if you need it)
Route::get('/storage/{path}', function ($path) {
    // Your storage logic here
})->where('path', '.*')->name('storage.local');
