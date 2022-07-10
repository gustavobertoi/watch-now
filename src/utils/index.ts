export function stripTags(html: string) {
  const regex = /(<([^>]+)>)/gi;
  const result = html.replace(regex, "");
  return result;
}
