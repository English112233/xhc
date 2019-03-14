<template>
<div class="wrapper" ref='wrapper'>
	    <div class="content">
			<div class="tab">
		        <router-link active-class='selected' tag='div' to='/big/recommend'>
		            <span class='item'>精选</span>
		        </router-link>
		        <router-link active-class='selected' tag='div' to='/big/cate'>
		            <span class='item'>排行榜</span>
		        </router-link>
		        <router-link active-class='selected' tag='div' to='/big/family'>
		            <span class='item'>护肤精装</span>
		        </router-link>
		        <router-link active-class='selected' tag='div' to='/big/fashion'>
		            <span class='item'>家居生活</span>
		        </router-link>
		        <router-link active-class='selected' tag='div' to='/big/personage'>
		            <span class='item'>个人护理</span>
		        </router-link>
		        <router-link active-class='selected' tag='div' to='/big/seniority'>
		            <span class='item'>时尚穿搭</span>
		        </router-link>
		        <router-link active-class='selected' tag='div' to='/big/skin'>
		            <span class='item'>美食保健</span>
		        </router-link> 
		    </div>
	    </div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		
	}
</script>

<style lang="less">
	@import '~style/index.less';
	.wrapper{
		.w(375);
      	.h(44);
      	position: fixed;
	    .top(44);
	    .left(0);
	    .bottom(0);
	    .right(0);
        overflow: hidden;
	        .content{
	        	overflow-x:auto;
	        	.tab{
					/*.bug(red);*/
					display: flex;
					.w(700);
	      			.h(44);
	      			div{
	    				font-size: @font-size-m;
	    				color:#000;
	    				
	    				flex: 1;
	    				text-align: center;
	    				.l_h(44);
				    		.item{
				    			padding-bottom: 5px;
				    			.margin(0,5,0,5)
				    		}
	    				}
	    			.selected{
	    				border-bottom: 1px solid @bg-color;
	    				
	    			}
				}
	        }
		
	}
	
</style>