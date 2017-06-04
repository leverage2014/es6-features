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

// SavingAccounts class that extends BankAccount
// Override withdrawal to print message that you can't
// Override deposit to print message call parent deposit method
class SavingAccounts extends BankAccount {
	deposit (amount) {
		if (super.deposit(amount)) {
			console.log(`Congrats! You saved $${amount}`);
		}
	}

	Withdraw () {
		console.log('You are not able to withdraw funds from you savings account!');
	}
}


var account = new SavingAccounts(500);
account.deposit(100);
account.printBalance();
account.Withdraw(10);
account.printBalance();

var account2 = new SavingAccounts(';dfjd');
account2.deposit('andrew');
account2.Withdraw(true);
account2.printBalance();


