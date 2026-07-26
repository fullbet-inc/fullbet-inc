export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" fill="#F4F4F5" />
      <rect x="10" y="8" width="3" height="16" rx="1" fill="#050505" />
      <rect x="13" y="8" width="9" height="3" rx="1" fill="#050505" />
      <rect x="13" y="14.5" width="7" height="3" rx="1" fill="#050505" />
      <circle cx="23.5" cy="22.5" r="2.5" fill="url(#fullbet-dot)" />
      <defs>
        <linearGradient id="fullbet-dot" x1="21" y1="18.5" x2="26" y2="23.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#25F4EE" />
          <stop offset="1" stopColor="#FE2C55" />
        </linearGradient>
      </defs>
    </svg>
  );
}
