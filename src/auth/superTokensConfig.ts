import { SuperTokensConfig } from 'supertokens-auth-react/lib/build/types';
import Passwordless from 'supertokens-auth-react/recipe/passwordless';
import ThirdParty from 'supertokens-auth-react/recipe/thirdparty';
import Session from 'supertokens-auth-react/recipe/session';

// TODO: Config for SuperTokens should be defined as environment variables
export const superTokensConfig: SuperTokensConfig = {
  enableDebugLogs: process.env.NODE_ENV === 'development' ? true : false,
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APP_NAME || 'Dodo',
    apiDomain:
      import.meta.env.VITE_SUPERTOKENS_API_DOMAIN || 'http://localhost:8080',
    websiteDomain:
      import.meta.env.VITE_SUPERTOKENS_WEBSITE_DOMAIN ||
      'http://localhost:3000',
    apiBasePath: import.meta.env.VITE_SUPERTOKENS_API_BASE_PATH || '/auth',
    websiteBasePath:
      import.meta.env.VITE_SUPERTOKENS_WEBSITE_BASE_PATH || '/auth',
  },
  recipeList: [
    Passwordless.init({
      contactMethod: 'EMAIL',
    }),
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [ThirdParty.Google.init(), ThirdParty.Facebook.init()],
      },
    }),
    Session.init(),
  ],
};
