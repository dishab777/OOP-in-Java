import java.util.Scanner;

public class StringBufferCapitalizeDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- StringBuffer Capitalization ---");
        System.out.print("Enter a string to capitalize: ");
        String userInput = scanner.nextLine();
        
        // 1. Load the string into a mutable StringBuffer
        StringBuffer sb = new StringBuffer(userInput);
        
        // 2. Iterate through every character in the buffer
        for (int i = 0; i < sb.length(); i++) {
            
            // Get the character at the current index
            char currentChar = sb.charAt(i);
            
            // 3. Check if the character is a lowercase letter
            if (currentChar >= 'a' && currentChar <= 'z') {
                
                // 4. Subtract 32 from the ASCII value to make it uppercase
                char upperChar = (char) (currentChar - 32);
                
                // 5. Replace the old character with the new uppercase character
                sb.setCharAt(i, upperChar);
            }
        }
        
        System.out.println("\n--- Processing ---");
        System.out.println("Original String: " + userInput);
        System.out.println("Converted String: " + sb.toString());
        
        scanner.close();
    }
}