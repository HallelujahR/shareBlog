<?php

namespace App\Http\Requests\Api;

use Dingo\Api\Http\FormRequest;

class TopicRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
        ];
    }

    public function attributes()
    {
        return [
            'name' => '话题名称',
            'description' => '话题描述',
        ];
    }
}