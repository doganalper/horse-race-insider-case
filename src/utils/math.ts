export function calculatePercentage(baseNumber: number,calculateNumber: number) {
  if (baseNumber === 0) {
    return baseNumber
  }

  const percentage = (calculateNumber / baseNumber) * 100;

  return percentage;
}
