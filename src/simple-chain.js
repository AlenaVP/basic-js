const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link: [],
  getLength() {
    return this.link.length;
  },
  addLink(value) {
    value = value === undefined ? '( )' : '( ' + value + ' )';
    this.link.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position !== parseInt(position) || position < 1 || position >= this.length) {
      this.link = [];
      throw new Error();
    }
    this.link.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    resultString = this.link.join('~~');
    this.link = [];
    return resultString;
  }
};

module.exports = chainMaker;
