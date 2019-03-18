<?php

namespace App\Http\Controllers\Api;

use App\Models\Topic;
use Illuminate\Http\Request;
use App\Transformers\TopicTransformer;
use App\Http\Requests\Api\TopicRequest;

class TopicsController extends Controller
{
    //查询所有话题
    public function index()
    {
        return $this->response->collection(Topic::all(), new TopicTransformer());
    }

    //创建topic
    public function store(TopicRequest $request, Topic $topic)
    {
        $topic->fill($request->all());
        $topic->uid = $this->user()->id;
        $topic->discuss_count = 0;
        $topic->save();

        return $this->response->item($topic, new TopicTransformer())
            ->setStatusCode(201);
    }

}