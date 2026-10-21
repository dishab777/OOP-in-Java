import Balance.Account;
public class AccountDemo {
    public static void main(String[] args) {
        Account userAccount = new Account("Disha Bothra", 45000.75);
        System.out.println("--- Accessing Balance Package ---");
        userAccount.Display_Balance();
    }
}