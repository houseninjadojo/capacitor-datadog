import { WebPlugin } from '@capacitor/core';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';

import type { DatadogPlugin, RUMUserActionType } from './definitions';

export class DatadogWeb extends WebPlugin implements DatadogPlugin {
  async init(
    clientToken: string,
    applicationId: string,
    service: string,
  ): Promise<void> {
    datadogRum.init({
      applicationId,
      clientToken,
      site: 'datadoghq.com',
      service,
      trackInteractions: true,
    });

    datadogLogs.init({
      clientToken,
      site: 'datadoghq.com',
      forwardErrorsToLogs: true,
    });
  }

  async setUserInfo(
    id?: string,
    name?: string,
    email?: string,
    extraInfo?: { [key: string]: string }
  ): Promise<void> {
    datadogRum.setUser({
      id,
      name,
      email,
      extraInfo,
    });
  }

  async addUserExtraInfo(extraInfo: { [key: string]: string }): Promise<void> {
    datadogRum.setUserProperty('extraInfo', extraInfo);
  }

  async addUserAction(
    type: RUMUserActionType,
    name: string,
    attributes: { [key: string]: string }
  ): Promise<void> {
    datadogRum.addAction(name, {
      ...attributes,
      type,
    });
  }

  async addAttribute(key: string, value: string): Promise<void> {
    datadogRum.setGlobalContextProperty(key, value);
  }

  async removeAttribute(key: string): Promise<void> {
    datadogRum.removeGlobalContextProperty(key);
  }

  async addError(error: unknown, context?: any): Promise<void> {
    datadogRum.addError(error, context);
  }
}
