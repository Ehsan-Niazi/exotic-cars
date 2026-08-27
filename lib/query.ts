export function toggleInList(
  params: URLSearchParams,
  key: string,
  value: string
) {
  const current = params.get(key)?.split(",").filter(Boolean) ?? [];
  const next = current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value];

  if (next.length) params.set(key, next.join(","));
  else params.delete(key);

  params.delete("page"); // any filter change resets pagination
  return params;
}

export function setParam(params: URLSearchParams, key: string, value: string) {
  if (value) params.set(key, value);
  else params.delete(key);
  params.delete("page");
  return params;
}
