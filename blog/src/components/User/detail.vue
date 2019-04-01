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
      <el-form-item label="标签"
                    prop="hobby">

        <el-tag :key="index"
                :value="tag"
                v-for="(tag,index) in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag,index)">
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
        <el-button type="text"
                   style="margin-left:10px;"
                   @click="dialogVisible = true,clearTopic()">+添加标签</el-button>
        <!-- 弹出层 添加标签start -->
        <el-dialog title="添加标签"
                   :visible.sync="dialogVisible"
                   width="40%">
          <el-select v-model="defaultTopic"
                     style="width:90%;"
                     multiple
                     filterable
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
          <el-button type="text"
                     @click="topicAdd()">没找到想要的？点击此处创建一个标签</el-button>
          <span slot="footer"
                class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="dialogVisible = false,addPersonalTopic()">确 定</el-button>
          </span>
          <!-- 内层签到弹出层 创建标签 start -->
          <el-dialog width="30%"
                     title="创建标签"
                     :visible.sync="innerVisible"
                     append-to-body>
            <el-form :model="topicForm"
                     :rules="topicRules"
                     ref="topicForm"
                     label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="标签名称"
                            prop="name">
                <el-input v-model="topicForm.name"></el-input>
              </el-form-item>
              <el-form-item label="标签描述"
                            row="6"
                            prop="description">
                <el-input type="textarea"
                          v-model="topicForm.description"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           @click="subTopicForm('topicForm')">立即创建</el-button>
                <el-button @click="resTopicForm('topicForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <!-- 内层签到弹出层 创建标签 end -->
        </el-dialog>

        <!-- 添加标签 end -->

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
      //话题 标签 相关
      dynamicTags: [],// 爱好标签
      options: null,
      defaultTopic: [],
      inputVisible: false,
      inputValue: '',
      innerVisible: false,//topic 嵌套内层div
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

      dialogVisible: false,//控制弹出层
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
        ],

      },
      topicForm: {
        name: '',//标签名
        description: '', //标签描述
      },
      topicRules: {
        name: [
          { required: true, message: '请填写名称', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请填写标签介绍', trigger: 'blur' },
          { min: 1, max: 140, message: '长度在 1 到 140 个字符', trigger: 'blur' }
        ],
      },
    }
  },
  mounted () {
    this.loading = false;

  },
  computed: {

  },
  created: function () {
    this.getPersonalTopic();
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
      data.user_detail = Object.assign(data, data.user_detail);
      this.ruleForm = data.user_detail;

      // this.ruleForm['name'] = data.name;
      // this.ruleForm['phone'] = data.phone;
      // this.ruleForm['introduction'] = data.introduction;

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
          //提示信息
          this.$message({
            type: 'warning',
            message: '修改失败,带有 * 为必填项'
          });

          return false;
        }
      });
    },
    resetForm (formName) {
      //重制表单
      this.$refs[formName].resetFields();

    },
    //话题标签
    //删除标签触发
    handleClose (tag) {
      this.$confirm('您将移除此标签', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let paramObj = {
          'tag': tag,
          'uid': this.$route.params.id,
        };
        this.$server.delPersonalTopic(paramObj).then(data => {
          if (data == 1) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }

        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    //创建标签提交按钮
    subTopicForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let paramObj = this.topicForm;
          this.$server.storeTopic(paramObj).then(data => {
            this.innerVisible = false;
            //合并数组
            this.options = this.options.concat(data);
          }).catch(err => {
            // eslint-disable-next-line no-console
            console.log(err);
            //提示信息
            this.$message({
              type: 'warning',
              message: '添加失败，标签已存在'
            });
          });

        } else {
          // eslint-disable-next-line no-console
          console.log('error submit!!');
          return false;
        }
      });
    },
    //点击“没找到想要的”触发
    topicAdd () {
      // eslint-disable-next-line no-console
      console.log(this.dynamicTags);
      this.innerVisible = true;

    },
    //创建标签重制按钮
    resTopicForm (formName) {
      this.$refs[formName].resetFields();
    },
    //获取个人标签
    getPersonalTopic () {
      let paramObj = this.$route.params.id;
      this.$server.getPersonalTopic(paramObj).then(data => {
        for (let num = 0; num < data.length; num++) {
          this.dynamicTags.push(data[num]['topic_name']);
        }
        // eslint-disable-next-line no-console
        // console.log(this.dynamicTags);
      }).catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
    },
    //数组去重 用户已有的标签不会出现在选项当中
    clearTopic () {
      // 获取个性标签
      this.$server.allTopic().then(data => {
        this.options = data.data;
        for (let a = 0; a < this.options.length; a++) {
          for (let i = 0; i < this.dynamicTags.length; i++) {
            if (this.options[a].name == this.dynamicTags[i]) {
              this.options.splice(a, 1);
            }
          }
        }

      }).catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
    },
    //点击确定增加个人标签
    addPersonalTopic () {
      let newArr = {};
      let topicName = '';
      let topicAddName = [];
      for (let num = 0; num < this.defaultTopic.length; num++) {
        for (let topicNum = 0; topicNum < this.options.length; topicNum++) {
          if (this.options[topicNum]['id'] == this.defaultTopic[num]) {
            topicName = this.options[topicNum]['name'];
          }
        }
        newArr[num] = { 'topic_id': this.defaultTopic[num], 'topic_name': topicName };
        topicAddName[num] = topicName;
      }

      let paramObj = newArr;
      this.$server.addTopic(paramObj).then(data => {
        if (data == 1) {
          this.dynamicTags = this.dynamicTags.concat(topicAddName);
          this.clearTopic();
          this.defaultTopic = [];
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }

      }).catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
    },

  }
}
</script>