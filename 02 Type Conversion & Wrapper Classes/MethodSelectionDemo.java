public class MethodSelectionDemo {

    // Overloaded Method 1: Accepts primitive int
    public static void calculate(int num) {
        System.out.println("Executed calculate(int) -> Value: " + num);
    }

    // Overloaded Method 2: Accepts primitive double
    public static void calculate(double num) {
        System.out.println("Executed calculate(double) -> Value: " + num);
    }

    // Overloaded Method 3: Accepts Wrapper class Integer
    public static void calculate(Integer num) {
        System.out.println("Executed calculate(Integer) -> Value: " + num);
    }

    public static void main(String[] args) {
        System.out.println("--- Method Resolution Trace ---");

        // 1. Using a byte argument
        byte byteVal = 10;
        System.out.print("Passing byte: ");
        // byte is widened to int (Widening wins over autoboxing)
        calculate(byteVal); 

        // 2. Using an int argument
        int intVal = 20;
        System.out.print("Passing int: ");
        // Exact match for calculate(int)
        calculate(intVal); 

        // 3. Using a float argument
        float floatVal = 30.5f;
        System.out.print("Passing float: ");
        // float is widened to double
        calculate(floatVal); 

        // 4. Using a double argument
        double doubleVal = 40.5;
        System.out.print("Passing double: ");
        // Exact match for calculate(double)
        calculate(doubleVal); 

        // 5. Using an Integer argument
        Integer integerVal = Integer.valueOf(50);
        System.out.print("Passing Integer: ");
        // Exact match for calculate(Integer)
        calculate(integerVal); 
    }
}