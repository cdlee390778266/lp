<template>
  <div>
    <div id="footer">
	  <div class="help">
	    <ul v-for="nav in footNav">
	      <li class="fwrite font16 marb10">{{nav.title}}</li>
	      <li v-for="navc in nav.childs"><router-link :to="'/dynamicDetail/'+nav.id">{{navc.title}}</router-link></li>
	    </ul>
	  </div>
	  <div class="copy">
	    <p class="mart40">版权所有：梁平县商务局 <span class="marl10 marr10">地址：重庆市梁平县梁山街道人民西路</span> 版权所有 2010-2013</p>
	    <p>联系电话：023-23222115 <span class=marl10>电子邮箱：dzb@lpsw.gov.cn <a href="" class="marl10">渝ICP备13001675号</a></span></p>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      footNav: [
      	{
      		title: '类目',
      		childs: [
      			{
      				title: '新品订购',
      				href: ''
      			},
      			{
      				title: '特色货源',
      				href: ''
      			},
      			{
      				title: '资讯动态',
      				href: ''
      			},
      			{
      				title: '梁平学院',
      				href: ''
      			}
      		]
      	},
      	{
      		title: '商城信息',
      		childs: [
      			{
      				title: '退货',
      				href: ''
      			},
      			{
      				title: '关于我们',
      				href: ''
      			},
      			{
      				title: '我们的职责',
      				href: ''
      			}
      		]
      	},
      	{
      		title: '帮助',
      		childs: [
      			{
      				title: '客服服务',
      				href: ''
      			},
      			{
      				title: '我的梁平',
      				href: ''
      			},
      			{
      				title: '合法&隐私',
      				href: ''
      			}
      		]
      	}
      ]
    }
  }
}
</script>

<style>


</style>
