import java.util.Scanner;

// Defining the blueprint (Class)
class Student {
    // Properties (Variables)
    String name;
    int rollNumber;

    // Behavior (Method)
    void displayDetails() {
        System.out.println("Student Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
    }
}

// The main program where we create the objects
public class ClassAndObjectDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Creating the first object
        Student student1 = new Student();
        
        System.out.println("--- Enter Details for First Student ---");
        System.out.print("Enter Name: ");
        student1.name = scanner.nextLine();
        System.out.print("Enter Roll Number: ");
        student1.rollNumber = scanner.nextInt();
        scanner.nextLine(); // Consume the leftover newline
        
        // Creating a second object
        Student student2 = new Student();
        
        System.out.println("\n--- Enter Details for Second Student ---");
        System.out.print("Enter Name: ");
        student2.name = scanner.nextLine();
        System.out.print("Enter Roll Number: ");
        student2.rollNumber = scanner.nextInt();

        System.out.println("\n-------------------------");
        System.out.println("Details of first student:");
        student1.displayDetails(); 
        
        System.out.println("-------------------------");
        System.out.println("Details of second student:");
        student2.displayDetails();

        scanner.close();
    }
}