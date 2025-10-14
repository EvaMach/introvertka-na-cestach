const HeadingUnderline = () => {
  return (
    <svg
      width="100%"
      height="10"
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <path
        d="M 0 5 Q 25 2, 50 6 T 100 5 Q 125 8, 150 4 T 200 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 5"
        className="text-accent opacity-40"
      />
    </svg>
  );
};

export default HeadingUnderline;
