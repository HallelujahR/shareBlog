<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
    protected $fillable = [
        'uid','title','body','view_count','reply_count','agree_count','share_count','topic_id'
    ];
}
