public class CommandLineCalculator {
    public static void main(String[] args) {
        // Check if the user provided the correct number of arguments (num1, operator, num2)
        if (args.length != 3) {
            System.out.println("Error: Invalid arguments.");
            System.out.println("Usage: java CommandLineCalculator <num1> <operator (+, -, *, /)> <num2>");
            return;
        }

        // Parse the operands from the command line strings
        double num1 = Double.parseDouble(args[0]);
        double num2 = Double.parseDouble(args[2]);
        
        // Extract the operator character from the second argument string
        char operator = args[1].charAt(0);
        double result = 0;
        boolean validOperation = true;

        // Perform calculation based on the operator using a switch statement
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("Error: Division by zero is not allowed.");
                    validOperation = false;
                } 
                else {
                    result = num1 / num2;
                }
                break;
            default:
                System.out.println("Error: Invalid operator. Use +, -, *, or /");
                validOperation = false;
        }

        // Print the result if the operation was valid
        if (validOperation) {
            System.out.println("Result: " + num1 + " " + operator + " " + num2 + " = " + result);
        }
    }
}
