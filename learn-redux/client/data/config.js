import Raven from 'raven-js';

const sentry_key = '94cae0bd68a543088d89112f88c2e328';
const sentry_app = '206125';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
