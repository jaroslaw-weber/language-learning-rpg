export default class Card {
  constructor() {
    this.id = -1;
    this.mastery = 0;
    this.timestamp = Date.now();
    this.fields = {}; //hash
    this.nextTime = Date.now();
  }
}
