import java.util.Arrays;
import java.util.Scanner;
public class StudentMarksTabularDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] marks = new int[10];
        System.out.println("--- Enter Marks for 10 Students ---");
        for (int i = 0; i < 10; i++) {
            System.out.print("Enter marks for student " + (i + 1) + " (0-100): ");
            marks[i] = scanner.nextInt();
        }
        Arrays.sort(marks);
        System.out.println("\n-------------------------------------------");
        System.out.printf("%-10s | %-12s | %-15s%n", "S.No.", "Marks", "Grade");
        System.out.println("-------------------------------------------");
        for (int i = 0; i < marks.length; i++) {
            int score = marks[i];
            String grade;
            if (score > 75) {
                grade = "DISTINCTION";
            } else if (score >= 51) {
                grade = "MERIT";
            } else if (score >= 40) {
                grade = "PASS";
            } else {
                grade = "FAIL";
            }
            System.out.printf("%-10d | %-12d | %-15s%n", (i + 1), score, grade);
        }
        System.out.println("-------------------------------------------");
        scanner.close();
    }
}