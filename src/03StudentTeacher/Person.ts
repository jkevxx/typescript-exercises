class Person {
  protected _age: number = 0;

  /**
   * Greet
   */
  public Greet(): void {
    console.log('Hello');
  }

  /**
   * set Age
   */
  public SetAge(number: number): void {
    this._age = number;
  }
}

export default Person;
