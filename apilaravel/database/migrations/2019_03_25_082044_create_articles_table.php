<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('uid')->nullable(false)->comment('发布者id');
            $table->string('title')->nullable(false)->comment('文章标题');
            $table->string('body')->nullable(false)->comment('文章内容');
            $table->integer('view_count')->default(0)->comment('访问数量');
            $table->integer('reply_count')->default(0)->comment('回复数量');
            $table->integer('agree_count')->default(0)->comment('赞同数量');
            $table->integer('share_count')->default(0)->comment('分享/转发数量');
            $table->integer('topic_id')->nullable(false)->comment('话题id');
            $table->timestamps();
        });

        DB::statement('ALTER TABLE `articles` ADD FULLTEXT(`body`)');
        DB::statement('ALTER TABLE `sarticles` ADD FULLTEXT(`title`)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }

}
