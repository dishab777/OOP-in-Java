import java.util.Scanner;

// Base class
class Employee {
    String name;
    int empid;
    double salary;

    // Default Constructor
    Employee() {
        this.name = "Unknown";
        this.empid = 0;
        this.salary = 0.0;
    }

    // Parameterized Constructor
    Employee(String name, int empid, double salary) {
        this.name = name;
        this.empid = empid;
        this.salary = salary;
    }

    // Method to return name
    String getName() {
        return this.name;
    }

    // Method to return salary
    double getSalary() {
        return this.salary;
    }

    // Method to increase salary by a percentage
    void increaseSalary(double percentage) {
        double bonus = this.salary * (percentage / 100);
        this.salary = this.salary + bonus;
    }
}

// Subclass inheriting from Employee
class Manager extends Employee {
    String department;

    // Manager Constructor
    Manager(String name, int empid, double salary, String department) {
        // 'super' calls the parameterized constructor of the parent class (Employee)
        super(name, empid, salary); 
        this.department = department;
    }

    // Helper method to display Manager details
    void displayManager() {
        System.out.println("Manager Name: " + getName());
        System.out.println("Employee ID: " + empid);
        System.out.println("Department: " + department);
        System.out.println("Current Salary: $" + getSalary());
    }
}

// Test Program
public class TestEmployee {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("--- Setup Standard Employee ---");
        System.out.print("Enter Employee Name: ");
        String empName = scanner.nextLine();
        System.out.print("Enter Employee ID: ");
        int empId = scanner.nextInt();
        System.out.print("Enter Starting Salary: ");
        double empSalary = scanner.nextDouble();
        
        // Using Parameterized Constructor
        Employee emp = new Employee(empName, empId, empSalary);
        
        System.out.print("Enter raise percentage for Employee: ");
        double empRaise = scanner.nextDouble();
        emp.increaseSalary(empRaise);
        System.out.println("Salary after " + empRaise + "% raise: $" + emp.getSalary());
        
        scanner.nextLine(); // Consume newline

        System.out.println("\n--- Setup Manager ---");
        System.out.print("Enter Manager Name: ");
        String mgrName = scanner.nextLine();
        System.out.print("Enter Manager ID: ");
        int mgrId = scanner.nextInt();
        System.out.print("Enter Manager Salary: ");
        double mgrSalary = scanner.nextDouble();
        scanner.nextLine(); // Consume newline
        System.out.print("Enter Manager Department: ");
        String mgrDept = scanner.nextLine();
        
        // Creating a Manager object
        Manager mgr = new Manager(mgrName, mgrId, mgrSalary, mgrDept);
        mgr.displayManager();
        
        System.out.print("\nEnter raise percentage for Manager: ");
        double mgrRaise = scanner.nextDouble();
        mgr.increaseSalary(mgrRaise); // Inherited method
        System.out.println("After raise:");
        mgr.displayManager();

        scanner.close();
    }
}