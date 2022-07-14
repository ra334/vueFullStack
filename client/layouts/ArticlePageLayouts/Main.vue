<template lang="pug">
h1.title Create post

p.text Write to 
	u
		a(href='https://www.markdownguide.org/basic-syntax/') MarkDown.

.block
	text-area.textarea
.button__block
	button-url(to="#") Save and Post
	button-url.right-button(to="#") Save


</template>

<script>
import TextArea from "../../components/TextArea.vue";
import ButtonUrl from "../../components/ButtonUrl.vue";

export default {
  components: {
    TextArea,
    ButtonUrl,
  },
};
</script>

<style lang="scss">
.textarea {
  margin: 50px 0 0;
  width: 900px;
  height: 500px;
}

.block {
  display: flex;
  justify-content: center;
}

.button__block {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.right-button {
  margin-left: 15px;
}

.text {
  color: #f0f6f6;
  text-align: center;
}
</style>
