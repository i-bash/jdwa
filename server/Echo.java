import java.util.Scanner;

public class Echo {
 public static void main(String [] args) throws Exception {
    Scanner scan = new Scanner(System.in);
    System.out.println("Echo is ready");
    while(true){
        String input = scan.nextLine();
        if(input.isEmpty()){
            System.out.println("Thank you");
            return;
        }
        else System.out.println(input);
    }
  }
}
