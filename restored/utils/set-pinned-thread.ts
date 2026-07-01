// Restored from ref/webview/assets/set-pinned-thread-BrrghWPc.js
import { vscodeApiH, vscodeApiN } from "../boundaries/vscode-api";
async function setPinnedThread(
  threadId: string,
  pinned: boolean,
  beforeThreadId?: string,
) {
  await vscodeApiN("set-thread-pinned", {
    params:
      beforeThreadId === undefined
        ? {
            threadId,
            pinned,
          }
        : {
            threadId,
            pinned,
            beforeThreadId,
          },
  });
}
async function setPinnedThreadsOrder(threadIds: string[]) {
  try {
    await vscodeApiN("set-pinned-threads-order", {
      params: {
        threadIds,
      },
    });
  } catch (error) {
    vscodeApiH.error("Failed to set pinned thread order", {
      safe: {},
      sensitive: {
        error,
      },
    });
  }
}
function initSetPinnedThreadRuntimeChunk(): void {}
export {
  initSetPinnedThreadRuntimeChunk,
  setPinnedThread,
  setPinnedThreadsOrder,
};
