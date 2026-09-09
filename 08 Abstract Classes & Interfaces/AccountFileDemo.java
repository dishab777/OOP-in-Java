import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

// 1. Abstract Base Class
abstract class Account {
    String accountNumber;
    String holderName;
    double balance;

    // Constructor
    Account(String accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    // Abstract method for polymorphism
    abstract double calculateInterest();
    
    // Helper method to format account details for the report
    String getAccountDetails() {
        return "Account No: " + accountNumber + "\nHolder: " + holderName + 
               "\nBalance: $" + balance + "\nCalculated Interest: $" + calculateInterest() + "\n";
    }
}

// 2. Subclass for Savings Account
class SavingsAccount extends Account {
    
    SavingsAccount(String accountNumber, String holderName, double balance) {
        super(accountNumber, holderName, balance);
    }

    // Implicitly overridden method (4% interest)
    double calculateInterest() {
        return balance * 0.04; 
    }
}

// 3. Subclass for Fixed Deposit Account
class FixedDepositAccount extends Account {
    
    FixedDepositAccount(String accountNumber, String holderName, double balance) {
        super(accountNumber, holderName, balance);
    }

    // Implicitly overridden method (7% interest)
    double calculateInterest() {
        return balance * 0.07; 
    }
}

// Main Execution Class
public class AccountFileDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- Enter Savings Account Details ---");
        System.out.print("Holder Name: ");
        String sName = scanner.nextLine();
        System.out.print("Account Number: ");
        String sAcc = scanner.nextLine();
        System.out.print("Balance: ");
        double sBal = scanner.nextDouble();
        scanner.nextLine(); // Consume newline
        
        System.out.println("\n--- Enter Fixed Deposit Details ---");
        System.out.print("Holder Name: ");
        String fName = scanner.nextLine();
        System.out.print("Account Number: ");
        String fAcc = scanner.nextLine();
        System.out.print("Balance: ");
        double fBal = scanner.nextDouble();
        
        // Applying Polymorphism using an array
        Account[] bankAccounts = new Account[2];
        bankAccounts[0] = new SavingsAccount(sAcc, sName, sBal);
        bankAccounts[1] = new FixedDepositAccount(fAcc, fName, fBal);
        
        String fileName = "BankReport.txt";
        
        // --- WRITING TO FILE ---
        System.out.println("\n[System] Writing report to file (" + fileName + ")...");
        try {
            FileWriter writer = new FileWriter(fileName);
            writer.write("==== OFFICIAL BANK REPORT ====\n\n");
            
            for (int i = 0; i < bankAccounts.length; i++) {
                writer.write("Account Type: " + bankAccounts[i].getClass().getSimpleName() + "\n");
                writer.write(bankAccounts[i].getAccountDetails());
                writer.write("------------------------------\n");
            }
            
            writer.close(); // Always close the writer to save the file
            System.out.println("[System] Report successfully saved.");
        } catch (IOException e) {
            System.out.println("Error: Could not write to the file.");
        }
        
        // --- READING FROM FILE ---
        System.out.println("\n[System] Reading report from file:\n");
        try {
            FileReader reader = new FileReader(fileName);
            int character;
            
            // FileReader reads one character at a time as an integer. 
            // We cast it to (char) to print it, and stop when it returns -1 (End of File)
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
            
            reader.close(); // Always close the reader
        } catch (IOException e) {
            System.out.println("Error: Could not read the file.");
        }
        
        scanner.close();
    }
}