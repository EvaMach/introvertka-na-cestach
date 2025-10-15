const WindingPath = () => {
  return (
    <div className="absolute w-full -bottom-10 md:-bottom-5">
      {/* Mobile version */}
      <svg
        width="100%"
        height="80"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden"
      >
        <defs>
          <linearGradient
            id="fadeGradientMobile"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor="white" stopOpacity="0.3" />
            <stop offset="20%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="1" />
            <stop offset="95%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fadeMaskMobile">
            <rect
              x="0"
              y="0"
              width="400"
              height="80"
              fill="url(#fadeGradientMobile)"
            />
          </mask>
        </defs>

        <g mask="url(#fadeMaskMobile)">
          {/* Winding path */}
          <path
            d="M 0 40 Q 33 20, 67 35 T 133 40 Q 167 50, 200 25 T 267 40 Q 300 53, 333 30 T 400 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 8"
            className="text-accentTint"
          />

          {/* Hiker */}
          <g
            transform="translate(45, 10)"
            className="text-accentTintDarker"
            fill="currentColor"
          >
            <circle cx="0" cy="0" r="3" />
            <line
              x1="0"
              y1="3"
              x2="0"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="12"
              x2="3"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="12"
              x2="-3"
              y2="17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="5"
              x2="-4"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="5"
              x2="4"
              y2="9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="9"
              x2="5"
              y2="17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect x="-6" y="3" width="5" height="7" rx="1.5" />
          </g>

          {/* Tent */}
          <g
            transform="translate(360, 40)"
            className="text-title"
            fill="currentColor"
          >
            {/* Tent main body - A-frame tent */}
            <path
              d="M 0 -2 L -9 12 L 9 12 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
            {/* Tent back panel */}
            <path
              d="M 0 -2 L -9 12 L -6 12 L 0 2 Z"
              fill="currentColor"
              opacity="0.3"
            />
            {/* Tent entrance flap */}
            <path
              d="M 0 2 L -3 12 L 3 12 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Ground line */}
            <line
              x1="-11"
              y1="12"
              x2="11"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>

      {/* Desktop version */}
      <svg
        width="100%"
        height="80"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <defs>
          <linearGradient
            id="fadeGradientDesktop"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="3%" stopColor="white" stopOpacity="0.3" />
            <stop offset="15%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="1" />
            <stop offset="97%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fadeMaskDesktop">
            <rect
              x="0"
              y="0"
              width="1200"
              height="80"
              fill="url(#fadeGradientDesktop)"
            />
          </mask>
        </defs>

        <g mask="url(#fadeMaskDesktop)">
          {/* Winding path */}
          <path
            d="M 0 40 Q 100 15, 200 35 T 400 40 Q 500 50, 600 20 T 800 40 Q 900 55, 1000 25 T 1200 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 10"
            className="text-accentTint"
          />

          {/* Simple hiking person on the left */}
          <g
            transform="translate(140, 16)"
            className="text-accentTintDarker"
            fill="currentColor"
          >
            {/* Head */}
            <circle cx="0" cy="-8" r="3" />
            {/* Body */}
            <line
              x1="0"
              y1="-5"
              x2="0"
              y2="4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Front leg (walking) */}
            <line
              x1="0"
              y1="4"
              x2="3"
              y2="11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Back leg */}
            <line
              x1="0"
              y1="4"
              x2="-3"
              y2="10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Front arm (swinging back) */}
            <line
              x1="0"
              y1="-3"
              x2="-4"
              y2="2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Back arm with hiking pole */}
            <line
              x1="0"
              y1="-3"
              x2="4"
              y2="1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Hiking pole */}
            <line
              x1="4"
              y1="1"
              x2="5"
              y2="10"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Backpack - bigger */}
            <rect x="-6.5" y="-5" width="6" height="8" rx="2" />
          </g>

          {/* Tent on the right */}
          <g
            transform="translate(1100, 40)"
            className="text-title"
            fill="currentColor"
          >
            {/* Tent main body - A-frame tent */}
            <path
              d="M 0 -2 L -10 14 L 10 14 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
            {/* Tent back panel for depth */}
            <path
              d="M 0 -2 L -10 14 L -7 14 L 0 3 Z"
              fill="currentColor"
              opacity="0.3"
            />
            {/* Tent entrance flap */}
            <path
              d="M 0 3 L -3 14 L 3 14 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Ground line */}
            <line
              x1="-12"
              y1="14"
              x2="12"
              y2="14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default WindingPath;
