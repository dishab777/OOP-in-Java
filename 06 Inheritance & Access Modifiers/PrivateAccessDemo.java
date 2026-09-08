// The Superclass
class Parent {
    // Public member: Accessible everywhere
    public String publicMessage = "I am a public variable. Everyone can see me!";
    
    // Private member: Restricted to this class only
    private String secretMessage = "I am a private variable. Subclasses cannot read me!";
}

// The Subclass inheriting from Parent
class Child extends Parent {
    
    void tryToAccess() {
        System.out.println("Trying to access inherited members...");
        
        // 1. Accessing the public member works perfectly
        System.out.println("Accessing public: " + publicMessage);
        
        // 2. Accessing the private member will cause a COMPILE-TIME ERROR.
        System.out.println("Accessing private: " + secretMessage);
        System.out.println("Private member cannot be accessed directly in Child");
    }
}

// Main execution class
public class PrivateAccessDemo {
    public static void main(String[] args) {
        
        // Create an object of the subclass
        Child childObj = new Child();
        
        // Call the method to test access
        childObj.tryToAccess();
    }
}