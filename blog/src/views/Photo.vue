<style type="scoped" lang="scss">

#background-img3{
	position:absolute;
	width:100%;
	height:100%;
	top:0px;
	left:0px;
	background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url("../assets/photoImg.jpg");
    background-size:1680px;
    z-index:-3;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
	<div>
      	<div id="background-img3"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show:false,
			}
		},
		mounted:function(){
			var _this = this;
		}
	}
</script>