<template>
	<div class="wrapper" ref='wrapper'>
		
    	<div class="content">
    		<div class="main">
    		<ul>
    			<li 
    				v-for='(item,index) in list' 
    				:key = 'index'
    				@click='goDetail(item.id)'
    				>
    				
    				<img  v-lazy='item.cover_url'>
    				<h6>{{item.title}}</h6>
    				<p>{{item.name}}</p>
    				<h5>￥{{item.price_shop}}<del>{{item.price_market}}</del></h5>
    			</li>
    		</ul>
    		</div>
    	</div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'



export default {
   data(){
   	return{
   		list:[]
   	}
		
   }, 
      methods:{
       goDetail(sox){
           this.$router.push({name:'Details',params:{i:sox}})
       }
   },

   created(){ 
		let url = '/lyf/goods/tag/v2/9/goods?module_id=index_module_1662&orderby=default_desc&rank=0&rt_type='
		
		this.$axios.get(url)
		.then((res)=>{
		 	console.log(res.data.goods)
		 	this.list = res.data.goods
		 	console.log(this.list)
		})
		
    },
   mounted(){
//		scroll = new Bscroll('.wrapper')
   }
}
	
</script>

<style lang="less" scoped>
	@import '~style/index.less';
		.wrapper{
			.w(375);
	      	.h(579);
	      	position: fixed;
		    .top(88);
		    .left(0);
		    .bottom(0);
		    .right(0);
	        overflow: hidden;
				.content{
		        	overflow-y:auto;
		        	height:100%;
		        	ul{
		        		
		        		li:nth-child(2n-1){
		        			margin-left: 10px;
		        		}
		        		
		        		li{
			        		float:left;
			        		.w(180);
			        		list-style:none;
			        		
			        		img{
			        			.w(170);
			        			.h(170);
			        		}
			        		h6{
			        			font-size: @font-size-ms;
			        		}
			        		p{
			        			font-size: @font-size-ms;
			        			.w(176);
			        			.h(40);
			        			overflow:hidden;
			        			color:#808080;
			        		}
			        		h5{
			        			font-size: @font-size-ms;
			        			font-weight:100;
			        			.margin(10,0,10,0);
			        			color:@bg-color;
			        		}
			        		del{
			        			.margin(0,0,0,20);
			        			color:#808080;
			        		}
			        	}
		        	}
			        	
		        	}
				
			}
</style>