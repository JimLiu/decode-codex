// Restored from ref/webview/assets/cloud-environments-settings-page-C8x5EwUe.js

import React from "react";
import { Navigate, useLocation, useNavigate } from "../../vendor/react-router";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  _appScopeO as useAppScopeStore,
  _appScopeT as appScopeRoot,
} from "../../boundaries/app-scope";
import { Button } from "../../ui/button";
import { SettingsContentLayout } from "../../ui/settings-content-layout";
import { toastApiSignal } from "../../ui/toast-signal";
import { ArrowLeftIcon } from "../../icons/arrow-left-icon";
import { createCloudEnvironment, updateCloudEnvironment } from "./api";
import { CloudEnvironmentDetails } from "./details";
import { EnvironmentEditor } from "./editor";
import { useCloudEnvironmentDetails } from "./hooks";
import { CloudEnvironmentsList } from "./list";
import { SettingsSectionTitle } from "../settings-shared";
const CLOUD_ENVIRONMENTS_ROUTE = "/settings/cloud-environments";
export function CloudEnvironmentsSettingsPage(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSuffix = location.pathname
    .slice(CLOUD_ENVIRONMENTS_ROUTE.length)
    .split("/")
    .filter(Boolean);
  if (pathSuffix.length === 0) {
    return (
      <SettingsContentLayout
        action={
          <Button onClick={() => navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/new`)}>
            <FormattedMessage
              id="settings.cloudEnvironments.create"
              defaultMessage="Create environment"
              description="Button to create a cloud environment"
            />
          </Button>
        }
        title={<SettingsSectionTitle slug="cloud-environments" />}
      >
        <CloudEnvironmentsList
          onCreate={() => navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/new`)}
          onEdit={(environmentId) =>
            navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}/edit`)
          }
          onOpen={(environmentId) =>
            navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}`)
          }
        />
      </SettingsContentLayout>
    );
  }
  if (pathSuffix.length === 1 && pathSuffix[0] === "new") {
    return <CreateCloudEnvironmentPage />;
  }
  if (pathSuffix.length === 1) {
    const environmentId = pathSuffix[0];
    return (
      <SettingsContentLayout
        backSlot={
          <BackButton onClick={() => navigate(CLOUD_ENVIRONMENTS_ROUTE)} />
        }
        title={<EnvironmentTitle environmentId={environmentId} />}
      >
        <CloudEnvironmentDetails
          environmentId={environmentId}
          onDeleted={() => navigate(CLOUD_ENVIRONMENTS_ROUTE)}
          onEdit={() =>
            navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}/edit`)
          }
        />
      </SettingsContentLayout>
    );
  }
  if (pathSuffix.length === 2 && pathSuffix[1] === "edit") {
    return <EditCloudEnvironmentPage environmentId={pathSuffix[0]} />;
  }
  return <Navigate to={CLOUD_ENVIRONMENTS_ROUTE} replace />;
}
function CreateCloudEnvironmentPage(): JSX.Element {
  const navigate = useNavigate();
  const intl = useIntl();
  const appScopeStore = useAppScopeStore(appScopeRoot);
  return (
    <SettingsContentLayout
      backSlot={
        <BackButton onClick={() => navigate(CLOUD_ENVIRONMENTS_ROUTE)} />
      }
      title={
        <FormattedMessage
          id="settings.cloudEnvironments.create.title"
          defaultMessage="Create cloud environment"
          description="Title for creating a cloud environment"
        />
      }
    >
      <EnvironmentEditor
        mode="create"
        onCancel={() => navigate(CLOUD_ENVIRONMENTS_ROUTE)}
        onSubmit={async (requestBody) => {
          const environment = await createCloudEnvironment(requestBody);
          appScopeStore.get(toastApiSignal).success(
            intl.formatMessage({
              id: "settings.cloudEnvironments.create.success",
              defaultMessage: "Cloud environment created",
              description: "Toast after creating a cloud environment",
            }),
          );
          const environmentId =
            environment.environment_id ??
            environment.id ??
            CLOUD_ENVIRONMENTS_ROUTE;
          navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}`);
        }}
      />
    </SettingsContentLayout>
  );
}
function EditCloudEnvironmentPage({
  environmentId,
}: {
  environmentId: string;
}): JSX.Element {
  const navigate = useNavigate();
  const intl = useIntl();
  const appScopeStore = useAppScopeStore(appScopeRoot);
  const query = useCloudEnvironmentDetails(environmentId);
  if (query.isLoading || query.data == null) {
    return (
      <SettingsContentLayout
        backSlot={<BackButton onClick={() => navigate(-1)} />}
        title={
          <FormattedMessage
            id="settings.cloudEnvironments.edit.loading"
            defaultMessage="Edit cloud environment"
            description="Title while loading cloud environment editor"
          />
        }
      >
        <div className="text-sm text-token-text-secondary">
          <FormattedMessage
            id="settings.cloudEnvironments.edit.loadingBody"
            defaultMessage="Loading cloud environment..."
            description="Loading body while opening cloud environment editor"
          />
        </div>
      </SettingsContentLayout>
    );
  }
  if (query.error || query.data.permissions?.can_write === false) {
    return (
      <Navigate to={`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}`} replace />
    );
  }
  return (
    <SettingsContentLayout
      backSlot={
        <BackButton
          onClick={() =>
            navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}`)
          }
        />
      }
      title={
        <FormattedMessage
          id="settings.cloudEnvironments.edit.title"
          defaultMessage="Edit cloud environment"
          description="Title for editing a cloud environment"
        />
      }
    >
      <EnvironmentEditor
        environment={query.data}
        mode="edit"
        onCancel={() =>
          navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}`)
        }
        onSubmit={async (requestBody) => {
          await updateCloudEnvironment({
            environmentId,
            requestBody,
          });
          appScopeStore.get(toastApiSignal).success(
            intl.formatMessage({
              id: "settings.cloudEnvironments.edit.success",
              defaultMessage: "Cloud environment saved",
              description: "Toast after saving a cloud environment",
            }),
          );
          navigate(`${CLOUD_ENVIRONMENTS_ROUTE}/${environmentId}`);
        }}
      />
    </SettingsContentLayout>
  );
}
function EnvironmentTitle({ environmentId }: { environmentId: string }) {
  const query = useCloudEnvironmentDetails(environmentId);
  return (
    query.data?.label ??
    query.data?.name ?? (
      <FormattedMessage
        id="settings.cloudEnvironments.details.title"
        defaultMessage="Cloud environment"
        description="Fallback title for cloud environment details"
      />
    )
  );
}
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      aria-label="Back"
      color="ghost"
      size="icon"
      uniform
      onClick={onClick}
    >
      <ArrowLeftIcon className="icon-sm" />
    </Button>
  );
}
