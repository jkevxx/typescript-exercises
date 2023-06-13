class Person {
  name: string;
  age: number;
  city: string;

  constructor(name: string);
  constructor(name: string, age: number);
  constructor(name: string, age: number, city: string);
  constructor(name: string, age?: number, city?: string) {
    this.name = name;
    this.age = age || 0;
    this.city = city || '';
  }
}

const person1 = new Person('Alice');
const person2 = new Person('Bob', 30);
const person3 = new Person('Charlie', 40, 'New York');
