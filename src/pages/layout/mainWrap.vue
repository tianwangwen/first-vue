<template>
  <div>
    <menu-btn></menu-btn>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import menu from '@/components/layout/menu'

export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'menu-btn': menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*@import '../assets/css/common.css';*/
</style>
