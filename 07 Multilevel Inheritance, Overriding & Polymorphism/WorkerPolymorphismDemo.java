import java.util.Scanner;

// 1. Base Class
class Worker {
    String name;
    double salaryRate; 

    // Constructor
    Worker(String name, double salaryRate) {
        this.name = name;
        this.salaryRate = salaryRate;
    }

    // Method to be overridden by subclasses
    void ComPay(int hours) {
        System.out.println("Default Worker Pay");
    }
}

// 2. Subclass for Daily Worker
class DailyWorker extends Worker {
    
    DailyWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    // Implicitly overriding the ComPay method (No annotation used)
    void ComPay(int hours) {
        int daysWorked = hours / 8;
        double pay = hours * salaryRate;
        
        System.out.println("\n--- Daily Worker Pay Slip ---");
        System.out.println("Name: " + name);
        System.out.println("Hourly Rate: $" + salaryRate);
        System.out.println("Total Hours: " + hours + " (" + daysWorked + " days)");
        System.out.println("Weekly Pay: $" + pay);
    }
}

// 3. Subclass for Salaried Worker
class SalariedWorker extends Worker {
    
    SalariedWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    // Implicitly overriding the ComPay method (No annotation used)
    void ComPay(int hours) {
        double pay = 40 * salaryRate;
        
        System.out.println("\n--- Salaried Worker Pay Slip ---");
        System.out.println("Name: " + name);
        System.out.println("Hourly Rate: $" + salaryRate);
        System.out.println("Actual Hours Worked: " + hours);
        System.out.println("Weekly Pay (Fixed 40 hrs): $" + pay);
    }
}

// Main Execution Class
public class WorkerPolymorphismDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input for Daily Worker
        System.out.println("Enter details for Daily Worker:");
        System.out.print("Name: ");
        String dName = scanner.nextLine();
        System.out.print("Hourly Rate: ");
        double dRate = scanner.nextDouble();
        System.out.print("Hours Worked this week: ");
        int dHours = scanner.nextInt();
        scanner.nextLine(); 

        Worker daily = new DailyWorker(dName, dRate);

        // Input for Salaried Worker
        System.out.println("\nEnter details for Salaried Worker:");
        System.out.print("Name: ");
        String sName = scanner.nextLine();
        System.out.print("Hourly Rate: ");
        double sRate = scanner.nextDouble();
        System.out.print("Hours Worked this week: ");
        int sHours = scanner.nextInt();

        Worker salaried = new SalariedWorker(sName, sRate);

        // Executing Polymorphism
        daily.ComPay(dHours);
        salaried.ComPay(sHours);

        scanner.close();
    }
}