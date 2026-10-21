import java.util.Scanner;
public class DigitCombinationsDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] digits = new int[3];
        System.out.println("--- Enter 3 Digits (0-9) ---");
        for (int i = 0; i < 3; i++) {
            System.out.print("Enter digit " + (i + 1) + ": ");
            digits[i] = scanner.nextInt();
        }
        System.out.println("\n--- All Possible Combinations ---");
        int count = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                for (int k = 0; k < 3; k++) {
                    if (i != j && j != k && i != k) {
                        count++;
                        System.out.println("Combination " + count + ": " + digits[i] + digits[j] + digits[k]);
                    }
                }
            }
        }
        scanner.close();
    }
}