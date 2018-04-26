<template>
  <div>
  	<el-carousel trigger="click" height="440">
      <el-carousel-item v-for="(item, index) in [0, 1, 3, 3, 4, 5]" :key="index">
        <a ><img :src="'/static/images/te_flash.png'"></a>
      </el-carousel-item>
    </el-carousel>
	<div class="main new_bg">
	  <div class="marcenter">
	    <div class="te_box">
	      <div class="te_l">
	        <div class="te_lt">
	          <img src="/static/images/te_img1.jpg" height="277" width="411" alt="" />
	        </div>
	        <div class="te_lb">
	          <div class="te_lbm">
	            <p>本地货源<br/>Local goods</p>
	            <p class="mart10"><a href="">JOIN</a></p>
	          </div>
	        </div>
	      </div>
	      <div class="te_c">
	        <img src="/static/images/te_img2.jpg" height="446" width="413" alt="" />
	        <div class="te_conbg"></div>
	        <div class="te_con">
	          <p class="marb10 font14">梁平有机</p>
	          <P>绿色品质、更多实惠、更多产品、快来登录梁平网 保障货源纯正、健康、有机</P>
	        </div>
	      </div>
	      <div class="te_r">
	        <div class="te_rt">
	          <div class="te_lbm">
	            <p>外地货源<br/>Nonlocal goods</p>
	            <p class="mart10"><a href="">SELE</a></p>
	          </div>
	        </div>
	        <div class="te_rb"><img src="/static/images/te_img3.jpg" height="274" width="411" alt="" /></div>
	      </div>
	    </div>
	  </div>
	  <div class="newbox">
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	    <div class="n_goods">
	      <div class="new_goodst">
	        <a href="goods.html"><img src="/static/images/new_goods1.jpg" height="254" width="289" alt="" /></a>
	      </div>
	      <div class="new_goodsb">
	        <p class="n_f1  font14"><a href="goods.html" class="f333" >我们精选特级的南非进口西柚 皮厚 果肉 多汁柔软多汁柔软多汁柔软多汁柔软</a></p>
	        <p ><span class="fright marr20"> <span class="red" >现： </span><span class="red font14" >23.00</span> 元/斤</span>原：0.00元  </p>
	        <p class="center"><a href="flow.html" class="buy_a">立即购买</a></p>
	      </div>
	    </div>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>


</style>
