export default function FuelType({
  transmission,
  fuel,
}: {
  transmission: string | undefined;
  fuel: string | undefined;
}) {
  return (
    <span>
      {transmission ?? "Automatic"} . {fuel ?? "Gasoline"}
    </span>
  );
}
