<template>
    <div class='m-header'> 
			<img src="https://wicdn.xiaohongchun.com/xhc-plat/1532339862212_kcPzk4yDdZ.png">
			<p>小红唇在线商城</p>
			<img src="../../../../static/fenxiang.png" class="img">
    </div>
</template>
<script>
export default {
    name:'MHeader',
	methods:{
//     goSearch(){
//         this.$router.push({path:'solid')
//    }   
	}
}
</script>
<style lang="less" scoped>
 	@import '~style/index.less';
 	
  .m-header{
      .w(375);
      .h(44);
      text-align: center;
      .l_h(44);
      color:@font-color-header;
      font-size: @font-size-m;
      background: @bg-color;
      color: white;
      font-weight: 600;
      display: flex;
	  img{
	  	.w(110);
	  	.h(26);
	  	.margin(9,0,0,10)
	  }
	  p{
	  	flex: 1;
	  	font-size:@font-size-m ;
	  }
	  .img{
	  	.w(16);
	  	.h(16);
	  	.margin(14,16,0,0)
	  }
  } 
</style>