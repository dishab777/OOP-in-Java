import java.util.Scanner;

public class SumDivisibleByFive {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking inputs for the bounds and divisor
        System.out.print("Enter the lower limit (e.g., 40): ");
        int lowerBound = scanner.nextInt();

        System.out.print("Enter the upper limit (e.g., 250): ");
        int upperBound = scanner.nextInt();

        System.out.print("Enter the number to check divisibility (e.g., 5): ");
        int divisor = scanner.nextInt();

        int sum = 0;

        // Loop starting from one number greater than the lower bound and stopping right before the upper bound
        for (int i = lowerBound + 1; i < upperBound; i++) {
            
            // Check if the current number is perfectly divisible
            if (i % divisor == 0) {
                sum = sum + i; // Add it to the running total
            }
        }

        // Print the final calculated sum
        System.out.println("\nCalculated Result:");
        System.out.println("The sum of integers strictly between " + lowerBound + 
                           " and " + upperBound + " that are divisible by " + 
                           divisor + " is: " + sum);

        scanner.close();
    }
}