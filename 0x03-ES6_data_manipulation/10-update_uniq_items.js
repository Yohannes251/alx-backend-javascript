export default function updateUniqueItems(map1) {
  if (map1 instanceof Map === false) {
    throw Error('Cannot process');
  }
  for (const key of map1.keys()) {
    if (map1.get(key) === 1) {
      try {
        map1.set(key, 100);
      } catch (err) {
        throw Error('Cannot process');
      }
    }
  }
  return map1;
}
