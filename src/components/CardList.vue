<template>
  <div>
    <p class="card-list-explanation">list of vocabulary</p>
    <table class="table is-bordered is-striped card-list">
      <thead>
        <tr>
          <th>question</th>
          <th>answer</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in $store.state.cards" :key="card.front">
          <td>{{card.front}}</td>
          <td>{{card.back}}</td>
          <td>
            <button class="button is-danger" @click="deleteCard(card)">x</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {},
  methods: {
    deleteCard: function (card) {
      let state = this.$store.state;
      let cards = state.cards;
      state.cards = cards.filter((x) => x.front != card.front);
    },
  },
  computed: {},
};
</script>

<style scoped>
.card-list {
  margin: 2rem auto 2rem auto;
}
.card-list-explanation {
  margin-top: 4rem;
}
</style>
