// A simple class to hold a number
class Box {
    int value;
}

public class PassByValueDemo {
    
    // Trying to change a simple int
    static void changePrimitive(int x) {
        x = x + 10; 
    }

    // Trying to change an object's value
    static void changeObject(Box b) {
        b.value = b.value + 10; 
    }

    public static void main(String[] args) {
        // 1. Primitive Test
        int myNum = 5;
        changePrimitive(myNum);
        // This will still print 5, because 'x' was just a copy
        System.out.println("Primitive after method: " + myNum); 

        // 2. Object Test
        Box myBox = new Box();
        myBox.value = 5;
        changeObject(myBox);
        // This will print 15, because 'b' pointed to the same Box in memory
        System.out.println("Object value after method: " + myBox.value); 
    }
}