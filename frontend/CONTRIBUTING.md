# Contributing to YieldMind

Thank you for your interest in contributing to YieldMind! This document provides guidelines for contributing.

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

## Code Style

- Use TypeScript for all new code
- Follow existing code style and patterns
- Use AppKit hooks for wallet connections
- Format currency as STT tokens

## Commit Messages

Follow conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `refactor:` for code refactoring
- `chore:` for maintenance tasks

## Pull Request Process

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit pull request with clear description

## Wallet Connection

Always use AppKit hooks:
- `useAccount` for wallet state
- `useChainId` for network detection
- `useSwitchChain` for network switching
- `useWeb3Modal` for wallet modal

## Questions?

Feel free to open an issue for questions or clarifications.

