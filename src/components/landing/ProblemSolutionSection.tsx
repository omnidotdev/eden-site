import { Settings, Shield, Zap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Problem, solution, and result cards section.
 */
const ProblemSolutionSection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Settings className="size-5" />
              The Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base-600 dark:text-base-400">
            New developers spend hours troubleshooting missing dependencies,
            wrong versions, and misconfigured environment variables.
          </CardContent>
        </Card>

        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <Zap className="size-5" />
              The Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base-600 dark:text-base-400">
            Eden runs preflight checks in milliseconds, telling developers
            exactly what's missing before they start working.
          </CardContent>
        </Card>

        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Shield className="size-5" />
              The Result
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base-600 dark:text-base-400">
            Self-documenting project requirements. Consistent environments
            across the team. Happy developers from day one.
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
