<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::latest()->paginate(10);
        return response()->json([
            'success' => true,
            'data' => $articles
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'source_url' => 'required|url',  // REQUIRED for API
        ]);

        $article = Article::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $article,
            'message' => 'Article created successfully.'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Article::find($id);
        
        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $article
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $article = Article::find($id);
        
        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        $request->validate([
            'title' => 'sometimes|required|max:255',
            'content' => 'sometimes|required',
            'source_url' => 'sometimes|required|url',
        ]);

        $article->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $article,
            'message' => 'Article updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Article::find($id);
        
        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        $article->delete();

        return response()->json([
            'success' => true,
            'message' => 'Article deleted successfully.'
        ]);
    }

    /**
     * Get latest articles
     */
    public function latest($count = 1)
    {
        $articles = Article::orderBy('created_at', 'desc')
                          ->limit($count)
                          ->get();

        return response()->json([
            'success' => true,
            'data' => $articles
        ]);
    }
}
