import java.util.HashMap;

class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> romans = new HashMap<>();
        romans.put('I',1);   romans.put('V',5);
        romans.put('X',10);  romans.put('L',50);
        romans.put('C',100); romans.put('D',500);
        romans.put('M',1000);

        int sum=0;
        char[] romanCharacters = s.toCharArray();

        for(int i = 0; i < romanCharacters.length; i++){
            char currentChar = romanCharacters[i];
            int currentCharVal = romans.get(currentChar);

            char nextChar = 0;
            int nextCharVal = 0;

            if(i==romanCharacters.length-1){
                nextChar=0;
                nextCharVal=0;
            }else{
                nextChar=romanCharacters[i+1];
                nextCharVal = romans.get(nextChar);
            }

            if(currentCharVal >= nextCharVal){
                sum+=currentCharVal;
            }
            else{
                sum-=currentCharVal;
            }
        }

        return sum;
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.romanToInt("III")); // Output: 3
        System.out.println(solution.romanToInt("IV"));  // Output: 4
        System.out.println(solution.romanToInt("IX"));  // Output: 9
        System.out.println(solution.romanToInt("LVIII")); // Output: 58
        System.out.println(solution.romanToInt("MCMXC")); // Output: 1990
    }
}
