export function createTicket(
  prevTicket: number,
  comment: string,
): [number, string, boolean] {
  if (comment.toLocaleLowerCase().includes("critical")) {
    return [prevTicket + 1, comment, true];
  }
  return [prevTicket + 1, comment, false]
}
