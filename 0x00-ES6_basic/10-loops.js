export default function appendToEachArrayValue(array, appendString) {
  const output = [];
  for (const value of array) {
    output.push(appendString + value);
  }

  return output;
}
