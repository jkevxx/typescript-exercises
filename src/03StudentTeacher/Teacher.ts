import Person from './Person';

export default class Teacher extends Person {
  private _subject: string = '';

  /**
   * Explain
   */
  public Explain(): void {
    console.log('Explanation begins');
  }
}
