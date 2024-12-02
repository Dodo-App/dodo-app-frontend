/// <reference types="vinxi/types/client" />
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StartClient } from '@tanstack/start';
import { createRouter } from './router';
import { superTokenConfig } from './config/superToken';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import { canHandleRoute, getRoutingComponent } from 'supertokens-auth-react/ui';
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';
import { PasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/passwordless/prebuiltui';

SuperTokens.init(superTokenConfig);

const router = createRouter();

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    {canHandleRoute([ThirdPartyPreBuiltUI, PasswordlessPreBuiltUI]) ? (
      // This renders the login UI on the /auth route
      getRoutingComponent([ThirdPartyPreBuiltUI, PasswordlessPreBuiltUI])
    ) : (
      <SuperTokensWrapper>
        <StartClient router={router} />
      </SuperTokensWrapper>
    )}
  </StrictMode>
);
