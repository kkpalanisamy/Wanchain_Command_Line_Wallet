
//var config = require('../config');

let transaction = require('../wanchain_web3/Transaction');
const web3Require = global.web3Require = require('../wanchain_web3/web3_ipc');
transaction.useWalletDb();
transaction.addCurAccount();
transaction.addToAccount();
transaction.addFee();
transaction.addSend(function(result) {
    transaction.sendTo(result);
});
transaction.run(function(){
    web3Require.initTransCollection();
});

