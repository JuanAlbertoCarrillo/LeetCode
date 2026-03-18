import java.util.HashMap;

public class IntToRoman {
    
    public String intToRoman(int number) {

        HashMap<Integer, String> romans = new HashMap<>();
        romans.put(1,"I"); romans.put(5,"V");
        romans.put(10,"X"); romans.put(50,"L");
        romans.put(100,"C"); romans.put(500,"D");
        romans.put(1000,"M");

        int exp=3;
        String sb = "";

        while(exp>=0){
            Integer divider = (int) Math.pow(10, exp);
            Integer quotient = number/divider;
            number = number % divider;

            if(quotient==0){
                exp--;
                continue;
            }

            if(quotient==4 || quotient==9){
                Integer temp=(quotient*divider)+divider;
                sb+=romans.get(divider);
                sb+=romans.get(temp);
                exp--;
                continue;
            }

            Integer qByFive = quotient/5;

            if(qByFive == 1){
                sb+=romans.get(5*divider);
                quotient = quotient-5;
                if(quotient==0){
                    exp--;
                    continue;
                }
            }
            
            for(int i=1; i<=quotient; i++){
                sb+=romans.get(1*divider);
            }
            exp--;
        } 
        return sb;
    }

    public static void main(String[] args) {
        IntToRoman intToRoman = new IntToRoman();
        System.out.println(intToRoman.intToRoman(58));
    }
}
