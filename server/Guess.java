import java.util.Scanner;

public class Guess {
 public static void main(String [] args) throws Exception {
    System.out.println("Welcome");
    Scanner scan = new Scanner(System.in);
    int num = (int)Math.floor(Math.random()*100.0)+1;
		Thread.sleep(2000);
    System.out.println("Enter a number");
    while(true){
        String input = scan.nextLine();
        int nextInt;
        try{
            nextInt = new Integer(input.trim()).intValue();
        }
        catch(NumberFormatException e){
            nextInt=0;
        }
        if(nextInt<=0 || nextInt>100)
            System.out.println("Please enter a number between 1 and 100");
        else if(nextInt==num){
            System.out.println("Exactly!");
						Thread.sleep(3000);
						System.out.println("Thank you");
            return;
        }
        else System.out.println("Your number is too "+(nextInt<num?"small":"big"));
    }
  }
}
