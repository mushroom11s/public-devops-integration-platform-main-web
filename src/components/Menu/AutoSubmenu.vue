<template>
  <div v-if="menu_data">
    <template v-for="submenu of menu_data">
      <el-submenu :index="submenu.index" :key="submenu.index">
        <template slot="title">
          <i class="el-icon-paperclip"></i>
          <span slot="title">{{ submenu.title }}</span>
        </template>
        <template v-for="item of submenu.items">
          <el-menu-item :key="item.title" @click="getIndex(item)">
            {{ item.title }}
            <i class="el-icon-monitor windowIcon" @click.stop="openWindown(item.index)"/>
          </el-menu-item>
        </template>
        <template v-if="submenu.submenu.length>0">
          <auto-sub-menu :subMenuData="submenu.submenu">
          </auto-sub-menu>
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<style scoped>
.windowIcon {
  margin-left: 5px;
}
</style>
<script>

export default {
  name: 'AutoSubMenu',
  props: ['subMenuData'],
  data() {
    return {
      menu_data: this.subMenuData,
    }
  },
  methods: {
    getIndex(menuItem) {
      if (menuItem.isOpen) {
        var iWidth = 1180;                         //弹出窗口的宽度;
        var iHeight= 800;                        //弹出窗口的高度;
        //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
        var iTop = (window.screen.height-30-iHeight)/2;       //获得窗口的垂直位置;
        var iLeft = (window.screen.width-10-iWidth)/2;        //获得窗口的水平位置;
        const popUpWindow = window.open(menuItem.index,menuItem.title,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
        popUpWindow.focus();
      } else this.$store.dispatch('currentIndex', menuItem.index);

    },
    openWindown(index) {
      window.open(index);
    }
  }
}
</script>