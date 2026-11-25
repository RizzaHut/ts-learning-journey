export function getFileLength(files: Map<string, string>, filename: string) {
  const content = files.get(filename);
  if (content === undefined) {
    return 0;
  }
  const encoder = new TextEncoder();
  return encoder.encode(content).length
}
