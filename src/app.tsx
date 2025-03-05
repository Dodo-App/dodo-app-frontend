import { StrictMode, useMemo } from 'react';
import { SuperTokensProvider } from '@/auth/SuperTokensProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// TanStack Router
import {
  RouterProvider,
  createRouter as createTanStackRouter,
} from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), []);
  return (
    <StrictMode>
      <SuperTokensProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={createRouter()} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SuperTokensProvider>
    </StrictMode>
  );
}
