<template>
  <div class="footer max-width">{{text}}<a class="fotter-link">{{link}}</a></div>
</template>

<script>
export default {
  name: "BaseFooter",
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  }
};
</script>
