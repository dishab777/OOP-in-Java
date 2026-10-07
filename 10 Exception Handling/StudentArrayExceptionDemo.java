public class StudentArrayExceptionDemo {
    public static void main(String[] args) {
        String[] names = {
            "Aarav", "Bhavya", "Chirag", "Disha", "Eshan", 
            "Faisal", "Gauri", "Harsh", "Ishita", "Jatin"
        };
        int[] rollNumbers = {
            101, 102, 103, 104, 105, 
            106, 107, 108, 109, 110
        };
        System.out.println("--- Student Records ---");
        try {
            for (int i = 0; i <= 10; i++) {
                System.out.println("Roll No: " + rollNumbers[i] + "\tName: " + names[i]);
            }
        } 
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("\n[Exception Caught]: Reached the end of the array!");
            System.out.println("Error details: " + e.getMessage());
        }
        System.out.println("\n-----------------------------------------------------");
        System.out.println("Program execution continues normally after the exception.");
        System.out.println("-----------------------------------------------------");
    }
}