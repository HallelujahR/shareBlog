<?php

namespace App\Http\Requests\Api;

use Dingo\Api\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|between:1,30',
            'body' => 'required|string',
            'topic_id' => 'required|exists:topics,id',
        ];
    }

    public function attributes()
    {
        return [
            'title' => '标题',
            'body' => '内容',
            'topic_id' => '话题',
        ];
    }
}