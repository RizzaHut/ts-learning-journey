export function formatLabels(...labels: string[]) {
  if (!labels || labels.length === 0) {
    return "No Labels";
  } else if (labels.length == 1) {
    return `Label: ${labels}`;
  } else {
    return `Labels: ${[...labels]}`;
  }
}
