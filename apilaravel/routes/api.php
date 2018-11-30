<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
    'namespace' => 'App\Http\Controllers\Api'
], function($api) {

	$api->group([
		'middleware' => ['api.throttle','cors'],
        'limit' => config('api.rate_limits.sign.limit'),
        'expires' => config('api.rate_limits.sign.expires'),
	],function($api) {

		// 短信验证码
	    $api->post('verificationCodes', 'VerificationCodesController@store')
	        ->name('api.verificationCodes.store');
		// 用户注册
		$api->post('users', 'UsersController@store')
		    ->name('api.users.store');
		$api->post('captchas', 'CaptchasController@store')
			->name('api.catchas.store');
		// 登录
		$api->post('authorizations', 'AuthorizationsController@store')
    	->name('api.authorizations.store');
    	// 刷新token
		$api->put('authorizations/current', 'AuthorizationsController@update')
		    ->name('api.authorizations.update');
		// 删除token
		$api->delete('authorizations/current', 'AuthorizationsController@destroy')
		    ->name('api.authorizations.destroy');

	});


	$api->group([
		//限制访问次数中间件
        'middleware' => ['api.throttle','cors','serializer:array'],
//        //跨域访问中间件
//        'middleware' => 'cors',
//        //返回数据结构选择 中间件 =》 目前是 array
//        'middleware' => 'serializer:array',
        'limit' => config('api.rate_limits.access.limit'),
        'expires' => config('api.rate_limits.access.expires'),
    ], function ($api) {
        // 游客可以访问的接口

        // 需要 token 验证的接口
        $api->group(['middleware' => 'token.canrefresh'], function($api) {
            // 当前登录用户信息
            $api->get('user', 'UsersController@me')
                ->name('api.user.show');
        });
    });

    
});



$api->version('v2', function($api) {
    $api->get('version', function() {
        return response('this is version v2');
    });
});