import { parseISO, format } from "date-fns";

export default function Date({ value }: { value: string }) {
  return (
    <time dateTime={value}>{format(parseISO(value), "LLLL d, yyyy")}</time>
  );
}
