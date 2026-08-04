import { useId } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  const gradientId = useId();

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="48" height="48" rx="14" fill={`url(#${gradientId})`}/>
        <rect x="16" y="18" width="32" height="22" rx="8" fill="#fff"/>
        <path d="M24 40v8l10-8H24z" fill="#fff"/>
        <rect x="22" y="26" width="20" height="3" rx="1.5" fill="#0891b2"/>

        <defs>
          <linearGradient
            id={gradientId}
            x1="8"
            y1="8"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0891b2" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-display font-semibold tracking-tight text-ink">
          CaptionFlow
        </span>
      )}
    </Link>
  );
}
