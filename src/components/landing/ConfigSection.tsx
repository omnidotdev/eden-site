import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ConfigExample = () => (
  <>
    <span className="text-purple-600 dark:text-purple-400">[checks]</span>
    {"\n"}
    <span className="text-blue-600 dark:text-blue-400">binaries</span>
    <span className="text-base-500"> = </span>
    <span className="text-green-600 dark:text-green-400">
      ["docker", "node", "bun"]
    </span>
    {"\n"}
    <span className="text-blue-600 dark:text-blue-400">environment</span>
    <span className="text-base-500"> = </span>
    <span className="text-green-600 dark:text-green-400">
      ["DATABASE_URL", "API_KEY"]
    </span>
  </>
);

const UsageExample = () => (
  <>
    <span className="text-base-400 dark:text-base-500"># Install Eden</span>
    {"\n"}
    <span className="text-amber-600 dark:text-yellow-400">cargo</span> install
    eden-cli
    {"\n\n"}
    <span className="text-base-400 dark:text-base-500">
      # Initialize config
    </span>
    {"\n"}
    <span className="text-amber-600 dark:text-yellow-400">eden</span> init
    {"\n\n"}
    <span className="text-base-400 dark:text-base-500"># Run checks</span>
    {"\n"}
    <span className="text-amber-600 dark:text-yellow-400">eden</span> check
  </>
);

const configRaw = `[checks]
binaries = ["docker", "node", "bun"]
environment = ["DATABASE_URL", "API_KEY"]`;

/**
 * Configuration example section with tabs for config and usage.
 */
const ConfigSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(configRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-bold text-3xl">
          Simple Configuration
        </h2>

        <Tabs defaultValue="config" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="config">eden.toml</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>

          <TabsContent value="config">
            <Card>
              <CardContent className="relative pt-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={copyToClipboard}
                >
                  {copied ? (
                    <CheckCheck className="size-4 text-green-500" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </Button>
                <pre className="overflow-x-auto font-mono text-sm">
                  <code>
                    <ConfigExample />
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage">
            <Card>
              <CardContent className="pt-6">
                <pre className="overflow-x-auto font-mono text-sm">
                  <code>
                    <UsageExample />
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ConfigSection;
