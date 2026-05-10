# Code Standards

This document defines the coding standards and best practices for the portfolio project. All code contributions must adhere to these guidelines to ensure consistency, maintainability, and quality.

## 1. General Principles
- **Keep it Simple:** Write clean, understandable code. Avoid premature optimization.
- **DRY (Don't Repeat Yourself):** Extract duplicated logic or UI elements into reusable functions or components.
- **Single Responsibility:** Each component, function, or module should have one clear purpose.
- **Comments & Documentation:** Use comments to explain *why* something is done, not *what* is done (unless the logic is highly complex).

## 2. TypeScript Standards
- **Strict Typing:** Always use explicit types or interfaces. Avoid `any` at all costs. Use `unknown` if the type is truly dynamic.
- **Interfaces over Types:** Prefer `interface` for defining object shapes and component props. Use `type` for unions, intersections, or primitives.
- **Null & Undefined:** Handle `null` and `undefined` safely using optional chaining (`?.`) and nullish coalescing (`??`).
- **Exporting Types:** Keep component-specific interfaces within the component file. If a type is shared across multiple files, extract it into a dedicated `src/types/` directory.

## 3. React & Next.js (16+) Standards
- **Server Components Default:** Leverage React Server Components (RSC) by default. Only use the `"use client"` directive when state, lifecycle hooks, or browser-only APIs are required.
- **Data Fetching:** Fetch data on the server side using async/await in Server Components instead of relying on client-side fetching whenever possible.
- **Component Structure:**
  - Standardize on functional components using arrow functions: `const MyComponent = () => { ... }`.
  - Destructure props in the function signature.
- **Hooks:** Prefix custom hooks with `use`. Keep them pure and decoupled from specific UI rendering.

## 4. Styling & Tailwind CSS
- **Utility-First:** Use Tailwind CSS utility classes exclusively. Avoid writing custom CSS in `globals.css` unless necessary for global resets or specific animations not achievable with Tailwind.
- **Responsive Design:** Mobile-first approach. Use base classes for mobile, and apply breakpoints (`sm:`, `md:`, `lg:`) for larger screens.
- **Class Organization:** Group utility classes logically (e.g., Layout > Spacing > Typography > Colors > Interactions). Consider using a tool like `eslint-plugin-tailwindcss` to enforce sorting.

## 5. File & Folder Naming Conventions
- **Folders:** `kebab-case` (e.g., `src/components/ui-elements`).
- **Components:** `PascalCase.tsx` (e.g., `HeroSection.tsx`).
- **Hooks/Utils:** `camelCase.ts` (e.g., `useWindowSize.ts`, `formatDate.ts`).
- **Pages/Layouts:** Next.js convention requires `page.tsx`, `layout.tsx`, etc., inside `kebab-case` route folders.

## 6. Formatting & Linting
- **Prettier:** Use Prettier for automated code formatting (enforce 2 spaces for indentation, double quotes for JSX, single quotes for TS/JS, trailing commas).
- **ESLint:** Fix all ESLint warnings and errors before pushing code. Do not use `// eslint-disable-next-line` unless absolutely justified with a comment explaining why.

## 7. Version Control & Commits
- **Conventional Commits:** Follow the conventional commit format:
  - `feat: [description]` for new features.
  - `fix: [description]` for bug fixes.
  - `chore: [description]` for maintenance tasks, dependencies, etc.
  - `style: [description]` for UI/design changes.
- **Atomic Commits:** Commit often with small, focused changes rather than massive, multi-feature updates.
