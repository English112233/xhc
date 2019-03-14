import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Recommend from 'pages/Recommend/Recommend'

import Details from 'pages/Details/Details'
import Cate from 'pages/Cate/Cate'
import Family from 'pages/Family/Family'
import Fashion from 'pages/Fashion/Fashion'
import Personage from 'pages/Personage/Personage'
import Seniority from 'pages/Seniority/Seniority'
import Skin from 'pages/Skin/Skin'

import Big from '@/components/Big.vue'

export default new Router({ 
  routes: [ 
		
  	{
      path: '/details/:i',
      name: 'Details',
      component: Details
    },
		{
      path: '/big',
      name: 'Big',
      component: Big,
      children:[
		    {
		      path: 'recommend',
		      name: 'Recommend',
		      component: Recommend
		    },
		    {
		      path: 'cate',
		      name: 'Cate',
		      component: Cate
		    },
		    {
		      path: 'family',
		      name: 'Family',
		      component: Family
		    },
		    {
		      path: 'fashion',
		      name: 'Fashion',
		      component: Fashion
		    },
		    {
		      path: 'personage',
		      name: 'Personage',
		      component: Personage
		    },
		    {
		      path: 'seniority',
		      name: 'Seniority',
		      component: Seniority
		    },
		    {
		      path: 'skin',
		      name: 'Skin',
		      component: Skin
		    },
		    
		    {
		      path: '/',
		      redirect:'recommend'
		    }
      ]
   },
    {
		    path: '/',
		    redirect:'/big'
		 }
    
  ]
})
