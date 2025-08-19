using OOP.Encapsulation;

class Program
{
    static void Main(string[] args)
    {
        var account = new BadBankAccount
        {
            Balance = 1000.0
        };
        Console.WriteLine($"Account Number: {account.Balance}");

        // try
        // {
        //     account.Withdraw(1500.0);
        // }
        // catch (InvalidOperationException ex)
        // {
        //     Console.WriteLine($"Error: {ex.Message}");
        // }
        //
        // account.Deposit(500.0);
        // Console.WriteLine($"New Balance: {account.Balance}");
    }

}
