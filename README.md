# Aforro Assignment

## Project setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser at the URL shown by Vite (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Features implemented

- Responsive dashboard layout with multiple metric cards:
  - `TodaysSalesCard`
  - `VisitorInsightsCard`
  - `TotalRevenueCard`
  - `CustomerSatisfactionCard`
  - `TargetVsRealityCard`
  - `TopProductsCard`
  - `SalesMappingCard`
  - `VolumeServiceCard`
- Sidebar and top header navigation with responsive drawer support for small screens.
- `Users` page with:
  - remote user data fetching via `axios`
  - caching and loading/error state handling using `@tanstack/react-query`
  - search by name or email with debounced input
  - city filter dropdown powered by Ant Design `Select`
  - responsive users table display
- Reusable UI atoms and molecules for buttons, search box, table, and layout components.
- TypeScript types for user data and structured API responses.
- Tailwind CSS utility classes for layout and styling.

## Assumptions and decisions made

- The app uses a relative API base path for `/users`, so it can be pointed at a backend service or proxied from Vite.
- Ant Design was chosen for ready-made form controls (`Select`, `Alert`, `Drawer`) and consistent layouts.
- `@tanstack/react-query` is used to simplify data fetching, caching, and error/loading state management.
- `useDebounce` was implemented to reduce API or filter work while the user types in the search box.
- Routing is handled by `react-router-dom` with two main routes: `/` for Dashboard and `/users` for the Users page.
- The layout uses a desktop sidebar plus a mobile drawer to support responsive navigation.
