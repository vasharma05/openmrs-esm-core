# How translation works

There are three places in frontend code that relate to translation/i18n. They are

- The app shell, in [locale.ts](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/shell/esm-app-shell/src/locale.ts).
  This sets up i18next and react-i18next.
- The [OpenMRS Component Decorator](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/docs/API.md#openmrscomponentdecorator).
  This decorator is generally wrapped around root components by
  [getLifecycle](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/docs/API.md#getasynclifecycle)/[getAsyncLifecycle](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-react-utils/docs/API.md#getasynclifecycle)—
  it is generally not used directly by microfrontends.
  This component provides the connection between the i18next "backend"
  (still on the client side, despite the name) and the microfrontend it wraps.
- The microfrontend, which uses the `t` function or `<Trans>` component from react-i18next
  to produce rendered content.

