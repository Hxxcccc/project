<template>
  <div v-if="classify" class="container" ref="container">
    <div>
      <div class="brand" v-for="(list, index) in classify.brand" :key="index">
        <div class="title">
          —— {{list.title}} ——
      </div>
        <div class="list">
          <ul>
            <li v-for="(item, index) in list.list" :key="index">
              <a href="javascript:;">
                <div>
                  <img :src="item.logo" alt="logo">
                </div>
                <p class="name">
                  {{item.name}}
              </p>
                <p class="address">
                  {{item.address}}
              </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      classify: Object
    },
    mounted () {
      if(this.classify){
        this.scroll = new BScroll(this.$refs.container, {
          click: true
        })
      }
    },
    watch: {
      classify () {
        if(this.classify && !this.scroll){
          this.scroll = new BScroll(this.$refs.container, {
            click: true
          })
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .container
    position absolute
    top 1.7rem
    left 0
    bottom 2rem
    right 0
  .brand
    width 100%
    height 100%
    background #fff
    margin .2rem 0
    .title
      width 100%
      height 2.5rem
      font-size .5rem
      text-align center
      line-height 2.5rem
      color #999
    .list
      width 100%
      ul
        clearFix()
        >li
          float left
          width 33%
          height 5.4rem
          box-sizing border-box
          padding 0 .3rem .3rem
          text-align center
          div
            width 100%
            box-sizing border-box
            padding .3rem
            border 1px solid #f3f4f5
            height 2.5rem
            >img
              width 100%
              height 100%
          .name
            margin .3rem 0
            width 100%
            font-size .5rem
            color #333
          .address
            width 100%
            font-size .5rem
            color #999
</style>
