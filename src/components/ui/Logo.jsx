import { useId } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  const gradientId = useId();

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* CaptionFlow mark: chat bubble with flowing caption lines, cyan→coral gradient */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="56" height="56" rx="16" fill={`url(#${gradientId})`} />
        <rect x="13" y="15" width="38" height="26" rx="8" fill="#ffffff" />
        <path d="M22 41 L22 49 L31 41 Z" fill="#ffffff" />
        <rect x="20" y="22" width="24" height="2.8" rx="1.4" fill="#0891b2" opacity="0.9" />
        <rect x="20" y="28" width="20" height="2.8" rx="1.4" fill="#0891b2" opacity="0.6" />
        <rect x="20" y="34" width="14" height="2.8" rx="1.4" fill="#f97316" opacity="0.9" />
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
        <span className="text-xl font-display font-bold gradient-text tracking-tight">
          CaptionFlow
        </span>
      )}
    </Link>
  );
}
