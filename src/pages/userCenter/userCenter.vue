<template>
  <div>
    <header v-show="isLogin && !isUserCenter">
      <div class="login_bg">
        <div class="head-top">
          <a href="javascript:;" class="page-top"><</a>
          <div class="block" @click="resgister">
            <a href="javascript:;">注册</a>
          </div>
        </div>
        <div class="mlogo">
          <img src="//static.epetbar.com/mpet/images/login/logo.png">
        </div>
        <div class="es_por">
          <div @click="loginOrRegister(0)" :class= {justYou:loginIn[0]} >
            <a href="javascript:;">普通登录</a>
            <span class="san"></span>
          </div>
          <div @click="loginOrRegister(1)" :class= {justYou:loginIn[1]}>
            <a class="selectTag" href="javascript:;">手机动态密码登录</a>
            <span class="san"></span>
          </div>
        </div>
      </div>
      <div v-show="loginIn[0]">
        <div class="login">
          <span class="mNameIco" ></span>
          <input type="text" placeholder="手机号/邮箱/用户名" class="username" name="username">
        </div>
        <div class="login">
          <span class="mNameIco icon" ></span>
          <input type="text" placeholder="输入密码" class="username" name="username">
        </div>
      </div>
      <div v-show="loginIn[1]">
        <div class="login">
          <span class="mNameIco phone"></span>
          <input type="text" placeholder="已注册的手机号" class="username" ref="resPhone" name="username">
        </div>
        <div class="login">
          <span class="mNameIco icon" ></span>
          <input type="text" placeholder="请输入图片内容" id="username"  class="username varify-input-code" name="username">
          <div id="mpanel1"></div>
        </div>
        <div class="login">
          <span class="mNameIco icon" ></span>
          <input type="text" placeholder="动态密码" class="username"  ref='dynamic' name="username">
          <a href="javascript:;" @click="sendCode(false)" class="get_phonepass">获取动态密码</a>
        </div>
      </div>
      <div class="forget">
        <a href="javascript:;">忘记密码？</a>
      </div>
      <div class="login_in">
        <button type="button" id="check-btn">登  录</button>
      </div>
      <div class="site">
        <p>合作网站登录</p>
        <a href="javascript:;"><img src="//static.epetbar.com/mpet/images/login/login_ico4.png"></a>
        <a href="javascript:;"><img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt=""></a>
      </div>
    </header>
    <div class="login" v-show="!isLogin && !isUserCenter">
      <span class="mNameIco phone"></span>
      <input type="text" placeholder="请输入手机号码" class="phoneNum" ref="phoneNum" @input="hasNumber" name="phone">
      <div class="next" :class={hasNum:isNum} @click="sendCode(true)">
        <a href="javascript:;">下一步</a>
      </div>
    </div>
    <div class="userCenter" v-if="isUserCenter">
      <h2>这里就是用户中心~~~~点击下面的按钮退出吧</h2>
      <button @click="comeBack">退出</button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import '../../common/js/jquery.min'
  import '../../common/js/verify'
  export default {
    data () {
      return {
        loginIn: [true, false],
        isNum: false,
        isLogin: true,
        isUserCenter: false,
        numberPh: '17688317990'
      }
    },
    mounted () {
      this.myVertify(this.numberPh)
    },
    methods: {
      loginOrRegister (index) {
        if(index === 0){
          this.loginIn = [true, false]
        }else {
          this.loginIn = [false, true]
        }
      },
      hasNumber () {
        if(this.$refs.phoneNum.value == 'undefiend' || this.$refs.phoneNum.value == '') {
          this.isNum = false
        } else {
          this.isNum = true
        }
      },
      resgister () {
        this.isLogin = false
      },
      sendCode (flag) {
          if(flag && this.isNum){
            var number = this.$refs.phoneNum.value.trim()
            console.log(this.$refs.phoneNum.value);
            this.$store.dispatch('reqVerificationCode', number)
            this.numberPh = number
            this.$refs.phoneNum.value = ''
          }else {
            var number = this.$refs.resPhone.value.trim()
            console.log(this.$refs.resPhone.value);
            this.$store.dispatch('reqVerificationCode', number)
            this.numberPh = number
          }
      },
      comeBack () {
        this.isUserCenter = false
      },
      myVertify (numberPh) {
        $('#mpanel1').codeVerify({
          type : 1,
          width : '3.7rem',
          height : '1.8rem',
          fontSize : '1rem',
          codeLength : 4,
          btnId : 'check-btn',
          ready : () => {
          },
          success : (obj) => {
            if(this.users && this.users.phone == numberPh && this.users.code == this.$refs.dynamic.value){
              this.$store.dispatch('reqLogin', this.users)
              this.isUserCenter = true
              this.$refs.resPhone.value = ''
              this.$refs.dynamic.value = ''
              console.log('验证匹配！');
            }else {
              console.log(this.$refs.dynamic.value);
              console.log(this.users.code);
              console.log(this.users.phone);
              console.log(numberPh);
              alert('手机号不匹配！');
            }
            setTimeout( () => {
              obj.refresh();
            },1000)
          },
          error : function() {
            alert('验证码不匹配！');
          }
        })
      }
    },
    computed: {
      ...mapState(['users'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  header
    .login_bg
      position relative
      width 100%
      height 7.5rem
      background url('./bg.png') no-repeat
      background-size 100% 100%
      .head-top
        width 100%
        .page-top
          float left
          width 1rem
          height 1rem
          color #fff
          margin .1rem 0 0 .3rem
        .block
          float right
          margin-right .3rem
          > a
            color #fff
            font-size .7rem

      .mlogo
        position absolute
        top 0
        bottom 0
        right 0
        left 0
        margin auto
        width 3rem
        height 2rem
        > img
          width 100%
          height 100%
      .es_por
        position absolute
        width 100%
        height 2rem
        line-height 2rem
        background rgba(255, 255, 255, 0.3)
        left 0
        bottom 0
        > div
          position relative
          float left
          width 50%
          text-align center
          font-size 0
          > a
            display inline-block
            width 3rem
            height 100%
            font-size .7rem
            color #fff
            &.selectTag
              width 6rem
          &.justYou
            .san
              display block
              box-sizing border-box
              width 0
              height 0
              border-left .7rem solid transparent
              border-right .7rem solid transparent
              border-bottom .7rem solid #fff
              position absolute
              bottom 0
              left 0
              right 0
              margin auto
    .login
      bottomBorder-1px(#d0d0d0)
      position relative
      left 1rem
      width 14rem
      height 2.2rem
      .mNameIco
        position absolute
        left 0.2rem
        top .6rem
        display inline-block
        width .8rem
        height .9rem
        background url("https://static.epetbar.com/mpet/images/ico3.png") no-repeat
        background-size 100% 100%
        &.phone
          left 0.3rem
          width .5rem
          background url("https://static.epetbar.com/mpet/images/ico1.png") no-repeat
          background-size 100% 100%
        &.icon
          top .5rem
          height 1rem
          background url("https://static.epetbar.com/mpet/images/ico4.png") no-repeat
          background-size 100% 100%
      .get_phonepass
        background #fff
        color #ff4259
        border 1px solid #eb4c33
        position absolute
        right .2rem
        font-size .5rem
        top 0.8em
        border-radius .1rem
        width 3.5rem
        text-align center
        padding 0.3rem 0
      .username
        position absolute
        top .1rem
        padding 0
        outline-offset 0
        left 1.4rem
        width 13rem
        height 2rem
        caret-color #999
        &::-webkit-input-placeholder
          color #d0d0d0
          font-size .7rem
          line-height 2rem
      #mpanel1
        position absolute
        z-index 5
        right 0.2rem
        top .2rem
        width 3.7rem
        height 1.8rem
        .verify-input-area
          width 0
          height 0
        .verify-change-area
          width 0
          height 0
    .forget
      position absolute
      right .8rem
      >a
        color #898989
        font-size .6rem
    .login_in
      margin 1.5rem 1rem 0
      width 14rem
      height 1.6rem
      border-radius .3rem
      background #2ec975
      font-size 0
      text-align center
      >button
        display inline-block
        margin-top .22rem
        width 8rem
        font-size .7rem
        color #fff
        border 0
        background #2ec975
    .site
      position absolute
      width 100%
      height 4.6rem
      text-align center
      bottom 2rem
      p
        color #d7d7d7
        font-size .7rem
        margin-bottom .5rem
      a
        display inline-block
        width 3rem
        height 3rem
        margin 0 .5rem
        >img
          width 100%
          height 100%
  .login
    bottomBorder-1px(#d0d0d0)
    position relative
    left 1rem
    width 14rem
    height 2.2rem
    .mNameIco
      position absolute
      top .6rem
      display inline-block
      height .9rem
      left 0.3rem
      width .5rem
      background url("https://static.epetbar.com/mpet/images/ico1.png") no-repeat
      background-size 100% 100%

    .phoneNum
      position absolute
      top .1rem
      padding 0
      outline-offset 0
      left 1.4rem
      width 13rem
      height 2rem
      caret-color #999
      &::-webkit-input-placeholder
        color #d0d0d0
        font-size .7rem
        line-height 2rem
    .next
      position absolute
      top 3rem
      width 90%
      height 1.5rem
      margin 0 5%
      text-align center
      background #d7d7d7
      font-size 0
      border-radius .5rem
      &.hasNum
        background #f03131
      >a
        display inline-block
        width 4rem
        line-height 1.5rem
        font-size .8rem
        color #fff

</style>
