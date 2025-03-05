import { ReactNode } from 'react';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import { canHandleRoute, getRoutingComponent } from 'supertokens-auth-react/ui';
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';
import { PasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/passwordless/prebuiltui';
import { superTokensConfig } from '@/auth/superTokensConfig';

// Initialize SuperTokens
SuperTokens.init(superTokensConfig);

interface SuperTokensProviderProps {
  children: ReactNode;
}

export function SuperTokensProvider({ children }: SuperTokensProviderProps) {
  if (canHandleRoute([ThirdPartyPreBuiltUI, PasswordlessPreBuiltUI])) {
    // This renders the login UI on the /auth route
    return getRoutingComponent([ThirdPartyPreBuiltUI, PasswordlessPreBuiltUI]);
  }

  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
}
