<template>
  <div>
    <img class="loot" :src="`${store.state.publicPath}/icons/chest.svg`" />
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
    loot: function () {
      return this.$store.state.currentLoot;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loot {
  width: 250px;
  height: 250px;
  border-radius: 1rem;
}
</style>
