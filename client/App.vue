<template lang="pug">

.container
  router-view

</template>

<script>
import MainPage from "./pages/MainPage.vue";
import ArticlePage from "./pages/ArticlePage.vue";
import AccountPage from "./pages/AccountPage.vue";

export default {
  components: {
    MainPage,
    ArticlePage,
    AccountPage,
  },
};
</script>

<style lang="scss">
body {
  background-color: #42bfdd;
}

a {
  color: #f0f6f6;
}

.container {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}

body {
  font-size: 17px;
}
</style>
