import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import Header, { messages as headerMessages } from '@edx/frontend-component-header';
import Footer, { messages as footerMessages } from '@edx/frontend-component-footer';

import { Route, Switch } from 'react-router';
import { defaultContextValues } from '@opencraft/providence/react-plugin/context';
import appMessages from './i18n';
import ExamplePage from './example/ExamplePage';

import './index.scss';
import { ROUTES } from './common/constants';
import { CatalogPage } from './catalog/CatalogPage';
import store from './common/store';

// The Providence redux plugin should give you sane defaults. In many cases, the only thing you need to override
// are the client functions.
const buildContext = { ...defaultContextValues() };

// The platform's default http client is already compatible.
buildContext.client.netCall = (options) => getAuthenticatedHttpClient().request(options);

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider store={store}>
      <Header />
      <main>
        <Switch>
          <Route exact path={ROUTES.HOME} component={ExamplePage} />
          <Route exact path={ROUTES.Catalog.HOME} component={CatalogPage} />
        </Switch>
      </main>
      <Footer />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(
    <ErrorPage message={error.message} />,
    document.getElementById('root'),
  );
});

initialize({
  messages: [
    appMessages,
    headerMessages,
    footerMessages,
  ],
});
