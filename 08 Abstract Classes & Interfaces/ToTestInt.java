import java.util.Scanner;

// 1. Create an interface named 'test'
interface test {
    // Abstract method declaration (no body)
    int square(int number);
}

// 2. Implement the interface in an 'arithmetic' class
class arithmetic implements test {
    
    // Providing the concrete implementation for the square method
    public int square(int number) {
        return number * number;
    }
}

// 3. Use its object in another class 'ToTestInt'
public class ToTestInt {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- Interface Implementation Test ---");
        System.out.print("Enter an integer to calculate its square: ");
        int userInput = scanner.nextInt();
        
        // Creating an object of the arithmetic class
        arithmetic mathLogic = new arithmetic();
        
        // Using the object to call the implemented square method
        int result = mathLogic.square(userInput);
        
        System.out.println("\nCalculation complete!");
        System.out.println("The square of " + userInput + " is: " + result);
        
        scanner.close();
    }
}