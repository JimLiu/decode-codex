// Restored from ref/webview/assets/notebook-preview-panel-Bk0oKCgu.js
// Semantic read-only renderer for Jupyter notebook artifact previews.

import React, { type ReactElement, type ReactNode } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import {
  ArtifactOpenButton,
  ArtifactPreviewHeader,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
import { PullRequestDescriptionMarkdown } from "../conversations/pull-request-description-markdown-renderer";
import { ChevronIcon } from "../icons/chevron-icon";
import { CodeIcon } from "../icons/code-icon";
import { PlayOutlineIcon } from "../icons/play-outline-icon";
import { RefreshIcon } from "../icons/refresh-icon";
import { CodeSnippet } from "../ui/code-snippet";
import { ArtifactPreviewStatus } from "../utils/artifact-preview-status";
import { classNames } from "../utils/class-names";

type IntlFormatter = ReturnType<typeof useIntl>;

export type NotebookPreviewPanelProps = {
  contentsBase64: string;
  headerRightContent?: ReactNode;
  hostId?: string | null;
  path?: string | null;
  title: string;
};

type ParsedNotebookDocument = {
  cells: NotebookCell[];
  title: string | null;
};

type NotebookCell = NotebookCodeCell | NotebookMarkdownCell | NotebookRawCell;

type NotebookBaseCell = {
  id: string | null;
  source: string;
  title: string | null;
};

type NotebookCodeCell = NotebookBaseCell & {
  cellType: "code";
  descriptionMarkdown: string | null;
  executionCount: number | null;
  outputs: NotebookOutput[];
};

type NotebookMarkdownCell = NotebookBaseCell & {
  cellType: "markdown";
};

type NotebookRawCell = NotebookBaseCell & {
  cellType: "raw";
};

type NotebookOutput =
  | NotebookErrorOutput
  | NotebookHtmlOutput
  | NotebookImageOutput
  | NotebookJsonOutput
  | NotebookMarkdownOutput
  | NotebookStreamOutput
  | NotebookTextOutput;

type NotebookImageOutput = {
  dataUrl: string;
  outputNumber: number;
  type: "image";
};

type NotebookHtmlOutput = {
  html: string;
  type: "html";
};

type NotebookMarkdownOutput = {
  markdown: string;
  type: "markdown";
};

type NotebookTextOutput = {
  summaryMarkdown: string | null;
  text: string;
  type: "text";
};

type NotebookJsonOutput = {
  summaryMarkdown: string | null;
  text: string;
  type: "json";
};

type NotebookStreamOutput = {
  name: string;
  summaryMarkdown: string | null;
  text: string;
  type: "stream";
};

type NotebookErrorOutput = {
  ename: string;
  evalue: string;
  summaryMarkdown: string | null;
  traceback: string;
  type: "error";
};

type NotebookParseResult =
  | {
      document: ParsedNotebookDocument;
      status: "ready";
    }
  | {
      document?: undefined;
      status: "error";
    };

const NOTEBOOK_METADATA_NAMESPACES = [
  "codex",
  "codexNotebook",
  "codex_notebook",
  "codex-app",
] as const;

const NOTEBOOK_TITLE_METADATA_KEYS = [
  "title",
  "cellTitle",
  "cell_title",
] as const;

const NOTEBOOK_CODE_DESCRIPTION_METADATA_KEYS = [
  "codeDescriptionMarkdown",
  "code_description_markdown",
  "descriptionMarkdown",
  "description_markdown",
  "description",
] as const;

const NOTEBOOK_HTML_CSP = [
  "default-src 'none'",
  "base-uri 'none'",
  "connect-src 'none'",
  "font-src data:",
  "form-action 'none'",
  "frame-src 'none'",
  "img-src data: blob:",
  "media-src data: blob:",
  "object-src 'none'",
  "script-src 'none'",
  "style-src 'unsafe-inline'",
].join("; ");

export function NotebookPreviewPanel({
  contentsBase64,
  headerRightContent,
  hostId,
  path,
  title,
}: NotebookPreviewPanelProps): ReactElement {
  const intl = useIntl();
  const parsedNotebook = React.useMemo(
    () => parseNotebookContents(contentsBase64),
    [contentsBase64],
  );
  const displayTitle =
    parsedNotebook.status === "ready"
      ? (parsedNotebook.document.title ?? stripNotebookExtension(title))
      : stripNotebookExtension(title);
  const cellCountLabel =
    parsedNotebook.status === "ready"
      ? intl.formatMessage(
          {
            id: "notebookPreview.cellCount",
            defaultMessage: "{cellCount, plural, one {# cell} other {# cells}}",
            description:
              "Cell count shown in the notebook artifact preview header",
          },
          { cellCount: parsedNotebook.document.cells.length },
        )
      : null;
  const artifactType =
    cellCountLabel == null ? "IPYNB" : `IPYNB · ${cellCountLabel}`;
  const readOnlyControls =
    parsedNotebook.status === "ready" ? (
      <>
        <ReadOnlyBadge />
        <DisabledNotebookAction
          label={intl.formatMessage({
            id: "notebookPreview.runAllDisabledTooltip",
            defaultMessage: "Running is not available in this preview",
            description:
              "Tooltip for a disabled run-all control in the read-only notebook preview",
          })}
        >
          <PlayOutlineIcon className="icon-2xs" />
          <span className="hidden md:inline">
            <FormattedMessage
              id="notebookPreview.runAllDisabled"
              defaultMessage="Run all"
              description="Disabled run-all control in the read-only notebook preview"
            />
          </span>
        </DisabledNotebookAction>
        <DisabledNotebookAction
          label={intl.formatMessage({
            id: "notebookPreview.restartKernelDisabledTooltip",
            defaultMessage: "Kernels are not connected in this preview",
            description:
              "Tooltip for a disabled restart-kernel control in the read-only notebook preview",
          })}
        >
          <RefreshIcon className="icon-2xs" />
          <span className="hidden lg:inline">
            <FormattedMessage
              id="notebookPreview.restartKernelDisabled"
              defaultMessage="Restart kernel"
              description="Disabled restart-kernel control in the read-only notebook preview"
            />
          </span>
        </DisabledNotebookAction>
      </>
    ) : null;
  const fileAction =
    hostId != null && path != null ? (
      <ArtifactOpenButton
        analyticsContext={{
          threadId: null,
          turnId: null,
          inputMessageId: null,
          messageId: null,
        }}
        hostId={hostId}
        path={path}
        showLabel={true}
      />
    ) : null;
  const rightContent = (
    <div className="flex min-w-0 flex-wrap items-center justify-end gap-1 overflow-hidden">
      {readOnlyControls}
      {fileAction}
      {headerRightContent}
    </div>
  );
  const body =
    parsedNotebook.status === "ready" ? (
      <NotebookPreviewBody document={parsedNotebook.document} />
    ) : (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {ArtifactPreviewStatus("error")}
      </div>
    );

  return (
    <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
      <ArtifactPreviewHeader
        artifactType={artifactType}
        centerContent={null}
        rightContent={rightContent}
        title={displayTitle}
      />
      {body}
    </section>
  );
}

function NotebookPreviewBody({
  document,
}: {
  document: ParsedNotebookDocument;
}): ReactElement {
  if (document.cells.length === 0) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 text-center text-sm text-token-text-tertiary">
        <FormattedMessage
          id="notebookPreview.empty"
          defaultMessage="This notebook does not contain any cells"
          description="Empty state shown for a notebook without cells"
        />
      </div>
    );
  }

  return (
    <div className="min-h-0 flex-1 overflow-auto bg-token-side-bar-background px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {document.cells.map((cell, index) => (
          <NotebookCellSection
            key={cell.id ?? index}
            cell={cell}
            cellNumber={index + 1}
            totalCellCount={document.cells.length}
          />
        ))}
      </div>
    </div>
  );
}

