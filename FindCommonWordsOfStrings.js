class Solution {
    solve(s0, s1) {
        if (!s0 || !s1) return 0;
    // toLowerCase is used for case sensitivity 
        s0 = s0.toLowerCase().split(' ');
        s1 = s1.toLowerCase().split(' ');

        // Construct a set from the words in s0
        const wordSet = new Set(s0);

        // Count unique occurences of words from s1 in s0 using map
        let count = 0;
        for (let word of s1) {
            if (wordSet.has(word)) {
                wordSet.delete(word);
                count++;
            }
        }

        return count;
    }
}