<style lang="scss" scoped>
@import "@/assets/css/user/detail.scss";
</style>

<template>
  <div v-loading="loading"
       id="detail">
    <el-form :model="ruleForm"
             :rules="rules"
             :label-position="labelPosition"
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm">

      <el-form-item label="手机号">
        <el-input v-model="ruleForm.phone"
                  :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="昵称"
                    prop="name">
        <el-input v-model="ruleForm.name"
                  placeholder="昵称"></el-input>
      </el-form-item>

      <el-form-item label="一句话介绍"
                    prop="introduction">
        <el-input v-model="ruleForm.introduction"
                  placeholder="一句话介绍"></el-input>
      </el-form-item>

      <el-form-item label="教育经历"
                    prop="education">
        <el-input v-model="ruleForm.education"
                  placeholder="教育经历"></el-input>
      </el-form-item>

      <el-form-item label="职业"
                    prop="occupation">
        <el-input v-model="ruleForm.occupation"
                  placeholder="职业"></el-input>
      </el-form-item>
      <el-form-item label="爱好"
                    prop="hobby">
        <!-- <el-input v-model="ruleForm.hobby"
                  placeholder="爱好，如电竞，摄影，写作"></el-input> -->
        <el-tag :key="tag"
                v-for="tag in dynamicTags"
                closable
                style="margin-right:10px"
                :disable-transitions="false"
                @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm">
        </el-input>
        <el-button v-else
                   class="button-new-tag"
                   size="small"
                   @click="showInput">添加爱好</el-button>
      </el-form-item>

      <el-form-item label="个人站点"
                    prop="web">
        <el-input v-model="ruleForm.web"
                  placeholder="如：http://www.rivered.cn（如果没有默认为空）"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  data () {
    return {
      dynamicTags: ['篮球', '摄影', '看书'],// 爱好标签
      inputVisible: false,
      inputValue: '',

      detail: {},
      labelPosition: 'left',//form表单对齐方式

      loading: true,
      ruleForm: {
        phone: '',//手机号
        name: '',//昵称
        introduction: '',//一句话
        education: '',//教育
        occupation: '',//职业
        hobby: '',//爱好
        web: '',//个人站点

      },

      rules: {
        name: [
          { required: true, message: '请填写昵称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        introduction: [
          { required: true, message: '请填写介绍', trigger: 'blur' },
          { min: 3, max: 40, message: '长度在 3 到 40 个字符', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请填写教育', trigger: 'blur' },
          { min: 2, max: 40, message: '长度在 2 到 40 个字符', trigger: 'blur' }
        ],
        occupation: [
          { required: true, message: '请填写职业', trigger: 'blur' },
          { min: 2, max: 40, message: '长度在 2 到 40 个字符', trigger: 'blur' }
        ],
        web: [
          { pattern: /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\\/])+$/, message: '网站格式不正确', trigger: 'blur' }
        ]

      }
    }
  },
  mounted () {
    this.loading = false;
  },
  computed: {

  },
  created: function () {

    //获取路由传递过来的用户id
    this.id = this.$route.params.id;
    //数据
    let paramsObj = {
      id: this.id,
    }
    //发送axios 获取传递过来id对用的用户的数据
    this.$server.getInformation(paramsObj).then(data => {
      //获取到用户的基本信息
      this.user = data;
      //获取到用户的详细信息
      //把获取到的相信信息更新到当前页面
      this.ruleForm = data.user_detail;
      this.ruleForm['name'] = data.name;
      this.ruleForm['phone'] = data.phone;
      this.ruleForm['introduction'] = data.introduction;

    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    })
  },
  methods: {
    //用来设置vuex的数据
    ...mapActions([
      'setUser',
    ]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        //判断表单数据是否正确
        if (valid) {
          //获取表单数据
          let paramObj = this.ruleForm;
          //发送请求更改用户信息
          this.$server.editDetail(paramObj).then(data => {

            //提示信息
            this.$message({
              type: 'success',
              message: '修改成功 😊'
            });
            // eslint-disable-next-line no-console
            console.log(this.setUser);
            //成功后更改用户本地信息
            this.setUser(data);


          }).catch(err => {
            this.$message({
              type: 'warning',
              message: '修改失败 😓'
            });
            // eslint-disable-next-line no-console
            console.log(err);
          })

        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      //重制表单
      this.$refs[formName].resetFields();
    },
    //爱好 标签的相关操作
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    //添加爱好的相关操作
    showInput () {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    //添加爱好的相关操作
    handleInputConfirm () {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>