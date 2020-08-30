<template>
  <div class="locations">
    <!--<p>select location to attack!</p>-->
    <div class="locations">
      <div class="location" v-for="(location, i) in locations" :key="i">
        <button
          @click="onSelect(location)"
          class="button location-button half-width"
          :disabled="$store.state.player.level<location.requiredLevel"
        >{{ location.name }}</button>
        <p>required level: {{location.requiredLevel}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "locations",
  props: {},
  methods: {
    onSelect: function (location) {
      this.$store.commit("goToLocation", location.id);
    },
  },
  computed: {
    locations: function () {
      return this.$store.state.master.locations;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location-button {
  margin: 0.3rem;
  height: 4rem;
}
.location {
  margin-bottom: 1rem;
}
.locations {
}
</style>
