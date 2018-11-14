 <style type="scoped" lang="scss">
@import '@/assets/css/logReg.scss'
</style>

<template>
	<div>
	    <div id="background-img0"></div>

	    <div id="log-main">
			<transition name="slide-fade">
			    <login @reg='reg' v-if="show1"></login>
				<register v-else></register>
		  	</transition>
	  	</div>
	   
	</div>
</template>

<script>
	export default {
		
		data(){
			return {
				show:false,
				show1:true,
			}
		},
	    mounted:function(){
	      var _this = this;
	      _this.show = true;
	      // console.log(this.$route.params.status);
	    },
	    methods:{
	    	reg() {
	    		this.show1 = false;
	    	},
	    	
	    }

	}
</script>