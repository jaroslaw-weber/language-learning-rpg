<template>
  <div class="answers">
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
  margin: 0.3rem;
  width: 300px;
  height: 4rem;
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
  width: 150px;
  height: 150px;
}
</style>
