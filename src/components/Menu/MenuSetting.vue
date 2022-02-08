<template>
  <div class="menuSetting">
    <el-image :src="settingIcon" class="settingIcon">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  name: "MenuSetting",
  data() {
    return {
      settingIcon: require('@/assets/setting.png'),
    }
  }
}
</script>

<style scoped>
.settingIcon {
  width: 20px;
  height: 20px;
}

.menuSetting {
  text-align: center;
  height: 20px;
  padding: 10px 0 10px 0;
}

el-image {
  text-align: center;
}
</style>