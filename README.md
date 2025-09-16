# Monorepo Project

This repository uses **Yarn Workspaces** to manage multiple packages and apps in a single repo.

## Structure
- **packages/**
  - `ui-components`: shared React UI components
  - `utils`: shared utility functions (date, string, api)
  - `feature-x`: feature system 1 (2 features)
  - `feature-y`: feature system 2 (2 features)
- **apps/**
  - `system-a`: Individual system A (assembles features)
  - `system-b`: Individual system B (assembles features)

## Prereqs
- Node.js 18+
- Yarn (Classic or Berry). Recommended: Yarn v1: `npm i -g yarn`

## Install
```bash
yarn install
```

## Run an app
```bash
cd apps/system-a
yarn dev
```
(Or `apps/system-b`.)

## Build all packages
```bash
yarn workspaces foreach -ptv run build
```
