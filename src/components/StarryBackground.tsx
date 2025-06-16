import React from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDelay: number;
}

const StarryBackground: React.FC = () => {
  // Generate random stars
  const stars: Star[] = React.useMemo(() => {
    const starArray: Star[] = [];
    for (let i = 0; i < 50; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        animationDelay: Math.random() * 3,
      });
    }
    return starArray;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-starry-night">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}

      {/* Constellation boat/sail design */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <svg
            width="240"
            height="180"
            viewBox="0 0 240 180"
            fill="none"
            className="animate-float"
          >
            {/* Constellation lines */}
            <g stroke="#C9DFF4" strokeWidth="1" opacity="0.6">
              {/* Sail outline */}
              <line x1="120" y1="20" x2="120" y2="120" />
              <line x1="120" y1="20" x2="80" y2="80" />
              <line x1="120" y1="20" x2="160" y2="80" />
              <line x1="80" y1="80" x2="160" y2="80" />
              <line x1="80" y1="80" x2="120" y2="120" />
              <line x1="160" y1="80" x2="120" y2="120" />

              {/* Hull */}
              <line x1="60" y1="120" x2="180" y2="120" />
              <line x1="60" y1="120" x2="80" y2="140" />
              <line x1="180" y1="120" x2="160" y2="140" />
              <line x1="80" y1="140" x2="160" y2="140" />
            </g>

            {/* Constellation points */}
            <g fill="#C9DFF4">
              <circle cx="120" cy="20" r="3" className="animate-twinkle" />
              <circle
                cx="80"
                cy="80"
                r="2.5"
                className="animate-twinkle"
                style={{ animationDelay: "0.5s" }}
              />
              <circle
                cx="160"
                cy="80"
                r="2.5"
                className="animate-twinkle"
                style={{ animationDelay: "1s" }}
              />
              <circle
                cx="120"
                cy="120"
                r="3"
                className="animate-twinkle"
                style={{ animationDelay: "1.5s" }}
              />
              <circle
                cx="60"
                cy="120"
                r="2"
                className="animate-twinkle"
                style={{ animationDelay: "2s" }}
              />
              <circle
                cx="180"
                cy="120"
                r="2"
                className="animate-twinkle"
                style={{ animationDelay: "2.5s" }}
              />
              <circle
                cx="80"
                cy="140"
                r="2"
                className="animate-twinkle"
                style={{ animationDelay: "3s" }}
              />
              <circle
                cx="160"
                cy="140"
                r="2"
                className="animate-twinkle"
                style={{ animationDelay: "0.2s" }}
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Larger accent stars */}
      <div className="absolute top-10 left-8">
        <div
          className="w-1 h-1 bg-vela-dream-blue rounded-full animate-twinkle"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div className="absolute top-20 right-12">
        <div
          className="w-2 h-2 bg-vela-dream-blue rounded-full animate-twinkle"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="absolute bottom-32 left-16">
        <div
          className="w-1.5 h-1.5 bg-vela-dream-blue rounded-full animate-twinkle"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      <div className="absolute bottom-40 right-8">
        <div
          className="w-1 h-1 bg-vela-dream-blue rounded-full animate-twinkle"
          style={{ animationDelay: "3s" }}
        />
      </div>
    </div>
  );
};

export default StarryBackground;
