import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

import type { ErrorComponentProps } from "@tanstack/react-router";

/**
 * Default catch boundary.
 */
const DefaultCatchBoundary = ({ error }: ErrorComponentProps) => {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 p-4">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          onClick={() => {
            router.invalidate();
          }}
        >
          Try Again
        </Button>

        {isRoot ? (
          <Button asChild>
            <Link to="/">Home</Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            Go Back
          </Button>
        )}
      </div>
    </div>
  );
};

export default DefaultCatchBoundary;
