export function averageScore(ratings: number[]) {
  if (!ratings || ratings.length === 0) {
    return 0;
  }
  const sum = ratings.reduce((acc, curr) => acc + curr, 0);
  return sum / ratings.length
}
