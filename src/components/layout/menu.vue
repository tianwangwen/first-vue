<template>
  <div class="nav-bar">
    <el-row class="nav-bar-wrap">
      <el-col :span="8" v-for="item in menus">
        <router-link :to="item.url">
          <div class="grid-content"><i class="mb-5" v-bind:class="item.icon"></i><br>{{ item.text }}</div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          text: '首页',
          icon: 'el-icon-menu',
          url: 'index'
        },
        {
          text: '游戏',
          icon: 'el-icon-service',
          url: 'games'
        },
        {
          text: '个人中心',
          icon: 'el-icon-more',
          url: 'home'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    color: #2D2F33;
    font-size: 14px;
    box-shadow: 0 -2px 2px #f9f9f9;
  }
  .grid-content {
    text-align: center;
    margin-top: 13.5px;
  }
  .mb-5 {
    margin-bottom:5px;
  }
  .router-link-active {
    color: #67C23A;
  }
  @media screen and (max-width: 320px) {
    .nav-bar {
      font-size: 12px;
    }
    .grid-content {
      margin-top: 15px;
    }
  }
</style>