function NotebookCellSection({
  cell,
  cellNumber,
  totalCellCount,
}: {
  cell: NotebookCell;
  cellNumber: number;
  totalCellCount: number;
}): ReactElement {
  return (
    <details
      className="group/notebook-cell overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary"
      open
    >
      <summary className="flex cursor-interaction list-none items-center justify-between gap-3 border-b border-token-border-light px-4 py-2 [&::-webkit-details-marker]:hidden">
        <NotebookCellHeader
          cell={cell}
          cellNumber={cellNumber}
          totalCellCount={totalCellCount}
        />
      </summary>
      <NotebookCellContent cell={cell} />
    </details>
  );
}

function NotebookCellHeader({
  cell,
  cellNumber,
  totalCellCount,
}: {
  cell: NotebookCell;
  cellNumber: number;
  totalCellCount: number;
}): ReactElement {
  const intl = useIntl();
  const title = getNotebookCellTitle(intl, cell, cellNumber);

  return (
    <>
      <div className="flex min-w-0 items-center gap-2">
        <ChevronIcon className="icon-2xs shrink-0 -rotate-90 text-token-text-tertiary transition-transform duration-300 group-open/notebook-cell:rotate-0" />
        <div
          className="min-w-0 truncate text-sm font-medium text-token-text-primary"
          title={title}
        >
          {title}
        </div>
        <span className="shrink-0 text-xs text-token-text-tertiary">
          <FormattedMessage
            id="notebookPreview.cellPosition"
            defaultMessage="Cell {cellNumber} of {totalCellCount}"
            description="Position label for a rendered notebook cell"
            values={{ cellNumber, totalCellCount }}
          />
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-token-text-tertiary">
        {cell.cellType === "code" && cell.executionCount != null ? (
          <span className="tabular-nums">
            <FormattedMessage
              id="notebookPreview.executionCount"
              defaultMessage="Run {executionCount}"
              description="Execution count label for a rendered notebook code cell"
              values={{ executionCount: cell.executionCount }}
            />
          </span>
        ) : null}
        {cell.cellType === "code" ? (
          <span
            aria-hidden={true}
            className="pointer-events-none inline-flex opacity-0 transition-opacity duration-150 group-focus-within/notebook-cell:opacity-60 group-hover/notebook-cell:opacity-60"
            title={intl.formatMessage({
              id: "notebookPreview.runCellDisabledTooltip",
              defaultMessage: "Running is disabled in read-only preview",
              description:
                "Tooltip for a disabled per-cell run affordance in the read-only notebook preview",
            })}
          >
            <PlayOutlineIcon className="icon-2xs" />
          </span>
        ) : null}
      </div>
    </>
  );
}

