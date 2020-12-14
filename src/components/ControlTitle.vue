<template>
    <section class="main__control control container">
        <h1 class="control__title">TASKMANAGER</h1>
    </section>  
</template>

<script >
export default {
  name: 'ControlTitle',
  components:{
    
  },
  props: {
  
  }
}

</script>

<style lang="scss" scoped>

.container {
    width: 960px;
    padding: 0 20px;
    margin: 0 auto;
}

.main__control {
    margin-bottom: 8px;
}

.control {
    position: relative;
    display: flex;
    align-items: baseline;
}

.control__title {
  font-size: 16px;
  line-height: 23px;
  margin-top: 0;
  margin-bottom: 0;
}





</style>