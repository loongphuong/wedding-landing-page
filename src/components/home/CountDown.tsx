export function CountDown({
  period,
}: {
  period: { key: string; val: number };
}) {
  return (
    <span className="ml-4 mr-4 uppercase w-1/5 flex-grow">
      <span className="block font-name text-7xl">
        {String(period.val).padStart(2, "0")}
      </span>
      <span className="block text-sm">{period.key}</span>
    </span>
  );
}
