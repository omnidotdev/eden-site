import { Link } from "@tanstack/react-router";
import { XIcon as CloseIcon, ExternalLink, MenuIcon } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/core";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";
import { cn } from "@/lib/utils";

/**
 * Sticky header with navigation and mobile menu.
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <header className="w-full border-base-200/50 border-b bg-white/80 backdrop-blur-xl dark:border-base-800/50 dark:bg-base-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-xl tracking-tight">
                {app.name}
              </span>
              <Badge className="hidden border-green-500/20 bg-green-500/10 text-green-700 text-xs sm:inline-flex dark:text-green-300">
                Alpha
              </Badge>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href={app.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-base-600 text-sm hover:text-foreground dark:text-base-400 dark:hover:text-foreground"
              >
                Docs
                <ExternalLink className="size-3" />
              </a>

              <a
                href={app.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-base-600 text-sm hover:text-foreground dark:text-base-400 dark:hover:text-foreground"
              >
                GitHub
                <ExternalLink className="size-3" />
              </a>

              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <CloseIcon className="size-5" />
                ) : (
                  <MenuIcon className="size-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "border-base-200/50 border-t bg-white/95 backdrop-blur-xl md:hidden dark:border-base-800/50 dark:bg-base-950/95",
            mobileMenuOpen ? "block" : "hidden",
          )}
        >
          <div className="space-y-1 px-4 py-3">
            <a
              href={app.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-base-600 text-sm hover:bg-base-100 hover:text-foreground dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-foreground"
            >
              Docs
              <ExternalLink className="size-3" />
            </a>

            <a
              href={app.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-base-600 text-sm hover:bg-base-100 hover:text-foreground dark:text-base-400 dark:hover:bg-base-800 dark:hover:text-foreground"
            >
              GitHub
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
