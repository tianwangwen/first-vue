<template>
  <div class="games">
    <div class="content">
      <ul class="wrap">
        <router-link to="gamesCon"><el-button type="primary" icon="el-icon-menu" class="game-list">2048</el-button></router-link><br>
        <el-button type="primary" icon="el-icon-more" class="game-list">贪吃蛇</el-button>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap {
    padding-top: 10%;
    text-align: center;
  }
  .game-list {
    margin-bottom: 5%;
  }
</style>
