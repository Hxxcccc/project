<template>
  <div>
    <ul class="cardComponent" v-if="cards.value">
      <li v-for="(item, index) in cards.value" :key="index">
        <a href="javascript:;">
          <div class="imgBox">
            <img :src="item.cover.image">
            <span class="cmallPlayIco"></span>
          </div>
          <div class="title">
            <div class="textover">{{item.title}}</div>
            <div>
              <span class="cmallViewIco"></span>
              <span>{{item.visit}}</span>
              <span class="sline">|</span>
              <span>{{item.time}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      cards: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .cardComponent
    width: 100%
    clearFix()
    li
      float left
      width 100%
      height 11.6rem
      .imgBox
        width 100%
        height 9rem
        >img
          width: 100%
          height: 100%
      .title
        margin .8rem 0
        width 100%
        text-align center
        .textover
          font-size .5rem
          line-height .5rem
          color #333
        >div
          margin-top .3rem
          font-size 0
          span
            font-size .5rem
            line-height .5rem
            color #999
          .sline
            margin 0 .3rem
          .cmallViewIco
            display inline-block
            width .5rem
            height .5rem
            background url("./view-black.png") no-repeat
            vertical-align top
            background-size 100%
            margin-right .2rem
</style>
