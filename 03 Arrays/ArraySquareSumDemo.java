import java.util.Scanner;
public class ArraySquareSumDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double[] numbers = new double[10];
        double[] squares = new double[10];
        double sumOfSquares = 0;
        System.out.println("--- Enter 10 Numbers ---");
        for (int i = 0; i < 10; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            numbers[i] = scanner.nextDouble();
            squares[i] = numbers[i] * numbers[i];
            sumOfSquares += squares[i];
        }
        System.out.println("\n----------------------------------------");
        System.out.printf("%-10s | %-12s | %-12s%n", "Index", "Number", "Square");
        System.out.println("----------------------------------------");
        for (int i = 0; i < 10; i++) {
            System.out.printf("%-10d | %-12.2f | %-12.2f%n", (i + 1), numbers[i], squares[i]);
        }
        System.out.println("----------------------------------------");
        System.out.printf("Sum of Squares: %.2f%n", sumOfSquares);
        scanner.close();
    }
}