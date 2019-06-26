<template>
  <div class="hello">
		<vue-wheel-slider :wheelPic='picList' :dotSize="18" :showDot="true" :showArrow="true" :dotBoDis="dotBoDis" :wheelWidth="800" :wheelHeight="416"></vue-wheel-slider>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
			dotBoDis:'24%',
      picList:[
				{
					img:'https://imgpub.chuangkit.com/designTemplate/2018/12/07/444987675_thumb?v=1548405600000'
				},
				{
					img:'https://imgpub.chuangkit.com/designTemplate/2018/12/07/444987683_thumb?v=1548405600000'
				},
				{
					img:'https://imgpub.chuangkit.com/designTemplate/2018/12/07/444987658_thumb?v=1548405720000'
				},
				{
					img:'https://imgpub.chuangkit.com/designTemplate/2018/12/07/444987665_thumb?v=1548405721000'
				},
				{
					img:'https://imgpub.chuangkit.com/designTemplate/2018/12/07/444987662_thumb?v=1544181069000'
				},
				
			]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
