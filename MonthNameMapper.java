import java.util.Scanner;

public class MonthNameMapper {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input
        System.out.print("Enter a month number (1-12): ");
        int month = scanner.nextInt();

        String monthName;

        // Map the number to the corresponding month using a switch statement
        switch (month) {
            case 1:
                monthName = "January";
                break;
            case 2:
                monthName = "February";
                break;
            case 3:
                monthName = "March";
                break;
            case 4:
                monthName = "April";
                break;
            case 5:
                monthName = "May";
                break;
            case 6:
                monthName = "June";
                break;
            case 7:
                monthName = "July";
                break;
            case 8:
                monthName = "August";
                break;
            case 9:
                monthName = "September";
                break;
            case 10:
                monthName = "October";
                break;
            case 11:
                monthName = "November";
                break;
            case 12:
                monthName = "December";
                break;
            default:
                monthName = "Invalid input! Please enter a number between 1 and 12.";
                break;
        }

        // Print the final result
        System.out.println("Result: " + monthName);

        scanner.close();
    }
}