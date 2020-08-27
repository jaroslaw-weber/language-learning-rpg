<template>
  <div class="inventory">
    <p class="inventory-title">equipped items</p>
    <p class="inventory-item">
      <strong>hand:</strong>
      {{$store.state.player.equipped.hand.name}}
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inventory {
  width: 700px;
}
.inventory-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.inventory-item {
  margin-top: 1rem;
  font-size: 1.5rem;
}
</style>
