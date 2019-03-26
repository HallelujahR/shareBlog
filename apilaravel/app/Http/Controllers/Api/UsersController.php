<?php

namespace App\Http\Controllers\Api;

use App\Models\topic;
use App\Models\User;
use App\Models\user_detail;
use App\Models\topic_user;
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

        $user->update($request->only('introduction','name'));//修改user表的基础信息

        $detail = user_detail::find($user->id)->update($request->only(['web','education','occupation']));//修改detail表的信息

        if(!$detail){
            return $this->response->setStatusCode(505);
        }

        return $this->response->item($user, new UserTransformer());

    }

    //用户对个人标签的操作
    public function storeTopic(Request $request){
        $user = $this->user();
        $newArr = [];

        foreach ($request->all() as $k => $v){
            $newArr[$k]['uid'] = $user->id;
            $newArr[$k]['topic_id'] = $v['topic_id'];
            $newArr[$k]['topic_name'] = $v['topic_name'];
        }
        if($res = topic_user::insert($newArr)){
            return 1;
        }else{
            return 2;
        };


    }

    //获取个人标签
    public function getPersonalTopic(Request $request){
        $topic = topic_user::where('uid','=',$request->all())->get();
        return $topic;
    }
    //删除个人标签
    public function delPersonalTopic(Request $request){
        $topic_id = topic::where('name','=',$request->all()['tag'])->first()['id'];
        $res = topic_user::where(['topic_id'=>$topic_id,'uid'=>$request->all()['uid']])->delete();
        return $res;
    }
}

