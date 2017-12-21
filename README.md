# 仿E宠商城App #
## 项目架构 ##
### 1.项目目录


	├─ build/            # Webpack 配置目录
	├─ config/           # Webpack 配置目录
	├─ dist/			 # build 生成的生产环境下的项目
	├─ src/              # 源码目录（开发都在这里进行）
	│   ├─ api/ 		   # 发送ajax请求，返回响应
	│   ├─ common/         # 放置需要经由 Webpack 处理的静态文件
	│   ├─ components/     # 组件（COMPONENT）
	│   ├─ mock/		   # 模拟请求返回的数据
	│   ├─ pages/          # 路由组件目录
	│   │   ├─ classify/      # 分类路由组件
	│   │   ├─ firstPage/     # 首页路由组件
	│   │   ├─ shopping/      # 购物车路由组件
	│   │   ├─ userCenter/    # 登录/注册/用户中心路由组件
	│   ├── router/        # 路由配置（ROUTE）
	│   ├── store/         # vuex状态管理目录
	│   ├── App.vue        # 初始化页面
	│   ├── main.js        # 启动文件
	├── static/          # 放置无需经由 Webpack 处理的静态文件
	├── .babelrc         # Babel 转码配置
	├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
	├── .eslintrc        # ESLint 配置
	├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
	├── package.json     # （这个就不用多解释了吧）


### 2.技术选型
* vue全家桶
    * "vue": "^2.5.2"
    * "vue-lazyload": "^1.1.4"
    * "vue-router": "^3.0.1"
    * "vue-scroller": "^2.2.4" （这个也是滑屏库）
    * "vuex": "^3.0.1"
* 滑屏库
	* "better-scroll": "^1.6.0"
* UI组件库
	* "mint-ui": "^2.2.13"
* 验证码功能
	* http://www.jq22.com/jquery-info13064
* 数据通信
	* "axios": "^0.17.1" （AJAX请求）
	* "mockjs": "^1.0.1-beta3" （拦截指定的AJAX请求返回模拟的数据）
* 模块/组件化方案
	* ES6
* 工程化方案
	* webpack

## 项目功能 ##

### 1.  首页路由组件
* header头部
* content路由组件
	* 竖向滑屏采用的vue-scroller
	* 横向滑屏采用的better-scroller
	* 轮播图采用的mint-ui （通过elementui，swiper对比，mint-ui更加适合）
* dogFoods路由组件
	* 有两个过滤显示，分别采用不同的方法实现
		* 一个通过过滤器
		* 一个通过index下标实现

### 2. 分类路由组件
* category路由组件
	* 左边侧栏通过props通信将通过vuex请求回来的数据交给cargo组件进行右侧显示
* brand路由组件
* allGoods组件
	* 实现了类似微信通讯录的功能，借助了better-scroll的滑动，scroll事件以及scrollTo方法实现了自定义功能

### 3. 购物车路由组件
### 4. 登录/注册路由组件
* 其实里面有三个界面，登录、注册、用户中心。通过v-show进行页面的切换。（v-if会影响图片验证码功能）
* 图片验证码
	* 基于jQuery的图形验证码插件http://www.jq22.com/jquery-info13064
* 手机验证码
	* 借助的是容联-云通讯这个平台，使用node+express搭建的服务器发送的请求
	* 项目配置proxy服务器实现跨域功能

## 总结 ##
* 在项目中尝试了一些方法进行组件间通讯，踩了不少坑
* 借助vue全家桶和各种UI库能够很快速的开发，不管是搭建静态页面，还是实现一些页面功能
* 但实际上找各个插件和各个库花了大量时间，还需要去尝试兼容性，能不能很好的融入项目等等问题，转来转去最终还是那几个库稳定并且好用
* 所以，与其借助各个工具开发不如锻炼自己原生能力，通过vue去写各个功能模块，在mounted里面写原生js实现自己想要的功能
* 总之，各个成熟的库是可以信赖并且很好用的，但是要想实现1：1还原设计图还是需要自己设计一个功能组件。
