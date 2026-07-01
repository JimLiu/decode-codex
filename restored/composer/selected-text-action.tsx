// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Floating action bar anchored to a text selection: add-to-chat, ask-in-side-chat,
// comment, and inline edit-instruction affordances.
import {
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type SVGProps,
} from "react";
import { Button } from "../ui/button";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  AddSelectionIcon,
  CommentIcon,
  SubmitEditIcon,
} from "../boundaries/onboarding-commons-externals.facade";

type SelectedTextActionMode =
  | "actions"
  | "actions-focused"
  | "edit"
  | "pending";

interface SelectedTextActionResume {
  mode?: SelectedTextActionMode;
  instruction?: string;
}

export interface SelectedTextActionProps {
  onAddSelectedText?: (text: string) => void;
  onCommentSelectedText?: () => void;
  onEditModeChange?: (isEditing: boolean) => void;
  onEditSelectedText?: (instruction: string) => Promise<string>;
  onOpenSideChat?: (text: string) => void;
  resume?: SelectedTextActionResume | null;
  selectedText: string;
}

function EditSelectionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.08331 4.58333C3.58331 4.33333 4.33331 3.33333 4.58331 2.08333C4.83331 3.33333 5.58331 4.33333 7.08331 4.58333C5.58331 4.83333 4.83331 5.83333 4.58331 7.08333C4.33331 5.83333 3.58331 4.83333 2.08331 4.58333Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
      />
      <path
        d="M4.71899 13.7692L4.32008 16.1627C4.26833 16.4732 4.24246 16.6284 4.29061 16.7407C4.33275 16.8389 4.41104 16.9172 4.50929 16.9594C4.62155 17.0075 4.77679 16.9816 5.08727 16.9299L7.48075 16.531C8.10675 16.4266 8.41975 16.3745 8.71178 16.2675C8.97095 16.1725 9.21732 16.0457 9.44524 15.89C9.70205 15.7146 9.92643 15.4902 10.3752 15.0415L10.3752 15.0415L16.6666 8.75C17.8172 7.59941 17.8172 5.73393 16.6666 4.58333C15.516 3.43274 13.6506 3.43274 12.5 4.58333L6.20852 10.8748C5.75977 11.3235 5.53539 11.5479 5.35995 11.8047C5.20425 12.0326 5.07746 12.279 4.9825 12.5382C4.87549 12.8302 4.82332 13.1432 4.71899 13.7692Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.33}
      />
      <path
        d="M12.0833 5.83333L15.4166 9.16667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.33}
      />
    </svg>
  );
}

function SideChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M3.165 10c0-3.51 3.024-6.418 6.835-6.418S16.835 6.49 16.835 10a6.138 6.138 0 0 1-1.388 3.877.667.667 0 0 0-.136.54c.095.508.23 1.003.384 1.487a12.883 12.883 0 0 1-1.823-.376l-.126-.022a.664.664 0 0 0-.369.076 7.145 7.145 0 0 1-3.377.837c-3.811 0-6.835-2.91-6.835-6.42Zm-1.33 0c0 4.314 3.692 7.749 8.165 7.749a8.487 8.487 0 0 0 3.766-.873c.92.242 1.865.393 2.86.455a.665.665 0 0 0 .661-.903l-.207-.565c-.162-.468-.3-.933-.402-1.402A7.45 7.45 0 0 0 18.165 10c0-4.315-3.692-7.748-8.165-7.748-4.473 0-8.165 3.433-8.165 7.748Z" />
      <path d="M10 6.335A.665.665 0 0 0 9.335 7v2.335L7 9.349l-.134.013a.665.665 0 0 0 0 1.303L7 10.68l2.335-.014V13a.665.665 0 0 0 1.33 0v-2.335L13 10.68a.665.665 0 0 0 0-1.33l-2.335-.014V7A.665.665 0 0 0 10 6.335Z" />
    </svg>
  );
}

function preventSelectionMouseDown(
  event: ReactMouseEvent<HTMLDivElement>,
): void {
  event.preventDefault();
}

