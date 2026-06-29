// Restored from ref/.vite/build/codex-micro-service-BeIQuGMS.js
// codex-micro-service-BeIQuGMS chunk restored from the Codex Electron main bundle.
import { createRequire } from "node:module";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
type StructuredLogger = {
  debug(message: string, details?: unknown): void;
  error(message: string, details?: unknown): void;
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};
type LoggerFactory = (scope: string) => StructuredLogger;
type WorkLouderLogger = {
  debug(...args: unknown[]): void;
  error(...args: unknown[]): void;
  info(...args: unknown[]): void;
  warn(...args: unknown[]): void;
};
type Unsubscribe = () => void;
type TimerHandle = ReturnType<typeof setTimeout>;
type ScheduleTimer = (callback: () => void, delayMs: number) => TimerHandle;
type ClearTimer = (handle: TimerHandle) => void;
type ThreadSlotStatus = "off" | "working" | string;
type VoiceState = "idle" | "recording" | "processing" | "completed";
type LightingSlot = {
  id: number;
  threadKey: string | null;
  title: string | null;
  status: ThreadSlotStatus;
  selected: boolean;
};
type LightingModel = {
  slots: LightingSlot[];
  voiceState: VoiceState;
};
type DeviceBatteryState = {
  percentage: number;
  isCharging: boolean | null;
};
type CodexMicroDeviceState = {
  status: "not-detected" | "detected" | "connected" | "error";
  error: string | null;
  battery: DeviceBatteryState | null;
};
type HidEvent = {
  key: string;
  act?: string | null;
  agent?: string | null;
};
type JoystickEvent = unknown;
type ForwardedHidEvent = {
  key: string;
  act: string | null;
  agent: string | null;
  slot: number | null;
  threadKey: string | null;
};
type DeviceDiscovery = {
  findWLDevices(deviceTypes: unknown[]): unknown[];
};
type DeviceComm = {
  onConnectionEvent(callback: (event: ConnectionEvent) => void): Unsubscribe;
  connect(device: unknown): Promise<void>;
  disconnect(): Promise<void>;
};
type DeviceApi = {
  onHidReceived(callback: (event: HidEvent) => void): Unsubscribe;
  onJoystickMove(callback: (event: JoystickEvent) => void): Unsubscribe;
  sendLightingConfig(config: LightingConfig): Promise<boolean>;
  sendThreadsLighting(config: ThreadLightingConfig[]): Promise<boolean>;
  getDeviceStatus(): Promise<{
    batteryPercentage?: number | null;
    isCharging?: boolean | null;
  }>;
};
type DeviceKit = {
  ConnectionEventType: {
    CONNECTED: string;
    DISCONNECTED: string;
    ERROR: string;
  };
  DeviceType: {
    Project2077: unknown;
  };
  OAILightingEffect: Record<"off" | "breath" | "solid" | "snake", unknown>;
  RPCApiOAI: new (comm: DeviceComm, logger: WorkLouderLogger) => DeviceApi;
  WLDeviceCommImpl: new (logger: WorkLouderLogger) => DeviceComm;
  WLDeviceDiscovery: new (logger: WorkLouderLogger) => DeviceDiscovery;
};
type ConnectionEvent =
  | {
      type: string;
    }
  | {
      type: string;
      error?: unknown;
    };
