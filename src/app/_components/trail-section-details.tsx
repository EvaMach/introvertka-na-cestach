interface TrailSectionDetail {
  terrain: string;
  lake: string;
  indoorSleeping: string;
  wildCamping?: string;
  provisions: string;
  signal: string;
  sauna: string;
}

interface TrailSectionDetailsProps {
  title: string;
  distance: string;
  elevation: string;
  details: TrailSectionDetail;
}

const localizationMap: { [key: string]: string } = {
  terrain: "Terén",
  lake: "Přes jezero",
  indoorSleeping: "Spaní se zázemím",
  wildCamping: "Spaní na divoko",
  provisions: "Zásoby",
  signal: "Signál",
  sauna: "Sauna",
};

export const renderDistance = (distance: string) => {
  const parts = distance.split(",").map((part) => part.trim());
  return (
    <>
      <span>{parts[0]}</span>
      {parts[1] && (
        <span className="text-base font-normal"> ({parts[1]}) </span>
      )}
    </>
  );
};

export default function TrailSectionDetails({
  title,
  distance,
  elevation,
  details,
}: TrailSectionDetailsProps) {
  const parseMarkdownLinks = (text: string) => {
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline hover:text-accent-dark"
        >
          {match[1]}
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderValue = (key: string, value: any) => {
    if (typeof value === "string") {
      return parseMarkdownLinks(value);
    }

    return value;
  };

  const renderDistance = (distance: string) => {
    const parts = distance.split(",").map((part) => part.trim());
    return (
      <>
        <span>{parts[0]}</span>
        {parts[1] && (
          <span className="text-lg font-normal"> ({parts[1]}) </span>
        )}
      </>
    );
  };

  return (
    <div className="my-6">
      <h3 className="font-semibold text-stone-800 mb-2">{title}</h3>
      <p className="text-lg text-stone-600 mb-4 font-medium">
        {renderDistance(distance)} | {elevation}
      </p>

      <ul className="space-y-3">
        {Object.entries(details).map(([key, value], index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-accent text-lg leading-none mt-0.5">●</span>
            <div className="flex-1">
              <span className="font-medium text-stone-800 text-lg">
                {localizationMap[key]}:
              </span>
              <span className="text-stone-900 text-lg ml-2">
                {renderValue(key, value)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
