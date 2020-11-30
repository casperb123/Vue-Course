const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    calculatedResult() {
      if (this.result < 37) {
        return `${this.result} (Not there yet)`;
      } else if (this.result > 37) {
        return `${this.result} (Too much!)`;
      } else {
        return this.result;
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.result = 0;
      }, 5000);
    },
  },
  methods: {
    addNumber(num) {
      this.result += num;
    },
  },
});

app.mount("#assignment");
