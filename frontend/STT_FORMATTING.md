# STT Formatting Guide

## Overview

This document describes the STT (Somnia Test Token) formatting changes made to the YieldMind frontend.

## Changes

All currency displays have been updated to show STT tokens instead of USD.

## Formatting Function

The `formatSTT` function formats numbers with:
- Minimum 2 decimal places
- Maximum 4 decimal places
- US number formatting

## Updated Components

1. **Portfolio Overview**
   - Total Portfolio Value: Now shows STT
   - 24h Change: Now shows STT
   - 7d Change: Now shows STT
   - Total Earnings: Now shows STT

2. **Dashboard**
   - All balance displays show STT suffix
   - Total Returns display shows STT suffix

3. **Deposit Page**
   - Annual Earnings shows STT suffix
   - All balance displays show STT suffix

4. **Withdraw Page**
   - Total Returns shows STT suffix
   - All balance displays show STT suffix

## Example

Before: `$1,234.56`
After: `1234.56 STT`

## Benefits

1. **Clarity**: Users see exact token amounts
2. **Consistency**: All displays use same format
3. **Accuracy**: No currency conversion needed
4. **Transparency**: Direct token amounts displayed

