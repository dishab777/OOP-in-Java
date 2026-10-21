import java.util.Scanner;

public class StudentGradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("--- Student Details Input ---");

        System.out.print("Enter Student Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Roll Number: ");
        int rollNumber = scanner.nextInt();

        System.out.print("Enter Marks in Subject 1 (out of 100): ");
        double marks1 = scanner.nextDouble();

        System.out.print("Enter Marks in Subject 2 (out of 100): ");
        double marks2 = scanner.nextDouble();

        System.out.print("Enter Marks in Subject 3 (out of 100): ");
        double marks3 = scanner.nextDouble();

        double totalMarks = marks1 + marks2 + marks3;
        double percentage = totalMarks / 3.0;

        char grade;
        if (percentage >= 90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        System.out.println("\n--- Student Result Sheet ---");
        System.out.println("Name         : " + name);
        System.out.println("Roll Number  : " + rollNumber);
        System.out.println("Total Marks  : " + totalMarks + " / 300");
        System.out.printf("Percentage   : %.2f%%\n", percentage);
        System.out.println("Grade        : " + grade);

        scanner.close();
    }
}