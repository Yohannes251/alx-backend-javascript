export default function cleanSet(set, startString) {
  const output = [];
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  for (const str of set) {
    if (str.startsWith(startString) === true && typeof str === 'string') {
      output.push(str.slice(startString.length));
    }
  }
  return output.join('-');
}
