import java.io.*;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;
abstract class Student {
    int rollNo;
    String name;
    String department;
    public Student(int rollNo, String name, String department) {
        this.rollNo = rollNo;
        this.name = name;
        this.department = department;
    }
    public abstract String getRecordData();
    public abstract void display();
}
class UGStudent extends Student {
    String specialization;
    public UGStudent(int rollNo, String name, String department, String specialization) {
        super(rollNo, name, department);
        this.specialization = specialization;
    }
    @Override
    public String getRecordData() {
        return rollNo + "," + name + "," + department + "," + specialization;
    }
    @Override
    public void display() {
        System.out.println("Roll No: " + rollNo + " | Name: " + name + 
                           " | Dept: " + department + " | Specialization: " + specialization);
    }
}

public class StudentManagementSystem {
    private static final String FILE_NAME = "students.txt";
    private static final String BACKUP_FILE = "students_backup.bin";
    private static ArrayList<Student> studentList = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        loadFromFile();
        while (true) {
            System.out.println("\n=== STUDENT RECORD MANAGEMENT SYSTEM ===");
            System.out.println("1. Add Student");
            System.out.println("2. Display All Students");
            System.out.println("3. Search Student by Roll No");
            System.out.println("4. Update Student Details");
            System.out.println("5. Delete Student");
            System.out.println("6. Save Records to File (FileWriter)");
            System.out.println("7. Create Binary Backup (Stream Copy)");
            System.out.println("8. Exit");
            System.out.print("Enter your choice (1-8): ");
            try {
                int choice = scanner.nextInt();
                scanner.nextLine();
                switch (choice) {
                    case 1 -> addStudent();
                    case 2 -> displayAll();
                    case 3 -> searchStudent();
                    case 4 -> updateStudent();
                    case 5 -> deleteStudent();
                    case 6 -> saveToFile();
                    case 7 -> createBackup();
                    case 8 -> {
                        System.out.println("Exiting System. Goodbye!");
                        return;
                    }
                    default -> System.out.println("[Error] Choice out of range! Enter 1-8.");
                }
            } 
            catch (InputMismatchException e) {
                System.out.println("[Error] Invalid input type! Please enter a number.");
                scanner.nextLine();
            }
        }
    }
    private static void addStudent() {
        try {
            System.out.print("Enter Roll Number: ");
            int roll = scanner.nextInt();
            scanner.nextLine();
            for (Student s : studentList) {
                if (s.rollNo == roll) {
                    System.out.println("[Error] Student with Roll No " + roll + " already exists!");
                    return;
                }
            }
            System.out.print("Enter Name: ");
            String name = scanner.nextLine();
            System.out.print("Enter Department: ");
            String dept = scanner.nextLine();
            System.out.print("Enter Specialization: ");
            String spec = scanner.nextLine();
            studentList.add(new UGStudent(roll, name, dept, spec));
            System.out.println("[Success] Student record added locally.");
        } 
        catch (InputMismatchException e) {
            System.out.println("[Error] Roll number must be an integer.");
            scanner.nextLine();
        }
    }
    private static void displayAll() {
        if (studentList.isEmpty()) {
            System.out.println("[Info] No student records found.");
            return;
        }
        System.out.println("\n--- Current Student Records ---");
        for (Student s : studentList) {
            s.display();
        }
    }
    private static void searchStudent() {
        try {
            System.out.print("Enter Roll Number to search: ");
            int roll = scanner.nextInt();
            for (Student s : studentList) {
                if (s.rollNo == roll) {
                    System.out.println("\n[Record Found]:");
                    s.display();
                    return;
                }
            }
            System.out.println("[Info] No student found with Roll No: " + roll);
        } 
        catch (InputMismatchException e) {
            System.out.println("[Error] Invalid Roll Number.");
            scanner.nextLine();
        }
    }
    private static void updateStudent() {
        try {
            System.out.print("Enter Roll Number to update: ");
            int roll = scanner.nextInt();
            scanner.nextLine();
            for (Student s : studentList) {
                if (s.rollNo == roll) {
                    System.out.print("Enter New Name: ");
                    s.name = scanner.nextLine();
                    System.out.print("Enter New Department: ");
                    s.department = scanner.nextLine();
                    if (s instanceof UGStudent ug) {
                        System.out.print("Enter New Specialization: ");
                        ug.specialization = scanner.nextLine();
                    }
                    System.out.println("[Success] Student details updated.");
                    return;
                }
            }
            System.out.println("[Info] Roll No not found.");
        }
        catch (InputMismatchException e) {
            System.out.println("[Error] Invalid input.");
            scanner.nextLine();
        }
    }
    private static void deleteStudent() {
        try {
            System.out.print("Enter Roll Number to delete: ");
            int roll = scanner.nextInt();
            for (int i = 0; i < studentList.size(); i++) {
                if (studentList.get(i).rollNo == roll) {
                    studentList.remove(i);
                    System.out.println("[Success] Record removed.");
                    return;
                }
            }
            System.out.println("[Info] Roll No not found.");
        } 
        catch (InputMismatchException e) {
            System.out.println("[Error] Invalid input.");
            scanner.nextLine();
        }
    }
    private static void saveToFile() {
        try (FileWriter writer = new FileWriter(FILE_NAME)) {
            for (Student s : studentList) {
                writer.write(s.getRecordData() + "\n");
            }
            System.out.println("[Success] All records saved to '" + FILE_NAME + "' using FileWriter.");
        } 
        catch (IOException e) {
            System.out.println("[File Error] Failed to write records: " + e.getMessage());
        }
    }
    private static void loadFromFile() {
        File file = new File(FILE_NAME);
        if (!file.exists()) return;
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            studentList.clear();
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    int roll = Integer.parseInt(parts[0].trim());
                    studentList.add(new UGStudent(roll, parts[1].trim(), parts[2].trim(), parts[3].trim()));
                }
            }
            System.out.println("[Success] Loaded existing records from '" + FILE_NAME + "' via FileReader.");
        } 
        catch (IOException | NumberFormatException e) {
            System.out.println("[File Error] Error reading records: " + e.getMessage());
        }
    }
    private static void createBackup() {
        File srcFile = new File(FILE_NAME);
        if (!srcFile.exists()) {
            System.out.println("[Error] Save records to file before creating a backup.");
            return;
        }
        try (FileInputStream fis = new FileInputStream(srcFile);
             FileOutputStream fos = new FileOutputStream(BACKUP_FILE)) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            int totalBytes = 0;
            while ((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
                totalBytes += bytesRead;
            }
            System.out.println("[Success] Backup file '" + BACKUP_FILE + "' created using Streams (" + totalBytes + " bytes).");
        }
        catch (IOException e) {
            System.out.println("[Backup Error] Backup failed: " + e.getMessage());
        }
    }
}