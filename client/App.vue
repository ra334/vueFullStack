<template lang="pug">
router-link(to="/") main 
.container
  router-view

</template>

<script>
import MainPage from "./pages/MainPage.vue";

export default {
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
body {
  background-color: #42bfdd;
}

a {
  color: #f0f6f6;
  cursor: pointer;
}

.container {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}

body {
  font-size: 17px;
}

.title {
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
  color: #f0f6f6;
}
</style>
