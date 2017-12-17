<template>
    <div class="custom_titel">
      <div class="leftimg">
        <img :src="source">
      </div>
      <div class="more">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/10/bc4f0db8483e9084f5923cb92bfe2b7a.jpg">
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      source: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .custom_titel
    position relative
    width 100%
    height 3rem
    padding-left .5rem
    img
      width 50%
      height 3rem
    .more
      position absolute
      top 0.2rem
      right 0.5rem
      width 2.8rem
      height 2.5rem
      >a
        >img
          width 2.8rem
          height 2.5rem
</style>
