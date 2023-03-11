<script>
 import AppHeader from './components/AppHeader.vue'
  
  export default{
    components:{
      AppHeader
      
    }
  }

</script>

<template>
  <div>
  <AppHeader></AppHeader>
    <router-view></router-view>
    
  </div>
  
</template>

<style scoped>

</style>