export function SelectedTextAction({
  onAddSelectedText,
  onCommentSelectedText,
  onEditModeChange,
  onEditSelectedText,
  onOpenSideChat,
  resume,
  selectedText,
}: SelectedTextActionProps) {
  const intl = useIntl();
  const [editInstruction, setEditInstruction] = useState(
    resume?.mode === "edit" ? (resume.instruction ?? "") : "",
  );
  const [mode, setMode] = useState<SelectedTextActionMode>(
    resume?.mode ?? "actions",
  );

  if (mode === "pending") return null;

  if (mode === "edit" && onEditSelectedText != null) {
    const handleKeyDown = (event: ReactKeyboardEvent<HTMLFormElement>) => {
      event.stopPropagation();
      if (event.key === "Escape") {
        event.preventDefault();
        onEditModeChange?.(false);
        setMode("actions-focused");
      }
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (editInstruction.trim().length === 0) return;
      setMode("pending");
      void onEditSelectedText(editInstruction).then((result) => {
        if (result === "retry") {
          onEditModeChange?.(false);
          setMode("actions-focused");
        }
      });
    };
    const inputLabel = intl.formatMessage({
      id: "selectedTextOverlay.editInput",
      defaultMessage: "Edit instruction",
      description:
        "Accessible label for an instruction that edits selected text",
    });
    const inputPlaceholder = intl.formatMessage({
      id: "selectedTextOverlay.editPlaceholder",
      defaultMessage: "Describe the edit…",
      description: "Placeholder for an instruction that edits selected text",
    });
    const submitLabel = intl.formatMessage({
      id: "selectedTextOverlay.editSubmit",
      defaultMessage: "Submit edit instruction",
      description:
        "Accessible label for submitting an instruction to edit selected text",
    });
    return (
      <form
        className="pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-token-border bg-token-main-surface-primary p-1 pl-3.5 font-sans shadow-lg"
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}
      >
        <input
          aria-label={inputLabel}
          autoComplete="off"
          autoFocus
          className="min-w-0 flex-1 bg-transparent text-sm text-token-foreground outline-none placeholder:text-token-description-foreground"
          placeholder={inputPlaceholder}
          required
          value={editInstruction}
          onChange={(event) => setEditInstruction(event.target.value)}
        />
        <Button
          aria-label={submitLabel}
          color="primary"
          size="composerSm"
          type="submit"
          uniform
        >
          <SubmitEditIcon aria-hidden="true" className="icon-2xs" />
        </Button>
      </form>
    );
  }

  const addToChatButton =
    onAddSelectedText == null ? null : (
      <Button
        color="ghostActive"
        size="composerSm"
        onClick={() => {
          window.getSelection()?.removeAllRanges();
          onAddSelectedText(selectedText);
        }}
      >
        <AddSelectionIcon aria-hidden="true" className="icon-2xs" />
        <FormattedMessage
          id="selectedTextOverlay.addToCodex"
          defaultMessage="Add to chat"
          description="Button label for adding currently selected text from an overlay anchored to that selection to the chat"
        />
      </Button>
    );

  const sideChatButton =
    onOpenSideChat == null ? null : (
      <Button
        color="ghostActive"
        size="composerSm"
        onClick={() => {
          window.getSelection()?.removeAllRanges();
          onOpenSideChat(selectedText);
        }}
      >
        <SideChatIcon aria-hidden="true" className="icon-2xs" />
        <FormattedMessage
          id="selectedTextOverlay.askInSideChat"
          defaultMessage="Ask in side chat"
          description="Button label for asking about currently selected text in a side chat"
        />
      </Button>
    );

  const commentButton =
    onCommentSelectedText == null ? null : (
      <Button
        color="ghostActive"
        size="composerSm"
        onClick={() => {
          window.getSelection()?.removeAllRanges();
          onCommentSelectedText();
        }}
      >
        <CommentIcon aria-hidden="true" className="icon-2xs" />
        <FormattedMessage
          id="selectedTextOverlay.comment"
          defaultMessage="Comment"
          description="Button label for commenting on the currently selected text"
        />
      </Button>
    );

  const editButton =
    onEditSelectedText == null ? null : (
      <Button
        autoFocus={mode === "actions-focused"}
        color="ghostActive"
        size="composerSm"
        onClick={() => {
          onEditModeChange?.(true);
          setMode("edit");
        }}
      >
        <EditSelectionIcon aria-hidden="true" className="icon-2xs" />
        <FormattedMessage
          id="selectedTextOverlay.edit"
          defaultMessage="Edit"
          description="Button label for editing currently selected text with a model"
        />
      </Button>
    );

  return (
    <div
      className="pointer-events-auto flex w-fit max-w-full rounded-full border border-token-border/70 bg-token-dropdown-background/90 p-0.5 shadow-lg backdrop-blur-sm"
      onMouseDown={preventSelectionMouseDown}
    >
      {addToChatButton}
      {sideChatButton}
      {commentButton}
      {editButton}
    </div>
  );
}
