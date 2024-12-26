export function CountDown({
  period,
}: {
  period: { key: string; val: number };
}) {
  return (
    <span className="mx-4 inline-block uppercase w-1/5 max-sm:w-1/3 flex-grow max-sm:mx-0 text-center">
      <span className="block font-name text-7xl max-sm:text-5xl">
        {String(period.val).padStart(2, "0")}
      </span>
      <span className="block text-sm">{period.key}</span>
    </span>
  );
}
