// Restored from ref/webview/assets/home-use-cases-data-hIxZSoyH.js
// Home use-case data restored from the current Codex webview bundle.
import { defineMessage } from "react-intl";
const HOME_USE_CASES = [
  {
    id: "snake-game",
    promptMessage: defineMessage({
      id: "home.useCases.snakeGame.prompt",
      defaultMessage:
        "Build a classic Snake game in this repo.\n\nScope & constraints:\n- Implement ONLY the classic Snake loop: grid movement, growing snake, food spawn, score, game-over, restart.\n- Reuse existing project tooling/frameworks; do NOT add new dependencies unless truly required.\n- Keep UI minimal and consistent with the repo’s existing styles (no new design systems, no extra animations).\n\nImplementation plan:\n1) Inspect the repo to find the right place to add a small interactive game (existing pages/routes/components).\n2) Implement game state (snake positions, direction, food, score, tick timer) with deterministic, testable logic.\n3) Render: simple grid + snake + food; support keyboard controls (arrow keys/WASD) and on-screen controls if mobile is present in the repo.\n4) Add basic tests for the core game logic (movement, collisions, growth, food placement) if the repo has a test runner.\n\nDeliverables:\n- A small set of files/changes with clear names.\n- Short run instructions (how to start dev server + where to navigate).\n- A brief checklist of what to manually verify (controls, pause/restart, boundaries).",
      description: "Prompt for creating a classic snake game",
    }),
    iconName: "game-controller",
    mode: "worktree",
  },
  {
    id: "one-page-pdf",
    promptMessage: defineMessage({
      id: "home.useCases.onePagePdf.prompt",
      defaultMessage:
        "Create a one-page $pdf that summarizes this app.\n\nContent requirements (1 page total):\n- What it is: 1–2 sentence description.\n- Who it’s for: primary user/persona.\n- What it does: 5–7 crisp bullets of key features.\n- How it works: a compact architecture overview (components/services/data flow) based ONLY on repo evidence.\n- How to run: the minimal “getting started” steps.\n\nFormatting constraints:\n- Must fit on a single page (no overflow).\n- Prefer a clean, scannable layout: headings + bullets; avoid long paragraphs.\n- If the repo lacks key info, explicitly mark those items as “Not found in repo.”\n\nDeliverable:\n- Output a generated $pdf and include its filename/path.",
      description: "Prompt for creating a one-page PDF summary",
    }),
    iconName: "pdf-document",
    mode: "local",
  },
  {
    id: "create-plan",
    promptMessage: defineMessage({
      id: "home.useCases.createPlan.prompt",
      defaultMessage: "Create a plan to…",
      description: "Prompt for creating a plan before implementation",
    }),
    iconName: "pencil",
    mode: "worktree",
    initialCollaborationMode: "plan",
  },
  {
    id: "daily-bug-scan",
    promptMessage: defineMessage({
      id: "home.useCases.dailyBugScan.prompt",
      defaultMessage:
        "Scan recent commits for likely bugs and propose minimal fixes.",
      description: "Prompt for a daily bug scan at 9am",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.dailyBugScan.automationPrompt",
      defaultMessage:
        "Scan recent commits (since the last run, or last 24h) for likely bugs and propose minimal fixes.\n\nGrounding rules:\n- Use ONLY concrete repo evidence (commit SHAs, PRs, file paths, diffs, failing tests, CI signals).\n- Do NOT invent bugs; if evidence is weak, say so and skip.\n- Prefer the smallest safe fix; avoid refactors and unrelated cleanup.",
      description: "Automation prompt for a daily bug scan at 9am",
    }),
    iconName: "ladybug",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "weekly-release-notes",
    promptMessage: defineMessage({
      id: "home.useCases.weeklyReleaseNotes.prompt",
      defaultMessage: "Draft release notes from merged PRs.",
      description: "Prompt for drafting weekly release notes",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.weeklyReleaseNotes.automationPrompt",
      defaultMessage:
        "Draft weekly release notes from merged PRs (include links when available).\n\nScope & grounding:\n- Stay strictly within the repo history for the week; do not add extra sections beyond what the data supports.\n- Use PR numbers/titles; avoid claims about impact unless supported by PR description/tests/metrics in repo.",
      description: "Automation prompt for drafting weekly release notes",
    }),
    iconName: "book-open",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "daily-standup",
    promptMessage: defineMessage({
      id: "home.useCases.dailyStandup.prompt",
      defaultMessage: "Summarize yesterday’s git activity for standup.",
      description: "Prompt for a daily standup summary",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.dailyStandup.automationPrompt",
      defaultMessage:
        "Summarize yesterday’s git activity for standup.\n\nGrounding rules:\n- Anchor statements to commits/PRs/files; do not speculate about intent or future work.\n- Keep it scannable and team-ready.",
      description: "Automation prompt for a daily standup summary",
    }),
    iconName: "bubble-on-bubble",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "nightly-ci-report",
    promptMessage: defineMessage({
      id: "home.useCases.nightlyCiReport.prompt",
      defaultMessage: "Summarize CI failures and flaky tests.",
      description: "Prompt for a nightly CI summary",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.nightlyCiReport.automationPrompt",
      defaultMessage:
        "Summarize CI failures and flaky tests from the last CI window; suggest top fixes.\n\nGrounding rules:\n- Cite specific jobs, tests, error messages, or log snippets when available.\n- Avoid overconfident root-cause claims; separate “observed” vs “suspected.”",
      description: "Automation prompt for a nightly CI summary",
    }),
    iconName: "radar",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "daily-classic-game",
    promptMessage: defineMessage({
      id: "home.useCases.dailyClassicGame.prompt",
      defaultMessage: "Create a small classic game with minimal scope.",
      description: "Prompt for creating a daily classic game at 2pm",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.dailyClassicGame.automationPrompt",
      defaultMessage:
        "Create a small classic game with minimal scope.\n\nConstraints:\n- Do NOT add extra features, styling systems, content, or new dependencies unless required.\n- Reuse existing repo tooling and patterns.",
      description: "Automation prompt for creating a daily classic game",
    }),
    iconName: "star-app",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "skill-progression-map",
    promptMessage: defineMessage({
      id: "home.useCases.skillProgressionMap.prompt",
      defaultMessage:
        "Suggest next skills to deepen from recent PRs and reviews.",
      description:
        "Prompt for a weekly skill progression map based on recent PRs and reviews",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.skillProgressionMap.automationPrompt",
      defaultMessage:
        "From recent PRs and reviews, suggest next skills to deepen.\n\nGrounding rules:\n- Anchor each suggestion to concrete evidence (PR themes, review comments, recurring issues).\n- Avoid generic advice; make each recommendation actionable and specific.",
      description: "Automation prompt for a skill progression map",
    }),
    iconName: "hierarchy",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "weekly-engineering-summary",
    promptMessage: defineMessage({
      id: "home.useCases.weeklyEngineeringSummary.prompt",
      defaultMessage:
        "Synthesize this week’s PRs, rollouts, incidents, and reviews.",
      description: "Prompt for a weekly engineering summary across projects",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.weeklyEngineeringSummary.automationPrompt",
      defaultMessage:
        "Synthesize this week’s PRs, rollouts, incidents, and reviews into a weekly update.\n\nGrounding rules:\n- Do not invent events; if data is missing, say that briefly.\n- Prefer concrete references (PR #, incident ID, rollout note, file path) where available.",
      description: "Automation prompt for a weekly engineering summary",
    }),
    iconName: "figure-text-document",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "performance-regression-watch",
    promptMessage: defineMessage({
      id: "home.useCases.performanceRegressionWatch.prompt",
      defaultMessage: "Watch for performance regressions in recent changes.",
      description: "Prompt for a daily performance regression watch",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.performanceRegressionWatch.automationPrompt",
      defaultMessage:
        "Compare recent changes to benchmarks or traces and flag regressions early.\n\nGrounding rules:\n- Ground claims in measurable signals (benchmarks, traces, timings, flamegraphs).\n- If measurements are unavailable, state “No measurements found” rather than guessing.",
      description: "Automation prompt for a performance regression watch",
    }),
    iconName: "bar-chart",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "dependency-sdk-drift",
    promptMessage: defineMessage({
      id: "home.useCases.dependencySdkDrift.prompt",
      defaultMessage: "Detect dependency and SDK drift; propose alignment.",
      description: "Prompt for a daily dependency and SDK drift check",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.dependencySdkDrift.automationPrompt",
      defaultMessage:
        "Detect dependency and SDK drift and propose a minimal alignment plan.\n\nGrounding rules:\n- Cite current and target versions from the repo when possible (lockfiles, package manifests).\n- Do not guess versions; if targets are unclear, propose options and label them as suggestions.",
      description: "Automation prompt for a dependency and SDK drift check",
    }),
    iconName: "checkmark-circle",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "test-gap-detection",
    promptMessage: defineMessage({
      id: "home.useCases.testGapDetection.prompt",
      defaultMessage: "Find test gaps from recent changes; create draft PRs.",
      description: "Prompt for a daily test gap detection automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.testGapDetection.automationPrompt",
      defaultMessage:
        "Identify untested paths from recent changes; add focused tests and use $yeet for draft PRs.\n\nConstraints:\n- Keep scope tight to the changed areas; avoid broad refactors.\n- Prefer small, reliable tests that fail before and pass after.",
      description: "Automation prompt for a test gap detection run",
    }),
    iconName: "puzzle",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "pre-release-check",
    promptMessage: defineMessage({
      id: "home.useCases.preReleaseCheck.prompt",
      defaultMessage: "Run a pre-release checklist before tagging.",
      description: "Prompt for a pre-release checklist automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.preReleaseCheck.automationPrompt",
      defaultMessage:
        "Before tagging, verify changelog, migrations, feature flags, and tests.\n\nGrounding rules:\n- Report ONLY what you can confirm from the repo and CI context.\n- If a check cannot be verified, mark it explicitly as “Unknown.”",
      description: "Automation prompt for a pre-release checklist",
    }),
    iconName: "checkmark-circle",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "agents-docs-sync",
    promptMessage: defineMessage({
      id: "home.useCases.agentsDocsSync.prompt",
      defaultMessage: "Update AGENTS.md with new workflows and commands.",
      description: "Prompt for a weekly AGENTS.md update automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.agentsDocsSync.automationPrompt",
      defaultMessage:
        "Update AGENTS.md with newly discovered workflows and commands.\n\nConstraints:\n- Keep edits minimal, accurate, and grounded in repo usage.\n- Do not touch unrelated sections or auto-generated files.\n- If you are unsure, prefer adding a TODO with a short note rather than inventing.",
      description: "Automation prompt for updating AGENTS.md",
    }),
    iconName: "text-document",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "weekly-pr-summary",
    promptMessage: defineMessage({
      id: "home.useCases.weeklyPrSummary.prompt",
      defaultMessage: "Summarize last week's PRs by teammate and theme.",
      description: "Prompt for a weekly PR summary automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.weeklyPrSummary.automationPrompt",
      defaultMessage:
        "Summarize last week’s PRs by teammate and theme; highlight risks.\n\nGrounding rules:\n- Use PR numbers/titles when available.\n- Avoid speculation about impact; stick to what the PR changed.",
      description: "Automation prompt for a weekly PR summary",
    }),
    iconName: "newspaper",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "issue-triage",
    promptMessage: defineMessage({
      id: "home.useCases.issueTriage.prompt",
      defaultMessage: "Triage new issues and suggest owners and priority.",
      description: "Prompt for a daily issue triage automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.issueTriage.automationPrompt",
      defaultMessage:
        "Triage new issues; suggest owner, priority, and labels.\n\nGrounding rules:\n- Base recommendations on issue content + repo context (CODEOWNERS, touched areas, prior similar issues).\n- Do not guess owners without signals; if unclear, say “Owner: Unknown” and suggest a team instead.",
      description: "Automation prompt for issue triage",
    }),
    iconName: "exclamationmark-bubble",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "ci-monitor",
    promptMessage: defineMessage({
      id: "home.useCases.ciMonitor.prompt",
      defaultMessage: "Check CI failures; group likely root causes.",
      description: "Prompt for a CI monitoring automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.ciMonitor.automationPrompt",
      defaultMessage:
        "Check CI failures; group by likely root cause and suggest minimal fixes.\n\nGrounding rules:\n- Cite jobs, tests, errors, and log evidence.\n- Use supported CI integrations, skills, or authenticated command-line tools to access logs. Do not use browser or computer-use tools as a fallback.\n- If logs are inaccessible, ask the user to make a Buildkite API token available or install/enable the appropriate CI skill. Do not guess from check names alone.\n- Avoid overconfident root-cause claims; label uncertain items as “Suspected.”",
      description: "Automation prompt for CI monitoring",
    }),
    iconName: "terminal",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "dependency-sweep",
    promptMessage: defineMessage({
      id: "home.useCases.dependencySweep.prompt",
      defaultMessage: "Scan outdated dependencies and propose safe upgrades.",
      description: "Prompt for a dependency sweep automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.dependencySweep.automationPrompt",
      defaultMessage:
        "Scan outdated dependencies; propose safe upgrades with minimal changes.\n\nRules:\n- Prefer the smallest viable upgrade set.\n- Explicitly call out breaking-change risks and required migrations.\n- Do not propose upgrades without identifying current versions from the repo.",
      description: "Automation prompt for a dependency sweep",
    }),
    iconName: "block-stack, skills",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "performance-audit",
    promptMessage: defineMessage({
      id: "home.useCases.performanceAudit.prompt",
      defaultMessage: "Audit performance regressions; propose fixes.",
      description: "Prompt for a weekly performance audit automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.performanceAudit.automationPrompt",
      defaultMessage:
        "Audit performance regressions and propose highest-leverage fixes.\n\nGrounding rules:\n- Ground claims in measurements/traces when available.\n- If evidence is missing, state uncertainty briefly and suggest what to measure next.",
      description: "Automation prompt for a performance audit",
    }),
    iconName: "compass",
    mode: "worktree",
    isAutomation: true,
  },
  {
    id: "changelog-update",
    promptMessage: defineMessage({
      id: "home.useCases.changelogUpdate.prompt",
      defaultMessage: "Update the changelog with this week's highlights.",
      description: "Prompt for a weekly changelog update automation",
    }),
    automationPromptMessage: defineMessage({
      id: "home.useCases.changelogUpdate.automationPrompt",
      defaultMessage:
        "Update the changelog with this week’s highlights and key PR links.\n\nConstraints:\n- Only include items supported by repo history.\n- Keep structure simple and consistent with existing changelog format.",
      description: "Automation prompt for updating the changelog",
    }),
    iconName: "pencil",
    mode: "worktree",
    isAutomation: true,
  },
];
function getAutomationHomeUseCases() {
  return HOME_USE_CASES.filter((item) => item.isAutomation === true);
}
function initHomeUseCasesDataChunk(): void {}

export { getAutomationHomeUseCases, HOME_USE_CASES, initHomeUseCasesDataChunk };
