<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class user_detail extends Model
{
    //
    protected $fillable = [
        'education', 'occupation', 'hobby', 'uid', 'web'
    ];

    public function user(){
        return $this->belongsTo('App\Models\user_detail','uid');
    }


}
