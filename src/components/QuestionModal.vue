<template>
  <section>
    <b-modal
      v-model="isShow"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card question-modal">
        <header class="modal-card-head">
          <p class="modal-card-title">select correct answer</p>
          <!--
          <button
            v-if="isShowAnswer"
            class="delete"
            aria-label="close"
            @click="$store.commit('closeQuestionModal')"
          ></button>
          -->
        </header>
        <section class="modal-card-body">
          <Question />
          <SelectAnswer />
          <br />
          <div v-if="isShowAnswer">
            <p v-if="$store.state.previousAnswer.wasCorrect" class="correct-answer answer">correct!</p>

            <p v-else class="wrong-answer answer">wrong!</p>

            <p class="tip">click close button to continue</p>
            <button
              v-if="isShowAnswer"
              class="delete is-large close-button"
              aria-label="close"
              @click="$store.commit('closeQuestionModal')"
            ></button>
          </div>
        </section>
      </div>
    </b-modal>
  </section>
</template>

<script>
import Question from "./Question";
import SelectAnswer from "./SelectAnswer";

export default {
  components: {
    Question,
    SelectAnswer,
  },
  computed: {
    isShowAnswer: function () {
      return this.$store.state.isShowAnswer;
    },
    isShow: function () {
      return this.$store.state.isShowQuestionModal;
    },
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  },
};
</script>
<style scoped>
.close-button {
  margin: 2rem;
}
.question-modal {
  border-radius: 10px;
}
.correct-answer {
  color: rgb(46, 88, 46);
}
.wrong-answer {
  color: rgb(175, 29, 34);
}
.answer {
  font-size: 2rem;
}
.tip {
  margin-top: 1rem;
  font-size: 0.8rem;
}
</style>
