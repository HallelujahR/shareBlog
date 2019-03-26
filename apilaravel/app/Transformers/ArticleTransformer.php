<?php

namespace App\Transformers;

use App\Models\Article;
use League\Fractal\TransformerAbstract;

class ArticleTransformer extends TransformerAbstract
{
    public function transform(Article $article)
    {
        return [
            'id' => $article->id,
            'title' => $article->title,
            'body' => $article->body,
            'uid' => (int) $article->uid,
            'topic_id' => (int) $article->topic_id,
            'reply_count' => (int) $article->reply_count,
            'view_count' => (int) $article->view_count,
            'agree_count' => (int) $article->agree_count,
            'share_count' => (int) $article->share_count,
            'created_at' => $article->created_at->toDateTimeString(),
            'updated_at' => $article->updated_at->toDateTimeString(),
        ];
    }
}