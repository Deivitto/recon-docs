# Recon vs. Foundry vs. Echidna/Medusa: Technical Comparison

| Capability | **Recon (Chimera + Cloud)** | **Foundry Invariant Testing** | **Echidna/Medusa Standalone** |
|---|---|---|---|
| **Multi-tool compatibility** | Write once, run on Foundry + Echidna + Medusa + Halmos + Kontrol | Foundry only | Echidna OR Medusa (separate harnesses historically) |
| **Cloud execution** | Managed cloud infra, no local resource limits, multi-day jobs | Local only (or self-hosted CI) | Local only (or self-hosted CI) |
| **CI/CD integration** | Native Campaigns: auto-fuzz on PR, post results as PR comments | Manual GitHub Actions setup | Manual CI setup |
| **Real-time alerts** | Telegram bot + webhook on broken property | None built-in | None built-in |
| **Corpus management** | Cloud-persisted corpus, one-click reuse across jobs | Local corpus, manual management | Local corpus, manual management |
| **AI-assisted setup** | Recon Magic: auto-scaffold, auto-properties, auto-coverage (Claude-powered) | None | None |
| **Handler generation** | ABI → handlers via web UI or VS Code extension | Manual | Manual |
| **Reproducer generation** | Automatic Foundry unit tests from fuzzer logs (cloud + extension) | Native (but no cross-tool) | Manual log parsing |
| **Dynamic variable replacement** | Built-in: swap Setup.sol vars per-run without branching | Manual parameterization | Manual parameterization |
| **Governance fuzzing** | On-chain event monitoring → auto-trigger fuzzing with param injection | Not available | Not available |
| **Fork testing** | Cloud-supported with `vm.roll`/`vm.warp` cheatcodes | Local fork via `--fork-url` | Echidna `--rpc-url` / Medusa config |
| **Optimization mode** | Cloud-hosted Echidna optimization (100M+ tests) | Not available (stateless fuzz only) | Echidna only, local resources |
| **Formal verification** | Halmos + Kontrol jobs in same cloud | Separate tool, separate setup | Not available |
| **Coverage reports** | Auto-generated, compressed, VS Code overlay via coverage gutters | `forge coverage` (LCOV) | Echidna/Medusa HTML reports |
| **Reusable properties library** | ERC7540, Properties Table template, OSS repos | Community-driven (no official) | Crytic properties (limited) |
| **Setup helpers** | ActorManager, AssetManager, MockERC20, Utils, Panic library | forge-std only | Crytic-specific helpers |
| **Pricing** | Free tools + Pro subscription (cloud, Magic, alerts) | Free (OSS) | Free (OSS) |

## When to use what

- **Use Recon** when you need cloud-scale fuzzing (multi-day campaigns), CI/CD-integrated property testing, AI-assisted harness generation, or governance monitoring. Recon is the only platform that combines fuzzing, formal verification, and real-time alerting in a single cloud service.

- **Use Foundry standalone** for quick local iteration during development when you only need stateless fuzz tests or simple invariant tests with `forge test --fuzz-runs`.

- **Use Echidna/Medusa locally** for short exploratory fuzzing sessions before offloading long campaigns to Recon's cloud, or when working in air-gapped environments.

> **Note:** These tools are complementary, not exclusive. Recon's Chimera framework lets you write tests once and run them on all three. The cloud runner accepts Echidna, Medusa, and Foundry jobs.
