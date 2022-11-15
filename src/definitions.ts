/// <reference types="@capacitor/cli" />
import type { Context } from '@datadog/browser-core';

export interface DatadogPlugin {
  init(
    clientToken: string,
    applicationId: string,
    service: string,
  ): Promise<void>;
  setUserInfo(
    id?: string,
    name?: string,
    email?: string,
    extraInfo?: {
      [key: string]: string
    },
  ): Promise<void>;
  addUserExtraInfo(
    extraInfo: {
      [key: string]: string
    },
  ): Promise<void>;
  addUserAction(
    type: RUMUserActionType,
    name: string,
    attributes: {
      [key: string]: string;
    },
  ): Promise<void>;
  addAttribute(key: string, value: string): Promise<void>;
  removeAttribute(key: string): Promise<void>;
  addError(error: unknown, context?: Context): Promise<void>;
}

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    Datadog?: {
      /**
       * The application ID of your Datadog application.
       *
       * @required
       * @example "asdf1234asdf1234"
       */
      rumApplicationID: string;

      /**
       * The client token of your Datadog application.
       *
       * @required
       * @example "asdf1234asdf1234"
       */
      clientToken: string;

      /**
       * The service name of your Datadog application.
       *
       * @example "My App"
       */
      serviceName?: string;

      /**
       * The environment name of your Datadog application.
       *
       * @example "production"
       */
      environment?: string;

      /**
       * Enable RUM
       * 
       * @default true
       */
      enableRUM?: boolean;

      /**
       * Enable Tracing
       * 
       * @default true
       */
      enableTracing?: boolean;

      /**
       * Enable Logging
       * 
       * @default true
       */
      enableLogging?: boolean;

      /**
       * Enable Crash Reporting
       * 
       * @default true
       */
      enableCrashReporting?: boolean;
    };
  }
}

export enum RUMUserActionType {
  tap = 'tap',
  click = 'click',
  scroll = 'scroll',
  swipe = 'swipe',
  custom = 'custom',
}
