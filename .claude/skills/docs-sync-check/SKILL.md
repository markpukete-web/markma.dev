---
name: docs-sync-check
description: Post-implementation documentation sync checker. Use this skill AFTER completing any batch of code changes, bug fixes, feature implementations, or UX improvements to any of Mark's projects (portfolio, First Furlong, or future projects). Trigger when the conversation includes phrases like "all fixed", "batch done", "changes implemented", "fixes applied", "let's commit", "ready to push", "ready to deploy", or when generating Claude Code prompts that modify component behaviour, add features, or change UI patterns. Also trigger when Mark asks about documentation, updating docs, or keeping docs in sync. This skill ensures documentation stays accurate after every round of changes.
---

# Documentation Sync Check

## Purpose

After any batch of code changes, check whether project documentation needs updating. This prevents docs from drifting out of sync with the codebase — a common problem when working fast with AI-assisted development.

## When to Run

Trigger this check whenever:
- A batch of fixes or features has been implemented
- Claude Code prompts have been generated for code changes
- Mark says changes are done and is preparing to commit/push/deploy
- The conversation shifts from "implementing" to "wrapping up"

## Documentation Checklist

For each change made, ask these questions:

### 1. CLAUDE.md (Development Context)
- [ ] Do the listed sections still match the actual site structure?
- [ ] Are design direction bullets still accurate?
- [ ] Have any new patterns been established that future sessions need to know about?

### 2. README.md (Public-Facing)
- [ ] Do the "Key Features" bullets still describe what the site actually does?
- [ ] Has the tech stack or project structure changed?
- [ ] Are any features described that no longer exist, or missing features that now exist?

### 3. Component-Level Comments
- [ ] If a component's behaviour changed significantly, does the JSDoc or inline comment reflect this?
- [ ] If a component was removed or replaced, are references to it cleaned up?

### 4. Content Source Documents (if applicable)
- [ ] If user-facing content was changed (stats, descriptions, labels, copy), does it still align with the project's source-of-truth documents (e.g. CV, design brief, product spec)?
- [ ] Have any claims been added that aren't backed by source documents or verifiable facts?

## Output Format

After running the checklist, provide one of:

**No updates needed:**
> "Docs are in sync — the changes to [components] don't affect any documented features or patterns."

**Updates needed:**
> Generate a single Claude Code prompt covering all documentation updates, following the same format Mark uses for implementation prompts. Keep changes minimal and targeted — only update what's actually changed.

## Key Principles

- **Minimal changes only** — don't rewrite docs, just correct what's drifted
- **Accuracy over completeness** — a short accurate doc beats a comprehensive outdated one
- **British English spelling** throughout (organisation, colour, centre, optimise)
- **Don't document implementation details** — document behaviour, patterns, and decisions
