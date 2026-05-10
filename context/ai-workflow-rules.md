# AI Workflow Rules

This document outlines the guidelines and conventions that AI assistants should follow when generating or modifying code in this project.

## 1. Tech Stack Conventions
- **Framework:** Next.js 16 latest (App Router).
- **Styling:** Tailwind CSS v4.
- **Language:** TypeScript.
- **Components:** React Server Components by default. Use `"use client"` only when necessary (e.g., for interactivity, hooks, or browser APIs).

## 2. File and Directory Structure
- Follow the established `src/app` routing convention.
- Keep reusable UI components inside `src/components`.
- Store global state, utilities, or shared context in appropriate directories (e.g., `src/utils`, `src/hooks`).
- Avoid putting large amounts of code directly into `page.tsx` files. Extract logic and UI into separate modular components.

## 3. Styling Guidelines
- Strictly use Tailwind CSS utility classes for styling.
- Ensure all designs are fully responsive (use `sm:`, `md:`, `lg:` prefixes properly).
- Support dark mode using Tailwind's `dark:` variant and ensure color contrast accessibility.
- Keep the design aesthetic premium, modern, and dynamic (e.g., incorporate subtle hover states and micro-animations).

## 4. Code Quality & Best Practices
- **TypeScript:** Use strict typing. Avoid using `any`; define explicit interfaces or types for props and state.
- **Readability:** Write clean, self-documenting code. Use meaningful variable and function names.
- **Comments:** Add JSDoc comments to complex utility functions or components explaining their purpose, parameters, and return types.
- **Performance:** Optimize images using `next/image` and avoid unnecessary client-side rendering.

## 5. Process & Workflow Constraints
- **Context First:** Always review existing files and established project patterns before generating new code to prevent duplication.
- **Atomic Changes:** Keep modifications scoped to the specific task. Do not make unrelated changes to other parts of the codebase.
- **Safety:** Do not run potentially destructive commands (e.g., `rm -rf`, wiping databases) without explicit user consent.
- **Review:** Present significant architectural changes or large component restructuring for approval before implementation.
