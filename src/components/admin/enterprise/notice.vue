<template>
  <div>
    <div class="data_bar"><a href=""  class="f333 font16">发送公告</a></div>
     <form class="pa_notice" action="" method=""  >
     <table>
       <tbody>
         <tr>
           <td>发送类型</td>
           <td colspan="3"><input type="radio" value="" name="pur" class="marr10" />指定企业 <input type="radio" value="" name="pur" class="marl20 marr10" />全部企业</td>
         </tr>
          <tr>
           <td width="15%" style="vertical-align:top" >企业列表</td>
           <td colspan="2" width="65%" ><textarea name="" id="" cols="30" rows="10"></textarea></td>
           <td width="20%" style="vertical-align:bottom;color:#808080;font-size:12px;">每行填写一个企业名</td>
         </tr>
         <tr>
           <td>分批发送数量</td>
           <td width="30%" ><input type="text" value="" class="pur_text1" /></td>
           <td  colspan="2" style="vertical-align:bottom;color:#808080;font-size:12px;" >一次发送过多，程序可能会因为超时而终止执行。此处建议不要超过100</td>
         </tr>
          <tr>
           <td>发送方式</td>
           <td colspan="3"><input type="radio" value="" name="pur1" class="marr10" />公告<input type="radio" value="" name="pur1" class="marr10 marl40" />邮件</td>
         </tr>
         <tr>
           <td style="vertical-align:top">通知内容</td>
           <td colspan="2"><textarea name="" id="" cols="30" rows="10"></textarea></td>
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
