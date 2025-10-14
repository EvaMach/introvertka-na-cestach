import React from "react";

interface Props {
  src: string;
  aspectRatio?: string;
}

function Iframe({ src, aspectRatio = "9/16" }: Props) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg max-h-96"
      style={{ aspectRatio }}
    >
      <iframe
        src={src}
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

export default Iframe;
