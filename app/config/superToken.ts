import Passwordless from 'supertokens-auth-react/recipe/passwordless';
import ThirdParty from 'supertokens-auth-react/recipe/thirdparty';
import Session from 'supertokens-auth-react/recipe/session';

// TODO: Config for SuperTokens should be defined as environment variables
export const superTokenConfig = {
  appInfo: {
    appName: 'Dodo',
    apiDomain: 'http://localhost:8080',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    Passwordless.init({
      contactMethod: 'EMAIL',
    }),
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [
          ThirdParty.Google.init(),
          ThirdParty.Facebook.init(),
          ThirdParty.Apple.init(),
        ],
      },
    }),
    Session.init(),
  ],
};
