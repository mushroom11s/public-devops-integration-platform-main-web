<template>
  <!-- 如果菜单数据中的子菜单不为空 -->
  <div>
    <template v-if="menu_data.submenu.length>0">
      <auto-submenu :subMenuData="menu_data.submenu"></auto-submenu>
    </template>
    <template v-else-if="menu_data.items.length > 0">
      <template v-for="item of menu_data.items">
        <el-menu-item :key="item.title" @click="getIndex(item)">
          {{ item.title }}
        </el-menu-item>
      </template>
    </template>
  </div>
</template>
<style scoped>
</style>
<script>
import AutoSubmenu from '@/components/Menu/AutoSubmenu.vue'

export default {
  components: {
    AutoSubmenu
  },
  name: 'AutoMenu',
  props: ['groupMenuData'],
  inheritAttrs: false,
  data() {
    return {
      menu_data: this.groupMenuData
    }
  }, methods: {
    getIndex(menuItem) {
      this.$store.dispatch('currentIndex', menuItem.index);
    }
  }
}
</script>