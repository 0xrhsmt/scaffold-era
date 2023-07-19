import { zkSyncTestnet, hardhat } from 'wagmi/chains';

export const supportChainsMap = {
  zkSyncTestnet,
  hardhat
}
export const supportChains = Object.values(supportChainsMap);