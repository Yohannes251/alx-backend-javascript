export default function createIteratorObject(report) {
  let iterator = [];
  for (const employees of Object.values(report.allEmployees)) {
    iterator = iterator.concat(employees);
  }
  return iterator;
}
