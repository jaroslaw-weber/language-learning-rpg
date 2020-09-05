<template>
  <div>
    <p class="question half-width">{{question}}</p>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {},
  computed: {
    question: function () {
      if (this.$store.state.currentCard) {
        return this.$store.state.currentCard.front;
      }
      return undefined;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;
}
</style>
