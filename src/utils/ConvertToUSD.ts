export default function convertToUSD(value?: number) {
  if (!value) {
    return undefined;
  }
  return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}
