import { WebPlugin } from '@capacitor/core';

import type { DatadogPlugin } from './definitions';

export class DatadogWeb extends WebPlugin implements DatadogPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
