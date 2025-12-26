# AppKit (Reown) Migration Guide

## Overview

This document describes the migration from custom wallet connection logic to AppKit (formerly Web3Modal) for wallet management in the YieldMind frontend.

## What is AppKit?

AppKit (formerly Web3Modal) is a modern wallet connection library that provides:
- Unified wallet connection UI
- Support for multiple wallet providers
- Better user experience
- Simplified wallet state management

## Migration Changes

### Before (Custom Implementation)
- Used `checkWalletConnection()` from `ethers-provider.ts`
- Manual wallet state management
- Custom network switching logic
- Direct MetaMask integration

### After (AppKit)
- Uses AppKit hooks: `useAccount`, `useChainId`, `useSwitchChain`, `useWeb3Modal`
- Automatic wallet state management
- Built-in network switching
- Support for multiple wallet providers

## Files Modified

1. **frontend/app/deposit/page.tsx**
   - Replaced custom wallet connection with AppKit hooks
   - Updated wallet connection UI to use AppKit modal

2. **frontend/app/withdraw/page.tsx**
   - Replaced custom wallet connection with AppKit hooks
   - Updated wallet connection UI to use AppKit modal

3. **frontend/app/dashboard/page.tsx**
   - Replaced custom wallet connection with AppKit hooks
   - Simplified wallet state management

4. **frontend/components/dashboard/portfolio-overview.tsx**
   - Updated currency formatting to STT format
   - Changed from USD to STT display

## Benefits

1. **Better UX**: Unified wallet connection experience
2. **Multi-wallet Support**: Works with multiple wallet providers
3. **Simplified Code**: Less custom logic, more maintainable
4. **Better Error Handling**: Built-in error handling from AppKit
5. **Future-proof**: Active development and updates from Reown team

## Usage Examples

### Connecting Wallet
```typescript
const { open } = useWeb3Modal();
await open(); // Opens AppKit modal
```

### Checking Connection
```typescript
const { address, isConnected } = useAccount();
```

### Network Switching
```typescript
const { switchChain } = useSwitchChain();
await switchChain({ chainId: somniaTestnetChain.id });
```

## Migration Date

December 2024

