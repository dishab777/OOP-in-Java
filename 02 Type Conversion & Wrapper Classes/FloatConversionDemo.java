import java.util.Scanner;

public class FloatConversionDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking inputs
        System.out.print("Enter a decimal value (float): ");
        float primitiveFloat = scanner.nextFloat();
        
        scanner.nextLine(); // Consume the leftover newline
        
        System.out.print("Enter a numeric string with decimals (e.g., '15.75'): ");
        String strNum = scanner.nextLine();

        System.out.println("\n--- Performing Float Conversions ---");

        // 1. Convert float to Float (Explicit boxing)
        Float objFloat1 = Float.valueOf(primitiveFloat);
        System.out.println("1. float to Float: " + objFloat1);

        // 2. Convert Float to String
        String strFromFloatObj = objFloat1.toString();
        System.out.println("2. Float to String: " + strFromFloatObj);

        // 3. Convert String to float (Parsing)
        float floatFromString = Float.parseFloat(strNum);
        System.out.println("3. String to float: " + floatFromString);

        // 4. Convert float to String
        String strFromPrimitive = String.valueOf(primitiveFloat);
        System.out.println("4. float to String: " + strFromPrimitive);

        // 5. Convert String to Float
        Float objFloat2 = Float.valueOf(strNum);
        System.out.println("5. String to Float: " + objFloat2);

        // 6. Convert Float to float (Explicit unboxing)
        float unboxedFloat = objFloat1.floatValue();
        System.out.println("6. Float to float: " + unboxedFloat);

        scanner.close();
    }
}