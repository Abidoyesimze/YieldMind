# Architecture Overview

## Frontend Structure

```
frontend/
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utility functions and configs
├── hooks/           # Custom React hooks
└── public/          # Static assets
```

## Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **AppKit**: Wallet connection management
- **Wagmi**: Ethereum interaction library
- **Tailwind CSS**: Styling framework

## Component Architecture

### Pages
- Deposit page: Handle STT deposits
- Withdraw page: Handle withdrawals
- Dashboard: Display portfolio data

### Components
- Navbar: Navigation and wallet connection
- Portfolio Overview: Display portfolio metrics
- Charts: Visualize data

## State Management

- Zustand for global state
- AppKit hooks for wallet state
- React Query for server state

## Data Flow

1. User connects wallet via AppKit
2. AppKit hooks provide wallet state
3. Components fetch data using wallet address
4. UI updates reactively

