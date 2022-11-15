export interface DatadogPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
