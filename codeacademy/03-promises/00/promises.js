'use strict';

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => console.log(resolvedValue);
const handleFailure = (resolvedValue) => console.log(resolvedValue);
// console.log('1');
// checkInventory(order).then(handleSuccess, handleFailure);
checkInventory(order)
    .then(handleSuccess)
    .catch(handleFailure);

