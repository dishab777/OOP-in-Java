public class StringAnalysisDemo {

    // Reusable method to analyze any given string
    static void analyzeString(String text) {
        System.out.println("Analyzing: \"" + text + "\"");
        
        // 1. Find its length
        System.out.println("Length: " + text.length());
        
        int count = 0;
        String locations = "";
        
        // 2, 3, 4. Check for 'a', count occurrences, and track locations
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) == 'a') {
                count++;
                locations += i + " "; // Append index to the locations string
            }
        }
        
        if (count > 0) {
            System.out.println("Does 'a' occur? Yes");
            System.out.println("Total occurrences of 'a': " + count);
            System.out.println("Locations (0-based index): " + locations.trim());
        } else {
            System.out.println("Does 'a' occur? No");
            System.out.println("Total occurrences of 'a': 0");
        }
        System.out.println("-----------------------------------");
    }

    public static void main(String[] args) {
        
        // 1. Creating a String object initialized with your name
        String myName = "Disha Bothra"; 
        analyzeString(myName);
        
        // 2. Trying the same for different String objects
        String testString1 = "java programming";
        analyzeString(testString1);
        
        String testString2 = "hello world";
        analyzeString(testString2);
    }
}