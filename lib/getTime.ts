import timezones from "../assets/timezones.json";

export function getTimeAtLocation(text: string) {
  const replacedText = text.replaceAll(new RegExp("time|in"), "").trim();
}
