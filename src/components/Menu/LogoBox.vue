<template>
  <div class="logoItem" @click="homePage">
    <a href="#/">
      <el-image :src="logoPath" >
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </a>
  </div>
</template>

<script>
export default {
  name: "LogoBox",
  data() {
    return {
      logoPath: require('@/assets/logo.png'),
    }
  }, methods: {
    homePage() {
      if (this.$store.state.currentIndex !== 'minion.html') {
        this.$store.dispatch('currentIndex', "minion.html");
      }
    }
  }
}
</script>

<style scoped>

.logoItem {
  display: flex;
  padding: 10px 10px 10px 10px;
  position: fixed;
  width: 100%;
  max-width: 180px;
  height: 100%;
  max-height: 40px;
  z-index: 999;
  background-color: rgb(238, 241, 246);
}

el-image {
  text-align: center;
  width: 80%;
  height: 80%;
}

</style>