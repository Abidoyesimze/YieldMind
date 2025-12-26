# TypeScript Types Reference

## AppKit Types

### useAccount Hook
```typescript
const { address, isConnected } = useAccount();
// address: string | undefined
// isConnected: boolean
```

### useChainId Hook
```typescript
const chainId = useChainId();
// chainId: number
```

### useSwitchChain Hook
```typescript
const { switchChain } = useSwitchChain();
// switchChain: (params: { chainId: number }) => Promise<void>
```

### useWeb3Modal Hook
```typescript
const { open } = useWeb3Modal();
// open: () => Promise<void>
```

## Component Props

### PortfolioOverviewProps
```typescript
interface PortfolioOverviewProps {
  totalValue: number;
  change24h: number;
  change7d: number;
  totalEarnings: number;
}
```

## State Types

### User Position
```typescript
interface UserPosition {
  principal: string;
  currentValue: string;
  totalReturns: string;
  userTier?: string;
  lastUpdateTime?: string;
}
```

