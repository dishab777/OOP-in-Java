import java.util.Scanner;

class AcademicStudent {
    int rollNumber;
    String name;
    double mark1;
    double mark2;
    double mark3;

    // Constructor to set up the student
    AcademicStudent(int roll, String n, double m1, double m2, double m3) {
        rollNumber = roll;
        name = n;
        mark1 = m1;
        mark2 = m2;
        mark3 = m3;
    }

    // Method to calculate percentage
    double getPercentage() {
        return (mark1 + mark2 + mark3) / 3.0;
    }

    // Method to determine grade based on percentage
    String getGrade() {
        double p = getPercentage();
        if (p >= 90) {
            return "A";
        } 
        else if (p >= 75) {
            return "B";
        } 
        else if (p >= 50) {
            return "C";
        } 
        else {
            return "F";
        }
    }

    // Method to print the data
    void display() {
        System.out.println("Roll: " + rollNumber + " | Name: " + name + 
                           " | Percentage: " + String.format("%.2f", getPercentage()) + "% | Grade: " + getGrade());
    }
}

public class StudentArrayDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("How many students do you want to enter? ");
        int count = scanner.nextInt();
        
        // Create an array to hold the objects
        AcademicStudent[] students = new AcademicStudent[count];

        // Loop to initialize each student object
        for (int i = 0; i < count; i++) {
            System.out.println("\n--- Enter Details for Student " + (i + 1) + " ---");
            System.out.print("Roll Number: ");
            int roll = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            
            System.out.print("Name: ");
            String name = scanner.nextLine();
            
            System.out.print("Marks in Subject 1: ");
            double m1 = scanner.nextDouble();
            System.out.print("Marks in Subject 2: ");
            double m2 = scanner.nextDouble();
            System.out.print("Marks in Subject 3: ");
            double m3 = scanner.nextDouble();
            
            students[i] = new AcademicStudent(roll, name, m1, m2, m3);
        }

        // Sort the array in descending order based on percentage
        for (int i = 0; i < students.length - 1; i++) {
            for (int j = 0; j < students.length - i - 1; j++) {
                // Compare percentages
                if (students[j].getPercentage() < students[j + 1].getPercentage()) {
                    // Swap the objects
                    AcademicStudent temp = students[j];
                    students[j] = students[j + 1];
                    students[j + 1] = temp;
                }
            }
        }

        // Display all students (now sorted descending)
        System.out.println("\n--- Students in Descending Order ---");
        for (int i = 0; i < students.length; i++) {
            students[i].display();
        }

        // Display the highest percentage (which is now guaranteed to be at index 0)
        System.out.println("\n--- Student with Highest Percentage ---");
        if (students.length > 0) {
            students[0].display();
        }

        scanner.close();
    }
}