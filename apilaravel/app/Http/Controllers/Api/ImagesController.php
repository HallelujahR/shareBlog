<?php

namespace App\Http\Controllers\Api;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Transformers\ImageTransformer;
use App\Http\Requests\Api\ImageRequest;
use App\Models\user_detail;
use App\Models\User;

class ImagesController extends Controller
{
    //管理用户上传背景图片 以及头像
    public function store(ImageRequest $request, Image $image)
    {

        $user = $this->user();

        //判断上传的是头像还是背景图片
        if($request->type == 'backgroundImg'){

            //获取用户的数据
            $userPath = user_detail::where('uid','=',$user->id)->first()['backgroundImg'];

            //判断图片是否存在 存的的话删除
            if($userPath != null || $userPath != '') {
                unlink(public_path().$userPath);
            }

            //获取路径 使用laravel 自带的 store方式进行上传文件
            $path = '/uploads/'.$request->file('image')->store(date('Y-m-d'));

            //查询出用户详情表的信息更改背景图片的路径
            $detail = user_detail::where('uid','=',$user->id)->update(['backgroundImg' => $path]);

//            $image->path = '/uploads/'.$path;
//            $image->type = $request->type;
//            $image->user_id = $user->id;
//            $image->save();

            return $detail;
        } else if($request->type == 'avatar'){

            //判断图片是否存在 存的的话删除
            if($user['avatar'] != null || $user['avatar'] != '') {
                unlink(public_path().$user['avatar']);
            }

            //获取路径 使用laravel 自带的 store方式进行上传文件
            $path = '/uploads/'.$request->file('image')->store(date('Y-m-d'));
            //查询出用户表的信息更改背景图片的路径
            $user = User::where('id','=',$user->id)->update(['avatar'=>$path]);

            return $user;
        }

        return $this->response->item($image, new ImageTransformer())->setStatusCode(201);
    }
}