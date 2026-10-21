import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;
public class BinaryFileCopyDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("--- Binary File Copy & Analysis Tool ---");
        System.out.print("Enter source binary file path: ");
        String sourcePath = scanner.nextLine();
        System.out.print("Enter destination binary file path: ");
        String destPath = scanner.nextLine();
        File sourceFile = new File(sourcePath);
        File destFile = new File(destPath);
        if (!sourceFile.exists()) {
            System.out.println("[Error] Source file does not exist.");
            scanner.close();
            return;
        }
        System.out.println("\nSource File Size Before Copy: " + sourceFile.length() + " bytes");
        int totalBytes = 0;
        int zeroByteCount = 0;
        try (FileInputStream fis = new FileInputStream(sourceFile);
             FileOutputStream fos = new FileOutputStream(destFile)) {
            int byteData;
            while ((byteData = fis.read()) != -1) {
                fos.write(byteData);
                totalBytes++;
                if (byteData == 0) {
                    zeroByteCount++;
                }
            }
            System.out.println("\n[Success] Binary file copied successfully!");
            System.out.println("Total Bytes Copied       : " + totalBytes + " bytes");
            System.out.println("Zero-value Bytes Count   : " + zeroByteCount);
            System.out.println("Destination File Size    : " + destFile.length() + " bytes");
        } 
        catch (FileNotFoundException e) {
            System.out.println("[Error] File path not found: " + e.getMessage());
        }
        catch (IOException e) {
            System.out.println("[Error] I/O error during binary copy: " + e.getMessage());
        }
        finally {
            scanner.close();
        }
    }
}