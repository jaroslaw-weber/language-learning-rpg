<template>
  <div class="battle-log">
    <p class="single-log" v-for="(item,i) in log" :key="i">{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: "BattleLog",
  props: {
    msg: String,
  },
  computed: {
    log: function () {
      let all = [...this.$store.state.battleLog];
      all.reverse();
      return all.slice(0, 5);
    },
  },
};
</script>
<style scoped>
.battle-log {
  font-size: 0.7rem;
  margin-top: 1rem;
}
.single-log:nth-of-type(1) {
  font-size: 1.5rem;
}

.single-log:not(:nth-of-type(1)) {
  color: gray;
}
</style>
