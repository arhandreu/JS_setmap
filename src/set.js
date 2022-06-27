export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Данный персонаж уже в команде');
    } else {
      this.members.add(char);
    }
  }

  add_all(...chars) {
    for (const char of chars) {
      this.members.add(char);
    }
  }

  toArray() {
    return new Array(...this.members);
  }
}
