import { getRandomInt } from "@/utils/getRandomInt";

export const revalidate = 0;

export default function RandomPage() {
  return (
    <div className="grid gap-10 p-10">
      <p>
        I want this HTML page to show a random number between 0 and 100 every
        time I refresh the browser
      </p>
      <p>
        Random Number: <b>{getRandomInt(100)}</b>
      </p>
    </div>
  );
}
