import java.util.Scanner;

// 1. The Superclass
class Player {
    String name;
    int age;

    // Parent Constructor
    Player(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Common display method
    void displayPlayerDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// 2. Subclass for Cricket
class Cricket_Player extends Player {
    int runsScored;

    Cricket_Player(String name, int age, int runsScored) {
        super(name, age); // Passes name and age to the Player constructor
        this.runsScored = runsScored;
    }

    void displayDetails() {
        System.out.println("--- Cricket Player ---");
        displayPlayerDetails(); // Inherited method
        System.out.println("Runs Scored: " + runsScored);
    }
}

// 3. Subclass for Football
class Football_Player extends Player {
    int goalsScored;

    Football_Player(String name, int age, int goalsScored) {
        super(name, age);
        this.goalsScored = goalsScored;
    }

    void displayDetails() {
        System.out.println("--- Football Player ---");
        displayPlayerDetails();
        System.out.println("Goals Scored: " + goalsScored);
    }
}

// 4. Subclass for Hockey
class Hockey_Player extends Player {
    int assists;

    Hockey_Player(String name, int age, int assists) {
        super(name, age);
        this.assists = assists;
    }

    void displayDetails() {
        System.out.println("--- Hockey Player ---");
        displayPlayerDetails();
        System.out.println("Assists: " + assists);
    }
}

// Main execution class
public class PlayerDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Getting input for Cricket Player
        System.out.println("Enter Cricket Player Details:");
        System.out.print("Name: ");
        String cName = scanner.nextLine();
        System.out.print("Age: ");
        int cAge = scanner.nextInt();
        System.out.print("Runs Scored: ");
        int cRuns = scanner.nextInt();
        scanner.nextLine(); // Consume leftover newline
        
        Cricket_Player cp = new Cricket_Player(cName, cAge, cRuns);

        // Getting input for Football Player
        System.out.println("\nEnter Football Player Details:");
        System.out.print("Name: ");
        String fName = scanner.nextLine();
        System.out.print("Age: ");
        int fAge = scanner.nextInt();
        System.out.print("Goals Scored: ");
        int fGoals = scanner.nextInt();
        scanner.nextLine(); // Consume leftover newline
        
        Football_Player fp = new Football_Player(fName, fAge, fGoals);

        // Getting input for Hockey Player
        System.out.println("\nEnter Hockey Player Details:");
        System.out.print("Name: ");
        String hName = scanner.nextLine();
        System.out.print("Age: ");
        int hAge = scanner.nextInt();
        System.out.print("Assists: ");
        int hAssists = scanner.nextInt();
        
        Hockey_Player hp = new Hockey_Player(hName, hAge, hAssists);

        // Displaying all details
        System.out.println("\n==============================");
        cp.displayDetails();
        System.out.println("------------------------------");
        fp.displayDetails();
        System.out.println("------------------------------");
        hp.displayDetails();
        System.out.println("==============================");

        scanner.close();
    }
}