type LightingZoneConfig = {
  effect: unknown;
  brightness: number;
  speed: number;
  magic: number;
  color: number;
};
type LightingConfig = {
  keys: LightingZoneConfig;
  ambient: LightingZoneConfig;
};
type ThreadLightingConfig = {
  id: number;
  color: number;
  brightness: number;
  effect: unknown;
  speed: number;
  syncKeysLighting: boolean;
  syncAmbientLighting: boolean;
};
type CodexMicroServiceOptions = {
  discovery?: DeviceDiscovery;
  createComm?: () => DeviceComm;
  createApi?: (comm: DeviceComm) => DeviceApi;
  schedule?: ScheduleTimer;
  clearScheduled?: ClearTimer;
  onDeviceStateChanged(state: CodexMicroDeviceState): void;
  onHidEvent(event: ForwardedHidEvent): void;
  onJoystickEvent(event: JoystickEvent): void;
};
const requireFromRestoredModule = createRequire(import.meta.url);
const logger = (sharedRuntime.createScopedStructuredLogger as LoggerFactory)(
  "CodexMicroService",
);
const colorForThreadStatus = sharedRuntime.colorNumberForDeviceStatus as (
  status: string,
) => number;
const {
  ConnectionEventType,
  DeviceType,
  OAILightingEffect,
  RPCApiOAI,
  WLDeviceCommImpl,
  WLDeviceDiscovery,
} = requireFromRestoredModule("@worklouder/device-kit-oai") as DeviceKit;
const THREAD_SLOT_COUNT = 6;
const RECONNECT_DELAY_MS = 10_000;
const BATTERY_REFRESH_DELAY_MS = 60_000;
const SELECTION_LIGHTING_DURATION_MS = 4_000;
const SELECTED_THREAD_SPEED = 0.4;
const WORKING_THREAD_SPEED = 0.4;
const VOICE_RECORDING_COLOR = 3050327;
const VOICE_COMPLETED_COLOR = 0xffffff;
const lightsOff: LightingConfig = {
  keys: {
    effect: OAILightingEffect.off,
    brightness: 0,
    speed: 0,
    magic: 0,
    color: 0,
  },
  ambient: {
    effect: OAILightingEffect.off,
    brightness: 0,
    speed: 0,
    magic: 0,
    color: 0,
  },
};
const emptyLightingModel: LightingModel = {
  slots: createEmptyThreadSlots(),
  voiceState: "idle",
};
class CodexMicroService {
  private readonly options: CodexMicroServiceOptions;
  private readonly discovery: DeviceDiscovery;
  private readonly createComm: () => DeviceComm;
  private readonly createApi: (comm: DeviceComm) => DeviceApi;
  private readonly schedule: ScheduleTimer;
  private readonly clearScheduled: ClearTimer;
  private comm: DeviceComm | null = null;
  private api: DeviceApi | null = null;
  private unsubscribeConnectionEvent: Unsubscribe | null = null;
  private unsubscribeHid: Unsubscribe | null = null;
  private unsubscribeJoystick: Unsubscribe | null = null;
  private reconnectTimer: TimerHandle | null = null;
  private batteryRefreshTimer: TimerHandle | null = null;
  private selectionLightingTimer: TimerHandle | null = null;
  private connectPromise: Promise<void> | null = null;
  private lightingWritePromise: Promise<void> = Promise.resolve();
  private connectionAttemptId = 0;
  private lifecycleState: "initial" | "started" | "stopped" = "initial";
  private selectedSlotId: number | null = null;
  private selectionLightingVisible = false;
  private lastLightingModel = emptyLightingModel;
  private displayedLightingModel = emptyLightingModel;
  private deviceState: CodexMicroDeviceState = {
    status: "not-detected",
    error: null,
    battery: null,
  };
  constructor(options: CodexMicroServiceOptions) {
    this.options = options;
    const deviceLogger = createWorkLouderLogger();
    this.discovery = options.discovery ?? new WLDeviceDiscovery(deviceLogger);
    this.createComm =
      options.createComm ?? (() => new WLDeviceCommImpl(deviceLogger));
    this.createApi =
      options.createApi ?? ((comm) => new RPCApiOAI(comm, deviceLogger));
    this.schedule = options.schedule ?? setTimeout;
    this.clearScheduled = options.clearScheduled ?? clearTimeout;
  }
  getState(): CodexMicroDeviceState {
    return this.deviceState;
  }
  start(): void {
    if (this.lifecycleState === "started") return;
    this.lifecycleState = "started";
    void this.ensureConnected();
  }
  async updateLighting(model: LightingModel): Promise<boolean> {
    this.lastLightingModel = model;
    if (this.lifecycleState === "stopped") return false;
    const selectedSlotId =
      model.slots.find((slot) => slot.selected && slot.status !== "off")?.id ??
      null;
    if (selectedSlotId !== this.selectedSlotId) {
      this.selectedSlotId = selectedSlotId;
      this.clearSelectionLightingTimer();
      this.selectionLightingVisible = selectedSlotId != null;
      if (this.selectionLightingVisible) {
        this.selectionLightingTimer = this.schedule(() => {
          this.selectionLightingTimer = null;
          this.selectionLightingVisible = false;
          void this.applyLighting(this.lastLightingModel);
        }, SELECTION_LIGHTING_DURATION_MS);
      }
    }
    if (this.lifecycleState !== "started") this.start();
    await this.ensureConnected();
    return this.api == null ? false : this.applyLighting(model);
  }
  async stop(): Promise<void> {
    this.lifecycleState = "stopped";
    this.connectionAttemptId += 1;
    const stoppedAttemptId = this.connectionAttemptId;
    if (this.reconnectTimer != null) {
      this.clearScheduled(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.batteryRefreshTimer != null) {
      this.clearScheduled(this.batteryRefreshTimer);
      this.batteryRefreshTimer = null;
    }
    this.clearSelectionLightingTimer();
    this.selectedSlotId = null;
    this.selectionLightingVisible = false;
    this.clearConnectionSubscriptions();
    const api = this.api;
    const comm = this.comm;
    this.comm = null;
    this.api = null;
    await this.enqueueLightingWrite(async () => {
      if (api != null) {
        await Promise.allSettled([
          api.sendLightingConfig(lightsOff),
          api.sendThreadsLighting(
            threadLightingForSlots(emptyLightingModel.slots),
          ),
        ]);
      }
    });
    await comm?.disconnect();
    if (
      this.lifecycleState === "stopped" &&
      this.connectionAttemptId === stoppedAttemptId
    ) {
      this.displayedLightingModel = emptyLightingModel;
      this.setDeviceState({
        status: "not-detected",
        error: null,
        battery: null,
      });
    }
  }
  dispose(): Promise<void> {
    return this.stop();
  }
  private async ensureConnected(): Promise<void> {
    if (
      this.lifecycleState !== "started" ||
      this.api != null ||
      this.reconnectTimer != null
    ) {
      return;
    }
    if (this.connectPromise != null) {
      await this.connectPromise;
      await this.ensureConnected();
      return;
    }
    const attemptId = this.connectionAttemptId;
    this.connectPromise = this.connect(attemptId).finally(() => {
      this.connectPromise = null;
    });
    await this.connectPromise;
  }
  private async connect(attemptId: number): Promise<void> {
    let device: unknown;
    try {
      [device] = this.discovery.findWLDevices([DeviceType.Project2077]);
    } catch (error) {
      if (!this.isCurrentConnectionAttempt(attemptId)) return;
      logger.warning("Codex Micro discovery failed", {
        safe: {},
        sensitive: {
          error,
        },
      });
      this.setDeviceState({
        status: "error",
        error: "Discovery failed",
        battery: null,
      });
      this.scheduleReconnect();
      return;
    }
    if (!this.isCurrentConnectionAttempt(attemptId)) return;
    if (device == null) {
      this.setDeviceState({
        status: "not-detected",
        error: null,
        battery: null,
      });
      this.scheduleReconnect();
      return;
    }
    this.setDeviceState({
      status: "detected",
      error: null,
      battery: null,
    });
    const comm = this.createComm();
    this.unsubscribeConnectionEvent = comm.onConnectionEvent((event) => {
      if (!this.isCurrentConnectionAttempt(attemptId)) return;
      switch (event.type) {
        case ConnectionEventType.CONNECTED:
          this.setDeviceState({
            status: "connected",
            error: null,
            battery: null,
          });
          break;
        case ConnectionEventType.DISCONNECTED:
          this.handleDisconnect();
          break;
        case ConnectionEventType.ERROR:
          logger.warning("Codex Micro transport failed", {
            safe: {},
            sensitive: {
              error: "error" in event ? event.error : null,
            },
          });
          this.handleDisconnect("Connection failed");
          break;
      }
    });
    try {
      await comm.connect(device);
      if (!this.isCurrentConnectionAttempt(attemptId)) {
        this.unsubscribeConnectionEvent?.();
        this.unsubscribeConnectionEvent = null;
        await comm.disconnect();
        return;
      }
      const api = this.createApi(comm);
      this.comm = comm;
      this.api = api;
      this.unsubscribeHid = api.onHidReceived((event) => {
        this.handleHidEvent(event);
      });
      this.unsubscribeJoystick = api.onJoystickMove((event) => {
        this.handleJoystickEvent(event);
      });
      this.setDeviceState({
        status: "connected",
        error: null,
        battery: null,
      });
      await this.applyLighting(this.lastLightingModel);
      await this.refreshBatteryStatus();
    } catch (error) {
      if (!this.isCurrentConnectionAttempt(attemptId)) {
        await comm.disconnect();
        return;
      }
      logger.warning("Codex Micro connection failed", {
        safe: {},
        sensitive: {
          error,
        },
      });
      this.unsubscribeConnectionEvent?.();
      this.unsubscribeConnectionEvent = null;
      await comm.disconnect();
      this.setDeviceState({
        status: "error",
        error: "Connection failed",
        battery: null,
      });
      this.scheduleReconnect();
    }
  }
  private applyLighting(model: LightingModel): Promise<boolean> {
    return this.enqueueLightingWrite(async () => {
      const api = this.api;
      if (this.lifecycleState !== "started" || api == null) return false;
      const lightingConfigAccepted = await api.sendLightingConfig(
        lightingConfigForModel(
          model.slots,
          model.voiceState,
          this.selectionLightingVisible,
        ),
      );
      if (this.lifecycleState !== "started" || this.api !== api) return false;
      const threadLightingAccepted = await api.sendThreadsLighting(
        threadLightingForSlots(model.slots),
      );
      if (threadLightingAccepted && this.api === api) {
        this.displayedLightingModel = model;
      }
      return lightingConfigAccepted && threadLightingAccepted;
    });
  }
  private handleHidEvent(event: HidEvent): void {
    const match = /^AG0([0-5])$/.exec(event.key);
    const slot = match == null ? null : Number(match[1]);
    this.options.onHidEvent({
      key: event.key,
      act: event.act ?? null,
      agent: event.agent ?? null,
      slot,
      threadKey:
        slot == null
          ? null
          : (this.displayedLightingModel.slots[slot]?.threadKey ?? null),
    });
  }
  private handleJoystickEvent(event: JoystickEvent): void {
    this.options.onJoystickEvent(event);
  }
  private handleDisconnect(error: string | null = null): void {
    if (this.batteryRefreshTimer != null) {
      this.clearScheduled(this.batteryRefreshTimer);
      this.batteryRefreshTimer = null;
    }
    this.clearSelectionLightingTimer();
    this.selectionLightingVisible = false;
    this.clearConnectionSubscriptions();
    this.comm = null;
    this.api = null;
    this.displayedLightingModel = emptyLightingModel;
    this.setDeviceState({
      status: error == null ? "not-detected" : "error",
      error,
      battery: null,
    });
    this.scheduleReconnect();
  }
  private scheduleReconnect(): void {
    if (this.lifecycleState !== "started" || this.reconnectTimer != null) {
      return;
    }
    this.reconnectTimer = this.schedule(() => {
      this.reconnectTimer = null;
      void this.ensureConnected();
    }, RECONNECT_DELAY_MS);
  }
  private clearConnectionSubscriptions(): void {
    this.unsubscribeConnectionEvent?.();
    this.unsubscribeHid?.();
    this.unsubscribeJoystick?.();
    this.unsubscribeConnectionEvent = null;
    this.unsubscribeHid = null;
    this.unsubscribeJoystick = null;
  }
  private clearSelectionLightingTimer(): void {
    if (this.selectionLightingTimer != null) {
      this.clearScheduled(this.selectionLightingTimer);
      this.selectionLightingTimer = null;
    }
  }
  private enqueueLightingWrite<T>(operation: () => Promise<T>): Promise<T> {
    const result = this.lightingWritePromise.then(operation, operation);
    this.lightingWritePromise = result.then(
      () => undefined,
      () => undefined,
    );
    return result;
  }
  private async refreshBatteryStatus(): Promise<void> {
    const api = this.api;
    if (this.lifecycleState !== "started" || api == null) return;
    try {
      const status = await api.getDeviceStatus();
      if (this.api !== api) return;
      this.setDeviceState({
        status: "connected",
        error: null,
        battery:
          status.batteryPercentage == null
            ? null
            : {
                percentage: status.batteryPercentage,
                isCharging: status.isCharging ?? null,
              },
      });
    } catch {}
    if (
      this.lifecycleState === "started" &&
      this.api === api &&
      this.batteryRefreshTimer == null
    ) {
      this.batteryRefreshTimer = this.schedule(() => {
        this.batteryRefreshTimer = null;
        void this.refreshBatteryStatus();
      }, BATTERY_REFRESH_DELAY_MS);
    }
  }
  private setDeviceState(nextState: CodexMicroDeviceState): void {
    if (
      this.deviceState.status === nextState.status &&
      this.deviceState.error === nextState.error &&
      this.deviceState.battery?.percentage === nextState.battery?.percentage &&
      this.deviceState.battery?.isCharging === nextState.battery?.isCharging
    ) {
      return;
    }
    this.deviceState = nextState;
    this.options.onDeviceStateChanged(nextState);
  }
  private isCurrentConnectionAttempt(attemptId: number): boolean {
    return (
      this.lifecycleState === "started" &&
      this.connectionAttemptId === attemptId
    );
  }
}
function threadLightingForSlots(slots: LightingSlot[]): ThreadLightingConfig[] {
  return slots.map((slot) =>
    slot.status === "off"
      ? {
          id: slot.id,
          color: 0,
          brightness: 0,
          effect: OAILightingEffect.off,
          speed: 0,
          syncKeysLighting: false,
          syncAmbientLighting: false,
        }
      : {
          id: slot.id,
          color: colorForThreadStatus(slot.status),
          brightness: 1,
          effect: slot.selected
            ? OAILightingEffect.breath
            : OAILightingEffect.solid,
          speed: slot.selected ? SELECTED_THREAD_SPEED : 0,
          syncKeysLighting: false,
          syncAmbientLighting: false,
        },
  );
}
function lightingConfigForModel(
  slots: LightingSlot[],
  voiceState: VoiceState,
  selectionLightingVisible: boolean,
): LightingConfig {
  const selectedSlot = slots.find((slot) => slot.selected);
  const voiceLighting = lightingConfigForVoiceState(voiceState);
  if (selectedSlot == null || selectedSlot.status === "off") {
    return {
      keys: lightsOff.keys,
      ambient: voiceLighting ?? lightsOff.ambient,
    };
  }
  const selectedSlotLighting = {
    effect:
      selectedSlot.status === "working"
        ? OAILightingEffect.snake
        : OAILightingEffect.solid,
    brightness: 1,
    speed: selectedSlot.status === "working" ? WORKING_THREAD_SPEED : 0,
    magic: 0,
    color: colorForThreadStatus(selectedSlot.status),
  };
  const ambient =
    voiceLighting ??
    (selectedSlot.status === "working" || selectionLightingVisible
      ? selectedSlotLighting
      : lightsOff.ambient);
  return {
    keys: selectionLightingVisible
      ? {
          effect: OAILightingEffect.solid,
          brightness: 1,
          speed: 0,
          magic: 0,
          color: ambient.color,
        }
      : lightsOff.keys,
    ambient,
  };
}
function lightingConfigForVoiceState(
  voiceState: VoiceState,
): LightingZoneConfig | null {
  switch (voiceState) {
    case "idle":
      return null;
    case "recording":
    case "processing":
      return {
        effect: OAILightingEffect.snake,
        brightness: 1,
        speed: WORKING_THREAD_SPEED,
        magic: 0,
        color:
          voiceState === "recording"
            ? VOICE_RECORDING_COLOR
            : VOICE_COMPLETED_COLOR,
      };
    case "completed":
      return {
        effect: OAILightingEffect.solid,
        brightness: 1,
        speed: 0,
        magic: 0,
        color: VOICE_COMPLETED_COLOR,
      };
  }
}
function createEmptyThreadSlots(): LightingSlot[] {
  return Array.from(
    {
      length: THREAD_SLOT_COUNT,
    },
    (_unused, id) => ({
      id,
      threadKey: null,
      title: null,
      status: "off",
      selected: false,
    }),
  );
}
function createWorkLouderLogger(): WorkLouderLogger {
  return {
    debug: (...args: unknown[]) => {
      logger.debug("Work Louder debug", {
        safe: {},
        sensitive: {
          args,
        },
      });
    },
    error: (...args: unknown[]) => {
      logger.error("Work Louder error", {
        safe: {},
        sensitive: {
          args,
        },
      });
    },
    info: (...args: unknown[]) => {
      logger.info("Work Louder info", {
        safe: {},
        sensitive: {
          args,
        },
      });
    },
    warn: (...args: unknown[]) => {
      logger.warning("Work Louder warning", {
        safe: {},
        sensitive: {
          args,
        },
      });
    },
  };
}
export { CodexMicroService };
