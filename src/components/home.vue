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
    <div class="i_user" >
      <p  class="borderb"><router-link to="/login"><img src="static/images/user.png" height="138" width="95" alt="个人中心" /></router-link></p>
      <p><router-link to="/register"><img src="static/images/etp.png" height="137" width="95" alt="企业用户" /></router-link></p>
    </div>
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
           <dl v-for="item in recommend.newGoods">
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
       <a href="" class="fright f2">更多></a>
     </div>
     <div class="goods_box">
       <div class="goodsIterm" v-for="item in pick">
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
            <div class="fright"><a href="flow.html" class="greey_a1">加入购物车</a></div>
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
       <h2>田园时蔬</h2>
       <h2>肉禽蛋品</h2>
       <h2>新鲜水果</h2>
       <a href="" class="fright f2">更多></a>
     </div>
     <div class="org_box">
      <div class="org_li">
        <div class="org_lit">
          <p class="font20">木耳菜</p>
          <p>叶子近似圆形，肥厚而黏滑</p>
        </div>
        <div class="org_lib">
          <a href="goods.html"><img src="static/images/org_goods.jpg" height="214" width="348" alt=""></a>
        </div>
      </div>
      <div class="org_li">
        <div class="org_lit">
          <p class="font20">木耳菜</p>
          <p>叶子近似圆形，肥厚而黏滑</p>
        </div>
        <div class="org_lib">
          <a href="goods.html"><img src="static/images/org_goods.jpg" height="214" width="348" alt=""></a>
        </div>
      </div>
      <div class="org_li">
        <div class="org_lit">
          <p class="font20">木耳菜</p>
          <p>叶子近似圆形，肥厚而黏滑</p>
        </div>
        <div class="org_lib">
          <a href="goods.html"><img src="static/images/org_goods.jpg" height="214" width="348" alt=""></a>
        </div>
      </div>
    </div>
    <ul class="clearfix">
      <li>
        <a href="goods.html"><img src="static/images/org_goods1.jpg" height="200" width="200"  alt="" /></a>
        <div class="org_on"></div>
        <div class="org_onp">
          <a href="goods.html">
            <span class="org_f">豌豆角</span><br/>
            <span>美味又可口</span>
          </a>
        </div>
      </li>
      <li>
        <a href="goods.html"><img src="static/images/org_goods1.jpg" height="200" width="200"  alt="" /></a>
        <div class="org_on"></div>
        <div class="org_onp">
          <a href="goods.html">
            <span class="org_f">豌豆角</span><br/>
            <span>美味又可口</span>
          </a>
        </div>
      </li>
      <li>
        <a href="goods.html"><img src="static/images/org_goods1.jpg" height="200" width="200"  alt="" /></a>
        <div class="org_on"></div>
        <div class="org_onp">
          <a href="goods.html">
            <span class="org_f">豌豆角</span><br/>
            <span>美味又可口</span>
          </a>
        </div>
      </li>
      <li>
        <a href="goods.html"><img src="static/images/org_goods1.jpg" height="200" width="200"  alt="" /></a>
        <div class="org_on"></div>
        <div class="org_onp">
          <a href="goods.html">
            <span class="org_f">豌豆角</span><br/>
            <span>美味又可口</span>
          </a>
        </div>
      </li>
      <li>
        <a href="goods.html"><img src="static/images/org_goods1.jpg" height="200" width="200"  alt="" /></a>
        <div class="org_on"></div>
        <div class="org_onp">
          <a href="goods.html">
            <span class="org_f">豌豆角</span><br/>
            <span>美味又可口</span>
          </a>
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
       <a href="" class="fright f2">更多></a>
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
            <div class="fright"><a href="flow.html" class="greey_a1">加入购物车</a></div>
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
        <a href=""><img  src="static/images/shiping.png" height="183" width="126" alt="食品安全" /></a>
        <a href=""><img src="static/images/green.png" height="181" width="125" alt="食品安全" /></a>
        <a href=""><img src="static/images/zhijian.png" height="182" width="126" alt="食品安全" /></a>
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
      garde: [],
      business: [],
      info: [],
      friendLink: []
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
    }
  },
  created() {

    this.$http.get('/static/data/home/cat.json')
    .then(res => {  
        this.cats = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    })  

    this.$http.get('/static/data/home/banner.json')
    .then(res => {  
        this.banners = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    }) 

    this.$http.get('/static/data/home/new.json')
    .then(res => {  
        this.recommend = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    })   

    this.$http.get('/static/data/home/pick.json')
    .then(res => {  
        this.pick = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    })   

    this.$http.get('/static/data/home/pick.json')
    .then(res => {  
        this.garde = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    })   

    this.$http.get('/static/data/home/business.json')
    .then(res => {  
        this.business = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    })  

    this.$http.get('/static/data/home/business.json')
    .then(res => {  
        this.info = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    })  

    this.$http.get('/static/data/home/friendLink.json')
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
