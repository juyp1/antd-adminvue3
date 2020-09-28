<template>
   <keep-alive :include="cacheList">
    <router-view ref="child"/>
  </keep-alive>
</template>
<script>
export default {
  name: 'ParentView',
  computed: {
    cacheList () {
      return []
    }
  }
  
}
</script>
