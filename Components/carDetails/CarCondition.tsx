export default function CarCondition({
  condition,
}: {
  condition: string | undefined;
}) {
  return <span>{condition ?? "Used"}</span>;
}
