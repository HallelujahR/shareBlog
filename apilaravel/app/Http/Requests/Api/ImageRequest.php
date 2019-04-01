<?php

namespace App\Http\Requests\Api;

use Dingo\Api\Http\FormRequest;

class ImageRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        $rules = [
            'type' => 'required|string|in:avatar,topic,backgroundImg,photo,article',
        ];

        if ($this->type == 'avatar') {
            $rules['image'] = 'required|mimes:jpeg,jpg,bmp,png,gif';
        } else if($this->type == 'backgroundImg') {
//            $rules['image'] = 'required|image';
        } else if($this->type == 'topic') {

        } else if($this->type == 'photo') {

        } else if($this->type == 'article')

        return $rules;
    }

    public function messages()
    {
        return [

        ];
    }
}