import java.util.Scanner;

public class SafeParsingDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Accept a numeric value as a String
        System.out.print("Enter a numeric value as a String: ");
        String inputStr = scanner.nextLine();

        System.out.println("\n--- Conversion Results ---");

        // 1. Attempt Integer Conversion
        try {
            int intValue = Integer.parseInt(inputStr);
            System.out.println("Integer Conversion: Successful -> " + intValue);
        } catch (NumberFormatException e) {
            System.out.println("Integer Conversion: Failed (Contains decimals, letters, or out of range)");
        }

        // 2. Attempt Long Conversion
        try {
            long longValue = Long.parseLong(inputStr);
            System.out.println("Long Conversion: Successful -> " + longValue);
        } catch (NumberFormatException e) {
            System.out.println("Long Conversion: Failed (Contains decimals, letters, or out of range)");
        }

        // 3. Attempt Float Conversion
        try {
            float floatValue = Float.parseFloat(inputStr);
            System.out.println("Float Conversion: Successful -> " + floatValue);
        } catch (NumberFormatException e) {
            System.out.println("Float Conversion: Failed (Invalid format)");
        }

        // 4. Attempt Double Conversion
        try {
            double doubleValue = Double.parseDouble(inputStr);
            System.out.println("Double Conversion: Successful -> " + doubleValue);
        } catch (NumberFormatException e) {
            System.out.println("Double Conversion: Failed (Invalid format)");
        }

        scanner.close();
    }
}