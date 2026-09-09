import java.util.Scanner;
public class ConsoleUppercaseDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("--- Statement Capitalization ---");
        System.out.print("Enter a statement: ");
        String statement = scanner.nextLine();
        char[] characters = statement.toCharArray();
        for (int i = 0; i < characters.length; i++) {
            if (characters[i] >= 'a' && characters[i] <= 'z') {
                characters[i] = (char) (characters[i] - 32);
            }
        }
        String result = new String(characters);
        System.out.println("\n--- Processing ---");
        System.out.println("Original Statement: " + statement);
        System.out.println("Uppercase Statement: " + result);
        scanner.close();
    }
}