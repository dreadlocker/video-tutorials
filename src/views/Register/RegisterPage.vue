<template>
  <div>
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
import { mapState, mapActions } from "vuex";
import {
  ACTION_SAVE_USERS,
  ACTION_IS_USER_LOGGED_IN,
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
    ...mapState({
      users: state => state.users,
    })
  },
  data() {
    return {
      button: {
        type: "button",
        classes: "",
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
      action_is_user_logged_in: ACTION_IS_USER_LOGGED_IN,
      action_current_user: ACTION_CURRENT_USER,
    }),
    registerUser() {
      const password = this.inputs.find(input => input.label === "Password").value;
      const repeatPassword = this.inputs.find(input => input.label === "Repeat Password").value;
      if(password !== repeatPassword) return;

      const username = this.inputs.find(input => input.label === "Username").value;
      const userFound = this.users.find(user => user.username === username);
      if(userFound) return;

      const courses = [];
      const user = {
        username,
        password,
        courses,
      };
      const usersCopy = this.users.map(user => user);
      usersCopy.push(user);

      this.action_is_user_logged_in(true);
      this.action_current_user({username, courses});
      this.action_save_users(usersCopy);
      this.$router.push({name: "Home"});
    }
  }
};
</script>
