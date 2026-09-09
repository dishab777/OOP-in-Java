import java.util.Scanner;

// 1. Base Class (Renamed to Employee26 to fix Eclipse workspace collision)
class Employee26 {
    String name;
    double baseSalary;

    Employee26(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    void calculateSalary() {
        System.out.println("Calculating generic employee salary...");
    }
}

// 2. Subclass for Manager
class Manager26 extends Employee26 {
    double bonus;

    Manager26(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    // Implicitly overridden method
    void calculateSalary() {
        double total = baseSalary + bonus;
        System.out.println("Manager: " + name + " | Total Salary (Base + Bonus): $" + total);
    }
}

// 3. Subclass for Developer
class Developer26 extends Employee26 {
    int overtimeHours;
    double overtimeRate;

    Developer26(String name, double baseSalary, int overtimeHours, double overtimeRate) {
        super(name, baseSalary);
        this.overtimeHours = overtimeHours;
        this.overtimeRate = overtimeRate;
    }

    // Implicitly overridden method
    void calculateSalary() {
        double total = baseSalary + (overtimeHours * overtimeRate);
        System.out.println("Developer: " + name + " | Total Salary (Base + Overtime): $" + total);
    }
}

// 4. Subclass for Intern
class Intern26 extends Employee26 {
    
    Intern26(String name, double stipend) {
        super(name, stipend); // Using baseSalary variable to hold the stipend amount
    }

    // Implicitly overridden method
    void calculateSalary() {
        System.out.println("Intern: " + name + " | Total Stipend: $" + baseSalary);
    }
}

// Main Execution Class
public class EmployeePolymorphismDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Array of Employee26 references
        Employee26[] staff = new Employee26[3];

        System.out.println("--- Input Manager Details ---");
        System.out.print("Name: ");
        String mName = scanner.nextLine();
        System.out.print("Base Salary: ");
        double mBase = scanner.nextDouble();
        System.out.print("Bonus: ");
        double mBonus = scanner.nextDouble();
        scanner.nextLine(); // consume newline
        
        staff[0] = new Manager26(mName, mBase, mBonus);

        System.out.println("\n--- Input Developer Details ---");
        System.out.print("Name: ");
        String dName = scanner.nextLine();
        System.out.print("Base Salary: ");
        double dBase = scanner.nextDouble();
        System.out.print("Overtime Hours: ");
        int dHours = scanner.nextInt();
        System.out.print("Overtime Rate: ");
        double dRate = scanner.nextDouble();
        scanner.nextLine(); // consume newline
        
        staff[1] = new Developer26(dName, dBase, dHours, dRate);

        System.out.println("\n--- Input Intern Details ---");
        System.out.print("Name: ");
        String iName = scanner.nextLine();
        System.out.print("Stipend Amount: ");
        double iStipend = scanner.nextDouble();
        
        staff[2] = new Intern26(iName, iStipend);

        System.out.println("\n=================================");
        System.out.println("   Executing Payroll Processing  ");
        System.out.println("=================================");

        // Using runtime polymorphism inside a loop
        for (int i = 0; i < staff.length; i++) {
            // The JVM dynamically calls the correct calculateSalary() method for each specific object
            staff[i].calculateSalary();
        }

        scanner.close();
    }
}