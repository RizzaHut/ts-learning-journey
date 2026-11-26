export type SupportAgent = {
  id: number;
  role: "agent";
  assignedTickets: number;
};

export type EndUser = {
  id: number;
  role: "customer";
  submittedTickets: number;
};

// don't touch above this line

export type SupportAdmin = {
  id: number;
  role: "admin";
  assignedTickets: number;
};

export type SupportAgentUser = SupportAgent | SupportAdmin | EndUser;

export function getTicketCount(user: SupportAgentUser): number {
  if (user.role === "agent" || user.role === "admin") {
    return user.assignedTickets;
  }
  return user.submittedTickets;
}
