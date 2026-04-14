# UI Components Hub - AI Documentation Guidelines

You are an AI coding assistant (e.g., Gemini, Cursor, Copilot) working in the `ui-components-hub` repository. This repository acts as a curated Astro-first component reference for various UI libraries.

When creating, updating, or documenting a component, you MUST strictly adhere to the following rules to maintain consistency:

## 1. File Structure and Format
- Component documentation pages use **MDX** format (`.mdx`).
- Always place MDX pages in the `src/content/docs/` directory or its subdirectories (like `src/content/docs/libraries/`).
- Every `.mdx` file must begin with standard frontmatter containing `title`, `description`, and optionally `category` or `library`.

## 2. Component Previews
- Use the `<ComponentPreview>` Astro/React wrapper to display UI elements.
- The `<ComponentPreview>` requires the following standard props:
  - `client:load` (essential for interactivity inside Astro)
  - `title="Variant Title"`
  - `description="Brief description of when or how to use the variant."`
  - `code={...}` (a string containing the source code representation of the UI element)
- Example structure:
  ```jsx
  <ComponentPreview
    client:load
    title="Example Button"
    description="A standard example button."
    code={`<button className="bg-blue-500 ...">Example</button>`}
  >
    <button className="...">Example (Mock)</button>
  </ComponentPreview>
  ```

## 3. UI Mocks and External Libraries
- We document libraries that are NOT formally installed in our `package.json` (e.g., Kokonut UI, cult-ui, Origin UI).
- **CRITICAL**: Do NOT generate import statements for unimplemented external libraries inside the executable JSX block, as it will crash Astro. 
- Instead, **Mock the UI visually**: Write pure Tailwind CSS inline classes within the `<ComponentPreview>` children that mimic the exact aesthetic (glow, shadows, neo-brutalism borders, hover animations) of the target library.
- Keep the `code` prop text accurate to the *actual* usage in that external library, so the reader can copy-paste it into their actual project.

## 4. Official Documentation References
- Every time a component from a specific library is introduced (e.g., `## shadcn/ui Button`), you MUST immediately provide a Markdown hyperlink to that component's official documentation.
- Use the standard syntax: 
  `[Official Documentation ↗](https://...)`
- Ensure this is placed right below the component's markdown heading `##`.

## 5. Comparative Tables
- At the bottom of component category pages (e.g., `buttons.mdx`, `cards.mdx`), provide an **Expanded Comparison** table.
- This markdown table should summarize all documented variants across different libraries.
- Standard columns: `| Component/Variant | Best For | Library |`

## 6. Vite and TypeScript Strict Imports (isolatedModules)
- **CRITICAL FORETHOUGHT**: Astro uses Vite, which compiles TypeScript under `isolatedModules: true`. This strictly bans importing TypeScript Types/Interfaces (like `VariantProps`, `MouseEvent`) as standard objects.
- Whenever you install/generate components from external sources that contain `import { VariantProps }` or `import { MouseEvent }`, you MUST manually change them to `import { type VariantProps }` or `import type { MouseEvent }`.
- Failure to do this will result in Vite throwing `does not provide an export named xyz` or `is a CommonJS module` errors!

## 7. CSS and Styling (Tailwind First)
- We use Tailwind CSS v3/v4 utility classes for almost all styling. Only write raw CSS/Astro `<style>` blocks when absolute structural layout (like CSS Grid shells) dictates it or when modifying `DocsSidebarNav`.
- Use the repository's semantic CSS variables (e.g., `var(--primary)`, `bg-primary`, `text-muted-foreground`) alongside Tailwind to ensure cross-theme compatibility.

## 7. Navigation & Data Registry Sync
- **CRITICAL**: If you add a completely new component page to `/docs`, you MUST also update the corresponding navigation and data arrays so it appears on the site.
- Specifically, update `docsSidebarGroups` in `src/lib/docs-sidebar.ts` so the new page appears in the left sidebar.
- If there are arrays generating the `/components` browse page, ensure the new group is declared there as well.

Follow these rules blindly on every iteration in this project to prevent style fragmentation.
