const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    let elem = "( " + value + " )";
    this.chain.push(elem);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    for (let i = position; i <= this.chain.length - 1; i++) {
      this.chain[i - 1] = this.chain[i];
    }
    this.chain.pop();
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
