import Person from './Person';

export default class Student extends Person {
  /**
   * GoToClasses
   */
  public GoToClasses(): void {
    console.log("I'm going to class");
  }

  /**
   * ShowAge
   */
  public ShowAge(): void {
    console.log(`My age is ${this._age} years old`);
  }
}
