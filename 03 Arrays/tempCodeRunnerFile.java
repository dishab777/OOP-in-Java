import java.util.Scanner;
public class ArrayOperationsDemo {
    static void customSort(int[] arr) {
        int n = arr.length;
        int[] temp = arr.clone();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (temp[j] > temp[j + 1]) {
                    int t = temp[j];
                    temp[j] = temp[j + 1];
                    temp[j + 1] = t;
                }
            }
        }
        System.out.print("Sorted Array: ");
        for (int val : temp) {
            System.out.print(val + " ");
        }
        System.out.println();
    }
    static void findSecondLargest(int[] arr) {
        if (arr.length < 2) {
            System.out.println("Second largest element requires at least 2 elements.");
            return;
        }
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        if (secondLargest == Integer.MIN_VALUE) {
            System.out.println("Second largest element does not exist (all elements are equal).");
        } else {
            System.out.println("Second Largest Element: " + secondLargest);
        }
    }
    static void removeDuplicates(int[] arr) {
        int n = arr.length;
        int[] unique = new int[n];
        int uniqueCount = 0;
        for (int i = 0; i < n; i++) {
            boolean isDuplicate = false;
            for (int j = 0; j < uniqueCount; j++) {
                if (arr[i] == unique[j]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                unique[uniqueCount++] = arr[i];
            }
        }
        System.out.print("Array after Removing Duplicates: ");
        for (int i = 0; i < uniqueCount; i++) {
            System.out.print(unique[i] + " ");
        }
        System.out.println();
    }
    static void calculateFrequency(int[] arr) {
        int n = arr.length;
        boolean[] visited = new boolean[n];
        System.out.println("Element Frequencies:");
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                continue;
            }
            int count = 1;
            for (int j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    visited[j] = true;
                    count++;
                }
            }
            System.out.println("  Element " + arr[i] + " : " + count + " time(s)");
        }
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of elements (n): ");
        int n = scanner.nextInt();
        if (n <= 0) {
            System.out.println("Invalid array size.");
            scanner.close();
            return;
        }
        int[] arr = new int[n];
        System.out.println("Enter " + n + " integers:");
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }
        System.out.println("\n--- Array Operations Output ---");
        customSort(arr);
        findSecondLargest(arr);
        removeDuplicates(arr);
        calculateFrequency(arr);
        scanner.close();
    }
}