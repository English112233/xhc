<template>
	<div class="wrapper" ref='wrapper'>
    	<div class="content">
			<div class="main">
				<ul>
					<li
						v-for = '(item,index) in list'
						:key='index'
						>
						<img :src="item.g_image">
						<p>{{item.g_title}}</p>
						<h6>{{item.g_name}}</h6>
						<h5>{{item.g_price_shop}}<del>{{item.g_price_market}}</del></h5>
						
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
	       return{
				list:[]
	       }
	    },
	   mounted(){ 
	   			
	   			let url = `/lyf/goods/detail/recommended?gid=${this.$route.params.i}`
	   			  
	   			//https://napi.xiaohongchun.com/goods/detail/recommended?gid=17912
	   			
		       	this.$axios.get(url)
		       .then((res)=>{
		       	console.log(res.data[0])
				this.list = res.data
				
		       })
		      
	   }
	}
</script>

<style lang="less" scope>
	@import '~style/index.less';
		.wrapper{
			.w(375);
	      	.h(579);
	      	position: fixed;
		    .top(0);
		    .left(0);
		    .bottom(0);
		    .right(0);
	        overflow: hidden;
				.content{
		        	overflow-y:auto;
		        	
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
			        			.h(34)
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