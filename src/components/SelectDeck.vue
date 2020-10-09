<template>
  <div class="select-decks">
    <div v-if="isSelectingDeck">
      <p>what do you want to learn?</p>

      <br />
      <button class="button deck-button" @click="selectDeck('german')">
        🇩🇪 german (new!)
      </button>
      <br />
      <button class="button deck-button" @click="selectDeck('korean')">
        🇰🇷 korean (new!)
      </button>

      <hr />

<!--
      <b-tooltip label="most used 200 words" position="is-bottom">
        <button class="button deck-button" @click="loadDeck('spanish200.csv')">
          spanish - beginner
        </button>
      </b-tooltip>
      <br />

      <b-tooltip label="topik I vocabulary" position="is-bottom">
        <button class="button deck-button" @click="loadDeck('korean.csv')">
          korean - intermediate
        </button>
      </b-tooltip>
-->
      <div v-if="isAdvancedView">
        <hr />
        <p>
          You can also load your own materials. Click button below to add your
          dataset (csv)
        </p>

        <div class="upload-wrapper">
          <b-field class="file is-primary" :class="{ 'has-name': !!file }">
            <b-upload
              v-model="file"
              class="file-label upload-button"
              @input="onFileUploaded()"
            >
              <span class="file-cta">
                <!--<b-icon class="file-icon" icon="upload"></b-icon>-->
                <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="file">{{ file.name }}</span>
            </b-upload>
          </b-field>
        </div>
        <p class="howto">How to create custom dataset?</p>
        <p>
          Your dataset should be in csv format. The file you upload should look
          like this:
        </p>
        <pre class="csv-example">
front,back
바꾸다,change
어두운,dark
공유하다,share
낮잠,nap
뚱뚱한,fat
코를 골다,snore</pre
        >
      </div>
      <div v-else>
        <b-tooltip label="click to see more" position="is-bottom">
          <button
            class="button deck-button is-primary"
            @click="isAdvancedView = true"
          >
            something else
          </button>
        </b-tooltip>
      </div>
    </div>
    <div v-if="isSelectingDifficulty">
      <p class="selected-deck-name">{{ selectedDeck }}</p>
      <br />
      <b-field label="select difficulty" class="difficulty-slider">
        <b-slider v-model="difficulty" :min="1" :max="maxDifficulty"></b-slider>
      </b-field>
      <b-field
        label="how many words would you like to learn?"
        class="difficulty-slider"
      >
        <b-slider v-model="wordsCount" :min="30" :max="400"></b-slider>
      </b-field>

      <p>skip {{ skipWordsCount }} words<br />learn {{ wordsCount }} words</p>
      <br />
      <p class="example-words-title">example words:</p>
      <p class="example-words">{{ exampleWords }}</p>

      <br />

      <button
        class="button is-primary deck-button"
        @click="onDifficultySelected()"
      >
        start
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "decks",
  props: {},
  data: function () {
    return {
      file: undefined,
      isAdvancedView: false,
      selectedDeck: undefined,
      difficulty: 1,
      wordsCount: 100,
    };
  },

  methods: {
    selectDeck: function (deck) {
      this.selectedDeck = deck;
      this.$store.commit("previewDeck", deck);
    },
    loadDeck: function (deck) {
      this.$store.commit("loadDeck", deck);
    },
    onFileUploaded: function () {
      this.$store.commit("loadCustomDeck", this.file);
    },
    onDifficultySelected: function () {
      this.$store.commit("loadPremadeDeck", {
        deck: this.selectedDeck,
        difficulty: this.difficulty,
        wordsCount: this.wordsCount,
      });
    },
  },
  computed: {
    exampleWords: function () {
      console.log("example words refresh");
      if (this.preview == undefined) return "";
      //how many words will learn at the same time
      let wordsCount = this.wordsCount;

      //how many easy words to skip
      let skipWords = (this.difficulty - 1) * 100;
      let length = this.preview.length;
      if (wordsCount > length) wordsCount = length;
      let maxSkip = length - wordsCount;
      if (skipWords > maxSkip) skipWords = maxSkip;

      let cards = this.preview.slice(skipWords, wordsCount + skipWords);

      let example = cards.slice(0, 15);
      let exampleString = "";
      example.forEach((card) => {
        exampleString += card.front + ", ";
      });
      return exampleString;
    },
    maxDifficulty: function () {
      if (this.preview == undefined) return 10;
      let maxDifficulty = this.preview.length / 100 - 1;

      if (maxDifficulty > 25) return 25;
      return maxDifficulty;
    },
    preview: function () {
      return this.$store.state.previewDeck;
    },
    skipWordsCount: function () {
      return (this.difficulty - 1) * 100;
    },
    isSelectingDeck: function () {
      return this.selectedDeck == undefined;
    },

    isSelectingDifficulty: function () {
      return this.selectedDeck != undefined;
    },
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
.difficulty-slider {
  width: 100%-1rem;

  margin: 1rem;
}
.select-decks {
  margin-top: 2rem;
  text-align: center;
}
.upload-wrapper {
  margin: auto;
}
.csv-example {
  text-align: left;
  width: 300px;
  margin: auto;
  margin-top: 1rem;
}
.upload-button {
  margin: auto;
  margin-top: 1rem;
}
.howto {
  font-size: 1rem;
  margin: 1rem;
}
.selected-deck-name {
  font-size: 2rem;
}
.example-words {
  margin: 1rem;
}
.example-words-title {
  font-size: 2rem;
}
</style>
