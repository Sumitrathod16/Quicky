export const PRACTICE_QUESTIONS = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Array', 'Hash Map'],
    functionName: 'twoSum',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] = 2 + 7 = 9' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: 'nums[1] + nums[2] = 2 + 4 = 6' },
    ],
    constraints: ['2 ≤ nums.length ≤ 10⁴', '-10⁹ ≤ nums[i] ≤ 10⁹', 'Only one valid answer exists.'],
    testCases: [
      { fn: 'twoSum([2,7,11,15], 9)', expected: '[0,1]' },
      { fn: 'twoSum([3,2,4], 6)', expected: '[1,2]' },
      { fn: 'twoSum([3,3], 6)', expected: '[0,1]' },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  return [];
}`,
      python: `def twoSum(nums, target):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
int* twoSum(int* nums, int n, int target, int* rSize) {
    // Write your solution here
    *rSize = 2;
    int* res = malloc(2 * sizeof(int));
    res[0] = 0; res[1] = 0;
    return res;
}`,
    },
  },
  {
    id: 2,
    title: 'Reverse a String',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['String', 'Two Pointers'],
    functionName: 'reverseString',
    description: `Write a function that reverses a string. Return the reversed string.`,
    examples: [
      { input: 's = "hello"', output: '"olleh"' },
      { input: 's = "Hannah"', output: '"hannaH"' },
    ],
    constraints: ['1 ≤ s.length ≤ 10⁵'],
    testCases: [
      { fn: 'reverseString("hello")', expected: '"olleh"' },
      { fn: 'reverseString("Hannah")', expected: '"hannaH"' },
      { fn: 'reverseString("a")', expected: '"a"' },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  return s;
}`,
      python: `def reverseString(s):
    # Write your solution here
    return s
`,
      java: `public class Main {
    public static String reverseString(String s) {
        // Write your solution here
        return "";
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
string reverseString(string s) {
    // Write your solution here
    return "";
}`,
      c: `#include <stdio.h>
#include <string.h>
void reverseString(char* s) {
    // Write your solution here
}`,
    },
  },
  {
    id: 3,
    title: 'FizzBuzz',
    difficulty: 'Easy',
    category: 'Math',
    tags: ['Math', 'String'],
    functionName: 'fizzBuzz',
    description: `Given an integer \`n\`, return a string array where each value follows the FizzBuzz rules.`,
    examples: [
      { input: 'n = 3', output: '["1","2","Fizz"]' },
      { input: 'n = 5', output: '["1","2","Fizz","4","Buzz"]' },
    ],
    constraints: ['1 ≤ n ≤ 10⁴'],
    testCases: [
      { fn: 'JSON.stringify(fizzBuzz(3))', expected: '["1","2","Fizz"]' },
      { fn: 'JSON.stringify(fizzBuzz(5))', expected: '["1","2","Fizz","4","Buzz"]' },
      { fn: 'JSON.stringify(fizzBuzz(15)).includes("FizzBuzz")', expected: 'true' },
    ],
    starterCode: {
      javascript: `function fizzBuzz(n) {
  // Write your solution here
  return [];
}`,
      python: `def fizzBuzz(n):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static List<String> fizzBuzz(int n) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<string> fizzBuzz(int n) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
void fizzBuzz(int n) {
    // Write your solution here
}`,
    },
  },
  {
    id: 4,
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['String', 'Two Pointers'],
    functionName: 'isPalindrome',
    description: `A phrase is a palindrome if it reads the same forward and backward after ignoring non-alphanumeric characters and case differences.`,
    examples: [
      { input: '"A man, a plan, a canal: Panama"', output: 'true' },
      { input: '"race a car"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 2×10⁵'],
    testCases: [
      { fn: 'isPalindrome("A man, a plan, a canal: Panama")', expected: 'true' },
      { fn: 'isPalindrome("race a car")', expected: 'false' },
      { fn: 'isPalindrome(" ")', expected: 'true' },
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  return false;
}`,
      python: `def isPalindrome(s):
    # Write your solution here
    return False
`,
      java: `public class Main {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool isPalindrome(string s) {
    // Write your solution here
    return false;
}`,
      c: `#include <stdio.h>
#include <ctype.h>
#include <string.h>
int isPalindrome(char* s) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 5,
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Array', 'DP'],
    functionName: 'maxSubArray',
    description: `Find the subarray with the largest sum and return its sum.`,
    examples: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: '[4,-1,2,1] has sum 6' },
      { input: '[1]', output: '1' },
    ],
    constraints: ['1 ≤ nums.length ≤ 10⁵'],
    testCases: [
      { fn: 'maxSubArray([-2,1,-3,4,-1,2,1,-5,4])', expected: '6' },
      { fn: 'maxSubArray([1])', expected: '1' },
      { fn: 'maxSubArray([5,4,-1,7,8])', expected: '23' },
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  return 0;
}`,
      python: `def maxSubArray(nums):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int maxSubArray(vector<int>& nums) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int maxSubArray(int* nums, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 6,
    title: 'Fibonacci Number',
    difficulty: 'Easy',
    category: 'Recursion',
    tags: ['Math', 'Recursion'],
    functionName: 'fib',
    description: `Given \`n\`, calculate F(n), where F(0)=0 and F(1)=1.`,
    examples: [
      { input: 'n = 2', output: '1' },
      { input: 'n = 10', output: '55' },
    ],
    constraints: ['0 ≤ n ≤ 30'],
    testCases: [
      { fn: 'fib(2)', expected: '1' },
      { fn: 'fib(10)', expected: '55' },
      { fn: 'fib(0)', expected: '0' },
    ],
    starterCode: {
      javascript: `function fib(n) {
  // Write your solution here
  return 0;
}`,
      python: `def fib(n):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int fib(int n) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <iostream>
using namespace std;
int fib(int n) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int fib(int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 7,
    title: 'Climbing Stairs',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['DP', 'Math'],
    functionName: 'climbStairs',
    description: `You are climbing a staircase. Each time you can take 1 or 2 steps. Count the distinct ways to reach the top.`,
    examples: [
      { input: 'n = 2', output: '2', explanation: '(1+1) or (2)' },
      { input: 'n = 3', output: '3' },
    ],
    constraints: ['1 ≤ n ≤ 45'],
    testCases: [
      { fn: 'climbStairs(2)', expected: '2' },
      { fn: 'climbStairs(3)', expected: '3' },
      { fn: 'climbStairs(10)', expected: '89' },
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  return 0;
}`,
      python: `def climbStairs(n):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <iostream>
using namespace std;
int climbStairs(int n) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int climbStairs(int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 8,
    title: 'Count Vowels',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['String', 'Counting'],
    functionName: 'countVowels',
    description: `Given a string \`s\`, return the number of vowels (a, e, i, o, u) both in uppercase and lowercase.`,
    examples: [
      { input: '"Hello World"', output: '3' },
      { input: '"aeiou"', output: '5' },
    ],
    constraints: ['1 ≤ s.length ≤ 10⁵'],
    testCases: [
      { fn: 'countVowels("Hello World")', expected: '3' },
      { fn: 'countVowels("aeiou")', expected: '5' },
      { fn: 'countVowels("xyz")', expected: '0' },
    ],
    starterCode: {
      javascript: `function countVowels(s) {
  // Write your solution here
  return 0;
}`,
      python: `def countVowels(s):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int countVowels(String s) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int countVowels(string s) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
#include <string.h>
int countVowels(char* s) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 9,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Array', 'Greedy'],
    functionName: 'maxProfit',
    description: `Given an array of prices, find the maximum profit by choosing a single day to buy and a later day to sell.`,
    examples: [
      { input: '[7,1,5,3,6,4]', output: '5' },
      { input: '[7,6,4,3,1]', output: '0' },
    ],
    constraints: ['1 ≤ prices.length ≤ 10⁵'],
    testCases: [
      { fn: 'maxProfit([7,1,5,3,6,4])', expected: '5' },
      { fn: 'maxProfit([7,6,4,3,1])', expected: '0' },
      { fn: 'maxProfit([1,2,3,4,5])', expected: '4' },
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  return 0;
}`,
      python: `def maxProfit(prices):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int maxProfit(int* prices, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 10,
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    category: 'Hashing',
    tags: ['Hash Map', 'Set'],
    functionName: 'containsDuplicate',
    description: `Return true if any value appears at least twice in the array; otherwise return false.`,
    examples: [
      { input: '[1,2,3,1]', output: 'true' },
      { input: '[1,2,3,4]', output: 'false' },
    ],
    constraints: ['1 ≤ nums.length ≤ 10⁵'],
    testCases: [
      { fn: 'containsDuplicate([1,2,3,1])', expected: 'true' },
      { fn: 'containsDuplicate([1,2,3,4])', expected: 'false' },
      { fn: 'containsDuplicate([1,1,1,3,3,4,3,2,4,2])', expected: 'true' },
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  return false;
}`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    return False
`,
      java: `public class Main {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}`,
      c: `#include <stdio.h>
int containsDuplicate(int* nums, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 11,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    category: 'Linked Lists',
    tags: ['Linked List', 'Merge'],
    functionName: 'mergeTwoLists',
    description: `Merge two sorted linked lists and return the head of the merged list.`,
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
    ],
    constraints: ['The number of nodes in both lists is in the range [0, 50].'],
    testCases: [
      { fn: 'JSON.stringify(mergeTwoLists([1,2,4],[1,3,4]))', expected: '[1,1,2,3,4,4]' },
      { fn: 'JSON.stringify(mergeTwoLists([],[]))', expected: '[]' },
    ],
    starterCode: {
      javascript: `function mergeTwoLists(list1, list2) {
  // Write your solution here
  return [];
}`,
      python: `def mergeTwoLists(list1, list2):
    # Write your solution here
    return []
`,
      java: `public class Main {
    public static int[] mergeTwoLists(int[] list1, int[] list2) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> mergeTwoLists(vector<int> list1, vector<int> list2) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
int* mergeTwoLists(int* list1, int n1, int* list2, int n2, int* outSize) {
    // Write your solution here
    *outSize = 0;
    return NULL;
}`,
    },
  },
  {
    id: 12,
    title: 'Valid Anagram',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['String', 'Hash Map'],
    functionName: 'isAnagram',
    description: `Given two strings, determine if they are anagrams of each other.`,
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true' },
      { input: 's = "rat", t = "car"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length, t.length ≤ 5×10⁴'],
    testCases: [
      { fn: 'isAnagram("anagram","nagaram")', expected: 'true' },
      { fn: 'isAnagram("rat","car")', expected: 'false' },
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  return false;
}`,
      python: `def isAnagram(s, t):
    # Write your solution here
    return False
`,
      java: `public class Main {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool isAnagram(string s, string t) {
    // Write your solution here
    return false;
}`,
      c: `#include <stdio.h>
#include <string.h>
int isAnagram(char* s, char* t) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 13,
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['String', 'Trie'],
    functionName: 'longestCommonPrefix',
    description: `Return the longest common prefix string among an array of strings.`,
    examples: [
      { input: '["flower","flow","flight"]', output: '"fl"' },
      { input: '["dog","racecar","car"]', output: '""' },
    ],
    constraints: ['1 ≤ strs.length ≤ 200'],
    testCases: [
      { fn: 'longestCommonPrefix(["flower","flow","flight"])', expected: '"fl"' },
      { fn: 'longestCommonPrefix(["dog","racecar","car"])', expected: '""' },
    ],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  return "";
}`,
      python: `def longestCommonPrefix(strs):
    # Write your solution here
    return ""
`,
      java: `public class Main {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here
        return "";
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
string longestCommonPrefix(vector<string>& strs) {
    // Write your solution here
    return "";
}`,
      c: `#include <stdio.h>
#include <string.h>
char* longestCommonPrefix(char** strs, int n) {
    // Write your solution here
    return "";
}`,
    },
  },
  {
    id: 14,
    title: 'Missing Number',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Array', 'Math'],
    functionName: 'missingNumber',
    description: `Given an array containing n distinct numbers from 0 to n, find the one missing number.`,
    examples: [
      { input: '[3,0,1]', output: '2' },
      { input: '[0,1]', output: '2' },
    ],
    constraints: ['n == nums.length', '0 ≤ nums[i] ≤ n'],
    testCases: [
      { fn: 'missingNumber([3,0,1])', expected: '2' },
      { fn: 'missingNumber([0,1])', expected: '2' },
      { fn: 'missingNumber([9,6,4,2,3,5,7,0,1])', expected: '8' },
    ],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  return 0;
}`,
      python: `def missingNumber(nums):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int missingNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int missingNumber(int* nums, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 15,
    title: 'Plus One',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Array', 'Math'],
    functionName: 'plusOne',
    description: `Given a non-empty array of digits representing a non-negative integer, increment the number by one.`,
    examples: [
      { input: '[1,2,3]', output: '[1,2,4]' },
      { input: '[9,9]', output: '[1,0,0]' },
    ],
    constraints: ['1 ≤ digits.length ≤ 100'],
    testCases: [
      { fn: 'JSON.stringify(plusOne([1,2,3]))', expected: '[1,2,4]' },
      { fn: 'JSON.stringify(plusOne([9,9]))', expected: '[1,0,0]' },
    ],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
  return digits;
}`,
      python: `def plusOne(digits):
    # Write your solution here
    return digits
`,
      java: `public class Main {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> plusOne(vector<int>& digits) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
int* plusOne(int* digits, int n, int* outSize) {
    // Write your solution here
    *outSize = n;
    return digits;
}`,
    },
  },
  {
    id: 16,
    title: 'Isomorphic Strings',
    difficulty: 'Easy',
    category: 'Hashing',
    tags: ['Hash Map', 'String'],
    functionName: 'isIsomorphic',
    description: `Two strings are isomorphic if each character in s can be replaced by a different character in t while preserving order.`,
    examples: [
      { input: 's = "egg", t = "add"', output: 'true' },
      { input: 's = "foo", t = "bar"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 5×10⁴'],
    testCases: [
      { fn: 'isIsomorphic("egg","add")', expected: 'true' },
      { fn: 'isIsomorphic("foo","bar")', expected: 'false' },
    ],
    starterCode: {
      javascript: `function isIsomorphic(s, t) {
  // Write your solution here
  return false;
}`,
      python: `def isIsomorphic(s, t):
    # Write your solution here
    return False
`,
      java: `public class Main {
    public static boolean isIsomorphic(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool isIsomorphic(string s, string t) {
    // Write your solution here
    return false;
}`,
      c: `#include <stdio.h>
#include <string.h>
int isIsomorphic(char* s, char* t) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 17,
    title: 'Group Anagrams',
    difficulty: 'Medium',
    category: 'Strings',
    tags: ['String', 'Hash Map'],
    functionName: 'groupAnagrams',
    description: `Group the given strings by anagrams and return the groups.`,
    examples: [
      { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
    ],
    constraints: ['1 ≤ strs.length ≤ 10⁴'],
    testCases: [
      { fn: 'JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))', expected: '[ ["bat"], ["nat","tan"], ["ate","eat","tea"] ]' },
    ],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  return [];
}`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<vector<string>> groupAnagrams(vector<string> strs) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
char*** groupAnagrams(char** strs, int n, int* outSize) {
    // Write your solution here
    *outSize = 0;
    return NULL;
}`,
    },
  },
  {
    id: 18,
    title: 'Maximum Product Subarray',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['Array', 'DP'],
    functionName: 'maxProduct',
    description: `Find the contiguous subarray with the maximum product.` ,
    examples: [
      { input: '[2,3,-2,4]', output: '6' },
      { input: '[-2,0,-1]', output: '0' },
    ],
    constraints: ['1 ≤ nums.length ≤ 2×10⁵'],
    testCases: [
      { fn: 'maxProduct([2,3,-2,4])', expected: '6' },
      { fn: 'maxProduct([-2,0,-1])', expected: '0' },
    ],
    starterCode: {
      javascript: `function maxProduct(nums) {
  // Write your solution here
  return 0;
}`,
      python: `def maxProduct(nums):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int maxProduct(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int maxProduct(vector<int>& nums) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int maxProduct(int* nums, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 19,
    title: 'House Robber',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['DP', 'Array'],
    functionName: 'rob',
    description: `You are a robber planning to rob houses along a street. Each house has a non-negative amount of money. The robber cannot rob two adjacent houses.`,
    examples: [
      { input: '[1,2,3,1]', output: '4' },
      { input: '[2,7,9,3,1]', output: '12' },
    ],
    constraints: ['1 ≤ nums.length ≤ 200'],
    testCases: [
      { fn: 'rob([1,2,3,1])', expected: '4' },
      { fn: 'rob([2,7,9,3,1])', expected: '12' },
    ],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here
  return 0;
}`,
      python: `def rob(nums):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int rob(vector<int>& nums) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int rob(int* nums, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 20,
    title: 'Pascal\'s Triangle',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['Array', 'DP'],
    functionName: 'generate',
    description: `Given an integer \`numRows\`, generate the first numRows rows of Pascal's triangle.`,
    examples: [
      { input: 'numRows = 5', output: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]' },
    ],
    constraints: ['1 ≤ numRows ≤ 30'],
    testCases: [
      { fn: 'JSON.stringify(generate(5))', expected: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]' },
      { fn: 'JSON.stringify(generate(1))', expected: '[[1]]' },
    ],
    starterCode: {
      javascript: `function generate(numRows) {
  // Write your solution here
  return [];
}`,
      python: `def generate(numRows):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static List<List<Integer>> generate(int numRows) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> generate(int numRows) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
int** generate(int numRows, int* outRows) {
    // Write your solution here
    *outRows = 0;
    return NULL;
}`,
    },
  },
];

export function buildStarterForLanguage(problem, languageId) {
  const starter = problem?.starterCode?.[languageId];
  if (starter) return starter;

  const fallback = {
    javascript: `function ${problem.functionName || 'solution'}() {
  // Write your solution here
  return null;
}`,
    python: `def ${problem.functionName || 'solution'}():
    # Write your solution here
    return None
`,
    java: `public class Main {
    public static Object ${problem.functionName || 'solution'}() {
        // Write your solution here
        return null;
    }
}`,
    cpp: `#include <bits/stdc++.h>
using namespace std;
int ${problem.functionName || 'solution'}() {
    // Write your solution here
    return 0;
}`,
    c: `#include <stdio.h>
int ${problem.functionName || 'solution'}() {
    // Write your solution here
    return 0;
}`,
  };

  return fallback[languageId] || fallback.javascript;
}
