import mypackage.Calculator;
public class PackageDemo {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(15, 25);
        int product = calc.multiply(4, 5);
        System.out.println("--- User-Defined Package Demo ---");
        System.out.println("Sum (15 + 25)     : " + sum);
        System.out.println("Product (4 * 5)   : " + product);
    }
}