export default function getStudentIdsSum(arrObjs) {
  return arrObjs.reduce((previous, current) => previous + current.id, 0);
}
