<template>
  <el-container>
    <iframe v-bind:src="iframeSrc" id="iframe"/>
  </el-container>
</template>

<script>
export default {
  name: "Contents",
  computed: {
    iframeSrc() {
      if (this.$store.state.currentIndex===''){
        return "minion.html";

      }
      const iframe = document.getElementById('iframe').contentWindow;
      iframe.postMessage('go!!', '*');
      return this.$store.state.currentIndex;
    }
  },
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
</style>