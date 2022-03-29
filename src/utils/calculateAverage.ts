export default function calculateAverage(values: number[]) {
  let total = 0;
  values.map((value) => {
    total += value;
  });
  const average = Number((total / values.length).toFixed(1));
  return average;
}
