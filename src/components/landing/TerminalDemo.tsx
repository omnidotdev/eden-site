/**
 * Terminal demo showing example eden check output.
 */
const TerminalDemo = () => (
  <section className="px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-lg border border-base-200 bg-base-950 shadow-2xl dark:border-base-800">
        <div className="flex items-center gap-2 border-base-800 border-b bg-base-900 px-4 py-3">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
          <span className="ml-2 font-mono text-base-400 text-sm">terminal</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="text-base-400">$ eden check</div>
          <div className="mt-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-green-400">🌱</span>
              <span className="text-base-300">Binary: docker</span>
              <span className="text-base-500">- v24.0.7 (/usr/bin/docker)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">🌱</span>
              <span className="text-base-300">Binary: node</span>
              <span className="text-base-500">
                - v20.10.0 (/usr/local/bin/node)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">🌱</span>
              <span className="text-base-300">Binary: pnpm</span>
              <span className="text-base-500">
                - v8.12.0 (/usr/local/bin/pnpm)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400">🥀</span>
              <span className="text-base-300">Env: DATABASE_URL</span>
              <span className="text-amber-400">- not set</span>
            </div>
          </div>
          <div className="mt-4 text-base-300">
            🌱 3 sprouted, 🥀 1 needs water
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TerminalDemo;
