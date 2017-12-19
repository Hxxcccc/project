<template>
  <div v-if="allGoods.brand" class="container2" ref="container">
    <div>
      <div class="title">
        <span class="back" @click="comeBack"><</span>
        <span>全部品牌</span>
      </div>
      <div class="brand" v-for="(list, index) in allGoods.brand" :key="index">
        <div class="listTitle">{{list.order}}</div>
        <div class="list">
          <ul class="goods">
            <li class="lis" v-for="(item, index) in list.list" :key="index">
              <a href="javascript:;">
                <div class="logo">
                  <img :src="item.logo" alt="logo">
                </div>
                <div class="text">
                  <p class="name">
                    {{item.name}}
                  </p>
                  <p class="address">
                    {{item.address}}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="letters">
      <ul >
        <li class="letter" v-for="(list, index) in allGoods.brand" :key="index"
            :class="isAct[index]?'active':''" @click="scrollTo(index)">
          <span>{{list.order}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('reqAllGoods', this.newScroller)
    },
    props: {
      showAll: Function
    },
    data () {
      return {
        allHeight: [],
        isAct: [true]
      }
    },
    methods: {
      newScroller () {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.container, {
            click: true,
            probeType: 3,
            scrollbar: true
          })
          this.scroll.on('scroll', (event) => {
            //假设头部高度为80PX, 不想再去通信了~~~
            for (let i=0,length=this.allHeight.length;i<length;i++){
              if (this.allHeight[i] >= -event.y) {
                this.isAct = []
                this.isAct[i-1] = true
                break
              }
            }
          })
          let titles = document.getElementsByClassName('listTitle')
          for (let i=0,length=titles.length;i<length;i++){
            this.allHeight.push(titles[i].getBoundingClientRect().top)
          }
        })
      },
      comeBack () {
        this.showAll()
      },
      scrollTo (index) {
        this.isAct = []
        this.isAct[index] = true
        this.scroll.scrollTo(0 , -this.allHeight[index], 300)
      }
    },
    computed: {
      ...mapState(['allGoods'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .container2
    position absolute
    top 0
    bottom 2rem
    right 0
    left 0
    .title
      width 100%
      height 2rem
      line-height 2rem
      font-size 1rem
      text-align center
      .back
        position absolute
        left .2rem
    .brand
      width 100%
      .listTitle
        width 100%
        height 1rem
        padding-left .5rem
        line-height 1rem
        font-size .5rem
        background #f3f4f5
        color #999
      .list
        clearFix()
        .goods
          .lis
            float left
            bottomBorder-1px(#f3f4f5)
            width 100%
            height 3.6rem
            >a
              clearFix()
              display block
              box-sizing border-box
              width 100%
              height 100%
              padding .5rem
              >.logo
                float left
                box-sizing border-box
                padding .3rem
                border 1px solid #f3f4f5
                width 5rem
                height 100%
                >img
                  width 100%
                  height 100%!important
              .text
                float left
                box-sizing border-box
                width 5rem
                padding-top .5rem
                padding-left .5rem
                height 100%
                .name
                  color #333
                  font-size .6rem
                  padding-bottom .2rem
                .address
                  color #999
                  font-size .5rem
  .letters
    position fixed
    right: .8rem
    top 0
    bottom 0
    margin auto 0
    ul
      position absolute
      top 50%
      transform translateY(-50%)
      .letter
        width: .5rem
        height: .6rem
        text-align center
        &.active
          >span
            color red
        >span
          display block
          font-size .5rem

</style>
