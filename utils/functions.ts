/**
 * Blocks the current thread (unlike setTimeout) for a specified amount of time.
 * @warning Be sure to await this function in order to actually use the delay.
 * @param {number} ms - Number of milliseconds to delay.
 * @example await delay(1000); // Wait for 1 second
 */
export function delay(ms: number): Promise<void> {
  return new Promise((executor: any) => setTimeout(executor, ms));
}

export function format(apiDate: string) {
  return new Date(apiDate).toLocaleString("en", {
    month: "short",
    weekday: "short",
    day: "numeric",
    year: "numeric"
  });
}
