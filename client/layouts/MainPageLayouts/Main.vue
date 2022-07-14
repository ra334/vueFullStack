<template lang="pug">
h1.title New posts
.posts
	| {{text}}

input(v-model="text")
</template>

<script>
export default {
  data() {
    return {
      text: "Крутяк",
    };
  },

  methods: {},

  mounted() {},
};
</script>

<style lang="scss"></style>
