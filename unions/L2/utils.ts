export function calculateApiCost(numReqs: number, tier?: string) {
  if (tier === undefined) {
    return numReqs * 0.10
  } else if (tier === "pro") {
    return numReqs * 0.05
  } else {
    return numReqs * 0.03
  }
}
