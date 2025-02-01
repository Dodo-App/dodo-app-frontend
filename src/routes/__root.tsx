import React, { Suspense } from 'react';
import { Layout } from '@/components/Layout';
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout>
        <SessionAuth
          requireAuth={process.env.NODE_ENV === 'development' ? false : true}
        >
          <Outlet />
        </SessionAuth>
      </Layout>
      <ScrollRestoration />
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  ),
});
