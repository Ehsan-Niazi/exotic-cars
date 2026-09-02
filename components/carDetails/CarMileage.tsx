export default function CarMileage({
  mileage,
}: {
  mileage: number | undefined;
}) {
  return <span>{mileage?.toString() ?? "0"} km . </span>;
}
