import { Github } from "lucide-react";

import app from "@/lib/config/app.config";

/**
 * Site footer with brand and social links.
 */
const Footer = () => (
  <footer className="relative border-base-200/50 border-t bg-base-50/50 backdrop-blur-sm dark:border-base-800/50 dark:bg-base-950/50">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-xl opacity-60">🌿</span>
          <span className="text-base-500 text-sm">
            Made with 🌿 by{" "}
            <a
              href={app.organization.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-green-500"
            >
              {app.organization.name}
            </a>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={app.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-500 transition-colors hover:text-foreground"
          >
            <Github size={20} />
          </a>
        </div>

        <p className="text-base-500 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href={app.organization.website}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {app.organization.name}
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
