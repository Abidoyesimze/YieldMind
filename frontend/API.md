# API Reference

## Wallet Connection API

### useAccount()
Returns wallet connection state.

**Returns:**
- `address`: Connected wallet address (string | undefined)
- `isConnected`: Connection status (boolean)

**Example:**
```typescript
const { address, isConnected } = useAccount();
```

### useChainId()
Returns current chain ID.

**Returns:**
- `chainId`: Current chain ID (number)

**Example:**
```typescript
const chainId = useChainId();
```

### useSwitchChain()
Returns function to switch networks.

**Returns:**
- `switchChain`: Function to switch chain

**Example:**
```typescript
const { switchChain } = useSwitchChain();
await switchChain({ chainId: 50312 });
```

### useWeb3Modal()
Returns function to open wallet modal.

**Returns:**
- `open`: Function to open modal

**Example:**
```typescript
const { open } = useWeb3Modal();
await open();
```

## Formatting Functions

### formatSTT(value: number)
Formats a number as STT tokens.

**Parameters:**
- `value`: Number to format

**Returns:**
- Formatted string with STT suffix

**Example:**
```typescript
formatSTT(1234.56); // "1,234.56 STT"
```

