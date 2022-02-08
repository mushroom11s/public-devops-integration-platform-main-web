<template>
  <el-container class="home">
    <NavMenu class="Menu"/>
    <Contents/>
  </el-container>
</template>

<script>
// @ is an alias to /src
import NavMenu from "@/views/NavMenu";
import Contents from "@/views/Contents";

export default {
  name: 'Home',
  components: {
    Contents,
    NavMenu
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

//.Home {
//  height: 100%;
//  width: 100%;
//}
//
//.Contents {
//  height: 100%;
//  width: 100%;
//}
//
//el-main {
//  height: 100%;
//  width: 100%;
//}

.Menu {
  height: 100%;
  width: 18%;
  max-width: 200px;
  min-width: 200px;
}
</style>