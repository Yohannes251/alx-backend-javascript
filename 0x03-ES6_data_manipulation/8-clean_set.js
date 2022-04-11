export default function cleanSet(set, startString) {
  const output = [];
  for (const str of set) {
    if (str.startsWith(startString) === true && startString.length !== 0) {
      output.push(str.slice(startString.length));
    }
  }
  return output.join('-');
}
