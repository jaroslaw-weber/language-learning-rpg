<template>
  <div>
    <p class="card-list-explanation">list of vocabulary</p>
    <table class="table is-bordered is-striped card-list">
      <thead>
        <tr>
          <th>question</th>
          <th>answer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in $store.state.cards" :key="card.front">
          <td>{{card.front}}</td>
          <td>{{card.back}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {},
  methods: {},
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
