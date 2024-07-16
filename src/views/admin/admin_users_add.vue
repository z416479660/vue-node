<template lang="html">
  <div class="admin_category_add">
    <nav-bread>
      <span>用户增加</span>
    </nav-bread>
    <div class="form-group">
      <p>用户名</p>
      <input type="text" v-model="username" placeholder='请输入用户名'>
    </div>

    <div class="form-group">
      <p>密码</p>
      <input type="text" v-model="password" placeholder='请输入密码'>
    </div>

    <div class="form-group">
      <p>管理员</p>
      <select v-model="admin">
        <option v-for="option in options" :key="option" :value="option">
          {{ option ? '是' : '否' }}
        </option>
      </select>
    </div>

    <button type="button" @click='AddUser'>添加</button>
  </div>
</template>

<script>
import navBread from '../../components/navBread'
export default {
  data(){
    return{
      username: '',
      password: '',
      admin: false,
      options: [true, false]
    }
  },
  components:{
    navBread
  },
  methods:{
    AddUser(){
      var that = this;
      this.$http.post('/admin/admin_user_add',{
        username: this.username,
        password: this.password,
        admin: this.admin
      }).then((response) => {
        console.log(response.data);
        if(response.data.code == 1){
          this.$message({
            message: '用户名已经存在，请重新输入新的用户名',
            type: 'error'
          });
        }
        if(response.data.code == 200){
          this.$message({
            message: '增加成功，1秒后跳转到用户列表',
            type: 'success'
          });
          setTimeout(function(){
            that.$router.push({path: '/admin_users'});
          },1000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
h1{
  margin-left: 120px;
}
button{
  margin-left: 120px;
}
</style>
