import { parseISO, format } from "date-fns";
import { cs } from "date-fns/locale";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "dd/L/yy", { locale: cs })}</time>
  );
};

export default DateFormatter;
