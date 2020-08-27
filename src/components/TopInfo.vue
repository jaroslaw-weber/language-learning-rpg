<template>
  <div class="top-info">
    <p
      v-if="player"
    >level: {{player.level}} | gold: {{player.gold}} | exp: {{player.exp}}/{{player.nextLevelExp}} | hp: {{player.hp}}</p>
    <!--
    <div class="answer" v-if="$store.state.previousAnswer.question">
      <p
        class="correct-answer"
        v-if="$store.state.previousAnswer.wasCorrect"
      >"{{$store.state.previousAnswer.question}}" = "{{$store.state.previousAnswer.correctAnswer}}"</p>
      <p
        class="wrong-answer"
        v-else
      >"{{$store.state.previousAnswer.question}}" = "{{$store.state.previousAnswer.correctAnswer}}"</p>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    player: function () {
      return this.$store.state.player;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-info {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.correct-answer {
  background-color: rgb(29, 62, 29);
  padding: 1rem;
}
.wrong-answer {
  background-color: rgb(160, 89, 89);
  padding: 1rem;
}
.answer {
  margin-top: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
