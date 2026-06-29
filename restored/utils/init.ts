// Restored from ref/webview/assets/init-DU5j7PcD.js
// init-B2r4ykR3 chunk restored from the Codex webview bundle.
type RangeDomainInitializer = {
  range(value?: unknown): {
    domain(value: unknown): unknown;
  };
};

export function init(
  this: RangeDomainInitializer,
  domain?: unknown,
  range?: unknown,
): RangeDomainInitializer {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
