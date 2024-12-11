import type { CLIPluginAPI } from '@modern-js/plugin-v2';
import type { RsbuildMode } from '@rsbuild/core';
import type { AppTools } from '../types';
import type { InspectOptions } from '../utils/types';

export const inspect = async (
  api: CLIPluginAPI<AppTools<'shared'>>,
  options: InspectOptions,
) => {
  const appContext = api.getAppContext();
  if (!appContext.builder) {
    throw new Error(
      'Expect the Builder to have been initialized, But the appContext.builder received `undefined`',
    );
  }
  return appContext.builder.inspectConfig({
    mode: options.env as RsbuildMode,
    verbose: options.verbose,
    outputPath: options.output,
    writeToDisk: true,
  });
};
