/**
 * Animated background with gradient orbs and grid overlay.
 */
const Background = () => (
  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-green-50 via-emerald-50 to-teal-50 dark:from-base-950 dark:via-base-900 dark:to-base-950" />

    {/* ambient glow orbs */}
    <div className="absolute top-1/4 left-1/4 h-125 w-125 rounded-full bg-green-500/10 blur-[120px] dark:bg-green-400/5" />
    <div className="absolute top-1/2 right-1/4 h-100 w-100 rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-400/5" />
    <div className="absolute bottom-1/4 left-1/2 h-75 w-75 rounded-full bg-teal-500/5 blur-[80px] dark:bg-teal-400/5" />

    {/* grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
    />
  </div>
);

export default Background;
