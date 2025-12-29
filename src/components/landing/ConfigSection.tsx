import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const configExample = `[checks]
binaries = ["docker", "node", "pnpm"]
environment = ["DATABASE_URL", "API_KEY"]`;

const usageExample = `# Install Eden
cargo install eden-cli

# Initialize config
eden init

# Run checks
eden check`;

/**
 * Configuration example section with tabs for config and usage.
 */
const ConfigSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
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
                  onClick={() => copyToClipboard(configExample)}
                >
                  {copied ? (
                    <CheckCheck className="size-4 text-green-500" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </Button>
                <pre className="overflow-x-auto font-mono text-sm">
                  <code>{configExample}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage">
            <Card>
              <CardContent className="pt-6">
                <pre className="overflow-x-auto font-mono text-sm">
                  <code>{usageExample}</code>
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
