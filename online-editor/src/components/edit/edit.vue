<template  src="./edit.html" >
    <router-view></router-view>
</template>
<style  src="./edit.css" scoped></style>


<script>
import CONFIG from "../../config.json"
import RestService from "../../services/RestService"
import PollingService from "../../services/PollingService"
import newPad from "../newPad/newPad.vue";
import users from "../users/index.vue";
import { bus } from "../../main";

export default {
  name: "edit",
  components: {
    newPad: newPad,
    users: users
  },
  data: function() {
    return {
      navbaRseTvisibility: true,
      padId:'' //xreiazetai?
    };
  },
  methods: {
    makeSettingsVisible2() {
      bus.$emit("settings-visibility-editToNav", this.navbaRseTvisibility);
    },
    makeSettingsInvisible() {
      if (this.navbaRseTvisibility == true) {
        this.navbaRseTvisibility = false;
      }
      bus.$emit("set-invi-editToNavBar", this.navbaRseTvisibility);
    },
  },
  mounted() {
    bus.$on("settings-visibility-mainToEdit", data => {
      this.navbaRseTvisibility = data;
    }),
    this.makeSettingsVisible2(); //calling the makeSettingsVisible2 when edit component is loaded
  },
  beforeDestroy() {
    this.makeSettingsInvisible();
  }
};
</script>