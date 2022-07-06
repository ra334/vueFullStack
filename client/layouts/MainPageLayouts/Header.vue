<template lang="pug">

header.header
  .header__main
    .header__menu
      a.create__post Create post
    .header__auterization
      a.sign_in(href="#") Sign in
      a.sign_up(href="#") Sign up

</template>

<script>
export default {};
</script>

<style lang="scss">
.header__main {
  padding: 20px 15px;
  background-color: #083d77;

  display: flex;
  justify-content: space-between;
}

a {
  color: #ebebd3;
}

.sign_in {
  margin-right: 20px;
}
</style>
