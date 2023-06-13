type Gender = 'F' | 'M';

class Person {
  private _name: string;
  private _age: number;
  private DNI: string = "";
  private _sex: Gender;
  private _weight: number;
  private _height: number;

  constructor(name: string, age: number, sex: Gender);
  constructor(
    name: string,
    age: number,
    sex: Gender,
    weight: number,
    height: number
  );
  constructor(
    name: string,
    age: number,
    sex: Gender,
    weight?: number,
    height?: number
  ) {
    this._name = name;
    this._age = age;
    this._sex = sex || 'M';
    this._weight = weight || 0;
    this._height = height || 0;
    this.generateDNI();
  }

  get name(): string {
    return this._name;
  }

  calculateIMC(): number {
    let imc = this._weight / Math.pow(this._height, 2);

    if (imc < 20) {
      return -1;
    } else if (imc >= 20 || imc <= 25) {
      return 0;
    } else if (imc > 25) {
      return 1;
    } else {
      return -2;
    }
  }

  isAdult(): boolean {
    if (this._age >= 18) {
      return true;
    }
    return false;
  }

  private generateDNI(): void {
    let numDNI: number = Math.floor(Math.random() * 10000);
    let randomNumber: number = Math.floor(Math.random() * 22) + 1;
    let letterDNI: string = this.generateLetterDNI(randomNumber);
    this.DNI = numDNI.toString() + letterDNI;
  }

  private generateLetterDNI(randomNumber: number): string {
    const letters: string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
      'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
      'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    return letters[randomNumber];
  }

  toString(): string {
    return `Name: ${this._name} Age: ${this._age} Sex: ${this._sex} DNI: ${this.DNI}`;
  }
}

const person1 = new Person('Emily', 26, 'F');
const person2 = new Person('kevin', 17, 'M', 65, 1.7);

console.log(person1);
console.log(person2);

console.log(person1.isAdult());
console.log(person2.isAdult());
// console.log(person1.name);

export { };