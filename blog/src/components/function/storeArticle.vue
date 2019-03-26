<style lang="scss" scoped>
</style>

<template>
  <div>
    <i class="el-icon-edit"
       @click="showStoreArticle = true">发表文章</i>
    <el-dialog width="50%"
               title="发表文章"
               :visible.sync="showStoreArticle"
               append-to-body>

      <div id="editorElem"
           style="text-align:left"></div>
      <button v-on:click="getContent">查看内容</button>
    </el-dialog>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorContent: '',
      showStoreArticle: false,
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted () {
    var editor = new E('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  }
}

</script>


