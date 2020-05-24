<template>
  <div>
    <label :class="labelClasses">{{input.label}}</label>

    <textarea
      v-if="input.tag === 'textarea'"
      v-model="input.value"
      :placeholder="input.placeholder"
      name=""
      id=""
      cols="30"
      rows="3"
    ></textarea>

    <input
      v-else
      :type="input.type"
      :placeholder="input.placeholder"
      v-model="input.value"
    >
    
    <BaseButton
      v-if="button && onClick"
      :button="button"
      :onClick="onClick"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "BaseInput",
  components: {
    BaseButton,
  },
  props: {
    input: {
      type: Object,
      required: true
    },
    labelClasses: {
      type: String,
    },
    button: {
      type: Object,
    },
    onClick: {
      type: Function,
    },
  }
};
</script>
