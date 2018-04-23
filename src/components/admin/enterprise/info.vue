<template>
  <div>
    <div class="data_bar"><a href=""  class="f333 font16">学院信息</a></div>
     <form class="pa_notice" action="" method=""  >
     <table>
       <tbody>
         <tr>
           <td>发送至</td>
           <td colspan="2"><input type="radio" value="" name="pur" class="marr10" />动态解读 <input type="radio" value="" name="pur" class="marl40 marr10" />财富课堂</td>
         </tr>
          <tr>
           <td>内容标题</td>
           <td colspan="2" width="606"><input type="text" value="给文章起个简单明了，便于记忆的名字，少于50字" class="f80 pur_text2"   /></td>
         </tr>
          <tr>
           <td  >导读</td>
           <td colspan="2"  ><textarea name="" id="" cols="30" rows="10" class="f80"  style="width:518px;height:98px;">少于100字</textarea></td>
         </tr>
         <tr>
           <td>上传</td>
          <td width="130" class="cover"><input type="file" value=""  /><a href="" class="green_a5">封面</a></td>
          <td style="color:#808080;font-size:12px;vertical-align:bottom">封面尺寸为990*364px，图片大小不超过10MB，支持png/jpg文件格式</td>
         </tr>
          <tr>
           <td></td>
           <td colspan="2"><img src="/static/images/cover.jpg" height="400" width="600" alt="" /></td>
         </tr>
         <tr>
           <td style="vertical-align:top">文章内容</td>
           <td colspan="2"><img src="/static/images/shop_img2.png" height="297" width="600" alt="" /></td>
         </tr>
         <tr>
           <td></td>
           <td colspan="3" ><input type="submit" value="提交" class="green_a5 marl40 mart40" style="float:none" /> <input type="reset" value="重置" /></td>
         </tr>
       </tbody>
     </table>
    
     </form>
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
