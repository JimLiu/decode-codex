// Restored from ref/webview/assets/artifact-annotation-comment-C4rLnC0m.js
// Also matches ref/webview/assets/artifact-annotation-comment-UAnLVQlX.js and ref/webview/assets/artifact-annotation-comment-BkpjMf2c.js.
// Also matches ref/webview/assets/artifact-annotation-comment-0LjA3Ml-.js.
import { once } from "../runtime/commonjs-interop";

type ArtifactAnnotationPayload = {
  annotationId?: string | null;
  artifactKind: string;
  body: string;
  label: string;
  target: {
    type: string;
    [key: string]: unknown;
  };
};
type ArtifactAnnotationComment = {
  content?: Array<{
    content_type: string;
    text: string;
  }>;
  localArtifactAnnotationContext?: {
    annotationId?: string | null;
    artifactKind?: string;
    label?: string;
    path?: string;
    title?: string;
  } | null;
  localArtifactAnnotationMetadata?: unknown;
  origin?: string;
  position: {
    line: number;
    path: string;
    side?: string;
  };
  type?: string;
  [key: string]: unknown;
};
export const initArtifactAnnotationCommentChunk = once(() => {});
function isArtifactAnnotationComment(comment: ArtifactAnnotationComment) {
  return comment.origin === "artifactAnnotation"
    ? true
    : comment.origin == null &&
        (comment.localArtifactAnnotationContext != null ||
          comment.localArtifactAnnotationMetadata != null);
}
function artifactAnnotationCommentPositionPath({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return `artifact:${title.trim() || path.trim() || "Selected artifact annotation"}`;
}
export function removeArtifactAnnotationCommentsForPath(
  comments: ArtifactAnnotationComment[],
  path: string,
) {
  const filteredComments = comments.filter(
    (comment) =>
      !isArtifactAnnotationComment(comment) ||
      comment.localArtifactAnnotationContext?.path !== path,
  );
  return filteredComments.length === comments.length
    ? comments
    : filteredComments;
}
export function getRemovedArtifactAnnotationIds({
  currentComments,
  path,
  previousComments,
}: {
  currentComments: ArtifactAnnotationComment[];
  path: string;
  previousComments: ArtifactAnnotationComment[];
}) {
  const currentAnnotationIds = new Set<string>();
  for (const comment of getArtifactAnnotationCommentsForPath(
    currentComments,
    path,
  )) {
    const annotationId = comment.localArtifactAnnotationContext?.annotationId;
    if (annotationId != null) currentAnnotationIds.add(annotationId);
  }
  const removedAnnotationIds: string[] = [];
  for (const comment of getArtifactAnnotationCommentsForPath(
    previousComments,
    path,
  )) {
    const annotationId = comment.localArtifactAnnotationContext?.annotationId;
    if (annotationId != null && !currentAnnotationIds.has(annotationId)) {
      removedAnnotationIds.push(annotationId);
    }
  }
  return removedAnnotationIds;
}
export function getArtifactAnnotationCommentsForPath(
  comments: ArtifactAnnotationComment[],
  path: string,
) {
  return comments.filter(
    (comment) =>
      isArtifactAnnotationComment(comment) &&
      comment.localArtifactAnnotationContext?.path === path,
  );
}
export function getNextArtifactAnnotationLine(
  comments: ArtifactAnnotationComment[],
) {
  return Math.max(0, ...comments.map((comment) => comment.position.line)) + 1;
}
export function createArtifactAnnotationComment({
  line,
  path,
  payload,
  title,
}: {
  line: number;
  path: string;
  payload: ArtifactAnnotationPayload;
  title: string;
}) {
  switch (payload.target.type) {
    case "presentation-element-selection":
    case "presentation-region":
    case "workbook-floating-element":
    case "workbook-range":
      return {
        type: "comment",
        content: [
          {
            content_type: "text",
            text: payload.body,
          },
        ],
        position: {
          side: "right",
          path: artifactAnnotationCommentPositionPath({
            path,
            title,
          }),
          line,
        },
        localArtifactAnnotationContext: {
          ...(payload.annotationId == null
            ? {}
            : {
                annotationId: payload.annotationId,
              }),
          artifactKind: payload.artifactKind,
          path,
          title,
          label: payload.label,
        },
        localArtifactAnnotationMetadata: {
          target: payload.target,
        },
        origin: "artifactAnnotation",
      };
  }
}
