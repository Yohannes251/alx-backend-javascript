export default function hasValuesFromArray(set, array) {
  for (const val of array) {
    if (set.has(val) === false) {
      return false;
    }
  }
  return true;
}
