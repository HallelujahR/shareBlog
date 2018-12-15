<?php

namespace App\Http\Controllers\Api;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Transformers\ImageTransformer;
use App\Http\Requests\Api\ImageRequest;

class ImagesController extends Controller
{
    public function store(ImageRequest $request, Image $image)
    {

//        dd(env('APP_URL').'/uploads/'.date('Y-m-d'));
        
        $user = $this->user();
        $path = $request->file('image')->store(date('Y-m-d'));

        $image->path = env('APP_URL').'/uploads/'.$path;
        $image->type = $request->type;
        $image->user_id = $user->id;
        $image->save();

        return $this->response->item($image, new ImageTransformer())->setStatusCode(201);
    }
}