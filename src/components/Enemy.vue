<template>
  <div>
    <p class="enemy-name">{{ currentEnemy.name }}</p>
    <p>hp: {{ currentEnemy.hp }}/{{currentEnemy.maxHp}}</p>
    <img class="enemy-icon" :src="`/icons/${currentEnemy.image}.svg`" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    shake: function () {},
  },
  computed: {
    currentEnemy: function () {
      return this.$store.state.currentEnemy;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enemy-icon {
  width: 250px;
  height: 250px;
  margin-top: 2rem;
}
.enemy-name {
  margin: 0.5rem;
  font-size: 1.8rem;
}
</style>
