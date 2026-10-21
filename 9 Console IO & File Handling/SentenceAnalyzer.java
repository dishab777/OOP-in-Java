import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SentenceAnalyzer {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            System.out.println("--- Sentence Analyzer ---");
            System.out.print("Enter a sentence: ");
            String sentence = reader.readLine();

            // 1. Character count
            int charCount = sentence.length();

            // 2. Word count
            int wordCount = 0;
            String trimmedSentence = sentence.trim();
            if (!trimmedSentence.isEmpty()) {
                wordCount = trimmedSentence.split("\\s+").length;
            }

            // 3. Vowel count
            int vowelCount = 0;
            String lower = sentence.toLowerCase();
            for (int i = 0; i < lower.length(); i++) {
                char ch = lower.charAt(i);
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    vowelCount++;
                }
            }

            System.out.println("\n--- Analysis Results ---");
            System.out.println("Total Characters (including spaces): " + charCount);
            System.out.println("Total Words                      : " + wordCount);
            System.out.println("Total Vowels                     : " + vowelCount);

        } catch (IOException e) {
            System.out.println("An error occurred while reading input: " + e.getMessage());
        }
    }
}