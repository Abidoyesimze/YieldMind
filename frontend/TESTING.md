# Testing Guide

## Test Types

### Unit Tests
- Test individual components
- Test utility functions
- Test hooks in isolation

### Integration Tests
- Test component interactions
- Test wallet connection flows
- Test transaction flows

### E2E Tests
- Test complete user flows
- Test wallet interactions
- Test network switching

## Test Wallet Connection

1. Test connection with MetaMask
2. Test connection with WalletConnect
3. Test network switching
4. Test disconnection

## Test Transaction Flows

1. Test deposit flow
2. Test withdrawal flow
3. Test error handling
4. Test success cases

## Running Tests

```bash
npm test
```

## Test Coverage

Aim for 80%+ test coverage for critical paths.

