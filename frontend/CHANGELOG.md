# Changelog

All notable changes to the YieldMind frontend will be documented in this file.

## [Unreleased]

### Added
- AppKit (Reown) integration for wallet connections
- STT formatting for all currency displays
- Comprehensive documentation for AppKit migration
- Inline code comments for wallet connection logic

### Changed
- Migrated from custom wallet connection to AppKit hooks
- Updated all currency displays to show STT instead of USD
- Improved wallet connection UX with unified modal
- Simplified wallet state management

### Fixed
- Network switching now uses AppKit's built-in functionality
- Wallet connection state now properly reactive

## [2024-12-XX] - AppKit Migration

### Added
- `useAccount` hook for wallet address and connection status
- `useChainId` hook for network detection
- `useSwitchChain` hook for network switching
- `useWeb3Modal` hook for opening wallet modal

### Changed
- Deposit page: Replaced custom wallet connection with AppKit
- Withdraw page: Replaced custom wallet connection with AppKit
- Dashboard page: Replaced custom wallet connection with AppKit
- Portfolio overview: Changed currency format from USD to STT

### Removed
- Custom `checkWalletConnection` function usage
- Custom `switchToSomniaTestnet` function usage
- Manual wallet state management

## [2024-12-XX] - STT Formatting Update

### Changed
- All currency displays now show STT suffix
- Portfolio overview uses STT formatting
- Dashboard displays use STT formatting
- Deposit/Withdraw pages use STT formatting

