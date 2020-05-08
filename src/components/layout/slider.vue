<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu unique-opened router>
         <div v-for="(route,index) in Routers">
           <el-submenu :key="index" :index="route.name">
            <template slot="title"><i class="el-icon-message"></i>{{route.name}}</template>
            <el-menu-item v-for="(cRoute,cIndex) in route.children" :key="cIndex" :index="cRoute.name" :route="cRoute">{{cRoute.name}}</el-menu-item>
           </el-submenu>
         </div>
    </el-menu>
  </el-aside>
</template>
<script>
import sliderPath from "@/router/sliderPath.js";
export default {
  data(){
    return{
      Routers:sliderPath
    }
  }
}
</script>
<style scoped lang="scss">
.el-aside{
  height: 100%;
  overflow-y:auto;
  color: #333;
}
</style>