<template>
  <div class="contribute-content">
    <el-card class="contribute-card">
      <div slot="header">
        <span class="contribute-title">在线投稿</span>
      </div>
      <el-form :model="contributeFrom" :rules="contributeRules" label-position="right" label-width="100px"
               ref="contributeFrom">
        <el-form-item label="稿件标题" prop="title">
          <el-input v-model="contributeFrom.title" placeholder="请输入稿件标题"></el-input>
        </el-form-item>

        <el-form-item label="作者姓名" prop="author">
          <el-input v-model="contributeFrom.author" placeholder="请输入作者姓名"></el-input>
        </el-form-item>

        <el-form-item label="联系方式" prop="tel">
          <el-input v-model="contributeFrom.tel" placeholder="请输入联系方式"></el-input>
        </el-form-item>

        <el-form-item label="所在单位">
          <el-input v-model="contributeFrom.organization" placeholder="请输入所在单位"></el-input>
        </el-form-item>

        <el-form-item label="新闻稿文件" prop="upload">
          <el-upload
            action="/contribute"
            :auto-upload="false"
            :limit="1"
            :on-change="handleFileChange">
            <el-button size="medium" type="primary">点击上传</el-button>
          </el-upload>
          <div class="upload-tip">新闻稿件文件类型为 Word 或 JPG 文件；若新闻稿件有多个文件（含图片），请先使用压缩软件打包成一个 ZIP 或 RAR 文件再上传</div>
        </el-form-item>

        <el-form-item label="投稿备注">
          <el-input v-model="contributeFrom.remark" type="textarea" :rows="3" placeholder="请输入投稿备注"></el-input>
        </el-form-item>
        <!-- 要么有投稿备注，要么有新闻稿文件 -->

        <el-form-item>
          <el-button type="primary" @click="submitForm">发送</el-button>
          <el-button @click="resetForm">清除</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { PostContribute } from '@/api'

export default {
  data() {
    return {
      contributeFrom: {
        title: '',
        author: '',
        organization: '',
        tel: '',
        remark: ''
      },
      contributeRules: {
        title: [
          {required: true, message: '请填写稿件标题', trigger: ['blur', 'change']}
        ],
        author: [
          {required: true, message: '请填写作者姓名', trigger: ['blur', 'change']}
        ],
        tel: [
          {required: true, message: '请填写联系方式', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.contributeFrom.validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.files)
          const form = this.contributeFrom
          PostContribute(form.title, form.author, form.tel, form.organization, form.remark, this.file)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleFileChange(file, fileList) {
      this.file = fileList.length ? fileList[0] : null
      console.log(file, fileList)
    },
    resetForm() {
      this.$refs.contributeFrom.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.contribute-content {
  @include limit-width();
  padding: 35px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .contribute-card {
    max-width: 650px;
    width: 100%;

    .contribute-title {
      font-weight: bold;
      font-size: 22px;
    }

    .upload-tip {
      font-size: 14px;
      color: #606266;
      line-height: 2em;
      padding-top: 1em;
    }
  }
}
</style>
