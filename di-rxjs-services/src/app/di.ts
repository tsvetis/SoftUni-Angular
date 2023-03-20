class Wallet {
  balance: number = 0;

  constructor(balance: number) {
    this.balance = balance;
  }
}

class Person {
  wallet: Wallet;
  name: string;

  constructor(name: string, wallet: Wallet) {
    this.name = name;
    this.wallet = wallet;
  }
}

const peshosWallet = new Wallet(2300);
const personPesho = new Person('Pesho', peshosWallet);

const ivansWallet = new Wallet(500);
const personIvan = new Person('Ivan', ivansWallet);
