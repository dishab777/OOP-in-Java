class EvenThread extends Thread {
    private int limit;
    public EvenThread(int limit) {
        this.limit = limit;
    }
    public void run() {
        for (int i = 2; i <= limit; i += 2) {
            System.out.println("Even Thread: " + i);
            try {
                Thread.sleep(500);
            }
            catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
class OddThread extends Thread {
    private int limit;
    public OddThread(int limit) {
        this.limit = limit;
    }
    public void run() {
        for (int i = 1; i <= limit; i += 2) {
            System.out.println("Odd Thread : " + i);
            try {
                Thread.sleep(500);
            }
            catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
public class EvenOddThreadsDemo {
    public static void main(String[] args) {
        int maxLimit = 10;
        System.out.println("--- Starting Even and Odd Threads ---");
        OddThread oddTask = new OddThread(maxLimit);
        EvenThread evenTask = new EvenThread(maxLimit);
        oddTask.start();
        evenTask.start();
    }
}