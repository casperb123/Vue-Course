const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      listVisible: true,
    };
  },
  computed: {
    listVisibility() {
      return this.listVisible;
    },
    buttonCaption() {
      return this.listVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleListVisibility() {
      this.listVisible = !this.listVisible;
    },
  },
});

app.mount("#assignment");
