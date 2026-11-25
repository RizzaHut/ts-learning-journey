export type Priority = "low"|"medium"|"high"|"critical";

export function setPriority(level: Priority) {
  if (level === "low") {
    return 0
  } else if (level === "medium") {
    return 1
  } else if (level === "high") {
    return 2
  } else if (level === "critical") {
    return 3
  } else {
    return 0
  }
}
