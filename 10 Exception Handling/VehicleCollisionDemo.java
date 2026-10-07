import java.util.Scanner;
class CollisionException extends Exception {
    public CollisionException(String message) {
        super(message);
    }
}
class Vehicle {
    String name;
    String direction;
    public Vehicle(String name, String direction) {
        this.name = name;
        this.direction = direction;
    }
}
public class VehicleCollisionDemo {
    static void checkTrackSafety(Vehicle v1, Vehicle v2) throws CollisionException {
        if (!v1.direction.equalsIgnoreCase(v2.direction)) {
            throw new CollisionException("DANGER: " + v1.name + " [" + v1.direction.toUpperCase() + 
                    "] and " + v2.name + " [" + v2.direction.toUpperCase() + "] are heading towards each other!");
        }
        System.out.println("Track Status: SAFE. Both vehicles are moving in the same direction (" 
                + v1.direction.toUpperCase() + ").");
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("--- Single Track Monitoring System ---");
        try {
            System.out.print("Enter Vehicle 1 Name: ");
            String name1 = scanner.nextLine();
            System.out.print("Enter Vehicle 1 Direction (e.g., NORTH / SOUTH): ");
            String dir1 = scanner.nextLine();
            System.out.print("Enter Vehicle 2 Name: ");
            String name2 = scanner.nextLine();
            System.out.print("Enter Vehicle 2 Direction (e.g., NORTH / SOUTH): ");
            String dir2 = scanner.nextLine();
            Vehicle v1 = new Vehicle(name1, dir1);
            Vehicle v2 = new Vehicle(name2, dir2);
            System.out.println("\n--- Analyzing Track Conditions ---");
            checkTrackSafety(v1, v2);
        } catch (CollisionException e) {
            System.out.println("\n[COLLISION EXCEPTION CAUGHT]");
            System.out.println(e.getMessage());
            System.out.println("AUTOMATED ACTION: Emergency brakes deployed! Both vehicles brought to a complete halt.");
        } catch (Exception e) {
            System.out.println("\n[Error]: Invalid input received.");
        } finally {
            scanner.close();
        }
    }
}