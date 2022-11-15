import { registerPlugin } from '@capacitor/core';

import type { DatadogPlugin } from './definitions';

const Datadog = registerPlugin<DatadogPlugin>('Datadog', {
  web: () => import('./web').then(m => new m.DatadogWeb()),
});

export * from './definitions';
export { Datadog };
