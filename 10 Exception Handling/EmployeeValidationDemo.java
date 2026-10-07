import java.util.Scanner;
class NameException extends Exception {
    public NameException(String message) {
        super(message);
    }
}
class AgeException extends Exception {
    public AgeException(String message) {
        super(message);
    }
}
class Employee {
    String name;
    int age;
    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void displayDetails() {
        System.out.println("Employee Object Created Successfully!");
        System.out.println("Name: " + name + " | Age: " + age);
    }
}
public class EmployeeValidationDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("--- Employee Registration ---");
        try {
            System.out.print("Enter Employee Name: ");
            String empName = scanner.nextLine();
            boolean containsNumber = false;
            for (char c : empName.toCharArray()) {
                if (Character.isDigit(c)) {
                    containsNumber = true;
                    break;
                }
            }
            if (containsNumber) {
                throw new NameException("Name cannot be or contain a number.");
            }
            System.out.print("Enter Employee Age: ");
            int empAge = scanner.nextInt();
            if (empAge > 50) {
                throw new AgeException("Age cannot be greater than 50.");
            }
            System.out.println("\n--- Processing ---");
            Employee emp = new Employee(empName, empAge);
            emp.displayDetails();
        } catch (NameException e) {
            System.out.println("\n[Registration Failed - NameException]: " + e.getMessage());
        } catch (AgeException e) {
            System.out.println("\n[Registration Failed - AgeException]: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("\n[Registration Failed]: Invalid input detected.");
        } finally {
            scanner.close();
        }
    }
}