import { ArrowRight, Github, Leaf } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Hero section with title, description, and call-to-action buttons.
 */
const HeroSection = () => (
  <section className="relative px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl text-center">
      <div className="mb-6 flex justify-center gap-2">
        <Badge className="border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-300">
          <Leaf className="mr-1 size-3" />
          Open Source
        </Badge>
        <Badge className="border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300">
          Rust-Powered
        </Badge>
      </div>

      <h1 className="mb-6 font-bold text-5xl tracking-tight sm:text-6xl lg:text-7xl">
        <span className="text-green-600 dark:text-green-400">🌿 Eden</span>
      </h1>

      <p className="mx-auto mb-8 max-w-2xl text-base-600 text-xl dark:text-base-400">
        Developer onboarding preflight checks. Verify required dependencies and
        configurations are properly installed before development begins.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500"
          onClick={() => window.open(app.links.github, "_blank")}
        >
          <Github className="mr-2 size-5" />
          View on GitHub
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => window.open(app.links.docs, "_blank")}
        >
          Read the Docs
          <ArrowRight className="ml-2 size-5" />
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
