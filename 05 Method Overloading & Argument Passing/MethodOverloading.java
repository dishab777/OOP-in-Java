import java.util.Scanner;

public class MethodOverloading {

    // Method 1: Multiplies two integers
    public static int multiply(int a, int b) {
        System.out.println("Executing multiply(int, int)");
        return a * b;
    }

    // Method 2: Multiplies three integers (Different number of parameters)
    public static int multiply(int a, int b, int c) {
        System.out.println("Executing multiply(int, int, int)");
        return a * b * c;
    }

    // Method 3: Multiplies two doubles (Different data types)
    public static double multiply(double a, double b) {
        System.out.println("Executing multiply(double, double)");
        return a * b;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Gathering inputs for Method 1 & 2
        System.out.println("--- Integer Multiplication ---");
        System.out.print("Enter first integer: ");
        int int1 = scanner.nextInt();
        System.out.print("Enter second integer: ");
        int int2 = scanner.nextInt();
        System.out.print("Enter third integer: ");
        int int3 = scanner.nextInt();

        // Gathering inputs for Method 3
        System.out.println("\n--- Double Multiplication ---");
        System.out.print("Enter first decimal number: ");
        double dub1 = scanner.nextDouble();
        System.out.print("Enter second decimal number: ");
        double dub2 = scanner.nextDouble();

        System.out.println("\n--- Method Execution ---");
        // Calling the overloaded methods
        int result1 = multiply(int1, int2);
        int result2 = multiply(int1, int2, int3);
        double result3 = multiply(dub1, dub2);

        // Displaying the results
        System.out.println("\n--- Final Results ---");
        System.out.println("Result 1 (Two Ints): " + result1);
        System.out.println("Result 2 (Three Ints): " + result2);
        System.out.println("Result 3 (Two Doubles): " + result3);
        
        scanner.close();
    }
}