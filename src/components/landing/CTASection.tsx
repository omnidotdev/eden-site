import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Final call-to-action section.
 */
const CTASection = () => (
  <section className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mb-6 font-bold text-3xl">
        Ready to cultivate your dev environment?
      </h2>
      <p className="mb-8 text-base-600 text-lg dark:text-base-400">
        Get started with Eden in under a minute.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500"
          onClick={() => window.open(app.links.github, "_blank")}
        >
          <Github className="mr-2 size-5" />
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => window.open(app.links.docs, "_blank")}
        >
          Documentation
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
