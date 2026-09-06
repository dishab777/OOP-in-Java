import java.util.Scanner;

class Rectangle {
    double length;
    double breadth;

    // Constructor
    public Rectangle(double length, double breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    // Method to compare two Rectangle objects
    public boolean compare(Rectangle other) {
        return (this.length == other.length && this.breadth == other.breadth);
    }

    // Method to modify a Rectangle object
    public void modify(double newLength, double newBreadth) {
        this.length = newLength;
        this.breadth = newBreadth;
    }

    // Method to return a new Rectangle containing the larger dimensions
    public Rectangle getLargerDimensions(Rectangle other) {
        double maxLen = Math.max(this.length, other.length);
        double maxBrd = Math.max(this.breadth, other.breadth);
        return new Rectangle(maxLen, maxBrd);
    }

    // Helper method to display dimensions
    public void display(String name) {
        System.out.println(name + " -> Length: " + length + ", Breadth: " + breadth);
    }
}

public class RectangleDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. Initialize objects using user input
        System.out.println("--- Setup Rectangle 1 ---");
        System.out.print("Enter length for Rectangle 1: ");
        double l1 = scanner.nextDouble();
        System.out.print("Enter breadth for Rectangle 1: ");
        double b1 = scanner.nextDouble();
        Rectangle rect1 = new Rectangle(l1, b1);

        System.out.println("\n--- Setup Rectangle 2 ---");
        System.out.print("Enter length for Rectangle 2: ");
        double l2 = scanner.nextDouble();
        System.out.print("Enter breadth for Rectangle 2: ");
        double b2 = scanner.nextDouble();
        Rectangle rect2 = new Rectangle(l2, b2);

        System.out.println("\n-----------------------------------");
        rect1.display("Rectangle 1");
        rect2.display("Rectangle 2");
        System.out.println("-----------------------------------");

        // 2. Compare two Rectangle objects
        boolean areEqual = rect1.compare(rect2);
        System.out.println("Are rect1 and rect2 identical? " + areEqual);
        System.out.println("-----------------------------------");

        // 3. Get larger dimensions (Returns a new object)
        Rectangle largeRect = rect1.getLargerDimensions(rect2);
        System.out.println("Generating new Rectangle with larger dimensions...");
        largeRect.display("Large Rectangle");
        System.out.println("-----------------------------------");

        // 4. Modify a Rectangle object
        System.out.println("--- Modifying Rectangle 1 ---");
        System.out.print("Enter new length for Rectangle 1: ");
        double newL = scanner.nextDouble();
        System.out.print("Enter new breadth for Rectangle 1: ");
        double newB = scanner.nextDouble();
        
        rect1.modify(newL, newB);
        System.out.println("\nUpdate complete!");
        rect1.display("Rectangle 1 (Modified)");
        
        scanner.close();
    }
}