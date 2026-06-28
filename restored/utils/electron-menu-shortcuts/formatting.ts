// Restored from ref/webview/assets/electron-menu-shortcuts-j6UKqTX5.js
const KEYBINDING_LABEL_DEBOUNCE_MS = 1000;

const macChordLabelOverrides = new Map([
  ["LeftOption+RightOption", "⌥ + ⌥"],
  ["LeftAlt+RightAlt", "⌥ + ⌥"],
  ["LeftCommand+RightCommand", "⌘ + ⌘"],
  ["LeftCmd+RightCmd", "⌘ + ⌘"],
  ["LeftMeta+RightMeta", "⌘ + ⌘"],
  ["LeftShift+RightShift", "⇧ + ⇧"],
]);

function splitAcceleratorSequence(accelerator) {
  return accelerator.trim().split(/\s+/).filter(Boolean);
}

function isMacOSPlatform() {
  return typeof navigator > "u"
    ? false
    : (navigator.platform ?? "").startsWith("Mac");
}

function isLinuxPlatform() {
  return typeof navigator > "u"
    ? false
    : (navigator.platform ?? "").startsWith("Linux");
}

function formatAccelerator(
  accelerator,
  isMacOS = isMacOSPlatform(),
  isLinux = !isMacOS && isLinuxPlatform(),
) {
  return splitAcceleratorSequence(accelerator)
    .map((item) => formatAcceleratorChord(item, isMacOS, isLinux))
    .join(" ");
}

function formatAcceleratorChord(acceleratorChord, isMacOS, isLinux) {
  const macOverrideLabel = macChordLabelOverrides.get(acceleratorChord);
  if (isMacOS && macOverrideLabel != null) return macOverrideLabel;

  const chordParts = acceleratorChord.split("+").filter(Boolean);
  const modifiers = new Set();
  let keyName = null;

  for (const chordPart of chordParts) {
    switch (chordPart) {
      case "CmdOrCtrl":
        modifiers.add(isMacOS ? "Command" : "Ctrl");
        break;
      case "Command":
      case "Cmd":
        modifiers.add(isMacOS ? "Command" : isLinux ? "Super" : "Win");
        break;
      case "Control":
      case "Ctrl":
        modifiers.add("Ctrl");
        break;
      case "Alt":
      case "Option":
        modifiers.add("Alt");
        break;
      case "Shift":
        modifiers.add("Shift");
        break;
      default:
        keyName = chordPart;
        break;
    }
  }

  if (isMacOS && keyName === "/" && modifiers.has("Shift")) {
    modifiers.delete("Shift");
    keyName = "?";
  }

  const formattedKey = formatKeyLabel(keyName, isMacOS);
  if (isMacOS) {
    const macModifierGlyphs = {
      Ctrl: "⌃",
      Alt: "⌥",
      Shift: "⇧",
      Command: "⌘",
    };
    return (
      ["Ctrl", "Alt", "Shift", "Command"]
        .filter((item) => modifiers.has(item))
        .map((item) => macModifierGlyphs[item])
        .join("") + formattedKey
    );
  }

  const normalizedModifiers = Array.from(modifiers).map((item) =>
    item === "Command" ? "Cmd" : item,
  );
  return [
    ...["Ctrl", "Alt", "Shift", "Cmd", "Super", "Win"].filter((item) =>
      normalizedModifiers.includes(item),
    ),
    formattedKey,
  ]
    .filter(Boolean)
    .join("+");
}

function formatKeyLabel(keyName, isMacOS) {
  if (keyName == null) return "";
  if (isMacOS && keyName === "Plus") return "+";
  switch (keyName) {
    case "Enter":
      return "⏎";
    case "LeftOption":
      return isMacOS ? "Left ⌥" : "Left Option";
    case "RightOption":
      return isMacOS ? "Right ⌥" : "Right Option";
    case "DoubleOption":
      return isMacOS ? "⌥ + ⌥" : "Double Option";
    case "LeftCommand":
      return isMacOS ? "Left ⌘" : "Left Command";
    case "DoubleCommand":
      return isMacOS ? "⌘ + ⌘" : "Double Command";
    case "RightCommand":
      return isMacOS ? "Right ⌘" : "Right Command";
    case "LeftControl":
      return isMacOS ? "Left ⌃" : "Left Control";
    case "RightControl":
      return isMacOS ? "Right ⌃" : "Right Control";
    case "LeftShift":
      return isMacOS ? "Left ⇧" : "Left Shift";
    case "RightShift":
      return isMacOS ? "Right ⇧" : "Right Shift";
    case "DoubleShift":
      return isMacOS ? "⇧ + ⇧" : "Double Shift";
    case "Fn":
      return "Fn";
    case "MouseBack":
      return "Mouse Back";
    case "MouseForward":
      return "Mouse Forward";
    default:
      return keyName;
  }
}

export {
  KEYBINDING_LABEL_DEBOUNCE_MS,
  formatAccelerator,
  isMacOSPlatform,
  splitAcceleratorSequence,
};
