// import java.util.concurrent.Semaphore;

// runtime 3ms approx
// class Foo {
//     private Semaphore s1 = new Semaphore(0);
//     private Semaphore s2 = new Semaphore(0);

//     public Foo() {
//     }

//     public void first(Runnable printFirst) throws InterruptedException {
//         printFirst.run(); // printFirst.run() outputs "first". Do not change or remove this line.
//         s1.release(); //allow second to happen
//     }

//     public void second(Runnable printSecond) throws InterruptedException {
//         s1.acquire(); //wait for first to be done
//         printSecond.run(); // printSecond.run() outputs "second". Do not change or remove this line.
//         s2.release(); //allow third to happen
//     }

//     public void third(Runnable printThird) throws InterruptedException {
//         s2.acquire(); //wait for third to be done
//         printThird.run(); // printThird.run() outputs "third". Do not change or remove this line.
//     }
// }

class Foo {
    private int turn;
    public Foo() {
        turn = 1;
    }

    public synchronized void first(Runnable printFirst) throws InterruptedException {
        while(turn!=1){
            wait();
        }
        printFirst.run(); // printFirst.run() outputs "first". Do not change or remove this line.
        turn = 2;
        notifyAll();
    }

    public synchronized void second(Runnable printSecond) throws InterruptedException {
        while(turn!=2){
            wait();
        }
        printSecond.run(); // printSecond.run() outputs "second". Do not change or remove this line.
        turn = 3;
        notifyAll();
    }

    public synchronized void third(Runnable printThird) throws InterruptedException {
        while(turn!=3){
            wait();
        }
        printThird.run(); // printThird.run() outputs "third". Do not change or remove this line.
        notifyAll();
    }
}