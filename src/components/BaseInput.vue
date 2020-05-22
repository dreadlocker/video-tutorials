<template>
  <div>
    <label class="label">{{input.label}}</label>

    <textarea
      v-if="input.tag === 'textarea'"
      name=""
      id=""
      cols="30"
      rows="10"
    ></textarea>

    <input
      v-else
      :type="input.type"
      :placeholder="input.placeholder"
      v-model="input.value"
    >
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    input: {
      type: Object,
      required: true
    },
  }
};
</script>
