<template>
  <div class="locations">
    <p class="locations-howto">level up and kill bosses to gain access to next level</p>

    <!--<p>select location to attack!</p>-->
    <div class="locations">
      <div class="location" v-for="(location, i) in locations" :key="i">
        <button
          @click="onSelect(location)"
          class="button location-button half-width"
          :disabled="location.isLocked"
        >
          <img
            v-if="location.icon"
            class="location-icon"
            :src="`${$store.state.publicPath}icons/location/${location.icon}.svg`"
          />
          <p>
            {{
            !location.isLocked
            ? location.name
            : "?"
            }}
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "locations",
  props: {},
  data: function () {
    return {
      locations: [],
    };
  },
  methods: {
    onSelect: function (location) {
      this.$store.commit("goToLocation", location.id);
    },
  },
  computed: {},
  mounted: function () {
    this.locations = this.$store.getters.getLocations.slice().reverse();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location-icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1.5rem;
  border-radius: 0.2rem;
}
.locations-howto {
  margin: 1rem;
}
.location-button {
  margin: 0.3rem;
  height: 4rem;
  justify-content: left;
}
.location {
  margin-bottom: 1rem;
}
.locations {
}
</style>
