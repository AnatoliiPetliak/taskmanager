<template>
<TaskManagerWrapper />
</template>

<script>
import TaskManagerWrapper from './components/TaskManagerWrapper.vue'

export default {
  name: 'App',
  components: {
    TaskManagerWrapper
  }
}
</script>

<style lang="scss">
@import "../src/scss/_reset.scss";

@font-face {
  font-family: "HelveticaNeueCyr";
  src: local("HelveticaNeueCyr-Bold"),
    url("../src/fonts/HelveticaNeueCyr-Bold.woff2") format("woff"),
    url("../src/fonts/HelveticaNeueCyr-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "HelveticaNeueCyr";
  src: local("HelveticaNeueCyr-Medium"),
    url("../src/fonts/HelveticaNeueCyr-Medium.woff2") format("woff2"),
    url("../src/fonts/HelveticaNeueCyr-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "HelveticaNeueCyr";
  src: local("HelveticaNeueCyr-Roman"),
    url("../src/fonts/HelveticaNeueCyr-Roman.woff2") format("woff2"),
    url("../src/fonts/HelveticaNeueCyr-Roman.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "HelveticaNeueCyr", Arial, sans-serif;
}

</style>
