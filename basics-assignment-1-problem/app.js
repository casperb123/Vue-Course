const app = Vue.createApp({
  data() {
    return {
      name: "Casper",
      age: 21,
      inputValue: "Demon's Souls is kinda cool",
      image:
        "https://cdn.wcregisteronline.com/wp-content/uploads/2020/11/Demons-Souls-Remake-Crystal-Lizards-Locations-1.jpg",
    };
  },
  methods: {
    randNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
