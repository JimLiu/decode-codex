// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Aspect-ratio menu metadata for image resizing.
import { defineMessage } from "../vendor/react-intl";
import {
  AspectRatioSquareIcon,
  AspectRatioPortraitIcon,
  AspectRatioStoryIcon,
  AspectRatioLandscapeIcon,
  AspectRatioWidescreenIcon,
} from "./aspect-ratio-icons";

export const ASPECT_RATIO_OPTIONS = [
  {
    icon: AspectRatioSquareIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.square",
      defaultMessage: "Square",
      description: "Label for the 1:1 image resize option.",
    }),
    ratio: "1:1",
  },
  {
    icon: AspectRatioPortraitIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.portrait",
      defaultMessage: "Portrait",
      description: "Label for the 3:4 image resize option.",
    }),
    ratio: "3:4",
  },
  {
    icon: AspectRatioStoryIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.story",
      defaultMessage: "Story",
      description: "Label for the 9:16 image resize option.",
    }),
    ratio: "9:16",
  },
  {
    icon: AspectRatioLandscapeIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.landscape",
      defaultMessage: "Landscape",
      description: "Label for the 4:3 image resize option.",
    }),
    ratio: "4:3",
  },
  {
    icon: AspectRatioWidescreenIcon,
    label: defineMessage({
      id: "imageSidePanel.aspectRatio.widescreen",
      defaultMessage: "Widescreen",
      description: "Label for the 16:9 image resize option.",
    }),
    ratio: "16:9",
  },
];
