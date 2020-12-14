<template>
            <div class="card__settings">
                <CardDetails />
                <CardColors />
            </div>
</template>

<script>

import CardDetails from "./CardDetails"
import CardColors from "./CardColors"

export default {
  name: 'CardSettings',
  components:{
      CardDetails,
      CardColors, 

      },
  props: {
  
  }
}
</script>

<style scoped>
.card__settings {
    display: flex;
    margin-top: auto;
}


</style>