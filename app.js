const app = Vue.createApp({
  data() {
    return {
      name: "Shashibhushan",
      age: 33,
      ImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHW7C1B9Qgc_Twc7HlBKEjech0uFn7dkK7A&s",
    };
  },

  methods: {
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
