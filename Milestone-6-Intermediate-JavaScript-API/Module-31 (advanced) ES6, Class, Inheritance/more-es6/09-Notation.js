const student = {
    name: 'Sazzad',
    age: 40,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemestry: 65
    }
}
const marks = student.marks;
const math = student.marks.math;
const chemistry = student['marks']['chemestry'];

const subject = 'physics';
const subjMarks = student.marks[subject];
// const marks2 = student.marks[subj];

// console.log(marks);
// console.log(math);
// console.log(chemistry);
console.log(subjMarks);
