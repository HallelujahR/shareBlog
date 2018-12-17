<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\user_detail;
use Illuminate\Http\Request;
use App\Http\Requests\Api\UserRequest;
use App\Transformers\UserTransformer;

class UsersController extends Controller
{
    public function store(UserRequest $request)
    {

        $verifyData = \Cache::get($request->verification_key);

        if (!$verifyData) {
            return $this->response->error('验证码已失效', 423);
        }

        if (!hash_equals($verifyData['code'], $request->verification_code)) {
            // 返回401
            return $this->response->error('验证码错误',433);
        }

        $user = User::create([
            'name' => $request->name,
            'phone' => $verifyData['phone'],
            'password' => bcrypt($request->password),
        ]);

        #创建用户详情表
        user_detail::create([
            'uid'=> $user['id'],
        ]);

        // 清除验证码缓存
        \Cache::forget($request->verification_key);

        //注册同时返回 access_token等数据 使用了UserTransformer中间件
        return $this->response->item($user, new UserTransformer())
        ->setMeta([
            'access_token' => \Auth::guard('api')->fromUser($user),
            'token_type' => 'Bearer',
            'expires_in' => \Auth::guard('api')->factory()->getTTL() * 60
        ])
        ->setStatusCode(201);
    }


    //访问用户数据
    public function me()
    {
        return $this->response->item($this->user(), new UserTransformer());
    }

    //访问其他用户的数据
    public function all(Request $request)
    {
        return User::with('user_detail')->findOrFail($request->all()['id']);

    }

    public function update(UserRequest $request)
    {
        $user = $this->user();

        $attributes = $request->only(['name', 'email', 'introduction']);

        if ($request->avatar_image_id) {
            $image = Image::find($request->avatar_image_id);

            $attributes['avatar'] = $image->path;
        }
        $user->update($attributes);

        return $this->response->item($user, new UserTransformer());
    }
}