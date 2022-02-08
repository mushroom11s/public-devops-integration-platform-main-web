<template>
  <el-container class="Menu">
    <div class="Logo">
      <LogoBox/>
    </div>
    <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
      <div class="menuContent">
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            router
        >
          <template v-for="group_menu of menu_data">
            <auto-menu :groupMenuData="group_menu" :key="group_menu.group_title"></auto-menu>
          </template>
        </el-menu>
      </div>

    </el-aside>
  </el-container>
</template>
<style>
@import './AwMenu.css';
</style>

<script>
import LogoBox from "@/components/Menu/LogoBox";
import AutoMenu from '@/components/Menu/AutoMenu';
import {getMenuDetails} from '@/api/menu-data';

export default {
  name: 'AwMenu',
  components: {LogoBox, AutoMenu},
  data() {
    return {
      isCollapse: false,
      menu_data: '',
    }
  },
  methods: {
    init() {
      this.getDetails()
    },
    getDetails() {
      getMenuDetails().then(response => {
        this.menu_data = response;
        console.log(this.menu_data);
      })
    },
  },
  mounted() {
    this.init();
  }
}
</script>