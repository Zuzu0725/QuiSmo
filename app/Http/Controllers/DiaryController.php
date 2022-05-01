<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diary;

class DiaryController extends Controller
{
    public function index(){
        return Diary::all();
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
