
<!-- agent-handoff-audit -->
## Shared agent coordination
For every substantial implementation task, follow the installed `agent-handoff-audit` skill. At task start read `.agent-coordination/` using its token-saving order; before finishing, verify the work and write one compact handoff. Claude and Codex communicate about implementation state only through this ledger. Run reciprocal audits at major completion milestones.

## Mandatory article-integration safety protocol

Before adding, restoring, or editing anything in `src/data/articles.js`, read and follow [ARTICLE_INTEGRATION_HANDBOOK.md](./ARTICLE_INTEGRATION_HANDBOOK.md) completely.

This requirement exists because article integrations have caused the production portfolio to render blank twice. Never push an article change until the handbook's data-shape, build, lint, preview-route, and production checks pass. An article is executable application data, not an isolated content file.
