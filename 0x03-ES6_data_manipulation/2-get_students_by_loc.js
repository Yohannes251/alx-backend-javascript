export default function getStudentsByLocation(arrObjs, city) {
  return arrObjs.filter((student) => student.location === city);
}
