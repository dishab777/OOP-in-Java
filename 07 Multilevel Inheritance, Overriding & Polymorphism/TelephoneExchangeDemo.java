import java.util.Scanner;

// Base Class
class TrunkCall {
    int duration;

    // Constructor to set the duration
    TrunkCall(int duration) {
        this.duration = duration;
    }

    // Method to be overridden
    void calculateCharge() {
        System.out.println("Calculating base charge...");
    }
}

// Subclass 1: Ordinary Call
class OrdinaryCall extends TrunkCall {
    
    OrdinaryCall(int duration) {
        super(duration);
    }

    // Implicitly overridden method
    void calculateCharge() {
        double rate = 1.00; 
        double total = duration * rate;
        System.out.println("Call Type: Ordinary");
        System.out.println("Rate: $" + rate + " per minute");
        System.out.println("Total Charge: $" + total);
    }
}

// Subclass 2: Urgent Call
class UrgentCall extends TrunkCall {
    
    UrgentCall(int duration) {
        super(duration);
    }

    // Implicitly overridden method
    void calculateCharge() {
        double rate = 2.00; 
        double total = duration * rate;
        System.out.println("Call Type: Urgent");
        System.out.println("Rate: $" + rate + " per minute");
        System.out.println("Total Charge: $" + total);
    }
}

// Subclass 3: Lightning Call
class LightningCall extends TrunkCall {
    
    LightningCall(int duration) {
        super(duration);
    }

    // Implicitly overridden method
    void calculateCharge() {
        double rate = 3.00; 
        double total = duration * rate;
        System.out.println("Call Type: Lightning");
        System.out.println("Rate: $" + rate + " per minute");
        System.out.println("Total Charge: $" + total);
    }
}

// Main Execution Class
public class TelephoneExchangeDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TrunkCall call = null; // Parent reference variable

        System.out.println("--- Telephone Exchange System ---");
        System.out.println("1. Ordinary Call");
        System.out.println("2. Urgent Call");
        System.out.println("3. Lightning Call");
        System.out.print("Select the type of call (1/2/3): ");
        int choice = scanner.nextInt();

        System.out.print("Enter call duration in minutes: ");
        int duration = scanner.nextInt();

        System.out.println("\n--- Generating Bill ---");
        
        // Polymorphism in action: 
        // Assigning different child objects to the same parent reference
        if (choice == 1) {
            call = new OrdinaryCall(duration);
        } else if (choice == 2) {
            call = new UrgentCall(duration);
        } else if (choice == 3) {
            call = new LightningCall(duration);
        } else {
            System.out.println("Invalid choice! Defaulting to Ordinary Call.");
            call = new OrdinaryCall(duration);
        }

        // The JVM dynamically decides which calculateCharge() to run
        call.calculateCharge();

        scanner.close();
    }
}