function NotebookCellContent({ cell }: { cell: NotebookCell }): ReactElement {
  if (cell.cellType === "markdown") {
    return (
      <div className="px-4 py-3">
        {cell.source.trim().length === 0 ? (
          <NotebookEmptyState>
            <FormattedMessage
              id="notebookPreview.emptyMarkdownCell"
              defaultMessage="Empty Markdown cell"
              description="Empty state shown for a Markdown notebook cell without source"
            />
          </NotebookEmptyState>
        ) : (
          <PullRequestDescriptionMarkdown
            allowBasicHtml={true}
            className="text-size-chat"
          >
            {cell.source}
          </PullRequestDescriptionMarkdown>
        )}
      </div>
    );
  }

  if (cell.cellType === "raw") {
    return (
      <div className="px-4 py-3">
        {cell.source.trim().length === 0 ? (
          <NotebookEmptyState>
            <FormattedMessage
              id="notebookPreview.emptyRawCell"
              defaultMessage="Empty raw cell"
              description="Empty state shown for a raw notebook cell without source"
            />
          </NotebookEmptyState>
        ) : (
          <CodeSnippet
            content={cell.source}
            language="text"
            shouldWrapCode={true}
            title={
              <FormattedMessage
                id="notebookPreview.rawCodeTitle"
                defaultMessage="Raw"
                description="Code snippet title for a raw notebook cell"
              />
            }
            wrapperClassName="shadow-none"
          />
        )}
      </div>
    );
  }

  const descriptionMarkdown = cell.descriptionMarkdown?.trim() ?? "";
  const hasSource = cell.source.trim().length > 0;

  return (
    <>
      <div className="px-4 py-3">
        {descriptionMarkdown.length > 0 ? (
          <PullRequestDescriptionMarkdown
            allowBasicHtml={true}
            className="text-size-chat"
          >
            {descriptionMarkdown}
          </PullRequestDescriptionMarkdown>
        ) : null}
        {hasSource ? (
          descriptionMarkdown.length > 0 ? (
            <NotebookCodeDisclosure code={cell.source} />
          ) : (
            <PythonCodeSnippet code={cell.source} />
          )
        ) : (
          <NotebookEmptyState>
            <FormattedMessage
              id="notebookPreview.emptyCodeCell"
              defaultMessage="Empty code cell"
              description="Empty state shown for a code notebook cell without source"
            />
          </NotebookEmptyState>
        )}
      </div>
      {cell.outputs.length > 0 ? (
        <div className="bg-token-main-surface-secondary/15 border-t border-token-border-light px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex flex-col gap-3">
            {cell.outputs.map((output, index) => (
              <NotebookOutputView key={index} output={output} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

function NotebookCodeDisclosure({ code }: { code: string }): ReactElement {
  return (
    <details className="group/code mt-3 border-t border-token-border-light pt-2">
      <summary className="flex cursor-interaction list-none items-center gap-2 rounded-md py-1 text-left text-xs font-medium text-token-text-tertiary transition-colors hover:text-token-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-text-tertiary [&::-webkit-details-marker]:hidden">
        <ChevronIcon className="icon-2xs shrink-0 -rotate-90 transition-transform duration-300 group-open/code:rotate-0" />
        <CodeIcon className="icon-2xs shrink-0" />
        <span>
          <FormattedMessage
            id="notebookPreview.codeDisclosure"
            defaultMessage="Code"
            description="Disclosure label for notebook cell source code"
          />
        </span>
      </summary>
      <div className="mt-2">
        <PythonCodeSnippet code={code} />
      </div>
    </details>
  );
}

function PythonCodeSnippet({ code }: { code: string }): ReactElement {
  return (
    <CodeSnippet
      content={code}
      language="python"
      shouldWrapCode={true}
      title={
        <FormattedMessage
          id="notebookPreview.pythonCodeTitle"
          defaultMessage="Python"
          description="Code snippet title for a Python notebook cell"
        />
      }
      wrapperClassName="shadow-none"
    />
  );
}

function NotebookOutputView({
  output,
}: {
  output: NotebookOutput;
}): ReactElement {
  const intl = useIntl();

  switch (output.type) {
    case "image": {
      const altText = intl.formatMessage(
        {
          id: "notebookPreview.imageOutputAlt",
          defaultMessage: "Notebook output {outputNumber}",
          description:
            "Alt text for an image output rendered in a notebook artifact preview",
        },
        { outputNumber: output.outputNumber },
      );
      return (
        <div className="overflow-auto rounded-md bg-token-main-surface-primary/40 p-2">
          <img
            alt={altText}
            className="max-h-[640px] max-w-full"
            src={output.dataUrl}
          />
        </div>
      );
    }

    case "html":
      return (
        <div>
          <iframe
            className="h-72 w-full rounded-md bg-token-main-surface-primary"
            sandbox=""
            srcDoc={createNotebookHtmlSrcDoc(output.html)}
            title={intl.formatMessage({
              id: "notebookPreview.htmlOutputTitle",
              defaultMessage: "Notebook HTML output",
              description: "Title for a sandboxed notebook HTML output frame",
            })}
          />
          <RawOutputDisclosure className="mt-2">
            {output.html}
          </RawOutputDisclosure>
        </div>
      );

    case "markdown":
      return (
        <div className="rounded-md bg-token-main-surface-primary/40 px-3 py-2">
          <PullRequestDescriptionMarkdown
            allowBasicHtml={true}
            className="text-size-chat"
          >
            {output.markdown}
          </PullRequestDescriptionMarkdown>
        </div>
      );

    case "json":
      return (
        <NotebookTextOutputView
          language="json"
          rawText={output.text}
          summaryMarkdown={output.summaryMarkdown}
        />
      );

    case "error":
      return <NotebookErrorOutputView output={output} />;

    case "stream":
    case "text":
      return (
        <NotebookTextOutputView
          rawText={output.text}
          summaryMarkdown={output.summaryMarkdown}
        />
      );
  }
}

function NotebookTextOutputView({
  language,
  rawText,
  summaryMarkdown,
}: {
  language?: string;
  rawText: string;
  summaryMarkdown: string | null;
}): ReactElement {
  if (summaryMarkdown != null) {
    return (
      <div className="rounded-md bg-token-main-surface-primary/40 p-3">
        <PullRequestDescriptionMarkdown
          allowBasicHtml={true}
          className="text-size-chat"
        >
          {summaryMarkdown}
        </PullRequestDescriptionMarkdown>
        <RawOutputDisclosure className="mt-2">{rawText}</RawOutputDisclosure>
      </div>
    );
  }

  if (language != null) {
    return (
      <CodeSnippet
        content={rawText}
        language={language}
        shouldWrapCode={true}
        showActionBar={false}
        wrapperClassName="shadow-none"
      />
    );
  }

  return <RawTextBlock>{rawText}</RawTextBlock>;
}

function NotebookErrorOutputView({
  output,
}: {
  output: NotebookErrorOutput;
}): ReactElement {
  const rawText = getNotebookErrorRawText(output);

  return (
    <div className="rounded-md border border-token-charts-red/30 bg-token-charts-red/5 p-3">
      {output.summaryMarkdown == null ? (
        <div className="text-sm font-medium text-token-charts-red">
          {output.evalue.length > 0 ? (
            <FormattedMessage
              id="notebookPreview.errorOutput"
              defaultMessage="{name}: {message}"
              description="Notebook error output label with error name and message"
              values={{ message: output.evalue, name: output.ename }}
            />
          ) : (
            output.ename
          )}
        </div>
      ) : (
        <PullRequestDescriptionMarkdown
          allowBasicHtml={true}
          className="text-size-chat"
        >
          {output.summaryMarkdown}
        </PullRequestDescriptionMarkdown>
      )}
      {rawText.trim().length > 0 ? (
        <RawOutputDisclosure className="mt-2">{rawText}</RawOutputDisclosure>
      ) : null}
    </div>
  );
}

function RawOutputDisclosure({
  children,
  className,
}: {
  children: string;
  className?: string;
}): ReactElement {
  return (
    <details className={className}>
      <summary className="cursor-interaction text-xs font-medium text-token-text-tertiary marker:text-token-text-tertiary">
        <FormattedMessage
          id="notebookPreview.rawOutputDisclosure"
          defaultMessage="Raw output"
          description="Disclosure label for a notebook cell's raw output"
        />
      </summary>
      <RawTextBlock className="mt-2">{children}</RawTextBlock>
    </details>
  );
}

function RawTextBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}): ReactElement {
  return (
    <pre
      className={classNames(
        "overflow-auto rounded-md bg-token-text-code-block-background/20 p-3 font-mono text-xs whitespace-pre-wrap text-token-text-primary",
        className,
      )}
    >
      {children}
    </pre>
  );
}

function NotebookEmptyState({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <div className="rounded-md border border-token-border-light px-3 py-2 text-sm text-token-text-tertiary">
      {children}
    </div>
  );
}

function ReadOnlyBadge(): ReactElement {
  return (
    <span className="bg-token-main-surface-secondary/30 inline-flex h-7 shrink-0 items-center rounded-full border border-token-border-light px-2 text-xs font-medium text-token-text-tertiary">
      <FormattedMessage
        id="notebookPreview.readOnlyBadge"
        defaultMessage="Read only"
        description="Badge shown in the read-only notebook artifact preview"
      />
    </span>
  );
}

function DisabledNotebookAction({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}): ReactElement {
  return (
    <button
      aria-disabled={true}
      className="inline-flex h-7 shrink-0 cursor-default items-center gap-1 rounded-md px-2 text-xs font-medium text-token-text-tertiary/70"
      disabled={true}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}

function parseNotebookContents(contentsBase64: string): NotebookParseResult {
  try {
    const decodedJson = new TextDecoder().decode(
      decodeBase64Bytes(contentsBase64),
    );
    return {
      document: parseNotebookDocument(JSON.parse(decodedJson)),
      status: "ready",
    };
  } catch {
    return { status: "error" };
  }
}

function decodeBase64Bytes(contentsBase64: string): Uint8Array {
  const binaryContents = atob(contentsBase64);
  const bytes = new Uint8Array(binaryContents.length);
  for (let index = 0; index < binaryContents.length; index += 1) {
    bytes[index] = binaryContents.charCodeAt(index);
  }
  return bytes;
}

function parseNotebookDocument(value: unknown): ParsedNotebookDocument {
  if (!isRecord(value) || !Array.isArray(value.cells)) {
    throw Error("Notebook must be a JSON object with a cells array");
  }

  const metadata = isRecord(value.metadata) ? value.metadata : undefined;

  return {
    cells: value.cells.map(parseNotebookCell),
    title: getDirectStringField(metadata, "title"),
  };
}

function parseNotebookCell(value: unknown): NotebookCell {
  if (!isRecord(value) || typeof value.cell_type !== "string") {
    throw Error("Notebook cell must be a JSON object with a cell_type");
  }

  const source = coerceNotebookText(value.source) ?? "";
  const id = getDirectStringField(value, "id");
  const metadata = isRecord(value.metadata) ? value.metadata : undefined;
  const title = getNotebookMetadataText(metadata, NOTEBOOK_TITLE_METADATA_KEYS);

  switch (value.cell_type) {
    case "code":
      return {
        cellType: "code",
        descriptionMarkdown: getNotebookMetadataText(
          metadata,
          NOTEBOOK_CODE_DESCRIPTION_METADATA_KEYS,
        ),
        executionCount: getNullableIntegerField(value, "execution_count"),
        id,
        outputs: Array.isArray(value.outputs)
          ? value.outputs.flatMap((output, index) =>
              parseNotebookOutput(
                output,
                index,
                getNotebookOutputSummaryMarkdown(metadata, index),
              ),
            )
          : [],
        source,
        title,
      };

    case "markdown":
      return { cellType: "markdown", id, source, title };

    case "raw":
    default:
      return { cellType: "raw", id, source, title };
  }
}

function parseNotebookOutput(
  value: unknown,
  outputIndex: number,
  summaryMarkdown: string | null,
): NotebookOutput[] {
  if (!isRecord(value)) return [];

  switch (value.output_type) {
    case "stream": {
      const text = coerceNotebookText(value.text);
      return text == null
        ? []
        : [
            {
              name: getDirectStringField(value, "name") ?? "stdout",
              summaryMarkdown,
              text,
              type: "stream",
            },
          ];
    }

    case "error":
      return [
        {
          ename: getDirectStringField(value, "ename") ?? "Error",
          evalue: getDirectStringField(value, "evalue") ?? "",
          summaryMarkdown,
          traceback: coerceNotebookText(value.traceback) ?? "",
          type: "error",
        },
      ];

    case "display_data":
    case "execute_result":
      return parseDisplayDataOutput(value.data, outputIndex, summaryMarkdown);

    default:
      return [];
  }
}

function parseDisplayDataOutput(
  data: unknown,
  outputIndex: number,
  summaryMarkdown: string | null,
): NotebookOutput[] {
  if (!isRecord(data)) return [];

  const imageOutput = parseDisplayImageOutput(data, outputIndex);
  if (imageOutput != null) return [imageOutput];

  const html = coerceNotebookText(data["text/html"]);
  if (html != null && html.trim().length > 0) return [{ html, type: "html" }];

  const markdown = coerceNotebookText(data["text/markdown"]);
  if (markdown != null && markdown.trim().length > 0) {
    return [{ markdown, type: "markdown" }];
  }

  const plainText = coerceNotebookText(data["text/plain"]);
  if (plainText != null) {
    return [{ summaryMarkdown, text: plainText, type: "text" }];
  }

  const jsonData =
    data["application/json"] ?? data["application/vnd.vega.v5+json"];
  return jsonData == null
    ? []
    : [
        {
          summaryMarkdown,
          text: JSON.stringify(jsonData, null, 2),
          type: "json",
        },
      ];
}

function parseDisplayImageOutput(
  data: Record<string, unknown>,
  outputIndex: number,
): NotebookImageOutput | null {
  const pngData = coerceNotebookText(data["image/png"]);
  if (pngData != null) {
    return {
      dataUrl: `data:image/png;base64,${pngData.replaceAll(/\s/g, "")}`,
      outputNumber: outputIndex + 1,
      type: "image",
    };
  }

  const jpegData = coerceNotebookText(data["image/jpeg"]);
  if (jpegData != null) {
    return {
      dataUrl: `data:image/jpeg;base64,${jpegData.replaceAll(/\s/g, "")}`,
      outputNumber: outputIndex + 1,
      type: "image",
    };
  }

  const svgData = coerceNotebookText(data["image/svg+xml"]);
  return svgData == null
    ? null
    : {
        dataUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          svgData,
        )}`,
        outputNumber: outputIndex + 1,
        type: "image",
      };
}

function getNotebookMetadataText(
  metadata: Record<string, unknown> | undefined,
  keys: readonly string[],
): string | null {
  for (const metadataContainer of getNotebookMetadataContainers(metadata)) {
    for (const key of keys) {
      const text = coerceNotebookText(metadataContainer[key]);
      if (text != null && text.trim().length > 0) return text;
    }
  }
  return null;
}

function getNotebookOutputSummaryMarkdown(
  metadata: Record<string, unknown> | undefined,
  outputIndex: number,
): string | null {
  for (const metadataContainer of getNotebookMetadataContainers(metadata)) {
    const summaries = metadataContainer.outputSummaries;
    if (!Array.isArray(summaries)) continue;
    const summary = summaries[outputIndex];
    if (!isRecord(summary)) continue;

    const summaryMarkdown = coerceNotebookText(summary.summaryMarkdown);
    if (summaryMarkdown != null && summaryMarkdown.trim().length > 0) {
      return summaryMarkdown;
    }
  }
  return null;
}

function getNotebookMetadataContainers(
  metadata: Record<string, unknown> | undefined,
): Record<string, unknown>[] {
  if (metadata == null) return [];

  return [
    ...NOTEBOOK_METADATA_NAMESPACES.flatMap((namespace) => {
      const namespacedMetadata = metadata[namespace];
      return isRecord(namespacedMetadata) ? [namespacedMetadata] : [];
    }),
    metadata,
  ];
}

function getDirectStringField(
  value: Record<string, unknown> | undefined,
  key: string,
): string | null {
  const field = value?.[key];
  return typeof field === "string" ? field : null;
}

function getNullableIntegerField(
  value: Record<string, unknown>,
  key: string,
): number | null {
  const field = value[key];
  return typeof field === "number" && Number.isInteger(field) ? field : null;
}

function coerceNotebookText(value: unknown): string | null {
  if (typeof value === "string") return value;
  return Array.isArray(value) && value.every((item) => typeof item === "string")
    ? value.join("")
    : null;
}

function createNotebookHtmlSrcDoc(html: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${NOTEBOOK_HTML_CSP}"><meta name="color-scheme" content="light dark"><base target="_blank"><style>html,body{margin:0;background:transparent;color:CanvasText;font:13px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}body{padding:12px;}img,svg,canvas,video{max-width:100%;height:auto;}table{border-collapse:collapse;}th,td{border:1px solid color-mix(in srgb, CanvasText 18%, transparent);padding:4px 6px;}</style></head><body>${html}</body></html>`;
}

function getNotebookErrorRawText(output: NotebookErrorOutput): string {
  const headline = `${output.ename}: ${output.evalue}`.trim();
  return output.traceback.trim().length === 0
    ? headline
    : `${headline}\n${output.traceback}`;
}

function getNotebookCellTitle(
  intl: IntlFormatter,
  cell: NotebookCell,
  cellNumber: number,
): string {
  const explicitTitle = cell.title?.trim();
  if (explicitTitle != null && explicitTitle.length > 0) return explicitTitle;

  switch (cell.cellType) {
    case "markdown":
      return (
        getMarkdownHeadingTitle(cell.source) ??
        intl.formatMessage(
          {
            id: "notebookPreview.markdownCellTitle",
            defaultMessage: "Markdown cell {cellNumber}",
            description:
              "Fallback title for a Markdown notebook cell without a heading",
          },
          { cellNumber },
        )
      );

    case "raw":
      return intl.formatMessage(
        {
          id: "notebookPreview.rawCellTitle",
          defaultMessage: "Raw cell {cellNumber}",
          description: "Fallback title for a raw notebook cell",
        },
        { cellNumber },
      );

    case "code": {
      const strippedDescription = stripMarkdownForTitle(
        cell.descriptionMarkdown ?? "",
      );
      return strippedDescription.length > 0
        ? truncateNotebookTitle(strippedDescription)
        : intl.formatMessage(
            {
              id: "notebookPreview.codeCellTitle",
              defaultMessage: "Code cell {cellNumber}",
              description:
                "Fallback title for a code notebook cell without a description",
            },
            { cellNumber },
          );
    }
  }
}

function getMarkdownHeadingTitle(source: string): string | null {
  const heading = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => /^#{1,6}\s+/.test(line));

  return heading == null
    ? null
    : truncateNotebookTitle(heading.replace(/^#{1,6}\s+/, ""));
}

function stripMarkdownForTitle(markdown: string): string {
  return markdown
    .replace(/`{1,3}([^`]+)`{1,3}/g, "$1")
    .replace(/\[(.*?)\]\([^)]*\)/g, "$1")
    .replace(/[*_~#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncateNotebookTitle(title: string): string {
  const trimmedTitle = title.trim();
  return trimmedTitle.length <= 80
    ? trimmedTitle
    : `${trimmedTitle.slice(0, 77).trimEnd()}…`;
}

function stripNotebookExtension(title: string): string {
  return title.replace(/\.ipynb$/i, "");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

export default NotebookPreviewPanel;
