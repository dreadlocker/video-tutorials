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
import { mapState, mapActions } from "vuex";
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
    ...mapState({
      users: state => state.users,
    })
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
      const [username, password, repeatPassword] = this.inputs.map(input => input.value);
      if(password !== repeatPassword) return;

      const userFound = this.users.find(user => user.username === username);
      if(userFound) return;

      const courses = [];
      const usersCopy = [...this.users, {username, password, courses} ];

      this.action_current_user({username, courses, access: "user"});
      this.action_save_users(usersCopy);
      this.$router.push({name: "Home"});
    }
  }
};
</script>
