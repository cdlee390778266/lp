<template>
  <div>
    <div id="footer">
	  <div class="help">
	    <ul v-for="nav in footNav">
	      <li class="fwrite font16 marb10">{{nav.title}}</li>
	      <li v-for="navc in nav.childs"><router-link :to="'/dynamicDetail/'+navc.id">{{navc.title}}</router-link></li>
	    </ul>
	  </div>
	  <div class="copy">
	    <p class="mart40">版权所有：梁平县商务局 <span class="marl10 marr10">地址：重庆市梁平县梁山街道人民西路</span> 版权所有 2010-2013</p>
	    <p>联系电话：023-23222115 <span class=marl10>电子邮箱：dzb@lpsw.gov.cn <a href="http://www.miibeian.gov.cn" class="marl10">渝ICP备13001675号</a></span></p>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      footNav: []
    }
  },
  created() {
    this.$http.get('/static/data/common/foot.json')
    .then(res => {  
        this.footNav = res.data.data;
    })  
    .catch(err => {  
        console.log(err)  
    })  
  }
}
</script>

<style>


</style>
