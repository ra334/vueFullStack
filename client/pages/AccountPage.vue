<template lang="pug">

account-header
account-main
account-footer

</template>

<script>
import AccountHeader from "../layouts/AccountPageLayouts/Header.vue";
import AccountMain from "../layouts/AccountPageLayouts/Main.vue";
import AccountFooter from "../layouts/AccountPageLayouts/Footer.vue";

export default {
  components: {
    AccountHeader,
    AccountMain,
    AccountFooter,
  },
};
</script>

<style lang="scss"></style>
