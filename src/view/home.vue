<template>
  <div class="homepage">
    <div class="left-slider">
    <my-slider></my-slider>
    </div>
    <div class="right-main" style="width: 100%">
      <my-header></my-header>
      <el-mian>
        <router-view></router-view>
      </el-mian>
    </div>
  </div>
</template>
<script>
import myHeader from '@/components/layout/header.vue'
import mySlider from '@/components/layout/slider.vue'
export default {
  name: "home",
 components:{
  myHeader,mySlider
 },
  data() {
    return {
     
    };
  }
};
</script>
<style scoped>
.homepage{
    display: flex;
    flex-direction: row;
}
</style>