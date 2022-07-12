<template lang="pug">

header.header
  .header__main
    .header__menu
      a.create__post.mainpage__button(href="#") Create post
    .header__auterization
      a.sign_in.mainpage__button(href="/account") Sign in
      a.sign_up.mainpage__button(href="/account") Sign up


</template>

<script>
export default {};
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

.mainpage__button {
  border: 1px solid #f0f6f6;
  padding: 7px 25px;
  border-radius: 20px;
  transition: all 0.7s;
}

.mainpage__button:hover {
  background-color: #ff66b3;
  border-color: #ff66b3;
  transition: all 0.7s;
}
</style>
