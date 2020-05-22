<template>
  <div>
    <BaseInput
      v-for="input in inputs"
      :key="input.label"
      :input="input"
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
  ACTION_ADD_USER,
  ACTION_IS_USER_LOGGED_IN,
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
    };
  },
  methods: {
    ...mapActions({
      action_add_user: ACTION_ADD_USER,
      action_is_user_logged_in: ACTION_IS_USER_LOGGED_IN,
    }),
    registerUser() {
      const password = this.inputs.find(input => input.label === "Password").value;
      const repeatPassword = this.inputs.find(input => input.label === "Repeat Password").value;
      if(password !== repeatPassword) return;

      const username = this.inputs.find(input => input.label === "Username").value;
      const userFound = this.users.find(user => user.username === username);
      if(userFound) return;

      const user = {
        username: username,
        password: password,
        coursesId: [],
      };
      this.action_add_user(user);
      this.action_is_user_logged_in(true);
      this.$router.push({name: "Home"});
    }
  }
};
</script>
