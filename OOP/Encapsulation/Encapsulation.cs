namespace OOP.Encapsulation;

public class BadBankAccount
{
    public string AccountNumber { get; set; }

    private double _balance;

    public double Balance
    {
        get { return _balance; }
        set
        {
            if (value >= 0) // positive balance check
            {
                _balance = value;
            }
            else
            {
                Console.WriteLine("❌ Balance cannot be negative!");
            }
        }
    }

    public BadBankAccount(double Balance = 0.0)
    {
        if (Balance < 0)
        {
            throw new ArgumentException("Balance cannot be negative");
        }
        AccountNumber = Guid.NewGuid().ToString();
        this._balance = Balance;
    }


    public void Withdraw(double amount)
    {
        if (amount > Balance)
        {
            throw new InvalidOperationException("Insufficient funds");
        }
        Balance -= amount;
    }


    public void Deposit(double amount)
    {
        Balance += amount;
    }
}
