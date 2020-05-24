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
      :onClick="logginUser"
    />
  </div>
</template>

<script>
// TODO AKO USER VE4E E LOGNAT, DA NE MOJE DA SE DOSTUPVA TAZI STRANICA
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
      const username = this.inputs.find(input => input.label === "Username").value;
      const password = this.inputs.find(input => input.label === "Password").value;
      const userFound = this.users.find(user => user.username === username && user.password === password);
      if(userFound === undefined) return;

      const courses = this.users.find(user => user.username === username).courses;
      this.action_current_user({username, courses});
      this.$router.push({name: "Home"});
    }
  }
};
</script>
