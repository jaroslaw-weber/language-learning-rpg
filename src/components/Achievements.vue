<template>
  <div class="achivemets">
    <p class="achivemets-title">Achievements</p>

    <b-progress
      class="total-progress"
      type="is-success"
      :max="achievements.length"
      :value="doneAchievementsCount"
      :show-value="true"
      size="is-large"
      >total progress: {{ totalProgressString }}</b-progress
    >
    <br />
    <div v-for="achievement in achievements" :key="achievement.text">
      <p
        :class="
          achievement.isDone ? 'achievement-done' : 'achievement-not-done'
        "
      >
        {{ achievement.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    totalProgressString: function() {
      let achievements = this.achievements;
      let max = achievements.length;
      console.log(max);
      let progress = this.doneAchievementsCount;
      console.log(progress);
      let percent = progress / max;
      return `${percent * 100}%`;
    },
    doneAchievementsCount: function() {
      return this.achievements.filter((x) => x.isDone).length;
    },
    achievements: function() {
      return this.$store.getters.getAchievements;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.achivemets {
}
.achivemets-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.achivemets-item {
  margin-top: 1rem;
  font-size: 1.5rem;
}
.achievement-done {
  color: green;
}
.achievement-not-done {
  color: red;
}
.total-progress {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
