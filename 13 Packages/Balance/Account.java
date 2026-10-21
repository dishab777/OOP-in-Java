package Balance;
public class Account {
    String accountHolder;
    double balance;
    public Account(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    public void Display_Balance() {
        System.out.println("Account Holder : " + accountHolder);
        System.out.println("Current Balance: Rs. " + balance);
    }
}