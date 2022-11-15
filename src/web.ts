import { WebPlugin } from '@capacitor/core';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';

import type { DatadogPlugin, RUMUserActionType } from './definitions';

export class DatadogWeb extends WebPlugin implements DatadogPlugin {
  async init(options: {
    clientToken: string;
    applicationID: string;
    service: string;
  }): Promise<void> {
    datadogRum.init({
      applicationId: options.applicationID,
      clientToken: options.clientToken,
      site: 'datadoghq.eu',
      service: options.service,
      trackInteractions: true,
    });

    datadogLogs.init({
      clientToken: options.clientToken,
      site: 'datadoghq.eu',
      forwardErrorsToLogs: true,
    });
  }

  async setUserInfo(options: {
    id?: string;
    name?: string;
    email?: string;
    extraInfo?: { [key: string]: string }
  }): Promise<void> {
    datadogRum.setUser({
      id: options.id,
      name: options.name,
      email: options.email,
      extraInfo: options.extraInfo,
    });
  }

  async addUserExtraInfo(options: {
    extraInfo: { [key: string]: string }
  }): Promise<void> {
    const { extraInfo } = options;
    datadogRum.setUserProperty('extraInfo', extraInfo);
  }

  async addUserAction(options: {
    type: RUMUserActionType;
    name: string;
    attributes: { [key: string]: string }
  }): Promise<void> {
    const { type, name, attributes } = options;
    datadogRum.addAction(name, {
      ...attributes,
      type,
    });
  }

  async addAttribute(options: { key: string; value: string }): Promise<void> {
    datadogRum.setGlobalContextProperty(options.key, options.value);
  }

  async removeAttribute(options: { key: string; }): Promise<void> {
    datadogRum.removeGlobalContextProperty(options.key);
  }

  async addError(options: { error: unknown; context?: any }): Promise<void> {
    const { error, context } = options;
    datadogRum.addError(error, context);
  }
}
