import { ethers, ethers as ethers52} from './ethers';
//import { ethers as ethers52 } from 'https://cdn.ethers.io/lib/ethers-5.2.umd.min.js';

import {CONSTANTS} from './consts';

let message: string = `Pls Use 
ts-node -T ./retrieve-holders.ts
to run.

`;
console.log(message + `CONSTANTS: ${CONSTANTS.bscBlockExplorer}`);

//https://docs.binance.org/smart-chain/developer/rpc.html
async function exec(){
//try{
    let url = CONSTANTS.bscBlockExplorer;
// let provider = new ethers52.providers.JsonRpcProvider(
//     "https://bsc-dataseed1.defibit.io/"
//     // ,
//     // {
//     //   chainId: 56,
//     //   name: "bsc-mainnet",
//     // }
//   )
let provider = ethers52.getDefaultProvider("mainnet");//
//console.log(`provider ${JSON.stringify(provider)}`);

let accounts = await  provider.getBalance()


}

exec()