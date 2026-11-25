export function getTicketInfo(id: string|number) {
  if (typeof id === "string") {
    id = parseInt(id.split("-")[1]);
  }
  return `Processing ticket: ${id}`
}
