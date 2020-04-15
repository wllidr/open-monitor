<template>
  <div class="index c-dark">
    <Menu></Menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { watermark } from '@/assets/js/waterMark';
import Menu from "@/components/menu";
export default {
  name: "index",
  data() {
    return {
      DelConfig: {
        isDisplay:false,
        displayConfig: {
          name: ''
        },
        callback: null
      }
    }
  },
  mounted () {
    watermark({
      watermark_txt: 'Open-Monitor ' + localStorage.getItem('username'),
      watermark_fontsize: '12px',
      watermark_x_space: 300,
      watermark_y_space: 100,
      watermark_y: 100,
      watermark_alpha: 0.2})
  },
  methods: {},
  components: {
    Menu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index {
  min-width: 1200px;
  // background: white;
}
// .content {
//   background-image: url("../assets/img/watermark-3.png");
//   height: calc(100vh - 210px);
//   margin: 0 auto;
//   padding: 10px;
// }
</style>
