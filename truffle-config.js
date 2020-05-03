require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain comic harvest nature bottom symptom'; 
let testAccounts = [
"0x674673736e9fc91ab0aa70f695a63d4444c0acd429b2ab367baca0b82da77897",
"0xb89db57e15dda380a13680a45ad99e993872612bd6d68d5e36ef5684ae5626a3",
"0x87a48e4a1ba2cace038a6c708138e38675e81e51b6b4f37923089a2864fdc34e",
"0xf54670f021896a156cbcbb17700cf311be9d0a4d98916b9d14179caffbfdbc7a",
"0x1172247fc2f872397a79d435028c201c07c3db2712ae36214c77f67127167f58",
"0xe22317abeb73c67851838b4b7e456b450ca1ef36a9e59e58b7d24d874aa6bafe",
"0x0d2311fc2bf6768823945c80ceb2db163e628f5f7078c47af051189fa7b3736f",
"0x9e72a5db2933f0831a600095657db60cff2b8a0684868040f3b963d68ba8971a",
"0xe13e1e42977466d9440adeda5eee26c258807d335c6b5e338c33a772f799590e",
"0x918b23128181ab0fce90bcd15f1d9da49e2679824f2065d0e4c3dad39fad75d5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
