<template>
  <div class="select-decks">
    <button class="button deck-button" @click="loadDeck('spanish200.csv')">spanish 200 words</button>
    <br />
    <button
      class="button deck-button"
      @click="loadDeck('korean-intermediate.csv')"
    >intermediate korean</button>
    <hr />
    <p>You can also load your own materials. Click button below to add your dataset (csv)</p>

    <div class="upload-wrapper">
      <b-field class="file is-primary" :class="{'has-name': !!file}">
        <b-upload v-model="file" class="file-label" @input="onFileUploaded()">
          <span class="file-cta">
            <!--<b-icon class="file-icon" icon="upload"></b-icon>-->
            <span class="file-label">Click to upload</span>
          </span>
          <span class="file-name" v-if="file">{{ file.name }}</span>
        </b-upload>
      </b-field>
    </div>
    <p class="howto">How to create custom dataset?</p>
    <p>Your dataset should be in csv format. The file you upload should look like this:</p>
    <pre class="csv-example">front,back
바꾸다,change
어두운,dark
공유하다,share
낮잠,nap
뚱뚱한,fat
코를 골다,snore</pre>
  </div>
</template>

<script>
export default {
  name: "decks",
  props: {},
  data: function () {
    return { file: undefined };
  },

  methods: {
    loadDeck: function (deck) {
      this.$store.commit("loadDeck", deck);
    },
    onFileUploaded: function () {
      this.$store.commit("loadCustomDeck", this.file);
    },
  },
  computed: {
    decks: function () {
      return this.$store.state.decks;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deck-button {
  margin: 1rem;
  width: 300px;
  height: 4rem;
}
.select-decks {
  margin-top: 2rem;
  text-align: center;
}
.upload-wrapper {
  margin-left: 43%; /*hofix: not centering*/
  margin-top: 2rem;
}
.csv-example {
  margin: 1rem;
  text-align: left;
  width: 300px;
  margin-left: 40%; /*hotfix: not centering*/
}
.howto {
  font-size: 1rem;
  margin: 1rem;
}
</style>
