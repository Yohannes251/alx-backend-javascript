export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dvw = new DataView(buffer);
  try {
    dvw.setInt8(position, value);
  } catch (err) {
    throw Error('Position outside range');
  }
  return dvw;
}
