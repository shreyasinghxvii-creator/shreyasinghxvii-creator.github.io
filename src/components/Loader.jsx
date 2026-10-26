import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const duration = reducedMotion ? 1200 : 2400;
    const fadeDuration = reducedMotion ? 200 : 600;
    const startTime = performance.now();

    let frameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(percentage);

      if (percentage < 100) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    frameId = window.requestAnimationFrame(updateProgress);

    const exitTimer = window.setTimeout(() => {
      setProgress(100);
      setPhase("exit");
    }, duration);

    const removeTimer = window.setTimeout(() => {
      setPhase("done");
    }, duration + fadeDuration);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className={`intro-loader ${phase === "exit" ? "intro-loader--exit" : ""}`}
      role="status"
      aria-label={`Loading portfolio: ${progress}%`}
      aria-hidden={phase === "exit"}
    >
      <div className="intro-loader__content">
        <div className="intro-loader__logo">
          <svg
            className="intro-loader__symbol"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              className="intro-loader__ring"
              cx="50"
              cy="50"
              r="36"
              stroke="currentColor"
              strokeWidth="1"
            />

            <text
              x="50"
              y="62"
              textAnchor="middle"
              fill="currentColor"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="40"
              fontStyle="italic"
              letterSpacing="-5"
            >
              SS
            </text>

            <path
              className="intro-loader__spark"
              d="M77 14 L80 22 L88 25 L80 28 L77 36 L74 28 L66 25 L74 22 Z"
              fill="#E7A18F"
            />
          </svg>
        </div>

        <h1 className="intro-loader__name">SHREYA SINGH</h1>

        <div
          className="intro-loader__track"
          role="progressbar"
          aria-label="Portfolio loading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span
            className="intro-loader__fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="intro-loader__percentage">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
