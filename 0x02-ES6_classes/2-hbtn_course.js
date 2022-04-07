export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this._length = length;
    this._students = students;
  }

  // Getter/setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter/setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof (newLength) === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter/setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (newStudents.isArray() === 'true') {
      for (const student of newStudents) {
        if (typeof (student) !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
