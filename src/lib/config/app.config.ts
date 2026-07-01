/**
 * Application configuration.
 */
const app = {
  name: "Eden",
  tagline: "In the beginning, there were dependencies",
  description:
    "A Rust-powered CLI tool designed for developer onboarding that verifies required dependencies and configurations are properly installed before development begins.",
  keywords: [
    "CLI",
    "developer tools",
    "onboarding",
    "rust",
    "environment verification",
    "preflight checks",
  ],
  organization: {
    name: "Omni",
    website: "https://omni.dev",
  },
  links: {
    docs: "https://docs.omni.dev/armory/eden",
    github: "https://github.com/omnidotdev/eden-cli",
    threads: "https://www.threads.com/@omnidotdev",
  },
  // Legal links mirror the omni-api catalog SSOT
  legal: {
    privacy: "https://omni.dev/legal/privacy",
    terms: "https://omni.dev/legal/terms",
  },
};

export default app;
