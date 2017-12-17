<template>
    <div class="currency-adcon2">
      <div class="divimg">
        <a href="javascript:;">
          <img :src="threefold[0][0].image">
        </a>
      </div>
      <div class="divimg divimg2">
        <a href="javascript:;">
          <img :src="threefold[1][0].image">
        </a>
        <a href="javascript:;">
          <img :src="threefold[1][1].image">
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      threefold: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .currency-adcon2
    width 100%
    height 11rem
    .divimg
      float left
      width 50%
      height 100%
      img
        width 100%
        height 100%
      &.divimg2
        img
          width 100%
          height 50% !important
</style>
