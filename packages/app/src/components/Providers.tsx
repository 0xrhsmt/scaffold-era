import { APP_NAME, WALLET_CONNECT_PROJECT_ID } from '@/libs/constants';
import { supportChains } from '../configs/supportChains';
import {
  RainbowKitProvider,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  supportChains,
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: APP_NAME,
  projectId: WALLET_CONNECT_PROJECT_ID,
  chains,
});

const demoAppInfo = {
  appName: APP_NAME,
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient, 
});

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
        { children }
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default Providers;
