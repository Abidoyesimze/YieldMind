# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Access to deployment environment

## Build Process

1. Install dependencies:
```bash
npm install
```

2. Build the application:
```bash
npm run build
```

3. Start production server:
```bash
npm start
```

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_CHAIN_ID`: Somnia Testnet chain ID (50312)
- `NEXT_PUBLIC_RPC_URL`: RPC endpoint URL
- `NEXT_PUBLIC_PROJECT_ID`: AppKit project ID

## Deployment Steps

1. Run build command
2. Test build locally
3. Deploy to hosting platform
4. Verify deployment
5. Test wallet connections

## Post-Deployment

- Verify all pages load correctly
- Test wallet connection flow
- Check network switching
- Verify transaction flows

