<template lang="pug">
h1.title Create post

p.text Write to 
	u
		a(href='https://www.markdownguide.org/basic-syntax/') MarkDown.

.block
	text-area.textarea
.button__block
	custom-button Save and Post
	custom-button.right-button Save


</template>

<script>
import TextArea from "../../components/TextArea.vue";
import CustomButton from "../../components/CustomButton.vue";

export default {
  components: {
    TextArea,
    CustomButton,
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

.title {
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
  color: #f0f6f6;
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
