import VueWheelSlider from './wheelSlider.vue'

const wheelSlider = {
	install:function(Vue){
		Vue.component('vue-wheel-slider',VueWheelSlider);
	}
}
export default wheelSlider;