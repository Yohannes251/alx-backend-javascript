export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => { /* eslint-disable no-param-reassign */
    student.grade = 'N/A';
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
    return student;
  }).filter((student) => student.location === city);
}
