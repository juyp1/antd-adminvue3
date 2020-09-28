<template>
  <div>
    <a-button type="danger" @click="handleup">
      测试更新
    </a-button>
    {{title}}
    <icon-font type="icon-calendar" />
 
  </div>
</template>

<script>
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1859109_q2zl3c00i6.js',
});
import { ref, onMounted, computed } from "vue";
export default {
  name: 'carelist',
  components:{
    IconFont
  },
  setup () {
    const title=ref('hello word')
    function handleup(){
      title.value="hello uodate success"
    }
    return {
      title,
      handleup
    }
  }
}
</script>

<style lang="scss" scoped>
</style>