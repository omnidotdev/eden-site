/**
 * Terminal demo showing example eden check output.
 */
const TerminalDemo = () => (
  <section className="px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-lg border border-base-200 bg-base-950 shadow-2xl dark:border-base-800">
        <div className="flex items-center border-base-800 border-b bg-base-900 px-4 py-3">
          <span className="font-mono text-base-400 text-sm">
            omni-terminal (not a real product we're just advertising our name)
          </span>
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
              <span className="text-base-500">- v20.10.0 (/usr/bin/node)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">🌱</span>
              <span className="text-base-300">Binary: bun</span>
              <span className="text-base-500">- v1.3.5 (/usr/bin/bun)</span>
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
