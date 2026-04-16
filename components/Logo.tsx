export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-up-mint/25 ring-1 ring-up-teal/30"
        aria-hidden
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-up-teal-dark"
        >
          <path
            d="M12 4L12 16M12 4L7 9M12 4L17 9"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight">
        <span className="text-up-teal-dark">Up</span>
        <span className="text-up-ink">Path</span>
      </span>
    </span>
  );
}
