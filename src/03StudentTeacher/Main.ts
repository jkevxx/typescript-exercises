import Person from './Person';
import Student from './Student';
import Teacher from './Teacher';

const myPerson = new Person();
myPerson.Greet();

console.log('------------');

const myStudent = new Student();
myStudent.SetAge(21);
myStudent.Greet();
myStudent.ShowAge();

console.log('------------');

const myTeacher = new Teacher();
myTeacher.SetAge(30);
myTeacher.Greet();
myTeacher.Explain();
