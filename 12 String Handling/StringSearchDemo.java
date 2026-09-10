import java.util.Scanner;

public class StringSearchDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- String Search Operations ---");
        System.out.print("Enter the main string text: ");
        String mainText = scanner.nextLine();
        
        System.out.print("Enter a single character to search for: ");
        // Capturing just the first character of the user's input
        char searchChar = scanner.nextLine().charAt(0);
        
        System.out.print("Enter a substring to search for: ");
        String searchString = scanner.nextLine();
        
        System.out.println("\n--- Search Results ---");
        
        // 1. Searching for a character
        int firstCharLoc = mainText.indexOf(searchChar);
        int lastCharLoc = mainText.lastIndexOf(searchChar);
        
        System.out.println("Character Search: '" + searchChar + "'");
        System.out.println("First occurrence at index: " + firstCharLoc);
        System.out.println("Last occurrence at index: " + lastCharLoc);
        
        // 2. Searching for a substring
        int firstStrLoc = mainText.indexOf(searchString);
        int lastStrLoc = mainText.lastIndexOf(searchString);
        
        System.out.println("\nSubstring Search: \"" + searchString + "\"");
        System.out.println("First occurrence at index: " + firstStrLoc);
        System.out.println("Last occurrence at index: " + lastStrLoc);
        
        System.out.println("\n(Note: An index of -1 means the target was not found)");
        
        scanner.close();
    }
}