export default function DropShape({ rotate = 0 }: { rotate?: number }) {
  return (
    <div
      className="w-[150px] h-[150px] flex-shrink-0"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={`drop-${rotate}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#c8c5da" />
            <stop offset="100%" stopColor="#a9a6bc" />
          </linearGradient>
        </defs>
        {/* asymmetric teardrop / petal */}
        <path
          d="M 100 10
             C 160 10, 195 60, 190 120
             C 185 165, 145 195, 95 192
             C 50 188, 20 160, 18 115
             C 16 70, 60 30, 100 10 Z"
          fill={`url(#drop-${rotate})`}
        />
      </svg>
    </div>
  );
}
