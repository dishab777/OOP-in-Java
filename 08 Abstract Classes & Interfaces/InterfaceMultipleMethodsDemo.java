import java.util.Scanner;

// 1. Create interface A with two methods
interface A {
    void meth1(String userText);
    void meth2(int userNumber);
}

// 2. Implement the interface in a class named MyClass
class MyClass implements A {
    
    // Providing the concrete implementation for meth1
    public void meth1(String userText) {
        System.out.println("Executing meth1() -> The text you entered is: " + userText);
    }

    // Providing the concrete implementation for meth2
    public void meth2(int userNumber) {
        System.out.println("Executing meth2() -> The number you entered multiplied by 10 is: " + (userNumber * 10));
    }
}

// Main execution class
public class InterfaceMultipleMethodsDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- Interface A Setup ---");
        System.out.print("Enter a string to pass to meth1: ");
        String textInput = scanner.nextLine();
        
        System.out.print("Enter an integer to pass to meth2: ");
        int numberInput = scanner.nextInt();
        
        // Creating an object of MyClass
        MyClass myObject = new MyClass();
        
        System.out.println("\n--- Triggering Methods ---");
        // Using the object to call the implemented methods
        myObject.meth1(textInput);
        myObject.meth2(numberInput);
        
        scanner.close();
    }
}