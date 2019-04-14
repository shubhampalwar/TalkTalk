const { pubsub } = require('../../Server');

const subscribe = (arg) => {
    
    console.log("inside subscribe ", arg);
    
    return pubsub.asyncIterator([arg])
}

module.exports = subscribe;
