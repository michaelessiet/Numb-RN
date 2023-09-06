export function removeTimeAndIn(inputString: string): string {
  return inputString.replace(/(time|in)\s+/g, "");
}
