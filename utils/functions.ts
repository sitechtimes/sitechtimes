export function format(apiDate: string) {
  return new Date(apiDate).toLocaleString("en", {
    month: "short",
    weekday: "short",
    day: "numeric",
    year: "numeric"
  });
}
