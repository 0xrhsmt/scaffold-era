import { supportChainsMap } from './supportChains';

export const deployments = {
  Greeter: {
    [supportChainsMap.zkSyncTestnet.id]: '0x82fcf733eaf7ac0691c99e39d487ffa5b5e5d42d',
    [supportChainsMap.hardhat.id]: '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  }
} as const

export default deployments