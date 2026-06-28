// Restored from ref/webview/assets/command-execution-command-OqCVdN_Y.js
// command-execution-command-OqCVdN_Y chunk restored from the Codex webview bundle.
type CommandAction = {
  command?: string | null;
};

type CommandExecution = {
  command: string;
  commandActions: Array<CommandAction | null | undefined>;
};

const SHELL_COMMAND_RE =
  /^(?:.*[/\\])?(?:bash|cmd(?:\.exe)?|fish|powershell(?:\.exe)?|pwsh(?:\.exe)?|sh|zsh)(?:\s|$)/iu;

export function commandExecutionCommand(execution: CommandExecution): string {
  for (
    let index = execution.commandActions.length - 1;
    index >= 0;
    index -= 1
  ) {
    const command = execution.commandActions[index]?.command?.trim() ?? "";
    if (command.length > 0 && !isShellLauncher(command)) {
      return command;
    }
  }

  const command = execution.command.trim();
  return isShellLauncher(command) ? "" : command;
}

function isShellLauncher(command: string): boolean {
  return SHELL_COMMAND_RE.test(command);
}
