const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      secondInput: "",
      confirmedSecondInput: "",
    };
  },
  methods: {
    alert() {
      alert("You pressed the butto you maniac");
    },
    changeFirstInput(event) {
      this.firstInput = event.target.value;
    },
    changeSecondInput(event) {
      this.secondInput = event.target.value;
    },
    confirmSecondInput() {
      this.confirmedSecondInput = this.secondInput;
    },
  },
});

app.mount("#assignment");
