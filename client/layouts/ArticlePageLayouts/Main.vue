<template lang="pug">
h1.title Create post

p.text Write to 
	u
		a(href='https://www.markdownguide.org/basic-syntax/') MarkDown.

.block
	textarea.textarea(v-model="textAreaContent")
.button__block
	button-btn(@click="post(textAreaContent)") Post
	button-btn.right-button(@click="save(textAreaContent)") Save


</template>

<script>
import TextArea from "../../components/TextArea.vue";
import ButtonBtn from "../../components/ButtonBtn.vue";
import { makeArticlePost, makeArticleSave } from "../../api/makeArticlePost.js";

export default {
  components: {
    TextArea,
    ButtonBtn,
  },

  data() {
    return {
      textAreaContent: "",
    };
  },

  methods: {
    post(content) {
      makeArticlePost(content);
    },
    save(content) {
      makeArticleSave(content);
    },
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
