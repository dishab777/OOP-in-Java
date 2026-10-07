class NonNumericOperandException extends Exception {
    public NonNumericOperandException(String message) {
        super(message);
    }
}
public class ModulusCalculator {
    static int parseOperand(String arg) throws NonNumericOperandException {
        try {
            return Integer.parseInt(arg);
        } catch (NumberFormatException e) {
            throw new NonNumericOperandException("Operand '" + arg + "' is nonnumeric.");
        }
    }
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Error: Please provide two command line arguments.");
            return;
        }
        try {
            int num1 = parseOperand(args[0]);
            int num2 = parseOperand(args[1]);
            if (num2 == 0) {
                System.out.println("Error: Cannot perform modulus by zero.");
                return;
            }
            int result = num1 % num2;
            System.out.println("Result: " + num1 + " % " + num2 + " = " + result);
        } catch (NonNumericOperandException e) {
            System.out.println("[Exception Caught]: " + e.getMessage());
        }
    }
}