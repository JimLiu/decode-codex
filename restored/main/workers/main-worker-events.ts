// Restored from ref/.vite/build/main-r5HnecX_.js
// Main worker app-event bus and worker invocation sampler.

export class WorkerInvocationSampler {
  private readonly rollingWindowCounter = new RollingWindowCounter(30_000);
  private totalInvocations = 0;

  recordInvocation(nowMs = Date.now()): void {
    this.totalInvocations += 1;
    this.rollingWindowCounter.record(1, nowMs);
  }

  getSnapshot(nowMs = Date.now()): {
    totalInvocations: number;
    invocationsLast30s: number;
  } {
    return {
      totalInvocations: this.totalInvocations,
      invocationsLast30s: this.rollingWindowCounter.getSnapshot(nowMs).count,
    };
  }
}

export class MainWorkerAppEventBus {
  private readonly listeners = new Set<(event: unknown) => void>();

  emit(event: unknown): void {
    for (const listener of this.listeners) listener(event);
  }

  subscribe(listener: (event: unknown) => void): { dispose(): void } {
    this.listeners.add(listener);
    return {
      dispose: () => {
        this.listeners.delete(listener);
      },
    };
  }
}

class RollingWindowCounter {
  private readonly samples: Array<{ at: number; value: number }> = [];

  constructor(private readonly windowMs: number) {}

  record(value: number, nowMs: number): void {
    this.samples.push({ at: nowMs, value });
    this.prune(nowMs);
  }

  getSnapshot(nowMs: number): { count: number } {
    this.prune(nowMs);
    return {
      count: this.samples.reduce((total, sample) => total + sample.value, 0),
    };
  }

  private prune(nowMs: number): void {
    const cutoff = nowMs - this.windowMs;
    while (this.samples[0] != null && this.samples[0].at < cutoff) {
      this.samples.shift();
    }
  }
}
