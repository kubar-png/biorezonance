export default function BenefitCloud() {
  // A tight scalloped/cloud SVG outline behind a small text card.
  return (
    <svg
      viewBox="0 0 240 220"
      className="absolute inset-0 w-full h-full -z-0"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="benefit-cloud" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#dedceb" />
          <stop offset="100%" stopColor="#c6c3d8" />
        </linearGradient>
      </defs>
      {/* scalloped puffy cloud */}
      <path
        d="
          M 60 30
          C 50 10, 25 18, 22 38
          C 5 45, 0 70, 18 80
          C 5 95, 12 120, 30 122
          C 22 140, 38 158, 55 152
          C 60 170, 88 178, 100 162
          C 112 180, 142 178, 148 158
          C 168 170, 192 156, 188 138
          C 210 138, 220 115, 205 102
          C 222 90, 218 65, 200 60
          C 210 42, 192 22, 175 30
          C 170 12, 142 8, 132 22
          C 120 8, 95 10, 90 28
          C 78 18, 62 18, 60 30
          Z"
        fill="url(#benefit-cloud)"
      />
    </svg>
  );
}
