export function tokenize(input: string): [number, ...string[]] {
  const splitWords = input.split(" ");
  const cost = splitWords.length / 100;

  return [cost, ...splitWords]
}
