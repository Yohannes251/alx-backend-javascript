export default function getListStudentIds(input) {
  if (Array.isArray(input)) {
    return input.map((element) => element.id);
  }
  return [];
}
