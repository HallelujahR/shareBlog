<style lang="scss" scoped>
</style>

<template>
  <div>
    <i class="el-icon-edit"
       @click="showStoreArticle = true">发表文章</i>

    <el-dialog width="1000px"
               title="发表文章"
               :visible.sync="showStoreArticle"
               append-to-body>
      <el-select v-model="defaultTopic"
                 style="width:100%;margin-bottom:20px;"
                 multiple
                 :multiple-limit='1'
                 placeholder="请选择你发布的文章相关标签,最多选择1个">
        <el-option v-for="item in options"
                   :key="item.id"
                   :label="item.name"
                   :value="item.id">
        </el-option>
      </el-select>
      <el-input placeholder="请输入内容"
                v-model="title"
                id="title"
                style="margin-bottom:20px;">
        <template slot="prepend">文章标题</template>
      </el-input>
      <editor ref="content"></editor>
      <el-button type="success"
                 style="margin-top:20px;"
                 @click="storeArticle()">发布文章</el-button>
    </el-dialog>
  </div>
</template>

<script>
import editor from './editor.vue'
export default {
  data () {
    return {
      title: '',
      showStoreArticle: false,//创建提交文件是否弹出
      options: null,
      defaultTopic: [],
      refresh: true,
    }
  },
  mounted () {
    this.$server.allTopic().then(data => {
      this.options = data.data;

    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    })
  },
  components: {
    editor,
  },
  methods: {
    storeArticle () {

      let content = this.$refs.content.editorContent;//获取自组件中的值，文章内容

      let contentNum = content.replace(/<[^>]+>/g, "").length;//正则去空格判断是否全是空格

      if (contentNum < 1 || contentNum == 0) {
        this.$message.error('内容不能为空');
        return false;
      }

      let titleNum = this.title.replace(/\s+/g, "").length;//正则去空格判断是否全是空格
      if (titleNum < 1 || titleNum == 0) {
        this.$message.error('标题不能为空');
        return false;
      }
      //文章数据
      let paramObj = {
        topic_id: this.defaultTopic[0],
        body: content,
        title: this.title,
      }
      //发送数据到后台创建文章
      this.$server.storeArticle(paramObj).then(res => {
        //清空之前的数据 start
        this.$refs.content.editorContent = '';
        this.defaultTopic = [];
        this.title = '';
        this.showStoreArticle = false;
        this.$refs.content.clear();
        //清空之前的数据end
        // eslint-disable-next-line no-console
        this.$message({
          message: '发布文章成功',
          type: 'success'
        });

      }).catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      })


    }
  }

}
</script>


