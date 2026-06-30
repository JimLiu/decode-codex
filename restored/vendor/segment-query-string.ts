// Restored from ref/webview/assets/query-string-rxmEnTXH.js
// Segment query-string middleware restored from the Codex webview bundle.
import { helpersI } from "./segment-helpers";
import { gracefulDecodeURIComponent } from "../utils/graceful-decode-uri-component";

type SegmentQueryParams = Record<string, string | undefined>;
type SegmentQueryStringFilters = {
  aid?: RegExp;
  uid?: RegExp;
};
type SegmentQueryStringTarget = {
  options: {
    useQueryString?: false | SegmentQueryStringFilters;
  };
  identify(userId: string, traits: SegmentQueryParams): unknown;
  setAnonymousId(anonymousId: string): unknown;
  track(eventName: string, properties: SegmentQueryParams): unknown;
};

function pickPrefixedQueryParams(
  prefix: string,
  queryParams: SegmentQueryParams,
) {
  return Object.keys(queryParams).reduce(function (accumulator, queryKey) {
    if (queryKey.startsWith(prefix)) {
      var strippedKey = queryKey.substr(prefix.length);
      accumulator[strippedKey] = queryParams[queryKey];
    }
    return accumulator;
  }, {} as SegmentQueryParams);
}

function firstQueryValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function parseQueryParams(url: string) {
  var anchor = document.createElement("a");
  anchor.href = url;
  return anchor.search
    .slice(1)
    .split("&")
    .reduce(function (accumulator, current) {
      var keyValuePair = current.split("="),
        queryKey = keyValuePair[0],
        queryValue = keyValuePair[1];
      return (
        (accumulator[queryKey] = gracefulDecodeURIComponent(queryValue)),
        accumulator
      );
    }, {} as SegmentQueryParams);
}

export function QueryString(
  analytics: SegmentQueryStringTarget,
  url: string,
): Promise<unknown[]> {
  var queryParams = parseQueryParams(url),
    queuedCalls: unknown[] = [],
    userIdParam = queryParams.ajs_uid,
    eventNameParam = queryParams.ajs_event,
    anonymousIdParam = queryParams.ajs_aid,
    queryStringFilters = (
      helpersI(analytics.options.useQueryString)
        ? analytics.options.useQueryString
        : {}
    ) as SegmentQueryStringFilters,
    anonymousIdFilter = queryStringFilters.aid,
    anonymousIdPattern =
      anonymousIdFilter === undefined ? /.+/ : anonymousIdFilter,
    userIdFilter = queryStringFilters.uid,
    userIdPattern = userIdFilter === undefined ? /.+/ : userIdFilter;
  if (anonymousIdParam) {
    var anonymousId = firstQueryValue(queryParams.ajs_aid);
    anonymousId &&
      anonymousIdPattern.test(anonymousId) &&
      analytics.setAnonymousId(anonymousId);
  }
  if (userIdParam) {
    var userId = firstQueryValue(queryParams.ajs_uid);
    if (userId && userIdPattern.test(userId)) {
      var traits = pickPrefixedQueryParams("ajs_trait_", queryParams);
      queuedCalls.push(analytics.identify(userId, traits));
    }
  }
  if (eventNameParam) {
    var eventName = firstQueryValue(queryParams.ajs_event),
      properties = pickPrefixedQueryParams("ajs_prop_", queryParams);
    eventName && queuedCalls.push(analytics.track(eventName, properties));
  }
  return Promise.all(queuedCalls);
}

export { QueryString as queryString };
