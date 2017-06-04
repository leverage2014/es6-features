class BankAccount {
	constructor(balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}

	set balance(val) {
		this._balance = val;
		this.balanceUpdatedAt = new Date();
	}

	get balance() {
		return this._balance;
	}

	deposit(amount){
		if (typeof amount === 'number') {
			this.balance += amount;
			return true;
		} else {
			console.log('Amount must be a number!');
			return false;
		}
	}

	Withdraw(amount){
		if (typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('Amount must be a number!');
			return false;
		}
	}

	printBalance(){
		console.log(`Your account balance is $${this.balance}! Last updated at ${this.balanceUpdatedAt}`);
	}
}


var account = new BankAccount(100);
account.deposit(100);
account.Withdraw(10);
account.printBalance();

var account2 = new BankAccount(';dfjd');
account2.deposit('andrew');
account2.Withdraw(true);
account2.printBalance();


