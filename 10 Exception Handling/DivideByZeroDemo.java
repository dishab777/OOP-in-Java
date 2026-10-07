import java.util.Scanner;
public class DivideByZeroDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter numerator: ");
            int numerator = scanner.nextInt();
            System.out.print("Enter denominator: ");
            int denominator = scanner.nextInt();
            int result = numerator / denominator;
            System.out.println("Result of division: " + result);
        } catch (ArithmeticException e) {
            System.out.println("[Exception Caught]: Division by zero is not allowed.");
        } catch (Exception e) {
            System.out.println("[Error]: Invalid input received.");
        } finally {
            scanner.close();
        }
    }
}