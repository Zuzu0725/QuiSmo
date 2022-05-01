<?php

namespace App\Http\Controllers;

use App\Models\Diary;
use Illuminate\Http\Request;

class DiaryController extends Controller
{
    public function index(){
        return Diary::all();
    }

    public function show(Diary $diary)
    {
        return $diary;
    }

    public function store(Request $request)
    {
        return Diary::create($request->all());
    }

    public function update(Request $request, Diary $diary)
    {
        $diary->update($request->all());

        return $diary;
    }

    public function destroy(Diary $diary)
    {
        $diary->delete();

        return $diary;
    }
}
