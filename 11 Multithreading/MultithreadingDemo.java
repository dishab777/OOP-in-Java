class ThreadClassDemo extends Thread {
    public void run() {
        try {
            for (int i = 1; i <= 3; i++) {
                System.out.println("[Thread Class] Execution count: " + i);
                Thread.sleep(500);
            }
        }
        catch (InterruptedException e) {
            System.out.println("Thread interrupted: " + e.getMessage());
        }
    }
}
class RunnableInterfaceDemo implements Runnable {
    public void run() {
        try {
            for (int i = 1; i <= 3; i++) {
                System.out.println("[Runnable Interface] Execution count: " + i);
                Thread.sleep(500);
            }
        } 
        catch (InterruptedException e) {
            System.out.println("Runnable interrupted: " + e.getMessage());
        }
    }
}
public class MultithreadingDemo {
    public static void main(String[] args) {
        System.out.println("--- Starting Multithreading Demo ---");
        ThreadClassDemo thread1 = new ThreadClassDemo();
        RunnableInterfaceDemo runnable = new RunnableInterfaceDemo();
        Thread thread2 = new Thread(runnable);
        thread1.start();
        thread2.start();
    }
}