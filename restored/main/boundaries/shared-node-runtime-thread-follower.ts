// Restored from ref/.vite/build/src-CoIhwwHr.js
// Thread-follower request version table from the shared-node runtime chunk.

export const threadFollowerRequestVersions = {
  "thread-stream-state-changed": 8,
  "thread-read-state-changed": 1,
  "thread-archived": 2,
  "thread-unarchived": 1,
  "thread-follower-start-turn": 1,
  "thread-follower-load-complete-history": 1,
  "thread-follower-compact-thread": 1,
  "thread-follower-steer-turn": 1,
  "thread-follower-interrupt-turn": 2,
  "thread-follower-update-thread-settings": 1,
  "thread-follower-edit-last-user-turn": 2,
  "thread-follower-command-approval-decision": 1,
  "thread-follower-file-approval-decision": 1,
  "thread-follower-permissions-request-approval-response": 1,
  "thread-follower-submit-user-input": 1,
  "thread-follower-submit-mcp-server-elicitation-response": 1,
  "thread-follower-set-queued-follow-ups-state": 1,
  "thread-queued-followups-changed": 1,
} as const;

export type ThreadFollowerRequestType =
  keyof typeof threadFollowerRequestVersions;

export function getThreadFollowerRequestVersion(requestType: string): number {
  return (
    threadFollowerRequestVersions[requestType as ThreadFollowerRequestType] ?? 0
  );
}
