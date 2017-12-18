<template>
  <div class="firstPageClothing" v-if="dogFoods.datas" ref="dogFoods">
      <div>
        <div class="title">
          <img :src="dogFoods.datas[0].value[0].image">
        </div>
        <ul class="banner">
          <li v-for="(category, index) in dogFoods.datas[1].data.categorys" :key="index" @click="getCategory(index)">
            <div class="typenavimg">
              <a href="javascript:;">
                <img :src="isShow[index]?category.image_choose:category.image">
              </a>
            </div>
            <div class="twonavdiv" v-if="isShow[index]">
              <div class="weeb" v-for="(item, index) in category.small_cate.menus">
                <a href="javascript:;">
                  <img :src="item.image">
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div class="space"></div>
        <my-line/>
        <threefold :threefold="dogFoods.datas[dogFoods.datas.length-2].content_images"/>
        <div class="goodslist" ref="goodslist">
          <div>
            <div class="scroll-block border-1px" ref="scrollBlock">
              <ul class="brands-list" ref="brandsList">
                <li v-for="(menu, index) in dogFoods.datas[dogFoods.datas.length-1].menus" :key="index" @click="setList(menu.menu_param, index)">
                  <div :class="classList[index]?'pro-block':''">
                    <a href="javascript:;">{{menu.menu_name}}</a>
                  </div>
                </li>
              </ul>
            </div>
            <ul class="list_libox" v-if="setListParam">
              <li v-for="(li, index) in setListParam">
                <div class="index-listimg">
                  <a href="javascript:;">
                    <img class="image" :src="li.photo">
                    <div class="coutryimg">
                      <img :src="li.country_photo">
                    </div>
                  </a>
                </div>
                <div class="index-listpro">
                  <a href="javascript:;">
                    <h1>
                      <span>{{li.subject}}</span>
                    </h1>
                  </a>
                  <div>
                  <span class="cprice">
                    <span>¥</span>{{li.sale_price}}
                  </span>
                    <span class="tprice">{{li.dprice}}</span>
                  </div>
                  <div class="rating">
                    <span>{{li.comments}}</span>
                    <span>{{li.sold}}</span>
                  </div>
                </div>
                <div class="addcart">
                  <img src="//static.epetbar.com/static_web/wap/src/images/addcart.png">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import line from '../line/line.vue'
  import threefold from '../threefold/threefold.vue'
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        isShow: [true, false, false, false],
        param: 5,
        classList: [true, false, false, false, false, false]
      }
    },
    mounted () {
      this.$store.dispatch('reqDogFoods', this.getScroll)
    },
    methods: {
      getCategory (cIndex) {
        this.isShow = this.isShow.map((flag, index) => {
          if (index == cIndex) {
            return true
          } else {
            return false
          }
        })
      },
      getScroll () {
        if (!this.scrollX) {
          this.$nextTick(() => {
            this.scrollX = new BScroll(this.$refs.scrollBlock, {
              click: true,
              scrollX: true
            })
          })
        }
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.dogFoods, {
            click: true,
            probeType: 3,
            scrollbar: true
          })
          this.scroll.on('scroll', (event) => {
            //假设头部高度为80PX, 不想再去通信了~~~
            if (this.$refs.goodslist) {
              if(this.$refs.goodslist.getBoundingClientRect().top<= 80){
                this.$refs.scrollBlock.className = 'scroll-block border-1px floatBanner'
                this.$refs.scrollBlock.style.top =  -event.y + 'px'
              }else {
                this.$refs.scrollBlock.className = 'scroll-block border-1px'
                this.$refs.scrollBlock.style.top = 0
              }
            }
          })
        })
      },
      setList (param, cIndex) {
        this.param = param
        this.classList = this.classList.map((flag, index) => {
          if (index == cIndex) {
            return true
          } else {
            return false
          }
        })
      }
    },
    computed: {
      ...mapState(['dogFoods']),
      setListParam () {
        if (this.dogFoods.datas) {
          return this.dogFoods.datas[this.dogFoods.datas.length-1].list.filter((item, index) => {
            if(this.param ===5){
              return true
            }else if(item.cateid === this.param){
              return true
            }else {
              return false
            }
          })
        }
      },
      scrollY () {
        console.log(this.$refs.brandsList);
      }
    },
    components: {
      'my-line': line,
      threefold
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .firstPageClothing
    position absolute
    top 3.5rem
    left 0
    bottom 2rem
    right 0
    .title
      width 100%
      height 7rem
      > img
        width 100%
        height 100%
    .banner
      clearFix()
      position relative
      width 100%
      > li
        float left
        width 25%
        .typenavimg
          width 100%
          height 3rem
          > a
            display inline-block
            width 100%
            height 100%
            > img
              width 100%
              height 100%
        .twonavdiv
          position absolute
          bottom -9rem
          left 0
          width 100%
          height 9rem
          > .weeb
            float left
            width 33%
            height 4.5rem
            > a
              display inline-block
              width 100%
              height 100%
              > img
                width 100%
                height 100%

    .space
      width 100%
      height 9rem
    .goodslist
      .scroll-block
        width: 100%
        padding .4rem 0
        bottomBorder-1px(#e7e7e7)
        &.floatBanner
          position fixed
          left 0
          background #fff
          width 100%
          z-index 200
          box-shadow 2px 2px 2px #e9e9e9
        .brands-list
          clearFix()
          width 24rem
          height 1rem
          > li
            float left
            margin 0 .4rem
            width 3.2rem
            height 1rem
            div
              width 100%
              height 100%
              border-radius .2rem
              border 1px solid #f5f5f5
              background #f5f5f5
              text-align center
              font-size .5rem
              &.pro-block
                border 1px solid red
                >a
                  color red
              > a
                display inline-block
                width 100%
                height 100%
                line-height 1rem
                color #333
      .list_libox
        >li
          clearFix()
          bottomBorder-1px(#e7e7e7)
          width 100%
          height 6rem
          padding 0.5rem
          .index-listimg
            position relative
            float left
            width 30%
            >a
              display inline-block
              box-sizing border-box
              padding .5rem .2rem 0
              width 100%
              height 100%
              >img
                width 100%
                height 100%
            .coutryimg
              position absolute
              top 0
              left: -0.2rem
              width 1.3rem
              height 1.2rem
              border-radius 50%
              overflow hidden
              >img
                width 100%
                height 100%
          .index-listpro
            float left
            width 65%
            a
              display inline-block
              width 100%
              height 3.5rem
              h1
                height: 3rem
                line-height .5rem
                span
                  font-size 0.5rem
                  color #333
          .cprice
            color red
            font-size .8rem
            font-weight bold
            >span
              font-size .6rem
              font-weight 400
          .tprice
            margin-left 5px
            font-size .6rem
            color #666
            text-decoration line-through
          .rating
            margin-top -.5rem
            >span
              font-size .5rem
              color #999

          .addcart
            position absolute
            right 1.5rem
            bottom 1rem
            width 1.3rem
            height 1.3rem
            >img
              width 100%
              height 100%
</style>
