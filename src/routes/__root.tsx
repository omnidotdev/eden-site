import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouteContext,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

import { DefaultCatchBoundary } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";
import app from "@/lib/config/app.config";
import { fetchMaintenanceMode } from "@/lib/providers";
import appCss from "@/lib/styles/globals.css?url";
import createMetaTags from "@/lib/util/createMetaTags";
import ThemeProvider from "@/providers/ThemeProvider";
import { getTheme } from "@/server/functions/theme";

import type { QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";


export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  isMaintenanceMode: boolean;
}>()({
  beforeLoad: async () => {
    const { isMaintenanceMode } = await fetchMaintenanceMode();

    return { isMaintenanceMode };
  },
  loader: () => getTheme(),
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "apple-mobile-web-app-title",
        content: app.name,
      },
      ...createMetaTags(),
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Texturina:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  component: RootComponent,
});

function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-900 to-pink-800 p-8 text-white">
      <div className="text-center">
        <div className="mb-6 text-9xl">🌺</div>
        <h1 className="mb-4 text-4xl font-bold">Paradise Found... Soon</h1>
        <p className="max-w-md text-lg text-pink-200">
          We're cultivating perfection. Eden will flourish again shortly.
        </p>
      </div>
    </div>
  );
}

function RootComponent() {
  const { isMaintenanceMode } = useRouteContext({ from: "__root__" });

  // Show maintenance page when flag is enabled
  if (isMaintenanceMode) {
    return (
      <RootDocument>
        <MaintenancePage />
      </RootDocument>
    );
  }

  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const theme = Route.useLoaderData();

  return (
    <html lang="en" className={theme}>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {children}

          <Toaster position="top-center" richColors />
        </ThemeProvider>

        <Scripts />
      </body>
    </html>
  );
}
