<template>
  <div>
    <div class="cat_main" v-if="cats.length">
     <div class="cat">
       <div class="cat_li" v-for="(cat, index) in cats">
         <h4 :class="catIconClass(index+1)">{{cat.title}}</h4>
         <div class="cat_box">
          <div class="cat_boxli1" v-for="item in cat.data">
            <div class="cat_boxt">
              {{item.title}}
            </div>
            <div class="cat_boxb">
              <template v-for="sItem in item.data">
                <router-link to="/search">{{sItem.text}}</router-link><span>/</span>
              </template>
            </div>
          </div>
          <div class="cat_boxli2">
           <img :src="cat.imgSrc" alt="" />
         </div>
       </div>
      </div>
    </div>
  </div>

  <div class="rel">
    <el-carousel trigger="click" height="532px" arrow="never">
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.href"><img :src="banner.bannerImg"></a>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="notice">
    <div class="notice_m">
      <div class="notice_l"><span class="marl40">公告：</span><a href="" class="f1 marl20">梁平正式进入人民的生活中</a></div>
      <div class="notice_c"><span class="notice_hot">热点</span><span class="marr40">8-11 18:38</span><span class="rules">规则</span>每人每天最大购买金额不超过5000元</div>
      <div class="notice_r">8-11 12:38</div>
    </div>
  </div>
  <div class="main">
    <div class="new" v-if="recommend.leftAd">
      <div class="marcenter">
       <h1 class="title">新品推荐</h1>
       <div class="new_box mart20">
         <div class="new_adl"><router-link :to="'/goods/'+recommend.leftAd.id"><img :src="recommend.leftAd.imgSrc" /></router-link></div>
         <div class="new_goods">
           <dl v-for="(item, index) in recommend.newGoods" v-if="index < 6">
             <dt><router-link :to="'/goods/'+item.id"><img :src="item.imgSrc" alt=""></router-link></dt>
             <dd><router-link to="" class="f1">{{item.title}}</router-link></dd>
           </dl>
         </div>
         <div class="new_adr"><router-link :to="'/goods/'+recommend.rightAd.id"><img :src="recommend.rightAd.imgSrc" /></router-link></div>
       </div>
     </div>
   </div>
   <div class="m_box1 mart40" v-if="pick.length">
    <div class="marcenter">
     <h1 class="title">农家乐</h1>
     <div class="bar1">
       <a href="" class="marr20 f1"><</a>
       <span>采摘</span>
       <a href="" class="marl20  f1">></a>
       <router-link to="/news" class="fright f2">更多></router-link>
     </div>
     <div class="goods_box">
       <div class="goodsIterm" v-for="(item, index) in pick" v-if="index < 4">
         <div class="gItt">
           <router-link :to="'/goods/'+item.id"><img :src="item.imgSrc" /></router-link>
         </div>
         <div class="gItb">
          <p><a href="goods.html" class="f1 font14">{{item.title}}</a></p>
          <p><span class="f2">{{item.price}}</span> <span class="f3 through">{{item.priceN}}</span> /{{item.weight}}</p>
          <div class="g_show">
            <div class="fleft">
              <a href="javascript:void(0)"  class="g_up" @click="add(item)">∧</a><span class="g_span">{{item.nums}}</span><a href="javascript:void(0)" class="g_down" @click="reduce(item)">∨</a>
            </div>
            <div class="fright"><a href="javascript:void(0);" class="greey_a1" @click="addCart(item)">加入购物车</a></div>
          </div>
        </div>
      </div>
  </div>
  </div>
  </div>
  <div class="organic">
    <div class="marcenter">
      <h1 class="title">绿色有机</h1>
      <div class="bar1">
        <el-tabs value="tab_0" class="organic-tabs">
          <el-tab-pane :label="tab.title" :name="'tab_'+index" v-for="(tab, index) in organic.navs" :key="'organic_'+index">
            <div class="org_box">
              <div class="org_li" v-for="(org, org_index) in tab.data" v-if="org_index < 3">
                <div class="org_lit">
                  <p class="font20">{{org.title}}</p>
                  <p>{{org.dsc}}</p>
                </div>
                <div class="org_lib">
                  <router-link :to="'/goods/'+org.id"><img :src="org.imgSrc"  alt=""></router-link>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
     </div>
     
    <ul class="clearfix">
      <li v-for="hot in organic.hots">
        <router-link :to="'/goods/'+hot.id"><img :src="hot.imgSrc" alt="" /></router-link>
        <div class="org_on"></div>
        <div class="org_onp">
          <router-link :to="'/goods/'+hot.id">
            <span class="org_f">{{hot.title}}</span><br/>
            <span>{{hot.dsc}}</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
  </div>
  <div class="m_box1 mart40">
    <div class="marcenter">
     <h1 class="title">苗圃园艺</h1>
     <div class="bar1">
       <a href="" class="marr20 f1"><</a>
       <span>多肉植物</span>
       <a href="" class="marl20 f1 ">></a>
       <router-link to="/news" class="fright f2">更多></router-link>
     </div>
     <div class="goods_box">
      <div class="goodsIterm" v-for="item in garde">
         <div class="gItt">
           <router-link :to="'/goods/'+item.id"><img :src="item.imgSrc" /></router-link>
         </div>
         <div class="gItb">
          <p><a href="goods.html" class="f1 font14">{{item.title}}</a></p>
          <p><span class="f2">{{item.price}}</span> <span class="f3 through">{{item.priceN}}</span> /{{item.weight}}</p>
          <div class="g_show">
            <div class="fleft">
              <a href="javascript:void(0)"  class="g_up" @click="add(item)">∧</a><span class="g_span">{{item.nums}}</span><a href="javascript:void(0)" class="g_down" @click="reduce(item)">∨</a>
            </div>
            <div class="fright"><a href="javascript:void(0);" class="greey_a1" @click="addCart(item)">加入购物车</a></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="news">
    <div class="marcenter">
     <h1 class="title">资讯动态</h1>
     <div class="news_l">
      <h2>商务动态</h2>
      <p><router-link to="/dynamic" class="fright font14"> 更多 ></router-link></p>
      <ul>
        <li v-for="(item, index) in business" v-if="index < 4">
          <p class="font14 marb10"><span class="fright">{{item.date}}</span><router-link :to="'/dynamicDetail/'+item.id">{{item.title}}</router-link></p>
          <p>{{item.dsc}}</p>
        </li>
      </ul>
    </div>
    <div class="news_r">
     <h2>党的建设</h2>
     <p><router-link to="/dynamic" class="fright font14"> 更多 ></router-link></p>
     <ul>
      <li v-for="(item, index) in info" v-if="index < 4">
          <p class="font14 marb10"><span class="fright">{{item.date}}</span><router-link :to="'/dynamicDetail/'+item.id">{{item.title}}</router-link></p>
          <p>{{item.dsc}}</p>
        </li>
    </ul>
  </div>
  </div>
  </div>
  <div class="promise">
    <div class="mask"></div>
    <div class="promise_main" >
      <h1 class="title promise_title">我们承诺</h1>
      <div class="promise_box">
        <router-link to="/dynamicDetail/1"><img  src="static/images/shiping.png" height="183" width="126" alt="食品安全" /></router-link>
        <router-link to="/dynamicDetail/2"><img src="static/images/green.png" height="181" width="125" alt="食品安全" /></router-link>
        <router-link to="/dynamicDetail/3"><img src="static/images/zhijian.png" height="182" width="126" alt="食品安全" /></router-link>
      </div>
    </div>
  </div>
  <div class="cmd">
    <div class="marcenter">
     <h1 class="title">企业推荐</h1>
     <p class="left">
       <a href="" v-for="link in friendLink"><img :src="link.imgSrc" :alt="link.alt"></a> 
     </p>
   </div>
  </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      cats: [],
      banners: [],
      recommend: {},
      pick: [],
      organic: [],
      garde: [],
      business: [],
      info: [],
      friendLink: []
    }
  },
  computed: {
    isLogin() {
      return this.$utils.getLogin();
    }
  },
  methods: {
    catIconClass: function(index) {
      if(index) {
        return 'c_' + index + 'h4';
      }else {
        return 'c_1h4';
      }
    },
    add: function(item) {
      item.nums++;
    },
    reduce: function(item) {
      if(item.nums > 1) {
        item.nums--;
      }
    },
    addCart: function(goods) {
      this.$utils.addCart(goods)
    }
  },
  created() {

    this.$utils.$http.get('/static/data/home/cat.json')
    .then(res => {
        this.cats = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/banner.json')
    .then(res => {
        this.banners = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/new.json')
    .then(res => {
        this.recommend = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/pick.json')
    .then(res => {
        this.pick = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/pick.json')
    .then(res => {
        this.garde = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/organic.json')
    .then(res => {
        this.organic = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/business.json')
    .then(res => {
        this.business = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/business.json')
    .then(res => {
        this.info = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })

    this.$utils.$http.get('/static/data/home/friendLink.json')
    .then(res => {
        this.friendLink = res.data.data;
    })
    .catch(err => {
        console.log(err)
    })
  }
}
</script>

<style>


</style>
