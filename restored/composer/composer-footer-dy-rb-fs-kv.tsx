// Restored from ref/webview/assets/composer-footer-DyRbFsKV.js
// composer-footer-DyRbFsKV chunk restored from the Codex webview bundle.
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
const composerFooterClasses = {
  footer: "_footer_1s82e_2",
  labelSm: "_labelSm_1s82e_2",
  labelXs: "_labelXs_1s82e_2",
  secondaryLabel: "_secondaryLabel_1s82e_2",
  secondaryChevron: "_secondaryChevron_1s82e_2",
};
type ComposerFooterRootProps = ComponentPropsWithoutRef<"div"> & {
  responsive?: boolean;
};
type ComposerFooterLabelProps = ComponentPropsWithoutRef<"span"> & {
  collapse?: "sm" | "xs" | "secondary";
};
function ComposerFooterLabel({
  className,
  collapse,
  ...spanProps
}: ComposerFooterLabelProps) {
  let collapseClassName: string | undefined;
  switch (collapse) {
    case "sm":
      collapseClassName = composerFooterClasses.labelSm;
      break;
    case "xs":
      collapseClassName = composerFooterClasses.labelXs;
      break;
    case "secondary":
      collapseClassName = clsx(
        composerFooterClasses.labelSm,
        composerFooterClasses.secondaryLabel,
      );
      break;
  }
  return <span className={clsx(collapseClassName, className)} {...spanProps} />;
}
function ComposerFooterSecondaryChevron({
  className,
  ...spanProps
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={clsx(
        composerFooterClasses.secondaryChevron,
        "inline-flex",
        className,
      )}
      {...spanProps}
    />
  );
}
function ComposerFooterRoot({
  className,
  responsive,
  ...divProps
}: ComposerFooterRootProps) {
  const responsiveClassName =
    (responsive === undefined ? true : responsive) &&
    composerFooterClasses.footer;
  return (
    <div
      className={clsx("select-none", responsiveClassName, className)}
      {...divProps}
    />
  );
}
export {
  ComposerFooterLabel,
  ComposerFooterSecondaryChevron,
  ComposerFooterRoot,
};
