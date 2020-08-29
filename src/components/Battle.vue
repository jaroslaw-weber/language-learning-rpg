<template>
  <div>
    <div class="battle-grid" v-if="$store.state.player.hp>0">
      <div>
        <Enemy class="item3" v-if="this.$store.state.currentEnemy" />
        <Loot class="item3" v-if="this.$store.state.currentLoot" />
        <BattleLog class="item4" />
      </div>
      <div v-if="this.$store.state.previousAnswer">
        <Question class="item1" />
        <SelectAnswer class="item2" />
        <div v-if="this.$store.state.currentLoot">
          <button @click="$store.commit('collectLoot')" class="button collect-loot">collect loot</button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>you dead buddy</p>
    </div>
  </div>
</template>

<script>
import Enemy from "./Enemy";
import Loot from "./Loot";
import Question from "./Question";
import SelectAnswer from "./SelectAnswer";
import BattleLog from "./BattleLog";

export default {
  name: "Battle",
  props: {
    msg: String,
  },
  components: {
    Enemy,
    SelectAnswer,
    BattleLog,
    Question,
    Loot,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.battle-grid {
  margin: auto;
  width: 800px;

  display: grid;

  grid-gap: 2 px;

  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
}
.collect-loot {
  margin-top: 1rem;
  width: 300px;
  height: 100px;
}
</style>
