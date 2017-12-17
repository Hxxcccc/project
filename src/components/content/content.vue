<template>
  <div>
    <div class="firstPageContent" ref="content">
      <scroller>
      <div class="contentInner">
        <mt-swipe :auto="4000" class="mySwiper" v-if="dogs.datas">
          <mt-swipe-item v-for="(swipe, index) in dogs.datas[0].value" :key="index">
            <img :src="swipe.image">
          </mt-swipe-item>
        </mt-swipe>
        <div class="contentNav">
          <ul class="contentNavList" v-if="dogs.datas">
            <li v-for="(menu, index) in dogs.datas[2].menus" :key="index">
              <a href="javascript:;">
                <img :src="menu.image">
              </a>
            </li>
          </ul>
        </div>
        <div class="surprise">
          <div class="surprise-title">
            <div class="titleImg">
              <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png">
            </div>
            <div class="titleText">距本场结束</div>
            <div class="time">
              <div class="time1">
                <span class="time1-1">{{this.hour>9?this.hour:'0'+this.hour}}</span>
                <span class="time-zi">:</span>
                <span class="time1-1">{{this.min>9?this.min:'0'+this.min}}</span>
                <span class="time-zi">:</span>
                <span class="time1-1">{{this.sec>9?this.sec:'0'+this.sec}}</span>
              </div>
            </div>
            <more/>
          </div>
          <div class="surprise-pro" ref="surprise">
            <div class="swiper-container" v-if="surprise.data">
              <div class="swiper-slide" v-for="(good, index)  in surprise.data['3'].goods">
                <div class="pro-block">
                  <a href="javascript:;">
                    <div>
                      <img class="image"
                           :src="good.image.image">
                    </div>
                    <div class="special">
                      <span>¥</span>
                      <span>{{good.sale_price}}</span>
                    </div>
                    <p>{{good.little_price}}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <my-line/>
        <div class="currency-adcon1">
          <div class="divboximg flex">
            <div class="divimg">
              <a href="javascript:;">
                <img name="750x370"
                     src="https://img2.epetbar.com/nowater/2017-12/15/13/42dc2731be284c68e0917d617b396fa1.jpg@!water">
              </a>
            </div>
          </div>
        </div>
        <my-line/>
        <div v-if="getSpecialList">
          <threefold :threefold="getSpecialList.threeImg.content_images"/>
        </div>
        <my-line/>
        <cardTitle :source="'https://img2.epetbar.com/nowater/2017-12/13/13/c07935b6d02b84cf457c3eaa40f95677.jpg'"/>
        <div v-if="getSpecialList">
          <card :cards="getSpecialList.cards[0]"/>
        </div>
        <my-line/>
        <cardTitle :source="'https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg'"/>
        <ul v-if="getSpecialList">
          <li v-for="(item, index) in getSpecialList.list" :key="index">
            <div class="divboximg">
              <div class="divimg">
                <a href="javascript">
                  <img :src="item.content_images[0][0].image">
                </a>
              </div>
            </div>
            <my-line/>
          </li>
        </ul>
        <cardTitle :source="'https://img2.epetbar.com/nowater/2017-12/13/14/41be554ac711057efbb82403f8618b72.jpg'"/>
        <mt-swipe :auto="4000" class="mySwiper" v-if="getSpecialList">
          <mt-swipe-item v-for="(item, index) in getSpecialList.carouselImgs[0].value" :key="index">
            <img :src="item.image">
          </mt-swipe-item>
        </mt-swipe>
        <my-line/>
        <cardTitle :source="'https://img2.epetbar.com/nowater/2017-12/13/14/77c0017136e51145788b7607a3a0914c.jpg'"/>
        <div v-if="getSpecialList">
          <card :cards="getSpecialList.cards[1]"/>
        </div>
        <my-line/>
        <cardTitle :source="'https://img2.epetbar.com/nowater/2017-12/13/13/e747ca83834dbd4d1f9663f11f7bf146.jpg'"/>
        <div v-if="getSpecialList">
          <card :cards="getSpecialList.cards[2]"/>
        </div>
        <div class="divimg3">
          <a href="javascript:;">
            <img name="750x61" src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water">
          </a>
        </div>
        <div class="footer">
          <div class="ft">
            <span class="bt">触屏版</span>
            <span><a href="javascript:;">手机客户端</a></span>
            <span><a href="javascript:;">关于我们</a></span>
            <span><a href="javascript:;">联系我们</a></span>
          </div>
          <div>© wap.xxxxx.com 版权：6666科技有限公司</div>
        </div>
      </div>
      </scroller>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import more from '../more/more.vue'
  import line from '../line/line.vue'
  import cardTitle from '../cardTitle/cardTitle.vue'
  import card from '../card/card.vue'
  import threefold from '../threefold/threefold.vue'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        sec: 0,
        min: 0,
        hour: 0
      }
    },
    mounted () {
      this.$store.dispatch('reqSurprise')
    },
    computed: {
      ...mapState(['dogs', 'surprise']),
      getSpecialList () {
        if(this.dogs.datas){
          let list = this.dogs.datas.filter((item) => {
            return item.type == '13'
          })
          list.splice(list.length-1,1)
          let threeImg = list[1]
          console.log(threeImg);
          list.splice(0,2)
          let carouselImgs = this.dogs.datas.filter((item) => {
            return item.index == '1347'
          })
          let cards = this.dogs.datas.filter((item) => {
            return item.type_name == '首页视频列表'
          })
          return {list, carouselImgs, cards, threeImg}
        }
      }
    },
    components: {
      more,
      'my-line': line,
      cardTitle,
      card,
      threefold
    },
    watch: {
      surprise () {
        if(!this.scroll){
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.surprise, {
              click: true,
              scrollX: true
            })
          })
        }
        if(this.surprise.data){
          let time = this.surprise.data['3'].time - this.surprise.sys_time
          if(!this.timer){
            this.timer = setInterval(() => {
              this.hour = Math.floor(time/3600)
              this.min = Math.floor((time - this.hour*3600)/60)
              this.sec = time - this.hour*3600 - this.min*60
              time--
            }, 1000)
          }else {
            clearInterval(this.timer)
            this.timer = setInterval(() => {
              this.hour = Math.floor(time/3600)
              this.min = Math.floor((time - this.hour*3600)/60)
              this.sec = time - this.hour*3600 - this.min*60
              time--
            }, 1000)
          }
        }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/carousel/carousel.css"
  .firstPageContent
    position absolute
    top 3.5rem
    left 0
    bottom 2rem
    right 0
    .contentInner
      .mySwiper
        width 100%
        height 7rem
        img
          width 100%
          height 100%
      .contentNav
        width 100%
        height 8rem
        .contentNavList
          clearFix()
          li
            float left
            width 20%
            height 4rem
            img
              width: 100%
              height: 100%
      .surprise
        clearFix()
        width 100%
        padding .5rem 0
        .surprise-title
          position relative
          width 100%
          height 1rem
          .titleImg
            float left
            margin-left -0.3rem
            width 4.5rem
            height 100%
            img
              width 100%
              height 100%
          .titleText
            float left
            font-size .6rem
          .time
            float left
            margin-left .3rem
            font-size .6rem
            .time1-1
              display inline-block
              width .8rem
              height .8rem
              line-height .8rem
              text-align center
              border 1px solid #999

        .surprise-pro
          padding-top 1rem
          width 100%
          .swiper-container
            clearFix()
            width 120%
            .swiper-slide
              float left
              width 25%
              text-align center
              .image
                width 100%
                height 5rem
              .special
                span
                  font-size .7rem
                  color red
              p
                font-size .6rem
                color #999

      .currency-adcon1
        width 100%
        height 8rem
        img
          width 100%
          height 100%
      .divboximg
        width 100%
        img
          width 100%
          height 100%
      .divimg3
        width 100%
        height 1.3rem
        img
          width 100%
          height 100%

    .footer
      padding-top 1.5rem
      width 100%
      height 2rem
      text-align center
      .ft
        line-height .7rem
        font-size .7rem
        padding-bottom .5rem
        >span
          margin 0 .2rem
          >a
            color black
      div
        line-height .6rem
        font-size .6rem
</style>
