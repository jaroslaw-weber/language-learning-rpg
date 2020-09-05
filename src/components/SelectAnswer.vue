<template>
  <div class="answers half-width">
    <!--<p>select answer to attack!</p>-->
    <div class="answers">
      <div v-for="(answer, i) in answers" :key="i">
        <div v-if="$store.state.isShowAnswer">
          <button
            v-if="answer.isCorrect"
            class="button answer-button correct-answer"
            disabled
          >{{ answer.display }}</button>

          <button v-else class="button answer-button" disabled>{{ answer.display }}</button>
        </div>
        <div v-else>
          <button @click="onAnswer(answer)" class="button answer-button">{{ answer.display }}</button>
        </div>
      </div>
    </div>
    <div v-if="$store.state.isShowAnswer && $store.state.currentEnemy">
      <button class="button next-turn" @click="$store.commit('nextTurn')">next turn</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answers",
  props: {},
  methods: {
    onAnswer: function (answer) {
      this.$store.commit("onAnswer", answer);
    },
  },
  computed: {
    answers: function () {
      return this.$store.state.answers;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.answer-button {
  margin-bottom: 0.3rem;
  height: 4rem;
  width: 300px;
}
.answers {
}
.correct-answer:disabled {
  background-color: rgb(37, 108, 37);
  color: white;
}
.wrong-answer:disabled {
  background-color: rgb(108, 37, 37);
  color: white;
}
.next-turn {
  margin-top: 1rem;
  width: 300px;
  height: 150px;
}

@media screen and (max-width: 800px) {
  .answer-button {
    height: 2.5rem;
  }
  .next-turn {
    margin-top: 0.5rem;
    height: 2.5rem;
  }
}
</style>
