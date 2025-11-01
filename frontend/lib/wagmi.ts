import { http, createConfig } from 'wagmi';
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors';

// Define Somnia Testnet only - STT Focus Mode
export const somniaTestnetChain = {
  id: 50312,
  name: 'Somnia Testnet',
  nativeCurrency: {
    name: 'STT',
    symbol: 'STT',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        'https://dream-rpc.somnia.network',
        'https://testnet-rpc.somnia.network',
        'https://rpc.somnia.network'
      ],
    },
    public: {
      http: [
        'https://dream-rpc.somnia.network',
        'https://testnet-rpc.somnia.network',
        'https://rpc.somnia.network'
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'Somnia Explorer',
      url: 'https://explorer.somnia.network',
    },
  },
} as const;

// AppKit project ID
export const projectId = 'a69043ecf4dca5c34a5e70fdfeac4558';

// Metadata for AppKit
export const metadata = {
  name: 'YieldMind',
  description: 'AI-Powered DeFi Investment Platform on Somnia',
  url: 'https://yieldmind.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

export const wagmiConfig = createConfig({
  chains: [somniaTestnetChain],
  transports: {
    [somniaTestnetChain.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    })
  ],
  ssr: true,
});