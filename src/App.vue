<template>
  <div id="app">
 	<lp-head></lp-head>
 	<transition name="fade">
	    <router-view/>
	</transition>
    <lp-foot></lp-foot>
  </div>
</template>

<script>
import LpHead from './components/common/head.vue'
import LpFoot from './components/common/foot.vue'
export default {
  name: 'App',
  components: {
    LpHead,
    LpFoot
  }
}
</script>

<style >
	body{ font-family:"微软雅黑"; font-size:12px; background:#fff; padding:0; margin:0; color:#666;overflow-x:hidden;}
	div{display: block;}
	a{ text-decoration:none;}
	div,ul,ol,dl,dd,dt,h1,h2,h3,h4,h5,h6,p,li{ padding:0; margin:0; list-style-type:none;}
	img{ border:none;}
	a:hover{ color:#b2cd27;}
	.clearfix{clear: both;}
	.marl10{margin-left:10px; }
	.marl20{margin-left:20px; }
	.marl40{margin-left:40px; }
	.marr10{margin-right: 10px;}
	.marr20{margin-right: 20px;}
	.marr40{margin-right: 40px;}
	.mart10{margin-top: 10px;}
	.mart15{margin-top: 15px;}
	.mart20{margin-top: 20px;}
	.mart40{margin-top: 40px;}
	.mart80{margin-top: 80px;}
	.mart120{margin-top: 120px;}
	.marb10{margin-bottom: 10px;}
	.marb20{margin-bottom: 20px;}
	.marb40{margin-bottom: 40px;}
	.padt10{padding-top: 10px;}
	.padt20{padding-top: 20px;}
	.padb40{padding-bottom: 40px;}
	.left{text-align: left;}
	.right{text-align: right;}
	.center{text-align: center;}
	.fleft{float: left;}
	.fright{float: right;}
	.f1{color: #666;}
	.f2{color: #b2cd27;}
	.f333{color: #333;}
	.f62{color: #626262;}
	.f80{color: #808080}
	.f57{color: #575757;}
	.f6b{color: #6b6b6b;}
	.fff{color: #fff;}
	.red{color: red}
	.f4c{color: #4c4c4c}
	.f1a{color: #1a1a1a}
	.fb3{color: #b3b3b3}
	.f30{font-size: 30px;}
	.fwrite{color: #fff;}
	.font20{font-size: 20px;}
	.font12{font-size: 12px;}
	.font14{font-size: 14px;}
	.font16{font-size: 16px;}
	.font18{font-size: 18px;}
	.font22{font-size: 22px;}
	.font26{font-size: 26px;}
	.rel {
		position: relative;
	}
	.marcenter{width: 1300px;height: auto;overflow: hidden;margin: 0 auto;}
	.greey_a1{padding: 5px 10px;background:#b2cd27;color: #fff; }
	.greey_a1:hover{color: #fff;}
	.pos{position: relative;}
	.cur{cursor: pointer;}
	.borderb{border-bottom: 1px solid #D6D6D6}
	.green_a1,.green_a5{display: inline-block; background:#b2cd27;color: #fff;font-size: 18px; border:none;cursor: pointer;width: 160px;height: 50px;line-height: 50px;text-align: center;float: left;border-radius: 4px;}
	.green_a1:hover,.green_a4:hover,.green_a5:hover{color: #fff;}
	.green_a2{padding: 8px 35px;background:#b2cd27;color:#fff;font-size: 14px; border-radius: 4px; }
	.green_a2:hover{color:#fff;}
	.green_a3{padding: 5px 30px;background:#fff;color:#b2cd27;font-size: 14px; border-radius: 4px;border:1px solid #b2cd27; }
	.green_a4{background:#b2cd27;color: #fff;font-size: 18px; border:none;cursor: pointer;border-radius: 4px;padding: 5px 25px;}
	.green_a5{width: 120px;height: 40px;line-height: 40px;float:right;}
	.yel_a1{background:#fdbc27;color: #fff;font-size: 18px; border:none;cursor: pointer;display: inline-block;width: 160px;height: 50px;line-height: 50px;text-align: center;float: left;border-radius: 4px;}
	.yel_a1:hover{color: #fff;}
	.white_bg{background: #fff;}
	.underline{text-decoration: underline;}
	.through{text-decoration: line-through;}
	/*--------------梁平首页--------------*/
	#head{width: 100%;height: 160px;box-shadow: 0 0 10px  #cbc6ba;position: relative;z-index: 2;}
	.head_t{width: 100%;height: 30px;border-bottom: 2px solid #d6d6d6;line-height: s30px;}
	.head_tm{width: 1300px;height:30px;margin: 0 auto;line-height: 30px;}
	.head_b{width: 1300px;height: 128px;margin: 0 auto;position: relative;}
	.head_b .logo{width: 222px;height:128px;line-height: 128px; float: left;text-align: center;}
	.head_b .logo img{margin-top:30px;}
	.head_b .nav{float: left;width: 750px;height: 100%;}
	.head_b .nav li{width:20%;height: 100%;text-align: center;float: left;margin-top:40px;font-size: 16px; }
	.head_b .nav li a{color: #333;}
	.head_b .nav li a:hover, .head_b .nav li a.active{color:#B2CD27 }
	.head_b form{width: 280px;height: 88px;float: right;padding-top: 40px; position:relative}
	.head_b form ul{ position:absolute;top:74px;left:17px; width:44px; height:auto; overflow:hidden; border:2px solid #b2cd27;border-top:2px solid #fff; text-align:center; line-height:26px; background:#fff; padding-bottom:10px; display: block;}
	.head_b form ul li{ cursor:pointer}
	.head_b form select{display: none;}
	.s_type{display: inline-block;width: 60px;height: 36px;background: url(/static/images/search_bg.png)  no-repeat;line-height: 36px;padding-left:20px;float: left; }
	.s_type a{vertical-align: middle;}
	.s_type h3{display: inline-block;font-size:12px;text-align:center; width:40px;}
	.s_txt{float: left;width: 140px;height: 36px;line-height: 36px;padding:0 10px;border:none;background: url(/static/images/search_bg.png) -70px center no-repeat;}
	.s_smt{width:40px;height: 36px;background: url(/static/images/search_bg.png) -230px center no-repeat;float: left; padding: 0;border: none;margin: 0;cursor: pointer;}
	.cat_main{width: 1300px;position: relative;margin: 0 auto}
	.cat{position: absolute; top:-5px;left:0px;width: 270px;height: 532px;border-top: 5px solid #b2cd27;background: #fdbc27;z-index: 999;}
	.cat_li h4{cursor: pointer; width: 100%;height: 89px;color: #fff;font-weight: normal;line-height: 89px;text-indent: 130px;font-size: 18px;}
	.cat_li:hover h4{background-color: #b2cd27;}
	.cat_li:hover .cat_box{display: block;}
	.c_1h4{background: url(/static/images/cat_bg.png) 50px 30px no-repeat;}
	.c_2h4{background: url(/static/images/cat_bg.png) 50px -55px no-repeat #fdb000;}
	.c_3h4{background: url(/static/images/cat_bg.png) 50px -145px no-repeat;}
	.c_4h4{background: url(/static/images/cat_bg.png) 50px -237px no-repeat #fdb000;}
	.c_5h4{background: url(/static/images/cat_bg.png) 50px -327px no-repeat;}
	.c_6h4{background: url(/static/images/cat_bg.png) 50px -410px no-repeat #fdb000;}
	.cat_box{position: absolute;left: 270px;top: 10px;width: 790px;height: 520px;background: #fff;display: none;}
	.cat_boxli1{width: 50%;height: 150px;float: left;line-height: 26px;}
	.cat_boxli2{width: 50%;height: 370px;float: left;line-height: 26px;}
	.cat_boxli1 a,.cat_boxli2 a{color: #666;}
	.cat_boxli1 a:hover,.cat_boxli2 a:hover{color: #B2CD27;}
	.cat_boxli2 img{margin-top: 20px}
	.cat_boxt{margin:20px;font-size: 18px;}
	.cat_boxb{margin:0 20px;}
	.cat_boxb span{margin: 0 10px;}
	.rel{position: relative;}
	/*-------------flash------------------*/
	#flash{width: 100%;height: 532px;position: relative;overflow: hidden;}
	.flash_m{width: 1300px;height: 100%;margin: 0 auto;position: relative;}
	#flash ul{width: 100%;height: 9999px;position: absolute;top: 0;left: 0;}
	#flash ul li{width: 100%;height: 532px;text-align: center;}
	#flash ul li a{display: inline-block;width: 1300px;height: 532px;margin: 0 auto;}
	.flash_bg1{background: url(/static/images/flash_bg1.jpg) no-repeat center;}
	/*.flash_bg1{background: url(/static/images/flash_bg2.jpg) no-repeat center;}
	.flash_bg1{background: url(/static/images/flash_bg3.jpg) no-repeat center;}*/
	.flash_menu{position: absolute;left: 50%; bottom: 20px;}
	.flash_menu span{display: inline-block;width: 34px;height: 10px;background:#f5f5f5; margin: 0 10px;cursor: pointer;}
	.flash_menu span:hover{background: #b1d301}
	.i_user{position: absolute;top: 0;right: 0;background: #fff;width: 240px;height: 100%;opacity: 0.8;filter:alpha(opacity=80);z-index: 999}
	.i_user p{width: 100%;height: 49%;line-height: 49%;text-align: center;}
	.i_user p img{margin-top: 30px;}

	/*----------------梁平首页---------------*/
	.notice{width: 100%;height: 70px;line-height: 70px;background:#f5f5f5; }
	.notice_m{width: 1300px;height: 100%;margin: 0 auto}
	.notice_l{width: 25%;height: 100%;background: url(/static/images/notice.png) 0px 27px no-repeat;float: left;}
	.notice_c{width: 50%;height: 100%;float: left;}
	.notice_r{width: 25%;height: 100%;float: left;text-align: right;}
	.notice_hot{display: inline-block;width: 50px;height: 24px;background: url(/static/images/notice.png) 0 bottom;line-height: 24px;text-align: center;color: #fff;margin-right: 50px;}
	.rules{display: inline-block; width:66px;height: 20px;line-height: 20px;background:url(/static/images/notice.png) 0 -64px no-repeat;padding-left: 40px;margin-left: 40px;  }
	.new{height: auto;overflow: hidden;padding-top: 20px;}
	.title{width:100%;height: 60px;background: url(/static/images/title_bg.png) left center no-repeat;line-height: 60px;text-align: center;font-weight: normal;}
	.new_box{border: 1px solid #ebebeb;background:#f5f5f5;height: 438px; }
	.new_adl{float: left;width: 240px;height: 100%;}
	.new_goods{float: left;width: 570px;height: 100%;text-align: center;}
	.new_goods img:hover{opacity: 0.9;filter:Alpha(opacity=90);}
	.new_goods dl{display: inline-block;margin:15px;}
	.new_goods dl dd{margin-top: 10px;}
	.new_adr{float: right;width: 479px;height: 100%;}
	.m_box1{background:#f5f5f5;padding-top: 20px;}
	.goods_box{padding: 20px 0;height:auto;overflow: hidden;}
	.bar1{width: 100%;height: 40px;line-height: 40px;text-align: center;font-size: 16px;}
	.goodsIterm{width:320px;height: 440px;display: inline-block;border: 1px solid #F5F5F5;position: relative;}
	.goodsIterm:hover{background: #fff;border: 1px solid #d6d6d6;}
	.goodsIterm .gItt{width: 300px;height: 300px;margin: 10px;}
	.goodsIterm .gItt img:hover{opacity:0.9;filter:Alpha(opacity=90);}
	.goodsIterm .gItb{line-height: 26px;margin: 0 15px;}
	.goodsIterm .g_show{margin-top: 15px;display: none;}
	.goodsIterm:hover .g_show{display: block;}
	.g_up,.g_down{float: left;display: inline-block;width: 25px;height: 25px;line-height: 25px;text-align: center;color: #666;background:#e6e6e6 }
	.g_up:hover,.g_down:hover{color: #666;}
	.g_span{float: left;width: 40px;height: 23px;line-height: 23px;text-align: center;background: #fff;border: 1px solid #e6e6e6}
	.bar1 h2{font-weight:normal;font-size: 18px;display: inline-block;width:30%; }
	.organic{padding-top: 20px;}
	.org_box{margin-top: 20px;}
	.org_li{width: 33%;height:390px;float: left;}
	.org_lit{width: 100%;height: 80px;padding-top: 40px;}
	.org_lit p{padding:0 20px;line-height: 30px;}
	.org_lib{text-align: center;padding-top: 30px;}
	.org_lib img:hover{opacity: 0.9;filter:Alpha(opacity=90);}
	.organic ul{margin-top: 10px;width: 100%;height:200px;padding-bottom: 40px; }
	.organic ul li{display: inline-block;width: 200px;height: 200px;position: relative;margin: 5px;}
	.org_on{position: absolute;width: 100%;height: 100%;background: #000;z-index: 88;top: 0;left: 0;opacity: 0.5;display: none;filter:Alpha(opacity=50)}
	.org_onp{width: 100%;height: 100%;position: absolute;top: 0;left: 0;text-align: center;color: #fff;z-index: 100;line-height: 30px;display: none;}
	.org_onp a{width: 100%;height: 100%;display: inline-block;color: #fff;}
	.org_onp span{display: inline-block;}
	.organic ul li:hover .org_on,.organic ul li:hover .org_onp{display: block;}
	.org_f{font-size: 20px;margin-top: 80px;}
	.news{width: 100%;padding-bottom: 40px;padding-top: 20px;}
	.news a{color:#00b0f1; }
	.news a:hover{text-decoration: underline; }
	.news_l,.news_r{float:left;width: 50%;}
	.news_l ul,.news_r ul{padding:20px;}
	.news_l h2,.news_r h2{padding:0 20px;font-weight: normal;font-size: 16px;}
	.news_l>p,.news_r>p{margin: 0 20px;line-height: 30px;border-bottom: 1px dashed #dadada;height: 30px; }
	.news ul li{padding: 20px 0;border-bottom: 1px dashed  #dadada;line-height: 26px;}
	.news ul li:last-child {border-bottom: none;}
	.cmd{width: 100%;text-align: center;padding-bottom: 40px;background: #f5f5f5;padding-top: 20px;}
	.cmd p img{margin: 20px;vertical-align: middle;}
	.promise{width: 100%;height:382px;background: url(/static/images/promise_bg.png) no-repeat center;position: relative;}
	.mask{width: 100%;height: 100%;background: #000;opacity: 0.5;position: absolute;top: 0 ;left: 0;z-index: 1;filter:alpha(opacity=50);}
	.promise_main{width: 1300px;height: 100%;margin: 0 auto;position: relative;z-index: 88;}
	.promise_title{position: relative;z-index: 88;color: #fff;padding-top: 20px;}
	.promise_box{text-align: center;margin-top: 40px;}
	.promise_box a{margin:30px 100px;}

	/*-----------------页脚------------*/
	#footer{width: 100%;height: 400px;background: url(/static/images/foot_bg.jpg) repeat-x #fbc23f;}
	#footer1{width: 100%;height: 400px;background: url(/static/images/foot_bg1.jpg) repeat-x #fbc23f;}
	#footer2{width: 100%;height: 400px;background: url(/static/images/foot_bg2.jpg) repeat-x #fbc23f;}
	.help{width:900px;height:260px;margin: 0 auto;border-bottom: 1px solid #fff;}
	.help{width:900px;height:260px;margin: 0 auto;border-bottom: 1px solid #fff;}
	.help ul{margin-top: 80px;float:left;width: 33%;text-align: center;line-height: 20px;}
	.help ul a{color: #fff;}
	.help ul a{font-size: 14px;}
	.help ul a:hover{text-decoration: underline;}
	.copy{width: 960px;line-height: 30px;color: #fff;text-align: center;margin: 0 auto;font-size: 14px; }
	.copy a{color: #fff;}

	/*--------------------新品快订-------------------*/
	.new_bg{background: url(/static/images/new_bg.jpg) ;}
	#new_flash{widows: 100%;height: 397px;background:url(/static/images/flash1.jpg) center no-repeat;position: relative; }
	.new_on{height: 40px;line-height: 40px;width: 100%;position: absolute;bottom: 0;left: 0;background: #7c7c7c;opacity: 0.3;z-index: 2;filter:alpha(opacity=30);}
	.new_onm{width: 100%;height: 40px;line-height: 40px;position: absolute;left: 0;bottom: 0;z-index: 3}
	.new_onm ul{width: 1300px;height: 40px;margin: 0 auto}
	.new_onm ul li{display: inline-block;width: 16%;height: 40px;text-align: center;}
	.new_onm ul a{color: #fff;font-size: 24px;display: inline-block;width: 100%;height: 40px;}
	.new_onm ul a:hover{background: #dd133b}
	.newbox{margin: 0 auto;width: 1300px;height: auto;overflow: hidden;padding-bottom: 40px;}
	.n_goods{width: 290px;height:400px;background: #fff;padding: 10px;display: inline-block;margin:20px 5px;  }
	.new_goodst{text-align: center;}
	.new_goodst img:hover,.bar_boxli img:hover,.news_hot img:hover{opacity: 0.9;filter:Alpha(opacity=90);}
	.n_f1{text-indent: 2em;color: #333;}
	.new_goodsb{height: 120px;width: 100%;padding:0 10px;}
	.new_goodsb p{margin: 10px 0;}
	.buy_a{display: inline-block;width:170px;height: 40px;line-height: 40px;text-align: center;color: #fff;font-size: 16px;font-weight: bold;background: #c3d868;border-radius: 4px; }
	.buy_a:hover{color: #fff;}

	/*------------------特色货源-------------------*/
	#te_flash{width: 100%;height: 440px;background: url(/static/images/te_flashbg.png) no-repeat center;overflow: hidden;}
	.te_flashm{width: 1300px;height: 440px;margin: 0 auto;position: relative;overflow: hidden;}
	.te_flashm ul{width: 99999px;height: 440px;position: absolute;top: 0;left: 0;}
	.te_flashm ul li{width: 1300px;height: 100%;float: left;}
	.te_flashm a{display:inline-block;height: 440px;width: 1300px;}
	#te_menul{position: absolute;top: 40% ;left: 0;cursor: pointer;}
	#te_menur{position: absolute;top: 40% ;right: 0;cursor: pointer;}
	.te_menu{position: absolute;bottom: 0;left: 0;width: 100%;height: 5px;text-align: center;}
	.te_menu span{display: inline-block; width: 16%;height:5px;background:#f1f1f1;cursor: pointer;line-height: 100px;}
	.te_menu span:hover{background: #b2dd5a;}
	.te_box{width: 100%;height: 450px;text-align: center;margin: 10px 0;}
	.te_box .te_l,.te_c,.te_r{width: 33%;height: 450px;float: left;text-align: center;position: relative;}
	.te_lb{width: 310px;height: 140px;border: #f39801 1px solid;margin: 0 auto;position: absolute;bottom:0;left:55px;background: #fff;padding: 5px;}
	.te_rt{width: 310px;height: 140px;border: #f39801 1px solid;margin: 0 auto;background: #fff;padding: 5px;}
	.te_lbm{background: #f39801;width: 100%;height: 100px;color: #fff;font-size: 14px;padding: 20px 0;line-height: 26px; }
	.te_lbm a{padding: 3px 26px;border: 1px solid #fff;color: #fff;}
	.te_conbg{width: 350px;height:80px;background: #000;position: absolute;bottom: 10px;left: 38px;opacity: 0.18;filter:alpha(opacity=18); }
	.te_con{width: 270px;height: 80px;position: absolute;bottom: 10px;left: 38px;color: #fff;padding: 0 40px;text-align: left;line-height: 20px;}
	.te_rb{width: 100%;height: 274px;text-align: center;position: absolute;bottom: 0;left: 0;}

	/*------------------资讯动态-----------------*/
	.here{line-height: 40px;height: 40px;color:#808080;margin: 20px 0;}
	.here a{color: #808080}
	.here a:hover{color: #B2CD27}
	.policy{padding-bottom: 40px;height: auto;overflow: hidden;}
	.info_bar{height: 40px;line-height: 40px;border-bottom: 1px solid #dedede;font-size: 18px;color:#1a1a1a }
	.info_bar span,.news_right h2 span,.new_cat span{ display: inline-block;width: 3px;height: 19px;background: url(/static/images/new_barbg.jpg) center no-repeat;margin-right:10px;}
	.po_box{width:100%;height: 264px;position: relative;float: left;margin-top: 20px;}
	.po_box ul{width:100%;height: 100%;position: relative; }
	.po_flash{width: 400px;height: 100%;overflow: hidden;position:relative;float: left;}
	.po_box ul li{width: 400px;height: 264px;position: absolute;top: 0;left: 0;}
	.po_box .po_mask{z-index: 10;position: absolute;bottom: 0;left: 0;width: 400px;height:44px;background:#000;opacity:0.5;filter:alpha(opacity=50);}
	.po_box .po_maskm{z-index: 10;position: absolute;bottom: 0;left: 0;width: 400px;height:44px;color: #fff;font-size: 16px;line-height: 44px;text-indent: 2em}
	.po_box .po_menu{position: absolute;bottom: 5px;right: 10px;z-index: 10;}
	.po_box .po_menu a{padding: 2px 7px;color: #333;background: #fff;}
	.po_box .po_menu a:hover{background: red;color: #fff;}
	.po_box1{float: left;width:800px;height: 100%;margin-left: 50px; }
	.po_box1li{border-bottom: 1px dashed  #dadada;padding-bottom: 20px;}
	.po_box1li h4 a{font-size: 18px;color: #333;font-weight: normal;line-height: 36px;}
	.po_box1li p{font-size: 14px;}
	.po_box2 a,.quotation a{color: #666;}

	.po_box1 a:hover,.po_box2 a:hover,.quotation a:hover{text-decoration: underline;}
	.po_box2{width: 100%;height: auto;overflow: hidden;clear: both;padding-top: 20px;}
	.po_box2 dl{width: 50%;height:166px;float: left; margin: 20px 0;}
	.po_box2 dl dt{width: 273px;height: 100%;float: left;}
	.po_box2 dl dd{width: 320px;float: left;font-size: 14px;line-height: 26px;margin-left: 10px;}
	.po_box2 .po_f{font-size: 18px;color: #333;}
	.quotation{margin-top:20px;padding-bottom:120px;height: auto;overflow: hidden;}
	.quotation dl{width: 33%;height:77px;padding-bottom: 20px;border-bottom: 1px dashed  #dadada;padding-top: 20px;float: left; }
	.quotation dl dt{width: 128px;height: 77px;float: left;}
	.quotation dl dd{width: 240px;float: left;line-height: 20px;margin-left: 10px;}
	.quo_dd a{font-size: 14px;color: #333;}
	.article{width: 990px;padding-bottom: 120px;float: left;}
	.article h1{font-size: 22px;color: #333;line-height: 50px;}
	.news_right{float: right;width: 280px;padding-bottom: 20px;height: auto;overflow: hidden;}
	.introduction{width: 100%;height: 70px;background:#f5f5f5; }
	.introduction_title{float: left;width: 70px;height: 70px;font-size:18px;color: #4c4c4c;font-weight: bold;text-align: center;line-height: 40px; }
	.introduction_content{width:860px;height: 100%;line-height: 26px;margin-top: 10px;float: left; }
	.content p{line-height: 26px;text-indent: 2em;margin:10px 0;}
	.quo_box,.news_hot{width: 278px;padding-bottom: 10px;border: 1px solid #dcdcdc}
	.news_right h2,.new_cat{color: #333;font-size: 18px;font-weight: normal;border-bottom: 1px #dcdcdc solid;line-height: 50px;margin:0 10px;}
	.quo_box ul li{width: 258px;height: 46px;border-bottom: 1px dashed  #dcdcdc ;line-height: 46px;margin:0 10px;}
	.quo_box ul li a{color: #333;}
	.quo_box ul li a:hover{text-decoration: underline;}
	.news_hot{margin-top: 20px;}
	.news_hot p{margin: 20px 0;text-align: center;}
	.article dl{margin:20px 10px;height: 179px;border-bottom: 1px dashed #d8d8d8; }
	.article dl dt{float: left;width: 266px;height: 161px;}
	.article dl dd{float: left;width: 666px;margin-left: 20px;line-height: 26px;}

	/*-------------------商品详情页-------------------*/
	.g_bg{background: #f5f5f5}
	.g_top{width: 100%;height: 500px;position: relative;}
	.preview{width: 400px;height: 100%;float: left;}
	.preview .jqzoom{width: 100%;height: 400px;}
	.preview .preview_bottom{width: 100%;height: 100px;overflow: hidden;}
	.preview_bottom ul{width: 9999px;height: 54px;margin-top: 23px;}
	.preview_bottom ul li{float: left;margin-right: 20px;}
	.preview_bottom ul li img{border: 2px solid #f5f5f5;cursor: pointer;}
	.preview_bottom ul li img:hover{border: 2px solid #4d4d4d}
	.iterminfo{width: 410px;height: 100%;margin-left: 70px;float: left;}
	.iterminfo h2{font-size: 26px;color: #4c4c4c;font-weight: normal;}
	.iterminfo h2{margin: 15px 0;}
	.iterminfo p{margin: 15px 0;font-size: 14px;color: #808080;}
	.g_span1{width:88px;height: 34px;border: 1px solid #ccc;line-height: 34px;text-align: center;display: inline-block; border-radius: 4px;margin: 0 10px;cursor: pointer;}
	.g_span1:hover{border: 1px solid #b2cd27}
	.num_box{position: relative;width: 100%;height: 36px;line-height: 36px;margin-top: 26px;}
	.g_num{width: 122px;height: 36px;position: absolute;top: 0;left: 52px;line-height: 36px;}
	.reduction{width: 33px;height: 100%;display: inline-block;background: url(/static/images/number.png) no-repeat;float: left;}
	#g_num,.g_numm{width:56px;height: 100%;background: url(/static/images/number.png) -33px center no-repeat;border: none;margin: 0;padding: 0; float: left;text-align: center;color: #666;font-size: 16px;line-height: 36px;}
	.add{display: inline-block;float: left;width:33px;height: 100%; background: url(/static/images/number.png) -89px center no-repeat;}
	.merchant{width: 250px;height: 480px;padding: 0 20px;float: right;background: #fff;}
	.merchant h3{font-size: 18px;font-weight: normal;color: #333;text-align: center;line-height: 50px;}
	.merchant p{line-height: 30px;font-size: 14px;}
	.merchant a{display: inline-block;width: 100px;height: 40px;border: 1px solid #ccc;margin: 0 10px;margin-top: 40px;text-align: center;line-height:40px;font-size: 14px;color: #666;border-radius: 4px;}
	.g_botttom{width: 100%;height: auto;overflow: hidden;margin-top: 20px;margin-bottom: 50px;position: relative;z-index: 99;}
	.g_barbox{width: 390px;height: auto;overflow: hidden;border: 1px solid #d6d6d6;float: left;background: #fff;padding-bottom: 40px;}
	.g_barbox h3{font-weight: normal;background: url(/static/images/g_barbg.png) center no-repeat ;text-align: center;font-size: 14px;height: 60px;line-height: 60px; }
	.bar_boxli{padding-top: 20px;width: 100%;text-align: center;line-height: 30px;font-size: 14px;}
	.g_main{width: 750px;height: auto;overflow: hidden;padding-bottom:120px;float: left;margin-left: 20px;background: #fff; }
	.g_main h2{width:100%;height: 49px;line-height: 49px;border-bottom: 1px solid #d6d6d6;font-weight: normal;font-size: 18px;}
	.g_main h2 a{color: #808080;border-bottom: 2px solid #fff ;padding-bottom: 10px;margin: 0 20px;}
	.g_main h2 a:hover{border-bottom: 2px solid  #b2cd27;color: #b2cd27}
	.g_main .g_content{width: 100%;margin-top: 20px;}
	.g_content p{padding: 20px;line-height:30px; }
	#g_content2{display: none;}
	#preview{
	    position:relative;z-index: 999;
	    }
	.jqzoom{ width:400px;  height:400px; overflow:hidden; position:relative; border:1px solid #ededed; }
	.jqzoom img{
	        width:400px;  height:400px;
	    }
	.zoomdiv{ left:20px; height:400px; width:400px; overflow:hidden; position:absolute;top:0;}
	.jqZoomPup{z-index:110;visibility:hidden;position:absolute;top:0px;left:0px;width:50px;height:50px;border:1px solid #aaa;background:#333 20% top no-repeat;opacity:0.2;-moz-opacity:0.2;-khtml-opacity:0.2;filter:alpha(Opacity=20);cursor:move;}
	.bigimg{width:800px;height:800px;}


	/*-------------------店铺-----------------*/
	.shop_flash{width: 100%;height: 400px;background: url(/static/images/shop.jpg) no-repeat center;}
	.shop_barbg{width: 100%;height: 81px;background: url(/static/images/shop_bg.jpg) ;text-align: center;}
	.shop_barbg a{font-size:18px;line-height:60px;margin:0 30px ;color: #666;border-bottom: 2px solid #fff;padding-bottom: 7px;}
	.shop_barbg a:hover{border-bottom: 2px solid #fdbc27;color: #fdbc27;}
	.shop_intro{background: #fff;padding-top: 40px;padding-bottom: 240px;}
	.shop_intro p{padding: 0px 40px;line-height: 30px;font-size: 14px;text-indent: 2em}

	/*-----------------------绿色有机-----------------*/
	.green_title{text-align: center;}
	.green_title h1{color: #525252;font-size: 24px;font-weight: normal;}
	.green_title p,.green_title a{margin: 20px 0;font-size: 14px;color: #525252;}
	.green_title a:hover{color:#b2cd27; }
	.green_title p span{margin: 0 20px;}
	.page{width: 100%;height: 40px;line-height: 40px;text-align: center;margin: 20px 0;}
	.page a{color: #333;padding: 3px 8px; border-radius: 4px;font-size: 16px;margin: 0 5px;}
	.sub_suc{width: 820px;height: 180px;border:1px solid #ccc ;margin:140px auto ;text-align: center;padding:60px 0;line-height: 50px;}
	.adr_box{width: 100%;height: 160px;}
	.adr_li{width: 270px;height: 160px;border: 1px solid #d6d6d6;font-size: 14px;line-height: 20px;float: left;border-radius: 4px;margin-left: 70px;}
	.adr_li h4{padding:0 20px;border-bottom:1px dashed   #d6d6d6;color: #4c4c4c;font-size: 14px;font-weight: normal;line-height: 36px;}
	.adr_li p{margin-left:  20px;margin-right:  20px;}
	.update{padding: 2px 8px;border: 1px solid #ccc;color: #333; }
	.admin_adr{height: 40px;line-height: 40px;width: 100%;}
	.admin_adr a{float:right;color:#333;font-size: 14px; }
	/*.update:hover{color: #333;}*/
	.adr_form {width: 100%;height: auto;overflow: hidden;padding-bottom: 120px;}
	.adr_formm{width: 1298px;padding: 20px 0;border: 1px solid #b3b3b3;  }
	.adr_form table{width: 96%;margin: 0 auto;margin-top: 40px;text-align: center;font-size: 14px;}
	.adr_form table th{border-bottom: 1px solid #d6d6d6;line-height: 40px;font-weight: normal;}
	.adr_form table td{padding: 20px 0;line-height: 20px; vertical-align: top;}
	.adr_form table td img{float: left;margin-left: 80px;}
	.total{border-top: 1px solid #d6d6d6;width: 96%;padding-bottom: 50px;margin: 0 auto}
	.total .total_bar{line-height: 40px;text-align: right;padding:0 100px; }
	.total p{line-height: 30px;padding: 0 100px;}

	/*-------------------登录注册--------------------*/
	.login{width: 100%;padding: 120px 0;height: auto;overflow: hidden;}
	.login_form{width: 500px;height: 320px;float: left;border: 1px solid #d6d6d6;padding-top: 20px;padding-bottom:60px; padding-left: 20px;padding-right: 20px;margin-left: 140px;}
	.login  h1{font-size:18px;font-weight: normal;line-height: 40px; }
	.login  h1 a{color: #666;margin-right: 20px;}
	.login  h1 a.active {color: rgb(178, 205, 39);}
	.login form p{margin-top: 40px;}
	.login_text1{width: 479px;height: 45px;border: 1px solid #d6d6d6;padding: 0 10px;border-radius: 4px;color:#666 ;line-height: 45px;}
	.login_text2,.login_text3{width: 420px;height: 45px;border: 1px solid #d6d6d6;padding: 0 10px;border-radius: 4px 0 0 4px;color:#666 ;line-height: 45px;border-right: none;display: inline-block;float: left;}
	.login_text3{width: 370px; border: 1px solid #d6d6d6;border-radius: 4px;}
	.login form img{display: inline-block; margin-left: 10px;}
	.get_pwda{width: 55px;height: 43px;border: 1px solid #d6d6d6;border-radius: 0 4px 4px 0;color:#666 ;line-height: 45px;display: inline-block;background: #fff;text-align: center;cursor: pointer;}
	.get_pwda:hover{color:#666 }
	.rem_p{width: 100%;height: 20px;line-height: 20px;margin-top:10px;color:#6b6b6b }
	.rem_p a{color:#6b6b6b }
	.remember{float: left;width: 100px;height: 12px;}
	/*.remember label{display: inline-block;width: 12px;height: 12px;background:url(/static/images/login_check.png) no-repeat;}
	.remember input[type=checkbox]:checked + label{background:red;}*/
	.login_notice{width: 280px;height:302px;background: #fff; float: left;margin-left: 200px;text-align: center;padding-top: 20px;padding-bottom:80px;border-radius: 4px;}
	.login_nt{width: 100%;height: 120px;border-bottom: 1px solid #f5f5f5;font-size: 14px;}
	.login_notice p{line-height: 26px;}
	.login1{width: 100%;height: auto;overflow: hidden;color: #333;margin-bottom: 150px;}
	.login1 form{width: 555px;border: 1px solid #d6d6d6;padding: 20px 60px;padding-bottom: 60px;float: left;margin-left: 80px;}
	.login1-text{width:500px;height: 48px;border: 1px solid #d6d6d6 ;padding: 0 10px;border-radius: 4px;margin: 20px auto;}
	.login1_notice{padding: 100px 0;width: 280px;background: #fff;text-align: center;float: left;margin-left: 120px;line-height: 80px;font-size: 14px;margin-top: 40px}



	/*------------------------搜索------------------------*/
	.search_cat{width: 100%;height: auto;overflow: hidden;font-size: 14px;color: #4c4c4c;line-height: 26px;}
	.search_cat dl{margin: 10px 0; clear:both;height: auto;overflow: hidden;}
	.search_cat dl dt{float: left;width: 100px; clear:both;}
	.search_cat dl dd{float: left;width:1200px; }
	.search_cat dl dd a{color: #808080;width: 80px;display: inline-block;}
	.search_cat dl dd a:hover{color:#B2CD27 }
	.pur_box{width: 100%;padding: 20px 0;}
	.pur_box table{width: 100%;padding-bottom: 40px;}
	.pur_box table td,.pur_box table th{width: 16.6%;text-align: center;height: 49px;line-height: 49px;border-bottom: 1px solid #d6d6d6 ;font-size: 14px;}
	.pur_box table th{color: #333;}
	.search_bar{width:100%;height: 40px;line-height: 40px;text-align: center; }
	.search_bar a{margin:0 20px;color: #b0a59f;font-size: 14px;}
	.search_bar a:hover{color:#e00101 }
	.s_ent{padding: 50px 0;border:1px solid #d6d6d6;height: auto;overflow: hidden;font-size: 14px;width: 1298px;margin-bottom: 10px;}
	.s_ent .s_entl{float: left;width: 180px;text-align: center;}
	.s_ent .s_entc{float: left;width: 300px;line-height:40px; }
	.s_ent .s_entr{width: 200px;float:left;text-align: center;line-height: 100px;}
	.s_box{width:100%;height:auto;overflow: hidden;padding-top: 80px;padding-bottom: 120px;position: relative;  }
	.s_boxul{width: 1220px;height: 360px;margin:0 auto;overflow: hidden;position: relative;}
	.s_box ul{width: 99999px;height: 360px;margin:0 auto;position: absolute;top: 0;left: 0}
	.s_box ul li{width:284px;height: 100%;float: left;margin: 0 10px;}
	.s_box ul li p{margin-left: 5px;margin-right: 5px}
	#s_left{position: absolute;top: 220px;left: 10px;cursor: pointer;}
	#s_right{position: absolute;top: 220px;right: 10px;cursor: pointer;}
	.ent_cmenu{width: 248px;height: 421px;border: 1px solid #d6d6d6;float: left;border-bottom: none;}
	.ent_cmenu ul{width: 100%;height: auto;overflow: hidden;}
	.ent_cmenu ul li{width: 100%;height: 59px;line-height: 59px;border-bottom: 1px solid #d6d6d6;text-align: center;}
	.ent_cmenu ul li a{font-size: 16px;color:#1a1a1a; display: block;}
	.ent_cmenu ul li a.active {background: #fdb000; color: #fff}
	.ent_cmenu ul li a.active:hover {background: #fdb000; color: #fff}
	.ent_cmenu ul li a:hover{color: #fdb000}
	.ent_box1,.ent_box3{width: 820px;height: 421px;border: 1px solid #d6d6d6;float: left;margin-left:20px;}
	.ent_box1 form{padding: 80px 0;width: 420px;margin: 0 auto;line-height: 80px;color: #4c4c4c;font-size: 14px;padding-top: 40px;}
	.ent_text1{width: 220px;height: 40px;line-height: 40px;padding: 0 10px;border-radius: 4px;border:1px solid #d6d6d6;}
	.ent_text2{width: 220px;height: 40px;line-height: 40px;padding: 0 10px;border-radius:4px 0 0 4px;border:1px solid #d6d6d6;border-right: none}
	.ent_text3{width: 320px;height: 40px;line-height: 40px;padding: 0 10px;border-radius: 4px;border:1px solid #d6d6d6;}
	.get_code{display: inline-block;width:100px;height: 42px;line-height: 40px;text-align: center;border: 1px solid #d6d6d6; border-radius: 0 4px 4px 0;font-size: 12px;color: #4c4c4c;cursor: pointer;}
	.get_code:hover{color: #4c4c4c; }
	.ent_box2{width: 820px;height: 180px;margin-left: auto;margin-right: auto; border: 1px solid #d6d6d6;padding: 120px 0;margin-bottom: 120px;}
	.ent_box3{width:1000px;height: 419px;}
	.safe_li{border-bottom: 1px solid #d6d6d6;width: 100%;height: 139px;font-size: 14px; }
	.safe_li .safe_box1{width:139px;height: 100%;float: left;border-right: 1px solid #d6d6d6;text-align: center;}
	.safe_li .safe_box1 p{line-height: 139px;color: #333;}
	.safe_li .safe_box2{width:359px;height: 59px;float: left;border-right: 1px solid #d6d6d6;text-align: center; padding:40px 60px;line-height: 26px; }
	.safe_li .safe_box3{width:240px;height: 100%;float: left;text-align: center;line-height: 139px;text-align: center;}
	.ent_box4{width: 1000px;padding-bottom: 100px;margin-bottom:100px;border: 1px solid #d6d6d6;float: left;margin-left: 10px;}
	.shop_box1{width: 100%;padding: 20px 0;border-bottom: 1px solid #d6d6d6;height: auto;overflow: hidden;}
	.shop_l{width: 220px;text-align: center;float: left;}
	.shop_c{width: 520px;float: left;line-height: 26px;font-size: 14px;color: #808080}
	.shop_r{width: 240px;float: right;position: relative;}
	.shop_r input[type=file]{position: absolute;top: 40px;left: 20px;width: 160px;height: 50px;z-index: 2;opacity: 0;filter:alpha(opacity=0);}
	.shop_r a{position: absolute;top: 40px;left: 20px;z-index: 1}
	.shop_l1{width: 620px;float: left;padding: 0 40px;font-size: 14px;color: #808080}
	.shop_mes,.shop_mes1{width: 50%;margin:20px 0;float: left;height: auto;overflow: hidden;}
	.shop_mes1{width: 100%;}
	.shop_mes span{display: inline-block;width: 56px;text-align: left;}
	.shop_text1,.shop_text4{width:300px;height: 50px;border: 1px solid #d6d6d6;border-radius: 4px;margin-left: 40px;padding: 0 10px; }
	.shop_text4{width: 200px;}
	.shop_box2{margin-top: 20px;}
	.shop_box2 h3{line-height: 40px;border-bottom:1px solid #d6d6d6;padding-left: 20px;font-size: 14px;font-color:#333;font-weight: normal; }
	.ent_title{height: 49px;line-height: 49px;border-bottom: 1px solid #ccc;font-size: 18px;color: #333; padding-left: 20px;}
	.order_bar{padding-left: 20px;line-height: 40px;border-bottom: 1px solid #ccc;}
	.order_table{width: 100%;font-size: 14px;color: #333;text-align: center;}
	.order_table th{height: 60px;line-height: 60px;border-bottom:1px solid #ccc;font-weight: normal; }
	.order_table td{height: 100px;border-bottom:1px solid #ccc;border-right:1px solid #ccc;}
	.order_a{display: inline-block;width: 90px;height: 30px;color: #fff;font-size:14px;text-align: center;line-height: 30px;background:#b2cd27;  }
	.order_a:hover{color:#fff;}
	.order_popup{border:1px solid #ccc;color: #333;background: #fff;text-align: center; }
	.data_bar{padding-left: 20px;line-height: 40px;border-bottom: 1px solid #ccc;}
	.data_bar span{margin: 0 10px;font-size: 16px;color: #9a9a9a;}
	.data_form{padding-bottom: 120px;text-align: center;}
	.data_form p{margin:30px 0;}
	.data_form p span{display: inline-block;width: 80px;text-align: left;color: #333;font-size: 14px;}
	.data_form p strong{font-weight: normal;display: inline-block;width: 300px;line-height: 40px;text-align: left;font-size: 14px;color: #333;}
	.data_form h2{font-weight: normal;font-size: 18px;color: #4c4c4c;line-height: 80px;margin-bottom: 40px;height: 80px;}
	.shop_text2{width:278px;height: 40px;border: 1px solid #d6d6d6;border-radius: 4px;padding: 0 10px; }
	.message_box{padding: 180px 0;text-align: center;line-height:30px;color: #4c4c4c;font-size: 18px;}
	.shop_text3{width:177px;height: 40px;border: 1px solid #d6d6d6;border-radius: 4px 0 0 4px;padding: 0 10px; border-right: none;}
	.q_policy{width: 100%;}
	.q_policy td{border-bottom: 1px dashed #ccc;height: 49px;line-height: 49px;}
	.q_policy td img{vertical-align: middle;}
	.po_td span{margin:0 10px;}
	.policy_article{padding:40px 130px;line-height: 30px; }
	.add_goods{width: 100%;height: 80px;line-height: 80px;}
	.mf{width: 100%;height: 40px;line-height: 40px;border-bottom: 1px solid #ccc;}
	.mf span{margin-left: 40px;}
	.mf_box{padding: 40px;}
	.data_base{margin-top: 20px;border-bottom: 1px solid #ccc;height: auto;overflow: hidden;padding-bottom: 20px;}
	.shop_box2 h4{margin:0 40px;line-height: 40px;border-bottom: 1px solid #ccc;font-weight: normal;}
	.shop_box2 input[type=file]{width: 90px;height: 40px;position: absolute; top: 10px;left:64px;z-index: 2;opacity: 0;filter:alpha(opacity=0);}
	.shop_box2 .upload_img{display: inline-block;width: 88px;height: 38px;border: 1px solid #ccc;line-height: 38px;text-align: center;color: #4c4c4c;font-size:16px;position: absolute;top: 10px;left: 64px; z-index: 1;}
	.upload_bar p{margin: 20px}
	.upload_edit{width:80px;height: 34px;line-height: 34px;text-align: center;font-size: 14px;color: #fff;background: #b2cd27;display: inline-block;}
	.upload_edit:hover{color: #fff;}
	.upload_del{width:78px;height: 34px;line-height: 32px;text-align: center;font-size: 14px;color: #4c4c4c;background: #fff;display: inline-block;border: 1px solid #ccc;}
	.upload_del:hover{color: #4c4c4c}
	.message_li{width: 25%;float: left;width: 158px;height: 48px;border: 1px solid #ccc;line-height: 48px;margin-top:40px ;margin-left:60px;border-radius: 4px;font-size: 14px;position: relative;}
	.message_li a{color: #999;}
	.mes_linum{position: absolute;top: 5px;right: 5px;width: 18px;height: 18px;text-align: center;line-height: 18px;color: #fff;background:#b2cd27;border-radius: 50%;font-size: }

	/*-----------------------管理者后台--------------*/
	.pa_notice{margin-top:40px;margin-bottom: 100px;width: 100%;height: auto;overflow: hidden;}
	.pa_notice table{width: 80%;margin: 0 auto;color: #4c4c4c;font-size: 14px;}
	.pa_notice table td{padding: 20px 0;}
	.pa_notice textarea{height: 220px;width: 94%;resize:none;padding: 10px;}
	.pur_text1{width: 198px;height: 48px;border: 1px solid #ccc;padding: 0 10px;line-height: 48px;border-radius: 4px;}
	.pur_text2{width: 518px;height: 48px;border: 1px solid #ccc;padding: 0 10px;line-height: 48px;border-radius: 4px;}
	input[type=reset]{width:120px;height:38;line-height:38px;font-size: 18px;color:#b2cd27;border: 1px solid #b2cd27;background: #fff;padding: 0;border-radius: 4px;margin-left: 100px;margin-top: 40px; cursor: pointer;}
	.pur_txtarea{width:518px;height:98px;  }
	.cover{position: relative;height: 40px;line-height: 40px;}
	.cover input[type=file]{width:120px;height: 40px;position: absolute;top:20px;left: 0;z-index: 2;opacity: 0;filter:Alpha(opacity=0); cursor: pointer;padding: 0}
	.cover a{position: absolute;top:20px;left: 0;z-index: 1; }
	.vip_data{width: 430px;height: auto;overflow: hidden;padding: 80px 0;border: 1px solid #ccc;margin: 40px auto;border-radius: 4px;padding-left:200px ;line-height: 50px;font-size: 14px;color: #4c4c4c}
	.vip_box{padding-top: 40px;padding-bottom: 120px;width: 600px;padding: 0 15px;margin-left:auto; margin-right:auto; }
	 .vip_box .reason{width: 100%;font-size: 14px;}
	 .vip_box .reason table{width: 100%;font-color:#4c4c4c;}
	 .vip_box .reason textarea{width: 500px;height: 200px;padding: 10px;}

	/*-----------------------ui--------------------*/
	.ui-widget-header{background:none;border: none;margin-bottom:66px;}
	.ui-widget-content{background-image: none;background-color: #fff; }
	.ui-widget-overlay{background:#000; }
	table input[type=checkbox]{display: none;}
	table label{display: inline-block;width: 12px;height: 12px;background:url(/static/images/login_check.png) no-repeat;}
	input[type=checkbox]:checked +label {background:url(/static/images/login_check.png) 0 -18px no-repeat;}
	.data_u1{border-bottom: 1px solid #ccc;width: 100%;height: 159px;text-align: center;line-height: 26px;position: relative;font-size: 14px;color: #333;}
	.data_u1 img{margin-top: 20px}
	.data_u1 .face_on{position: absolute;top: 60px;left: 470px;font-size: 16px;color: #fff;}
	.data_u1 .face_on a{color: #fff;}
	.data_u2{width: 666px;height: auto;overflow: hidden;padding-bottom: 120px;margin: 40px auto;color: #333;font-size: 14px;}
	.data_u2 dl{float: left;width: 50%;line-height: 80px;}
	.data_u2 dl dt{width:30%;float: left;text-align:right; }
	.data_u2 dl dd{width:70%;float: left;text-indent: 2em}


	/*-------------------*/
	.flow_sbox1{width: 100%;height: 200px;line-height: 200px;text-align: center;}
	.flow_sbox1 img{vertical-align: middle;}
	.flow_sbar1{width: 100%;height: 60px;line-height: 60px;background:#f5f5f5; }
	.flow_sbar1 div{width: 33%;display: inline-block;text-align: center;} 
	.flow_sbar2{width: 100%;height: 110px;line-height: 110px;font-size: 18px;color: #333;}
	.flow_sbar2 span{display: inline-block;width: 4px;height: 18px;background: url(/static/images/flow_span.png) 0 -7px no-repeat;margin-right: 20px;margin-top: 5px;margin-left: 20px;}
	.flow_sbar3{width: 100%;height: 40px;line-height: 40px;font-size: 14px;color: #1a1a1a;background: #f5f5f5;text-indent: 60px;}
	.flow_sbox2{width: 100%;padding-bottom: 120px;padding-top: 40px;}
	.fs_li{margin:20px 0;height: 100px;}
	.fs_lil img{vertical-align: middle;}
	.fs_lil{display: inline-block;width: 266px;height: 100px;line-height: 100px;}
	.fs_lir{display: inline-block;font-size: 14px;color: #333;}
	.fs_lir1{display: inline-block;font-size: 14px;color: #333;line-height: 26px;height: 20px;padding: 15px 0;width: 600px;}
	.fs_li input[type=radio]{display:none;}
	.fs_li label{width: 18px;height: 18px;background: url(/static/images/radio.png) 0 -36px no-repeat;display: inline-block;}
	.fs_li input[type=radio]:checked  + label{background: url(/static/images/radio.png) no-repeat;}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	input:focus {outline: none;}
</style>
