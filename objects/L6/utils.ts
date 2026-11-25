export function findNumUniqueLabels(formattedAddresses: string[]) {
  return new Set<string>(formattedAddresses).size;
}
