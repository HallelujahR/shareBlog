<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uid')->nullable(false)->unique('uid')->comment('关联的用户ID');
            $table->string('education')->nullable()->comment('教育');
            $table->string('occupation')->nullable()->comment('职业');
            $table->string('web')->nullable()->comment('个人站点');
            $table->string('backgroundImg')->nullable()->comment('用户背景图片');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}
