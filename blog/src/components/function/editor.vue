<template>
  <div>
    <div ref="editor"
         style="text-align:left"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorContent: '',
      editor: null,
    }
  },
  mounted () {
    this.editor = new E(this.$refs.editor)
    this.editor.customConfig.onchange = (html) => {
      this.editorContent = html

    },
      this.editor.customConfig.customUploadImg = (files, insert) => {
        const fd = new FormData();
        fd.append('image', files[0]);
        fd.append('type', 'article');
        this.$server.uploadImg(fd).then(res => {

          insert(this.$URL + res);

        });
      };

    this.editor.create()
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    },
    clear: function () {
      this.editor.txt.html('');
    }

  },
}
</script>

<style scoped>
</style>