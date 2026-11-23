import {
  CardContent,
  CardHeader,
  CardRoot,
  CardTitle,
} from "@omnidotdev/thornberry/card";
import { Settings, Shield, Zap } from "lucide-react";

/**
 * Problem, solution, and result cards section.
 */
const ProblemSolutionSection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 md:grid-cols-3">
        <CardRoot className="border-amber-500/20 bg-amber-500/5">
          <CardHeader>
            <CardTitle asChild>
              <h3 className="flex items-center gap-2 text-2xl text-amber-600 dark:text-amber-400">
                <Settings className="size-5" />
                The Problem
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base-600 dark:text-base-400">
            New developers spend hours troubleshooting missing dependencies,
            wrong versions, and misconfigured environment variables.
          </CardContent>
        </CardRoot>

        <CardRoot className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle asChild>
              <h3 className="flex items-center gap-2 text-2xl text-green-600 dark:text-green-400">
                <Zap className="size-5" />
                The Solution
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base-600 dark:text-base-400">
            Eden runs preflight checks in milliseconds, telling developers
            exactly what's missing before they start working.
          </CardContent>
        </CardRoot>

        <CardRoot className="border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <CardTitle asChild>
              <h3 className="flex items-center gap-2 text-2xl text-blue-600 dark:text-blue-400">
                <Shield className="size-5" />
                The Result
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base-600 dark:text-base-400">
            Self-documenting project requirements. Consistent environments
            across the team. Happy developers from day one.
          </CardContent>
        </CardRoot>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
