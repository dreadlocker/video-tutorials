<template>
  <div class="max-width">
    <BaseInput
      v-for="input in inputs"
      :key="input.label"
      :input="input"
      :labelClasses="labelClasses"
    />

    <BaseButton
      :button="button"
      :onClick="logginUser"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  ACTION_CURRENT_USER,
} from "@/store/types.js";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "LoginPage",
  components: {
    BaseInput,
    BaseButton,
  },
  computed: {
    ...mapState({
      users: state => state.users,
    })
  },
  data() {
    return {
      button: {
        type: "button",
        classes: "primary",
        text: "Login",
      },
      inputs: [
        {
          label: "Username",
          type: "text",
          placeholder: "Username",
          value: "",
        },
        {
          label: "Password",
          type: "password",
          placeholder: "Password",
          value: "",
        },
      ],
      labelClasses: "label",
    };
  },
  methods: {
    ...mapActions({
      action_current_user: ACTION_CURRENT_USER,
    }),
    logginUser() {
      const [username, password] = this.inputs.map(input => input.value.trim());
      const userFound = this.users.find(user => user.username === username && user.password === password);
      if(!userFound) return;

      const courses = userFound.courses;
      const access = userFound.username === "Admin" ? "admin" : "user";
      this.action_current_user({username, courses, access});
      this.$router.push({name: "Home"});
    }
  }
};
</script>
