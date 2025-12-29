import {
  Clock,
  Code,
  Download,
  Globe,
  Shield,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Terminal,
    title: "Binary Checks",
    description: "Verify required CLIs are installed and in PATH",
  },
  {
    icon: Globe,
    title: "Env Var Checks",
    description: "Ensure environment variables are set",
  },
  {
    icon: Code,
    title: "Multi-Format Config",
    description: "TOML, YAML, JSON, or JSONC - your choice",
  },
  {
    icon: Zap,
    title: "Rust-Powered",
    description: "Lightning fast with minimal overhead",
  },
  {
    icon: Users,
    title: "Team Ready",
    description: "Commit eden.toml to share requirements",
  },
  {
    icon: Clock,
    title: "CI Integration",
    description: "Run in pipelines for consistency",
  },
  {
    icon: Download,
    title: "Easy Install",
    description: "cargo install or download binaries",
  },
  {
    icon: Shield,
    title: "Version Detection",
    description: "Shows installed versions automatically",
  },
];

/**
 * Key features grid section.
 */
const FeaturesSection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-12 text-center font-bold text-3xl">Key Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="border-base-200/50 dark:border-base-800/50"
          >
            <CardHeader>
              <feature.icon className="mb-2 size-8 text-green-600 dark:text-green-400" />
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-base-600 text-sm dark:text-base-400">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
