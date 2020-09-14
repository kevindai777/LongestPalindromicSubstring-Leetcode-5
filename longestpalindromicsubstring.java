//Java Solution

class Solution {
    public String longestPalindrome(String s) {
        if (s.length() == 0) {
            return "";
        }
        
        int start = 0;
        int end = 0;
        int max = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int tempStart = i;
            int tempEnd = i;
            
            while (tempEnd < s.length() - 1 && s.charAt(tempEnd) == s.charAt(tempEnd + 1)) {
                tempEnd++;
            }
            
            while (tempStart >= 1 && tempEnd < s.length() - 1 && s.charAt(tempStart - 1) == s.charAt(tempEnd + 1)) {
                tempStart--;
                tempEnd++;
            }
            
            if (max < tempEnd - tempStart + 1) {
                max = tempEnd - tempStart + 1;
                start = tempStart;
                end = tempEnd;
            }
        }
    
        return s.substring(start, end + 1);
    }
}