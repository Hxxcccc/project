<template>
  <div v-if="cateList">
    <div class="hot-recom">
      <a href="javascript:;" class="title">{{cateList[0].title}}</a>
      <ul class="list">
        <li v-for="(list, index) in cateList[0].list" :key="index">
          <a href="javascript:;">
            <div class="rela">
              <img class="image" :src="list.photo">
            </div>
            <p>{{list.name}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="hot-recom" v-if="cateList[1]">
      <a href="javascript:;" class="title">{{cateList[1].title}}</a>
      <ul class="list">
        <li v-for="(list, index) in cateList[1].list" :key="index" class="hot">
          <a href="javascript:;" class="db">
            <div class="rela">
              <img class="image" :src="list.logo">
            </div>
            <p>{{list.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cateList: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .hot-recom
    width 100%
    background #fff
    margin-bottom .2rem
    padding 1rem 0
    .title
      display block
      margin-left .5rem
      width 100%
      height 1rem
      color #999
      font-size .5rem
    .list
      clearFix()
      width 100%
      >li
        float left
        box-sizing border-box
        padding .5rem
        width 33%
        height 5rerm
        &.hot
          width 50%
          height 4rem
          p
            margin-top .5rem
        .rela
          width 100%
          height 80%
          border 1px solid #f3f4f5
          >img
            width 100%
            height 100%
        p
          font-size .5rem
          text-align center
          color #333
          margin-top 1rem


</style>
