class PriorityWorker implements Runnable {
    private String name;
    private long sleepTime;
    public PriorityWorker(String name, long sleepTime) {
        this.name = name;
        this.sleepTime = sleepTime;
    }
    public void run() {
        System.out.println(name + " started with Priority: " + Thread.currentThread().getPriority());
        try {
            if (sleepTime > 0) {
                System.out.println(name + " going to sleep for " + sleepTime + " ms...");
                Thread.sleep(sleepTime);
            }
            else {
                for (int i = 1; i <= 3; i++) {
                    // Simulating quick work
                }
            }
        }
        catch (InterruptedException e) {
            System.out.println(name + " interrupted.");
        }
        System.out.println(name + " execution finished.");
    }
}
public class ThreadPriorityAnalysisDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(new PriorityWorker("Thread-1", 0), "Thread-1");
        Thread t2 = new Thread(new PriorityWorker("Thread-2", 0), "Thread-2");
        Thread t3 = new Thread(new PriorityWorker("Thread-3", 0), "Thread-3");
        Thread t4 = new Thread(new PriorityWorker("Thread-4", 2000), "Thread-4");
        Thread t5 = new Thread(new PriorityWorker("Thread-5", 4000), "Thread-5");
        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(3);
        t3.setPriority(Thread.NORM_PRIORITY);
        t4.setPriority(8);
        t5.setPriority(Thread.MAX_PRIORITY);
        System.out.println("--- Starting 5 Threads with Different Priorities ---");
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
        Thread.sleep(500);
        System.out.println("\n--- Checking Aliveness of All Threads ---");
        System.out.println(t1.getName() + " (Priority 1)  isAlive: " + t1.isAlive());
        System.out.println(t2.getName() + " (Priority 3)  isAlive: " + t2.isAlive());
        System.out.println(t3.getName() + " (Priority 5)  isAlive: " + t3.isAlive());
        System.out.println(t4.getName() + " (Priority 8)  isAlive: " + t4.isAlive());
        System.out.println(t5.getName() + " (Priority 10) isAlive: " + t5.isAlive());
        t4.join();
        t5.join();
        System.out.println("\n--- Final Analysis ---");
        System.out.println("The long-lasting thread was " + t5.getName() + " (Priority 10) as it slept the longest (4000 ms).");
    }
}