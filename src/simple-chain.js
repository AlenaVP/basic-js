const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  link : [],
    getLength() {
        return this.link.length;
    },
    addLink(value = '') {
        this.link.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof(position) != 'number' || !Number.isInteger(position) || position < 1 || position >= this.getLength()) {
          this.link = [];
          throw new Error (`You can\'t remove incorrect link!`);
        }
        this.link.splice(position - 1, 1)
        return this;
    },
    reverseChain() {
        this.link.reverse();
        return this;
    },
    finishChain() {
      const resultString = this.link.join('~~');
      this.link = [];
      return resultString;
    }
};

module.exports = {
  chainMaker
};
