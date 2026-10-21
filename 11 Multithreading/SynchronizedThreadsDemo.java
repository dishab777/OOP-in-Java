class Counter {
    private int count = 0;
    public synchronized void increment() {
        count++;
    }
    public int getCount() {
        return count;
    }
}
class IncrementTask implements Runnable {
    private Counter counter;
    public IncrementTask(Counter counter) {
        this.counter = counter;
    }
    public void run() {
        for (int i = 0; i < 1000; i++) {
            counter.increment();
        }
    }
}
public class SynchronizedThreadsDemo {
    public static void main(String[] args) {
        Counter counter = new Counter();
        Thread[] threads = new Thread[10];
        System.out.println("--- Launching 10 Synchronized Threads ---");
        for (int i = 0; i < 10; i++) {
            threads[i] = new Thread(new IncrementTask(counter), "Thread-" + (i + 1));
            threads[i].start();
        }
        for (int i = 0; i < 10; i++) {
            try {
                threads[i].join();
            }
            catch (InterruptedException e) {
                System.out.println("[Error]: Thread interrupted - " + e.getMessage());
            }
        }
        System.out.println("\n--- Execution Completed ---");
        System.out.println("Expected Counter Value : 10000");
        System.out.println("Actual Counter Value   : " + counter.getCount());
    }
}