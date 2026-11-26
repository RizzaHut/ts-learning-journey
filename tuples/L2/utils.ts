export type Ticket = readonly [number, string, boolean, boolean];

// don't touch above this line

export function resolveTicket(ticket: Ticket) {
  const newTicket = [...ticket];
  newTicket[3] = true;
  return newTicket;
}
