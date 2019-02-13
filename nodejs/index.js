const sha256 = require('sha256');

class Block {
  constructor(index, timestamp, data, prevHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.thisHash = sha256(
      this.index + this.timestamp + this.data + this.prevHash
    );
  }
}
//initiate the block
const createBlock = () => new Block(0, Date.now(), 'Block', '0');
//take the last block and the new block's data as parameters and grabs time, index and add 1
const nextBlock = (lastBlock, data) => new Block(lastBlock.index + 1, Date.now(), data, lastBlock.thisHash);

const createBlockchain = num => {
    const blockchain = [createBlock()];
    let previousBlock = blockchain[0];
  
    for (let i = 1; i < num; i += 1) {
      const blockToAdd = nextBlock(previousBlock, `This is block #${i}`);
      blockchain.push(blockToAdd);
      previousBlock = blockToAdd;
    }
    console.log(blockchain);
  };
  
  const lengthToCreate = 20;
  createBlockchain(lengthToCreate);