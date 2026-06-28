// Restored from ref/webview/assets/electron-menu-shortcuts-j6UKqTX5.js
const navigationAndSettingsCommandDefinitions = [
  {
    id: `previousTab`,
    titleIntlId: `codex.command.previousTab`,
    descriptionIntlId: `codex.commandDescription.previousTab`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    allowsKeyRepeat: true,
    commandMenuGroupKey: `navigation`,
    electron: {
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+[`,
        },
      ],
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Ctrl+Shift+Tab`,
          },
          {
            key: `Command+Shift+[`,
          },
          {
            key: `Command+Alt+Left`,
          },
        ],
        default: [
          {
            key: `Ctrl+Shift+Tab`,
          },
          {
            key: `Ctrl+Shift+[`,
          },
          {
            key: `Ctrl+PageUp`,
          },
        ],
      },
    },
  },
  {
    id: `previousThread`,
    titleIntlId: `codex.command.previousThread`,
    descriptionIntlId: `codex.commandDescription.previousThread`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      menuTitle: `Previous Chat`,
      menuTitleIntlId: `codex.commandMenuTitle.previousThread`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+[`,
        },
      ],
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Command+Shift+[`,
          },
          {
            key: `Command+Alt+Left`,
          },
        ],
        default: [
          {
            key: `Ctrl+Shift+[`,
          },
          {
            key: `Ctrl+PageUp`,
          },
        ],
      },
    },
  },
  {
    id: `previousRecentThread`,
    titleIntlId: `codex.command.previousRecentThread`,
    descriptionIntlId: `codex.commandDescription.previousRecentThread`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    allowsKeyRepeat: true,
    commandMenuGroupKey: `navigation`,
    electron: {
      defaultKeybindings: [
        {
          key: `Ctrl+Shift+Tab`,
        },
      ],
    },
  },
  {
    id: `nextTab`,
    titleIntlId: `codex.command.nextTab`,
    descriptionIntlId: `codex.commandDescription.nextTab`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    allowsKeyRepeat: true,
    commandMenuGroupKey: `navigation`,
    electron: {
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+]`,
        },
      ],
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Ctrl+Tab`,
          },
          {
            key: `Command+Shift+]`,
          },
          {
            key: `Command+Alt+Right`,
          },
        ],
        default: [
          {
            key: `Ctrl+Tab`,
          },
          {
            key: `Ctrl+Shift+]`,
          },
          {
            key: `Ctrl+PageDown`,
          },
        ],
      },
    },
  },
  {
    id: `nextThread`,
    titleIntlId: `codex.command.nextThread`,
    descriptionIntlId: `codex.commandDescription.nextThread`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      menuTitle: `Next Chat`,
      menuTitleIntlId: `codex.commandMenuTitle.nextThread`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+]`,
        },
      ],
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Command+Shift+]`,
          },
          {
            key: `Command+Alt+Right`,
          },
        ],
        default: [
          {
            key: `Ctrl+Shift+]`,
          },
          {
            key: `Ctrl+PageDown`,
          },
        ],
      },
    },
  },
  {
    id: `nextRecentThread`,
    titleIntlId: `codex.command.nextRecentThread`,
    descriptionIntlId: `codex.commandDescription.nextRecentThread`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    allowsKeyRepeat: true,
    commandMenuGroupKey: `navigation`,
    electron: {
      defaultKeybindings: [
        {
          key: `Ctrl+Tab`,
        },
      ],
    },
  },
  {
    id: `switchToMode1`,
    titleIntlId: `codex.command.switchToMode1`,
    descriptionIntlId: `codex.commandDescription.switchToMode1`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Ctrl+1`,
          },
        ],
        default: [
          {
            key: `Alt+1`,
          },
        ],
      },
    },
  },
  {
    id: `switchToMode2`,
    titleIntlId: `codex.command.switchToMode2`,
    descriptionIntlId: `codex.commandDescription.switchToMode2`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Ctrl+2`,
          },
        ],
        default: [
          {
            key: `Alt+2`,
          },
        ],
      },
    },
  },
  {
    id: `settings`,
    titleIntlId: `codex.command.settings`,
    descriptionIntlId: `codex.commandDescription.settings`,
    commandMenuGroupKey: `app`,
    commandMenu: true,
    electron: {
      menuTitle: `Settings…`,
      menuTitleIntlId: `codex.commandMenuTitle.settings`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+,`,
        },
      ],
    },
  },
  {
    id: `mcpSettings`,
    titleIntlId: `codex.command.mcpSettings`,
    descriptionIntlId: `codex.commandDescription.mcpSettings`,
    commandMenuGroupKey: `configure`,
    commandMenu: true,
  },
  {
    id: `personalitySettings`,
    titleIntlId: `codex.command.personalitySettings`,
    descriptionIntlId: `codex.commandDescription.personalitySettings`,
    commandMenuGroupKey: `configure`,
    commandMenu: true,
  },
  {
    id: `keyboardShortcuts`,
    titleIntlId: `codex.command.keyboardShortcuts`,
    descriptionIntlId: `codex.commandDescription.keyboardShortcuts`,
    commandMenuGroupKey: `configure`,
    commandMenu: true,
  },
  {
    id: `showKeyboardShortcuts`,
    titleIntlId: `codex.command.showKeyboardShortcuts`,
    descriptionIntlId: `codex.commandDescription.showKeyboardShortcuts`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    electron: {
      menuTitle: `Keyboard Shortcuts`,
      menuTitleIntlId: `codex.commandMenuTitle.showKeyboardShortcuts`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+/`,
        },
      ],
    },
  },
  {
    id: `manageTasks`,
    titleIntlId: `codex.command.manageTasks`,
    descriptionIntlId: `codex.commandDescription.manageTasks`,
    commandMenuGroupKey: `app`,
    commandMenu: true,
  },
  {
    id: `openProcessManager`,
    titleIntlId: `codex.command.openProcessManager`,
    descriptionIntlId: `codex.commandDescription.openProcessManager`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    commandMenuGroupKey: `app`,
    commandMenu: true,
    electron: {
      menuTitle: `Process Manager`,
      menuTitleIntlId: `codex.commandMenuTitle.openProcessManager`,
      defaultKeybindings: [
        {
          key: `Ctrl+Alt+M`,
        },
      ],
    },
  },
  {
    id: `forceReloadSkills`,
    titleIntlId: `codex.command.forceReloadSkills`,
    descriptionIntlId: `codex.commandDescription.forceReloadSkills`,
    commandMenuGroupKey: `skills`,
    commandMenu: true,
  },
  {
    id: `installPrimaryRuntime`,
    titleIntlId: `codex.command.installPrimaryRuntime`,
    descriptionIntlId: `codex.commandDescription.installPrimaryRuntime`,
    commandMenuGroupKey: `configure`,
    commandMenu: true,
  },
  {
    id: `openSkills`,
    titleIntlId: `codex.command.openSkills`,
    descriptionIntlId: `codex.commandDescription.openSkills`,
    commandMenuGroupKey: `skills`,
    commandMenu: true,
  },
];

export { navigationAndSettingsCommandDefinitions };
