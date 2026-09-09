import java.util.Scanner;

// 1. Create an interface having two methods
interface MathOperations {
    int division(int a, int b);
    int modules(int a, int b); // Represents the modulus (remainder) operation
}

// 2. Create a class that implements (overrides) these methods
class Calculator implements MathOperations {
    
    // Providing concrete implementation for division
    public int division(int a, int b) {
        return a / b;
    }
    
    // Providing concrete implementation for modules
    public int modules(int a, int b) {
        return a % b;
    }
}

// 3. Main execution class
public class InterfaceMathDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- Interface Math Operations ---");
        System.out.print("Enter the first integer (dividend): ");
        int num1 = scanner.nextInt();
        
        System.out.print("Enter the second integer (divisor): ");
        int num2 = scanner.nextInt();
        
        System.out.println("\n--- Processing ---");
        
        // Preventing the program from crashing if the user enters 0
        if (num2 == 0) {
            System.out.println("Error: Cannot divide or calculate modulus by zero.");
        } else {
            // Creating an object of the class that implemented the interface
            Calculator calc = new Calculator();
            
            // Calling the overridden methods
            int divResult = calc.division(num1, num2);
            int modResult = calc.modules(num1, num2);
            
            System.out.println("Division (" + num1 + " / " + num2 + ") = " + divResult);
            System.out.println("Modules/Remainder (" + num1 + " % " + num2 + ") = " + modResult);
        }
        
        scanner.close();
    }
}