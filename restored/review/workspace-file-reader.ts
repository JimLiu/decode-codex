// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds a reader that loads workspace file contents for a host/path through the
// host bridge, normalising read failures into a single user-facing error.

import { appHostServices } from "../runtime/app-host-services-runtime";

export interface WorkspaceFileReaderParams {
  hostId: string;
  path: string;
}

export type WorkspaceFileReader = (representation: unknown) => Promise<unknown>;

type WorkspaceFileHostServices = {
  workspaceFiles: {
    read(params: {
      hostId: string;
      path: string;
      representation: unknown;
    }): Promise<unknown>;
  };
};

const hostServices = appHostServices as WorkspaceFileHostServices;

export function createWorkspaceFileReader({
  hostId,
  path,
}: WorkspaceFileReaderParams): WorkspaceFileReader {
  return async (representation) => {
    try {
      return await hostServices.workspaceFiles.read({
        hostId,
        path,
        representation,
      });
    } catch {
      throw new Error("File could not be read.");
    }
  };
}
