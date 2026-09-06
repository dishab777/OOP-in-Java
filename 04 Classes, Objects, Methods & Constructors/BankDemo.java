import java.util.Scanner;

class BankAccount {
    int accountNumber;
    String name;
    double balance;

    // Constructor 1: Account number only
    BankAccount(int accNum) {
        accountNumber = accNum;
        name = "Not Provided";
        balance = 0.0;
    }

    // Constructor 2: Account number and name
    BankAccount(int accNum, String accName) {
        accountNumber = accNum;
        name = accName;
        balance = 0.0;
    }

    // Constructor 3: Account number, name, and initial balance
    BankAccount(int accNum, String accName, double initialBal) {
        accountNumber = accNum;
        name = accName;
        balance = initialBal;
    }

    // Overloaded Method 1: Deposit integer amount
    void deposit(int amount) {
        balance = balance + amount;
        System.out.println("Deposited (int): $" + amount + " into Account " + accountNumber);
    }

    // Overloaded Method 2: Deposit double amount
    void deposit(double amount) {
        balance = balance + amount;
        System.out.println("Deposited (double): $" + amount + " into Account " + accountNumber);
    }

    // Method to display account details
    void display() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + name);
        System.out.println("Current Balance: $" + balance);
        System.out.println("-----------------------------------");
    }
}

public class BankDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- Creating Account 1 (ID Only) ---");
        System.out.print("Enter Account Number: ");
        int id1 = scanner.nextInt();
        BankAccount acc1 = new BankAccount(id1);
        
        scanner.nextLine(); // Consume newline

        System.out.println("\n--- Creating Account 2 (ID and Name) ---");
        System.out.print("Enter Account Number: ");
        int id2 = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        System.out.print("Enter Account Name: ");
        String name2 = scanner.nextLine();
        BankAccount acc2 = new BankAccount(id2, name2);

        System.out.println("\n--- Creating Account 3 (ID, Name, and Balance) ---");
        System.out.print("Enter Account Number: ");
        int id3 = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        System.out.print("Enter Account Name: ");
        String name3 = scanner.nextLine();
        System.out.print("Enter Initial Balance: ");
        double bal3 = scanner.nextDouble();
        BankAccount acc3 = new BankAccount(id3, name3, bal3);

        System.out.println("\n--- Initial Account States ---");
        acc1.display();
        acc2.display();
        acc3.display();

        System.out.println("--- Performing Transactions ---");
        
        System.out.print("Enter integer amount to deposit to Account 1: ");
        int depInt = scanner.nextInt();
        acc1.deposit(depInt);       // Calls deposit(int)

        System.out.print("Enter decimal amount to deposit to Account 2: ");
        double depDouble = scanner.nextDouble();
        acc2.deposit(depDouble);    // Calls deposit(double)

        System.out.println("\n--- Final Account Details ---");
        acc1.display();
        acc2.display();
        acc3.display();

        scanner.close();
    }
}