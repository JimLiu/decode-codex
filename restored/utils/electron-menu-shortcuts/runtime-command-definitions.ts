// Restored from ref/webview/assets/electron-menu-shortcuts-j6UKqTX5.js
const electronOnlyCommandDefinitions = [
  {
    id: `hotkeyWindow`,
    titleIntlId: `codex.command.hotkeyWindow`,
    descriptionIntlId: `codex.commandDescription.hotkeyWindow`,
    shortcutScope: `os-global`,
  },
  {
    id: `globalDictationHold`,
    titleIntlId: `codex.command.globalDictationHold`,
    descriptionIntlId: `codex.commandDescription.globalDictationHold`,
    shortcutScope: `os-global`,
    allowsBareModifiers: true,
  },
  {
    id: `globalDictationToggle`,
    titleIntlId: `codex.command.globalDictationToggle`,
    descriptionIntlId: `codex.commandDescription.globalDictationToggle`,
    shortcutScope: `os-global`,
    allowsBareModifiers: true,
  },
  {
    id: `realtimeVoice`,
    titleIntlId: `codex.command.realtimeVoice`,
    descriptionIntlId: `codex.commandDescription.realtimeVoice`,
    shortcutScope: `os-global`,
    allowsBareModifiers: true,
  },
  {
    id: `copyConversationPath`,
    descriptionIntlId: `codex.commandDescription.copyConversationPath`,
    electron: {
      menuTitle: `Copy conversation path`,
      menuTitleIntlId: `codex.commandMenuTitle.copyConversationPath`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+Shift+C`,
        },
      ],
    },
  },
  {
    id: `copyDeeplink`,
    descriptionIntlId: `codex.commandDescription.copyDeeplink`,
    electron: {
      menuTitle: `Copy deeplink`,
      menuTitleIntlId: `codex.commandMenuTitle.copyDeeplink`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+L`,
        },
      ],
    },
  },
  {
    id: `copySessionId`,
    descriptionIntlId: `codex.commandDescription.copySessionId`,
    electron: {
      menuTitle: `Copy session id`,
      menuTitleIntlId: `codex.commandMenuTitle.copySessionId`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+C`,
        },
      ],
    },
  },
  {
    id: `copyWorkingDirectory`,
    descriptionIntlId: `codex.commandDescription.copyWorkingDirectory`,
    electron: {
      menuTitle: `Copy working directory`,
      menuTitleIntlId: `codex.commandMenuTitle.copyWorkingDirectory`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+C`,
        },
      ],
    },
  },
  {
    id: `closeTab`,
    descriptionIntlId: `codex.commandDescription.closeTab`,
    electron: {
      menuTitle: `Close Tab`,
      menuTitleIntlId: `codex.commandMenuTitle.closeTab`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+W`,
        },
      ],
      platformDefaultKeybindings: {
        default: [
          {
            key: `Ctrl+W`,
          },
          {
            key: `Ctrl+F4`,
          },
        ],
      },
    },
  },
  {
    id: `closeWindow`,
    descriptionIntlId: `codex.commandDescription.closeWindow`,
    electron: {
      menuTitle: `Close`,
      menuTitleIntlId: `codex.commandMenuTitle.closeWindow`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+W`,
        },
      ],
      platformDefaultKeybindings: {
        default: [
          {
            key: `Ctrl+W`,
          },
          {
            key: `Ctrl+F4`,
          },
        ],
      },
    },
  },
  {
    id: `reloadBrowserPage`,
    descriptionIntlId: `codex.commandDescription.reloadBrowserPage`,
    electron: {
      menuTitle: `Reload Browser Page`,
      menuTitleIntlId: `codex.commandMenuTitle.reloadBrowserPage`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+R`,
        },
      ],
    },
  },
  {
    id: `hardReloadBrowserPage`,
    descriptionIntlId: `codex.commandDescription.hardReloadBrowserPage`,
    electron: {
      menuTitle: `Force Reload Browser Page`,
      menuTitleIntlId: `codex.commandMenuTitle.hardReloadBrowserPage`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+R`,
        },
      ],
    },
  },
  {
    id: `newWindow`,
    descriptionIntlId: `codex.commandDescription.newWindow`,
    electron: {
      menuTitle: `New Window`,
      menuTitleIntlId: `codex.commandMenuTitle.newWindow`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+N`,
        },
      ],
    },
  },
  {
    id: `openCommandMenu`,
    descriptionIntlId: `codex.commandDescription.openCommandMenu`,
    electron: {
      menuTitle: `Open command menu`,
      menuTitleIntlId: `codex.commandMenuTitle.openCommandMenu`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+K`,
        },
        {
          key: `CmdOrCtrl+Shift+P`,
        },
      ],
    },
  },
  {
    id: `searchChats`,
    descriptionIntlId: `codex.commandDescription.searchChats`,
    electron: {
      menuTitle: `Search Chats…`,
      menuTitleIntlId: `codex.commandMenuTitle.searchChats`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+G`,
        },
      ],
    },
  },
  {
    id: `searchFiles`,
    descriptionIntlId: `codex.commandDescription.searchFiles`,
    electron: {
      menuTitle: `Search Files…`,
      menuTitleIntlId: `codex.commandMenuTitle.searchFiles`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+P`,
        },
      ],
    },
  },
  {
    id: `renameThread`,
    descriptionIntlId: `codex.commandDescription.renameThread`,
    electron: {
      menuTitle: `Rename chat`,
      menuTitleIntlId: `codex.commandMenuTitle.renameThread`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Alt+R`,
        },
      ],
    },
  },
  {
    id: `toggleFileTreePanel`,
    descriptionIntlId: `codex.commandDescription.toggleFileTreePanel`,
    electron: {
      menuTitle: `Toggle File Tree`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleFileTreePanel`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+E`,
        },
      ],
    },
  },
  {
    id: `toggleTraceRecording`,
    descriptionIntlId: `codex.commandDescription.toggleTraceRecording`,
    electron: {
      menuTitle: `Start Trace Recording`,
      menuTitleIntlId: `codex.commandMenuTitle.toggleTraceRecording`,
      defaultKeybindings: [
        {
          key: `CmdOrCtrl+Shift+S`,
        },
      ],
    },
  },
];

const vscodeOnlyCommandDefinitions = [
  {
    id: `implementTodo`,
    vscodeCommand: {
      title: `Implement with Codex`,
      enablement: `false`,
    },
  },
  {
    id: `openSidebar`,
    vscodeCommand: {
      title: `Open Codex Sidebar`,
      icon: {
        light: `resources/blossom-black.svg`,
        dark: `resources/blossom-white.svg`,
      },
    },
  },
  {
    id: `newCodexPanel`,
    vscodeCommand: {
      title: `New Codex Agent`,
      icon: `$(plus)`,
    },
  },
  {
    id: `addToThread`,
    vscodeCommand: {
      title: `Add to Codex Thread`,
    },
  },
  {
    id: `addFileToThread`,
    vscodeCommand: {
      title: `Add File to Codex Thread`,
    },
  },
  {
    id: `showLspMcpCliArgs`,
    vscodeCommand: {
      title: `Copy Codex CLI args for LSP MCP`,
    },
  },
  {
    id: `dumpNuxState`,
    vscodeCommand: {
      title: `Debug: print NUX state to console`,
      enablement: `chatgpt.sidebarView.visible`,
    },
  },
  {
    id: `resetNuxState`,
    vscodeCommand: {
      title: `Debug: reset NUX state`,
      enablement: `chatgpt.sidebarView.visible`,
    },
  },
];

export { electronOnlyCommandDefinitions, vscodeOnlyCommandDefinitions };
