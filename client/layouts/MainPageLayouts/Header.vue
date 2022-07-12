<template lang="pug">

header.header
  .header__main
    .header__menu
      button-url(href="/article") Create post
    .header__auterization
      button-url(href="/account") Sign in
      button-url.button-right(href="/account") Sign up


</template>

<script>
import ButtonUrl from "../../components/ButtonUrl.vue";
export default {
  components: {
    ButtonUrl,
  },
};
</script>

<style lang="scss">
.header__main {
  padding: 20px 15px;
  border: 1px solid #f0f6f6;
  border-radius: 7px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.sign_in {
  margin-right: 20px;
}

.button-right {
  margin-left: 10px;
}
</style>
