<template>
  <div class="journal">
    <p class="journal-title">Town</p>

    <p>available quests:</p>
    <p>none</p>
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
.journal {
}
.journal-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.journal-item {
  margin-top: 1rem;
  font-size: 1.5rem;
}
</style>
