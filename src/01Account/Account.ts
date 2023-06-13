class Account {
  private _titular: string = '';
  private _amount: number = 0;

  constructor(titular: string, amount: number) {
    this._titular = titular;
    this._amount = amount;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(value: string) {
    this._titular = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._amount += amount;
    }
  }

  retire(amount: number): void {
    if (this._amount - amount < 0) {
      this._amount = 0;
    } else {
      this._amount -= amount;
    }
  }

  toString(): string {
    return `titular: ${this._titular} and amount: ${this._amount}`;
  }
}

const account = new Account('kevin', 20.5);

account.retire(20);
console.log(account.toString());

// account.deposit(80);
// console.log(account.amount);
