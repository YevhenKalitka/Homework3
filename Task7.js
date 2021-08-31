/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
let id = 0;
const Transaction = {
      DEPOSIT: 'deposit',
      WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        id++;
        return {amount, type, id};
    },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
         }
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if ((amount > 0) && (amount <= this.balance)) {
        this.balance -= amount;
    }
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
    },
   /* Метод возвращает текущий баланс
   */
  getBalance() {
      return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
      for (let i = 0; i < this.transactions.length; i++) {
          if (this.transactions[i].id === id) {
                return Object.values(this.transactions[i]);
          }
      }

  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
      let report = 0;
      for (let i = 0; i < this.transactions.length; i++) {
          if (this.transactions[i].type === type) {
              report += this.transactions[i].amount;
          }
      }
    return report;
  },
};

console.log(account.getBalance());
console.log(account.deposit(200));
console.log(account.getBalance());
console.log(account.withdraw(100));
console.log(account.deposit(200));
console.log(account.deposit(200));
console.log(account.withdraw(150));
console.log(account.deposit(200));
console.log(account.getBalance());
console.log('_________________');
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionDetails(3));
