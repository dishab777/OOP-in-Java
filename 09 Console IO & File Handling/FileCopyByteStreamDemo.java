import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

public class FileCopyByteStreamDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("--- File Copy Tool (Byte Stream) ---");
        System.out.print("Enter source file path/name: ");
        String sourcePath = scanner.nextLine();
        System.out.print("Enter destination file path/name: ");
        String destPath = scanner.nextLine();
        int bytesCopied = 0;
        try (FileInputStream fis = new FileInputStream(sourcePath);
             FileOutputStream fos = new FileOutputStream(destPath)) {
            int byteData;
            while ((byteData = fis.read()) != -1) {
                fos.write(byteData);
                bytesCopied++;
            }
            System.out.println("\n[Success] File copied successfully!");
            System.out.println("Total Bytes Copied: " + bytesCopied + " bytes");
        } 
        catch (FileNotFoundException e) {
            System.out.println("[Error] Specified file could not be found: " + e.getMessage());
        } 
        catch (IOException e) {
            System.out.println("[Error] I/O error during copy process: " + e.getMessage());
        } 
        finally {
            scanner.close();
        }
    }
}