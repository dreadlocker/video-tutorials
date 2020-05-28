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
      :onClick="registerUser"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  ACTION_SAVE_USERS,
  ACTION_CURRENT_USER,
} from "@/store/types.js";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "RegisterPage",
  components: {
    BaseInput,
    BaseButton,
  },
  computed: {
    ...mapGetters(["users"]),
  },
  data() {
    return {
      button: {
        type: "button",
        classes: "primary",
        text: "Register",
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
        {
          label: "Repeat Password",
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
      action_save_users: ACTION_SAVE_USERS,
      action_current_user: ACTION_CURRENT_USER,
    }),
    registerUser() {
      const [username, password, repeatPassword] = this.inputs.map(input => input.value.trim());
      if(password !== repeatPassword) return;

      const userFound = this.users.find(user => user.username === username);
      if(userFound) return;

      const courses = [];
      const access = "user";
      const newUsers = [...this.users, {username, password, courses, access} ];

      this.action_current_user({username, courses, access});
      this.action_save_users(newUsers);
      this.$router.push({name: "Home"});
    }
  }
};
</script>
