// Restored from ref/webview/assets/schema-filter-CwY0F20C.js
// schema-filter-r146tzO0 chunk restored from the Codex webview bundle.
import { isPlanEventEnabled } from "./is-plan-event-enabled";
type PlanEventConfig = {
  enabled?: boolean;
  integrations?: Record<string, boolean> | null;
};
type SchemaFilterConfig = Record<string, PlanEventConfig | undefined> & {
  __default?: {
    enabled?: boolean;
  };
};
type RemotePluginSubscription = {
  partnerAction: string;
};
type RemotePlugin = {
  creationName: string;
  name: string;
  settings: {
    subscriptions?: RemotePluginSubscription[] | null;
  };
};
type SchemaFilterOptions = {
  remotePlugins?: RemotePlugin[] | null;
};
type AnalyticsEvent = {
  event: {
    event?: string | null;
    integrations?: Record<string, boolean>;
  };
  updateEvent(key: "integrations", value: Record<string, boolean>): void;
};
type AnalyticsPlugin = {
  name: "Schema Filter";
  version: "0.1.0";
  isLoaded(): boolean;
  load(): Promise<void>;
  type: "before";
  page(event: AnalyticsEvent): AnalyticsEvent;
  alias(event: AnalyticsEvent): AnalyticsEvent;
  track(event: AnalyticsEvent): AnalyticsEvent;
  identify(event: AnalyticsEvent): AnalyticsEvent;
  group(event: AnalyticsEvent): AnalyticsEvent;
};
export function schemaFilter(
  schema: SchemaFilterConfig | null | undefined,
  options: SchemaFilterOptions,
): AnalyticsPlugin {
  function applySchemaFilter(event: AnalyticsEvent): AnalyticsEvent {
    const eventName = event.event.event;
    if (schema && eventName) {
      const eventConfig = schema[eventName];
      if (isPlanEventEnabled(schema, eventConfig)) {
        event.updateEvent("integrations", {
          ...event.event.integrations,
          ...eventConfig?.integrations,
          ...disabledRemotePluginIntegrations(eventConfig, options),
        });
      } else {
        event.updateEvent("integrations", {
          ...event.event.integrations,
          All: false,
          "Segment.io": true,
        });
        return event;
      }
    }
    return event;
  }
  return {
    name: "Schema Filter",
    version: "0.1.0",
    isLoaded() {
      return true;
    },
    load() {
      return Promise.resolve();
    },
    type: "before",
    page: applySchemaFilter,
    alias: applySchemaFilter,
    track: applySchemaFilter,
    identify: applySchemaFilter,
    group: applySchemaFilter,
  };
}
function disabledRemotePluginIntegrations(
  eventConfig: PlanEventConfig | undefined,
  options: SchemaFilterOptions,
): Record<string, boolean> {
  if (!eventConfig) return {};
  const disabledCreationNames = eventConfig.integrations
    ? Object.keys(eventConfig.integrations).filter(
        (integration) => eventConfig.integrations?.[integration] === false,
      )
    : [];
  const disabledPluginNames: string[] = [];
  for (const plugin of options.remotePlugins ?? []) {
    for (const creationName of disabledCreationNames) {
      if (plugin.creationName === creationName) {
        disabledPluginNames.push(plugin.name);
      }
    }
  }
  return (options.remotePlugins ?? []).reduce<Record<string, boolean>>(
    (integrations, plugin) => {
      if (
        plugin.settings.subscriptions &&
        disabledPluginNames.includes(plugin.name)
      ) {
        plugin.settings.subscriptions.forEach((subscription) => {
          integrations[`${plugin.name} ${subscription.partnerAction}`] = false;
        });
      }
      return integrations;
    },
    {},
  );
}
