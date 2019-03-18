<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class topic extends Model
{
    //
    protected $fillable = [
        'uid','name','description','discuss_count'
    ];
}
