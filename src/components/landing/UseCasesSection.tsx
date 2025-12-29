import { Clock, Code, Shield, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    icon: Users,
    title: "New Developer Onboarding",
    description: "Include in your README.md as the first setup step",
  },
  {
    icon: Clock,
    title: "CI/CD Pipelines",
    description: "Verify environments before running tests",
  },
  {
    icon: Shield,
    title: "Pre-commit Hooks",
    description: "Ensure environment consistency before commits",
  },
  {
    icon: Code,
    title: "Self-Documenting",
    description: "Eden config file becomes your requirements doc",
  },
];

/**
 * Use cases grid section.
 */
const UseCasesSection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-12 text-center font-bold text-3xl">Use Cases</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {useCases.map((useCase) => (
          <Card
            key={useCase.title}
            className="border-base-200/50 dark:border-base-800/50"
          >
            <CardHeader>
              <useCase.icon className="mb-2 size-6 text-green-600 dark:text-green-400" />
              <CardTitle className="text-lg">{useCase.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-base-600 text-sm dark:text-base-400">
              {useCase.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
