interface BrainIconProps {
  className?: string
}

export default function BrainIcon({ className }: BrainIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Left hemisphere outline */}
      <path d="M12 21c-2.2 0-3.8-.6-5.2-1.7C5.4 18.2 4.4 16.6 4 15c-.4-1.6-.3-3.3.3-4.8.6-1.5 1.7-2.8 3-3.7C8.6 5.6 10.2 5 12 5" />
      {/* Right hemisphere outline */}
      <path d="M12 21c2.2 0 3.8-.6 5.2-1.7 1.4-1.1 2.4-2.7 2.8-4.3.4-1.6.3-3.3-.3-4.8-.6-1.5-1.7-2.8-3-3.7C15.4 5.6 13.8 5 12 5" />
      {/* Interhemispheric fissure */}
      <line x1="12" y1="5" x2="12" y2="21" />
      {/* Left hemisphere gyri */}
      <path d="M7 9c.8-1.1 2.4-1.2 3.8-.5" />
      <path d="M6.4 13c1-1.2 2.8-1.2 4.2-.3" />
      <path d="M7.2 17c.8-.8 2.2-.9 3.4-.3" />
      {/* Right hemisphere gyri */}
      <path d="M13.2 8.5c1.4-.7 3 .6 3.8 1.5" />
      <path d="M13.4 12.7c1.4-.9 3.2-.9 4.2.3" />
      <path d="M13.4 16.7c1.2-.6 2.6-.5 3.4.3" />
    </svg>
  )
}
