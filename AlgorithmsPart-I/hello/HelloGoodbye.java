public class HelloGoodbye {

  public static void main(String[] args) {
    // Prints "Hello, World" in the terminal window.
    if (args.length != 0) {
      System.out.println("Hello " + args[0] + " and " + args[1]);
      System.out.println("Goodbye " + args[0] + " and " + args[1]);
    }
  }
}
