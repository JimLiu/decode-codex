// Restored from ref/webview/assets/electron-menu-shortcuts-j6UKqTX5.js
const workspaceAndPanelCommandDefinitions = [
  {
    id: `openFolder`,
    titleIntlId: `codex.command.openFolder`,
    descriptionIntlId: `codex.commandDescription.openFolder`,
    commandMenuGroupKey: `workspace`,
    commandMenu: true,
    electron: {
      menuTitle: `Open Folder…`,
      menuTitleIntlId: `codex.commandMenuTitle.openFolder`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+O`,
        },
      ],
    },
  },
  {
    id: `toggleSidebar`,
    titleIntlId: `codex.command.toggleSidebar`,
    descriptionIntlId: `codex.commandDescription.toggleSidebar`,
    commandMenuGroupKey: `panels`,
    commandMenu: true,
    electron: {
      menuTitle: `Toggle Sidebar`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleSidebar`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+B`,
        },
      ],
    },
  },
  {
    id: `toggleBottomPanel`,
    titleIntlId: `codex.command.toggleBottomPanel`,
    descriptionIntlId: `codex.commandDescription.toggleBottomPanel`,
    commandMenuGroupKey: `panels`,
    commandMenu: true,
    electron: {
      menuTitle: `Toggle Bottom Panel`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleBottomPanel`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+J`,
        },
      ],
    },
  },
  {
    id: `toggleTerminal`,
    titleIntlId: `codex.command.toggleTerminal`,
    descriptionIntlId: `codex.commandDescription.toggleTerminal`,
    commandMenuGroupKey: `panels`,
    commandMenu: true,
    electron: {
      menuTitle: `Open Terminal`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleTerminal`,
      defaultKeybindings: [
        {
          key: "Control+`",
        },
      ],
    },
  },
  {
    id: `openBrowserTab`,
    titleIntlId: `codex.command.openBrowserTab`,
    descriptionIntlId: `codex.commandDescription.openBrowserTab`,
    commandMenuGroupKey: `panels`,
    commandMenu: true,
    electron: {
      menuTitle: `Open Browser Tab`,
      menuTitleIntlId: `codex.commandMenuTitle.openBrowserTab`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+T`,
        },
      ],
    },
  },
  {
    id: `toggleBrowserPanel`,
    titleIntlId: `codex.command.toggleBrowserPanel`,
    descriptionIntlId: `codex.commandDescription.toggleBrowserPanel`,
    commandMenuGroupKey: `panels`,
    commandMenu: true,
    electron: {
      menuTitle: `Toggle Browser Panel`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleBrowserPanel`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+B`,
        },
      ],
    },
  },
  {
    id: `openReviewTab`,
    titleIntlId: `codex.command.openReviewTab`,
    descriptionIntlId: `codex.commandDescription.openReviewTab`,
    availableIn: [`electron`, `browser`],
    shortcutScope: `app`,
    commandMenuGroupKey: `panels`,
    commandMenu: true,
    electron: {
      defaultKeybindings: [
        {
          key: `Ctrl+Shift+G`,
        },
      ],
    },
  },
  {
    id: `toggleSidePanel`,
    titleIntlId: `codex.command.toggleSidePanel`,
    descriptionIntlId: `codex.commandDescription.toggleSidePanel`,
    commandMenuGroupKey: `panels`,
    commandMenu: true,
    electron: {
      menuTitle: `Toggle Side Panel`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleSidePanel`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+B`,
        },
      ],
    },
  },
  {
    id: `toggleMaximizeSidePanel`,
    titleIntlId: `codex.command.toggleMaximizeSidePanel`,
    descriptionIntlId: `codex.commandDescription.toggleMaximizeSidePanel`,
    shortcutScope: `app`,
  },
  {
    id: `findInThread`,
    titleIntlId: `codex.command.findInThread`,
    descriptionIntlId: `codex.commandDescription.findInThread`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      menuTitle: `Find`,
      menuTitleIntlId: `codex.commandMenuTitle.findInThread`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+F`,
        },
      ],
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Command+F`,
          },
        ],
        default: [
          {
            key: `Ctrl+F`,
          },
        ],
      },
    },
  },
  {
    id: `focusBrowserAddressBar`,
    titleIntlId: `codex.command.focusBrowserAddressBar`,
    descriptionIntlId: `codex.commandDescription.focusBrowserAddressBar`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      menuTitle: `Focus Browser Address Bar`,
      menuTitleIntlId: `codex.commandMenuTitle.focusBrowserAddressBar`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+L`,
        },
      ],
    },
  },
  {
    id: `navigateBrowserBack`,
    titleIntlId: `codex.command.navigateBrowserBack`,
    descriptionIntlId: `codex.commandDescription.navigateBrowserBack`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    electron: {
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Command+Left`,
          },
        ],
        default: [
          {
            key: `Alt+Left`,
          },
        ],
      },
    },
  },
  {
    id: `navigateBrowserForward`,
    titleIntlId: `codex.command.navigateBrowserForward`,
    descriptionIntlId: `codex.commandDescription.navigateBrowserForward`,
    availableIn: [`electron`],
    shortcutScope: `app`,
    electron: {
      platformDefaultKeybindings: {
        macOS: [
          {
            key: `Command+Right`,
          },
        ],
        default: [
          {
            key: `Alt+Right`,
          },
        ],
      },
    },
  },
  {
    id: `navigateBack`,
    titleIntlId: `codex.command.navigateBack`,
    descriptionIntlId: `codex.commandDescription.navigateBack`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      menuTitle: `Back`,
      menuTitleIntlId: `codex.commandMenuTitle.navigateBack`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+[`,
        },
        {
          key: `MouseBack`,
        },
      ],
    },
  },
  {
    id: `navigateForward`,
    titleIntlId: `codex.command.navigateForward`,
    descriptionIntlId: `codex.commandDescription.navigateForward`,
    commandMenuGroupKey: `navigation`,
    commandMenu: true,
    electron: {
      menuTitle: `Forward`,
      menuTitleIntlId: `codex.commandMenuTitle.navigateForward`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+]`,
        },
        {
          key: `MouseForward`,
        },
      ],
    },
  },
];

export { workspaceAndPanelCommandDefinitions };
