<template lang="pug">
.container
  main-page-header
  main-page-main
  main-page-footer
</template>

<script>
import MainPageHeader from "../layouts/MainPageLayouts/Header.vue";
import MainPageMain from "../layouts/MainPageLayouts/Main.vue";
import MainPageFooter from "../layouts/MainPageLayouts/Footer.vue";
export default {
  components: {
    MainPageHeader,
    MainPageMain,
    MainPageFooter,
  },
};
</script>

<style lang="scss"></style>
