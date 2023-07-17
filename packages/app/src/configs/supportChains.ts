import { zkSyncTestnet, localhost } from 'wagmi/chains';

export const supportChainsMap = {
  zkSyncTestnet,
  localhost
}
export const supportChains = Object.values(supportChainsMap);