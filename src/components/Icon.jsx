const iconShapes = {
  adventure: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-2 4.1-3.6 1.5 1.5-3.6 4.1-2Z" />
      <path d="M12 3.5v2M20.5 12h-2M12 20.5v-2M3.5 12h2" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-8.8 0-14 3.8-14 10a6 6 0 0 0 6 6c6.2 0 10-5.2 8-16Z" />
      <path d="M4 21c3-5 6.5-8 12-11" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5.5 9.2A2.5 2.5 0 0 0 6.6 22h10.8a2.5 2.5 0 0 0 2.1-3.8L14 9V3" />
      <path d="M7.5 16h9" />
      <circle cx="10" cy="18.5" r=".7" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="18.5" r=".7" fill="currentColor" stroke="none" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 3l.7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8-1.8-.7 1.8-.7L5 3Z" />
    </>
  ),
  planet: (
    <>
      <circle cx="12" cy="12" r="6.3" />
      <ellipse cx="12" cy="12" rx="10" ry="3.3" transform="rotate(-24 12 12)" />
      <path d="M8.5 10.5c1-.7 2-.8 3-.4M14.7 14.5h.1" />
    </>
  ),
  astronaut: (
    <>
      <path d="M7 10a5 5 0 0 1 10 0v2H7v-2Z" fill="#fff" />
      <rect x="6" y="9" width="12" height="10" rx="5" fill="#fff" />
      <path d="M8.5 11.5h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5Z" fill="#b9ddff" />
      <path d="M9.5 13h5M8 19v2M16 19v2M6 14H4M20 14h-2" />
      <path d="M9 19h6l1.5 2h-9L9 19Z" fill="#ffb45c" />
    </>
  ),
  gamepad: (
    <>
      <path d="M7.2 8h9.6a4 4 0 0 1 3.9 3.1l1 4.2a2.8 2.8 0 0 1-4.6 2.7l-2.2-1.8H9.1l-2.2 1.8a2.8 2.8 0 0 1-4.6-2.7l1-4.2A4 4 0 0 1 7.2 8Z" />
      <path d="M8 11v4M6 13h4M16.5 12.2h.1M18.5 14.5h.1" />
    </>
  ),
  cat: (
    <>
      <path d="m5 10 1-5 4 3h4l4-3 1 5v5a7 7 0 0 1-14 0v-5Z" />
      <path d="M9 13h.1M15 13h.1M10 16c1.2 1 2.8 1 4 0M5 15l-3-1M19 15l3-1M5 18l-3 1M19 18l3 1" />
    </>
  ),
  car: (
    <>
      <path d="m4 14 1.5-5h13l1.5 5v5h-2v-2H6v2H4v-5Z" />
      <path d="m7 9 1.5-3h7L17 9M4 14h16" />
      <circle cx="7.5" cy="14.5" r="1" />
      <circle cx="16.5" cy="14.5" r="1" />
    </>
  ),
  rabbit: (
    <>
      <path d="M9 10 7 3c-.4-1.4 1.8-2 2.5-.7L13 9M14 9l2.5-7c.5-1.4 2.7-.7 2.3.8L17 11" />
      <circle cx="12" cy="15" r="7" />
      <path d="M9.5 14h.1M14.5 14h.1M10.5 17c1 .8 2 .8 3 0" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4c2.4-1.5 4.5-1.5 6-1-0.1 3.6-1.4 6.3-4 8l-5 5-4-4 5-5 2-3Z" />
      <path d="m11 7-4-.5-3 3.5 5 1M16 12l1 5-3.5 3-.5-4" />
      <circle cx="15.5" cy="7.5" r="1.5" />
      <path d="M7 15c-2 .2-3.4 1.6-4 4 2.4-.6 3.8-2 4-4Z" />
    </>
  ),
  wand: (
    <>
      <path d="m6 18 9-9M5 19l-1 1M13 8l1-2M18 5l1-2M19 11l2-1M9 4l1 2" />
      <path d="m17 3 .7 2.3L20 6l-2.3.7L17 9l-.7-2.3L14 6l2.3-.7L17 3Z" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12c2.5-3.5 6-5 10-5 3 0 5 1.5 7 5-2 3.5-4 5-7 5-4 0-7.5-1.5-10-5Z" />
      <path d="m20 12 3-3v6l-3-3ZM8 10h.1M13 10.5c1 1 1 2 0 3" />
    </>
  ),
  cake: (
    <>
      <path d="M5 13a2 2 0 0 1 4 0 2 2 0 0 1 4 0 2 2 0 0 1 4 0 2 2 0 0 1 4 0v7H3v-7a2 2 0 0 1 2 0Z" />
      <path d="M3 17h18M11 7V4M11 4a1.5 1.5 0 1 1 3 0c0 1-1.5 1-1.5 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-1a6 6 0 0 1 12 0v1H3ZM16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.5V20h-3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  tablet: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
      <path d="M10 18.5h4" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 6 1.5 4.5L18 12l-4.5 1.5L12 18l-1.5-4.5L6 12l4.5-1.5L12 6Z" />
    </>
  ),
  pencil: (
    <>
      <path d="m4 16.5-.8 4.3 4.3-.8L20 7.5 16.5 4 4 16.5Z" />
      <path d="m14.8 5.7 3.5 3.5M4 16.5l3.5 3.5" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </>
  ),
}

export default function Icon({ name, size = 20, className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
    >
      {iconShapes[name] || iconShapes.gamepad}
    </svg>
  )
}
