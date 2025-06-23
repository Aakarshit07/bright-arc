export function stripHtmlTags(input: string) {
  if (!input) return "";
  return input.replace(/<[^>]*>/g, "").trim();
}
