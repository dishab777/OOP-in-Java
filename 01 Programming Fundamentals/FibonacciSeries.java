import java.util.Scanner;

public class FibonacciSeries {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of terms for the Fibonacci series: ");
        int n = scanner.nextInt();

        // The first two terms of the Fibonacci series are always 0 and 1
        int firstTerm = 0;
        int secondTerm = 1;

        System.out.println("\n--- Fibonacci Series up to " + n + " terms ---");

        // Loop to generate and print the series
        for (int i = 1; i <= n; i++) {
            System.out.print(firstTerm + " ");

            // Calculate the next term by adding the previous two
            int nextTerm = firstTerm + secondTerm;
            
            // Shift the values forward for the next iteration
            firstTerm = secondTerm;
            secondTerm = nextTerm;
        }

        System.out.println(); // Print a clean new line at the end
        scanner.close();
    }
}
