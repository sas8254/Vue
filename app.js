const app = Vue.createApp({
  data() {
    return {
      courseGoal: "I Finish the course and learn Vue!!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "learn vue";
      } else {
        return "master vue";
      }
    },
  },
});
app.mount("#user-goal");
