'use client';

import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { wagmiConfig, projectId, somniaTestnetChain } from '@/lib/wagmi';
import { Toaster } from 'react-hot-toast';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const queryClient = new QueryClient();

// Create Web3Modal (AppKit) instance
// This initializes the wallet connection modal with custom theme
// Theme uses YieldMind brand colors (green #10b981)
createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true, // Enable analytics for wallet connection tracking
  enableOnramp: true, // Enable onramp for buying crypto directly
  themeMode: 'dark', // Dark theme to match YieldMind design
  themeVariables: {
    '--w3m-color-mix': '#10b981', // Primary brand color
    '--w3m-accent': '#10b981', // Accent color
    '--w3m-border-radius-master': '12px' // Rounded corners
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-inter`}>
        {/* WagmiProvider: Provides wagmi context for AppKit hooks */}
        <WagmiProvider config={wagmiConfig}>
          {/* QueryClientProvider: Provides React Query for data fetching */}
          <QueryClientProvider client={queryClient}>
            {children}
            {/* Toaster: Toast notifications for user feedback */}
            <Toaster position="top-right" />
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}