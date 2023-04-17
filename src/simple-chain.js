const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    
    return Math.floor( this.chain.length / 2 + 1);
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    if (arguments.length == 0) {
      this.chain.push("(  )");
      return this;
    } 
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    if (typeof position === "string" || !Number.isInteger(position) || position === 0 || Math.abs(position) > this.chain.length) {
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!')
    }
    if (position > 0) this.chain.splice(position - 1, 1)
    if (position < 0) this.chain.splice(position, 1)
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    let result = [];
    this.chain.forEach(el => {
      if (result.length > 0) result.push("~~");
      result.push(el)
    })
    this.chain = [];
    return result.join("");
  }
};

// console.log (chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())


module.exports = {
  chainMaker
};
