import java.util.Scanner;

public class TypeConversionDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking inputs
        System.out.print("Enter an integer value: ");
        int primitiveInt = scanner.nextInt();
        
        scanner.nextLine(); // Consume the leftover newline
        
        System.out.print("Enter a numeric string (e.g., '500'): ");
        String strNum = scanner.nextLine();

        System.out.println("\n--- Performing Conversions ---");

        // 1. Convert int to Integer (Explicit conversion instead of Autoboxing)
        Integer objInteger1 = Integer.valueOf(primitiveInt);
        System.out.println("1. int to Integer: " + objInteger1);

        // 2. Convert Integer to String
        String strFromInteger = objInteger1.toString();
        System.out.println("2. Integer to String: " + strFromInteger);

        // 3. Convert String to int
        int intFromString = Integer.parseInt(strNum);
        System.out.println("3. String to int: " + intFromString);

        // 4. Convert int to String
        String strFromInt = String.valueOf(primitiveInt);
        System.out.println("4. int to String: " + strFromInt);

        // 5. Convert String to Integer
        Integer objInteger2 = Integer.valueOf(strNum);
        System.out.println("5. String to Integer: " + objInteger2);

        // 6. Convert Integer to int (Explicit Unboxing)
        int unboxedInt = objInteger1.intValue();
        System.out.println("6. Integer to int: " + unboxedInt);

        scanner.close();
    }
}