import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

// Abstract Class
abstract class Employee {
    String name;
    double baseSalary;

    public Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    // Abstract method to be overridden by subclasses
    abstract double calculateSalary();
}

// Subclass Manager
class Manager extends Employee {

    public Manager(String name, double baseSalary) {
        super(name, baseSalary);
    }

    @Override
    double calculateSalary() {
        // Adding a 20% bonus to base salary
        return baseSalary + (baseSalary * 0.20);
    }
}

public class EmployeeFileIODemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("--- Employee Details Entry ---");
        System.out.print("Enter Manager Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Base Salary: ");
        double baseSalary = scanner.nextDouble();

        // Create Manager object and calculate salary
        Manager mgr = new Manager(name, baseSalary);
        double totalSalary = mgr.calculateSalary();

        String filename = "employee_details.txt";

        // 1. Write details to file using FileWriter
        try (FileWriter writer = new FileWriter(filename)) {
            writer.write("Employee Name: " + mgr.name + "\n");
            writer.write("Base Salary   : Rs. " + mgr.baseSalary + "\n");
            writer.write("Total Salary  : Rs. " + totalSalary + " (including 20% bonus)\n");
            System.out.println("\n[Success] Details written to '" + filename + "'.");
        } catch (IOException e) {
            System.out.println("[Error] File writing failed: " + e.getMessage());
        }

        // 2. Read and display details from file using FileReader
        System.out.println("\n--- Reading Details from File ---");
        try (FileReader reader = new FileReader(filename)) {
            int character;
            // Read file character-by-character until end of file (-1)
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("[Error] File reading failed: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}