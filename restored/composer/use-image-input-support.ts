// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Per-model image-input capability check for the composer.

import { useRef } from "react";
import type {
  ComposerIntl,
  ComposerScopeStore,
} from "./composer-attachment-hook-types";
import {
  showComposerToast,
  useEvent,
  useModelSettings,
  useModelsQuery,
} from "../boundaries/onboarding-commons-externals.facade";

function useSupportedInputModalities(
  conversationId: string | null,
): string[] | null {
  const modelSettings = useModelSettings(conversationId);
  const modelsQuery = useModelsQuery(conversationId);
  const activeModelId =
    modelSettings?.activeMode?.settings?.model ?? modelSettings?.model ?? null;
  if (activeModelId == null) return null;
  const model = modelsQuery?.data?.models?.find(
    (entry: { model: string }) => entry.model === activeModelId,
  );
  return model?.inputModalities ?? null;
}

export interface ImageInputSupportOptions {
  scope: ComposerScopeStore;
  conversationId: string | null;
  intl: ComposerIntl;
}

export function useImageInputSupport({
  scope,
  conversationId,
  intl,
}: ImageInputSupportOptions) {
  const supportsImageInputs =
    useSupportedInputModalities(conversationId)?.includes("image") ?? true;
  const unsupportedToast = intl.formatMessage({
    id: "composer.imageInputsUnsupported",
    defaultMessage:
      "This model does not support image inputs. Try a different model.",
    description:
      "Toast shown when a user tries to add images for a text-only model",
  });
  const imageInputUnsupportedReason = intl.formatMessage({
    id: "composer.submit.imageInputsUnsupported",
    defaultMessage: "Remove images or switch models to send this message",
    description:
      "Message shown when submit is blocked due to unsupported image inputs",
  });
  const lastNotifiedAtRef = useRef(0);
  const notifyImageInputUnsupported = useEvent((): void => {
    const now = Date.now();
    if (now - lastNotifiedAtRef.current < 1000) return;
    lastNotifiedAtRef.current = now;
    showComposerToast(scope, unsupportedToast);
  });
  return {
    imageInputUnsupportedReason,
    notifyImageInputUnsupported,
    supportsImageInputs,
  };
}
