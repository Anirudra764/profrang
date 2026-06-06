import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Helper for random hex colors
const randomColors = (count: number) => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  canvasClassName?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className,
  canvasClassName,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Dynamic import from JSdelivr CDN for threejs-components TubesCursor
        // @ts-ignore
        const module = await import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js");
        const TubesCursor = module.default;

        if (!mounted) return;

        // Initialize the interactive tubes background with premium neon colors
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#ff0055", "#00ffcc", "#8c00ff"],
            lights: {
              intensity: 200,
              colors: ["#ff3300", "#00ff33", "#00ffff", "#ff00ff"]
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

        const handleResize = () => {
          // The library handles standard canvas resizing automatically, but we can trigger update if needed
          if (app && app.resize) {
            app.resize();
          }
        };

        window.addEventListener("resize", handleResize);

        cleanup = () => {
          window.removeEventListener("resize", handleResize);
          if (app && typeof app.destroy === "function") {
            try {
              app.destroy();
            } catch (err) {
              console.warn("Failed to destroy TubesCursor app safely:", err);
            }
          }
        };
      } catch (error) {
        console.error("Failed to load TubesCursor from CDN:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    // Only randomize if clicking background elements, not interactive buttons/links
    const target = e.target as HTMLElement;
    if (target.closest("a, button, [role='button']")) {
      return;
    }

    if (!enableClickInteraction || !tubesRef.current) return;

    const colors = randomColors(3);
    const lightsColors = randomColors(4);

    try {
      tubesRef.current.tubes.setColors(colors);
      tubesRef.current.tubes.setLightsColors(lightsColors);
    } catch (err) {
      console.warn("Could not randomize colors:", err);
    }
  };

  return (
    <div
      className={cn("relative w-full h-full min-h-[400px] overflow-hidden bg-black", className)}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 w-full h-full block transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0",
          canvasClassName
        )}
        style={{ touchAction: "none" }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
