require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict duck ensure title film repeat place assume hotel light army ghost'; 
let testAccounts = [
"0xf20049c39ed762ca39cada9b08b9e49fd815e93b5f8b0a98872a99093a6e0d63",
"0x3ab715a2562ead3403a0b259301b78186dd1a57495b60de09e6e39c582467b94",
"0x1ad902e8b52c15a9dca280fe9301b9fdbf448e67f051a20cf89e6c1fc2012478",
"0xea7808431930201030cb5d9f3444ec1aead40a1a2afdcc47f0048cf8274076a9",
"0xefc13576154d739fe5986cd4c1bfee65b370401b72c2cf7bc03bc6fc7a679f95",
"0x040ddc856321ecdf9e9cd23d36ee82c90852173e1ee9b8436f553fc270fb8ff8",
"0x2fc0cd773ced2bb85540c66b6427bb6395ec849eec57d7dc642ccf3663007e94",
"0x35fd949e586bbacb9621bd1a71688cd2ec193bbf0608f0a2a0ec531997a17eaf",
"0x9357af1f982eb6c31f5410b8e899dffcf66ac5d0fce08c77e996109408559649",
"0x159f61f2437950199fd79b62e0ef34483ad82097c789a18f0eadc5963ff1e542"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


