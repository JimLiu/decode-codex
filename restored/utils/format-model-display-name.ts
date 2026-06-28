// Restored from ref/webview/assets/format-model-display-name-CDASt7Bo.js
// Normalizes GPT/OAI model display-name casing while preserving whitespace.

export function formatModelDisplayName(modelName: string): string {
  return modelName.trimStart().toLowerCase().startsWith("gpt")
    ? modelName
        .split(/(\s+)/)
        .map((word) =>
          word.trim().length === 0
            ? word
            : word
                .split("-")
                .map((part, index) =>
                  part.toLowerCase() === "gpt"
                    ? "GPT"
                    : part.toLowerCase() === "oai"
                      ? "OAI"
                      : index > 0 && part.length > 0
                        ? `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`
                        : part,
                )
                .join("-"),
        )
        .join("")
    : modelName;
}
