export default function cleanSet(set, startString) {
  const output = [];
  if (startString.length === 0) {
    return '';
  }
  for (const str of set) {
    if (str.startsWith(startString) === true) {
      output.push(str.slice(startString.length));
    }
  }
  return output.join('-');
}
