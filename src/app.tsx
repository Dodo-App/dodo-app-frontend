import { StrictMode, useMemo } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// TanStack Router
import {
  RouterProvider,
  createRouter as createTanStackRouter,
} from '@tanstack/react-router';
import { routeTree } from './routes/routeTree.gen';

// SuperTokens
import { superTokensConfig } from '@/config/superTokens';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import { canHandleRoute, getRoutingComponent } from 'supertokens-auth-react/ui';
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';
import { PasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/passwordless/prebuiltui';

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

SuperTokens.init(superTokensConfig);

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), []);
  return (
    <StrictMode>
      {canHandleRoute([ThirdPartyPreBuiltUI, PasswordlessPreBuiltUI]) ? (
        // This renders the login UI on the /auth route
        getRoutingComponent([ThirdPartyPreBuiltUI, PasswordlessPreBuiltUI])
      ) : (
        <SuperTokensWrapper>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={createRouter()} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </SuperTokensWrapper>
      )}
    </StrictMode>
  );
}
