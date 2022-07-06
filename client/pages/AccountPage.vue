<template lang="pug">
.container
  header
  main
  footer
</template>

<script>
import Header from "../layouts/AccountPageLayouts/Header.vue";
import Main from "../layouts/AccountPageLayouts/Main.vue";
import Footer from "../layouts/AccountPageLayouts/Footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss"></style>
