import { supportChainsMap } from './supportChains';

export const deployments = {
  Greeter: {
    [supportChainsMap.zkSyncTestnet.id]: '0x82fcf733eaf7ac0691c99e39d487ffa5b5e5d42d',
  }
} as const

export default deployments