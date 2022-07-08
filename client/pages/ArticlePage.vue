<template lang="pug">


article-header
article-main
article-footer

</template>

<script>
import ArticleHeader from "../layouts/ArticlePageLayouts/Header.vue";
import ArticleMain from "../layouts/ArticlePageLayouts/Main.vue";
import ArticleFooter from "../layouts/ArticlePageLayouts/Footer.vue";

export default {
  components: {
    ArticleHeader,
    ArticleMain,
    ArticleFooter,
  },
};
</script>

<style lang="sass"></style>
