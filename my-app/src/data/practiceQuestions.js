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
  {
    id: 21,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'Stacks & Queues',
    tags: ['Stack', 'String'],
    functionName: 'isValid',
    description: `Given a string \`s\` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if open brackets are closed by the same type of brackets, in the correct order, and every close bracket has a corresponding open bracket.`,
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 10⁴', 's consists of parentheses only \'()[]{}\'.'],
    testCases: [
      { fn: 'isValid("()")', expected: 'true' },
      { fn: 'isValid("()[]{}")', expected: 'true' },
      { fn: 'isValid("(]")', expected: 'false' },
      { fn: 'isValid("([)]")', expected: 'false' },
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  return false;
}`,
      python: `def isValid(s):
    # Write your solution here
    return False
`,
      java: `import java.util.*;
public class Main {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool isValid(string s) {
    // Write your solution here
    return false;
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
bool isValid(char* s) {
    // Write your solution here
    return false;
}`,
    },
  },
  {
    id: 22,
    title: 'Binary Tree Inorder Traversal',
    difficulty: 'Easy',
    category: 'Trees',
    tags: ['Tree', 'DFS', 'Stack'],
    functionName: 'inorderTraversal',
    description: `Given an array representation of a binary tree \`root\`, return the inorder traversal of its nodes' values.`,
    examples: [
      { input: 'root = [1,null,2,3]', output: '[1,3,2]' },
      { input: 'root = []', output: '[]' },
      { input: 'root = [1]', output: '[1]' },
    ],
    constraints: ['The number of nodes in the tree is in the range [0, 100].'],
    testCases: [
      { fn: 'JSON.stringify(inorderTraversal([1, null, 2, 3]))', expected: '[1,3,2]' },
      { fn: 'JSON.stringify(inorderTraversal([]))', expected: '[]' },
      { fn: 'JSON.stringify(inorderTraversal([1]))', expected: '[1]' },
    ],
    starterCode: {
      javascript: `function inorderTraversal(root) {
  // Write your solution here
  return [];
}`,
      python: `def inorderTraversal(root):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static List<Integer> inorderTraversal(Integer[] root) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> inorderTraversal(vector<int> root) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
int* inorderTraversal(int* root, int n, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}`,
    },
  },
  {
    id: 23,
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    category: 'Trees',
    tags: ['Tree', 'DFS', 'BFS'],
    functionName: 'maxDepth',
    description: `Given the root array representation of a binary tree, return its maximum depth. Maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' },
      { input: 'root = [1,null,2]', output: '2' },
    ],
    constraints: ['0 ≤ number of nodes ≤ 10⁴'],
    testCases: [
      { fn: 'maxDepth([3,9,20,null,null,15,7])', expected: '3' },
      { fn: 'maxDepth([1,null,2])', expected: '2' },
      { fn: 'maxDepth([])', expected: '0' },
    ],
    starterCode: {
      javascript: `function maxDepth(root) {
  // Write your solution here
  return 0;
}`,
      python: `def maxDepth(root):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int maxDepth(Integer[] root) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int maxDepth(vector<int> root) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int maxDepth(int* root, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 24,
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    category: 'Trees',
    tags: ['Tree', 'DFS', 'BFS'],
    functionName: 'invertTree',
    description: `Given the root array of a binary tree, invert the tree (mirror left and right subtrees) and return its root array.`,
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
      { input: 'root = [2,1,3]', output: '[2,3,1]' },
    ],
    constraints: ['0 ≤ number of nodes ≤ 100'],
    testCases: [
      { fn: 'JSON.stringify(invertTree([4,2,7,1,3,6,9]))', expected: '[4,7,2,9,6,3,1]' },
      { fn: 'JSON.stringify(invertTree([2,1,3]))', expected: '[2,3,1]' },
    ],
    starterCode: {
      javascript: `function invertTree(root) {
  // Write your solution here
  return root;
}`,
      python: `def invertTree(root):
    # Write your solution here
    return root
`,
      java: `public class Main {
    public static Integer[] invertTree(Integer[] root) {
        // Write your solution here
        return root;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> invertTree(vector<int> root) {
    // Write your solution here
    return root;
}`,
      c: `#include <stdio.h>
int* invertTree(int* root, int n) {
    // Write your solution here
    return root;
}`,
    },
  },
  {
    id: 25,
    title: 'Binary Search',
    difficulty: 'Easy',
    category: 'Searching',
    tags: ['Binary Search', 'Array'],
    functionName: 'search',
    description: `Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search \`target\` in \`nums\`. Return its index if found, else return -1.`,
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1' },
    ],
    constraints: ['1 ≤ nums.length ≤ 10⁴', 'All integers in nums are unique.'],
    testCases: [
      { fn: 'search([-1,0,3,5,9,12], 9)', expected: '4' },
      { fn: 'search([-1,0,3,5,9,12], 2)', expected: '-1' },
      { fn: 'search([5], 5)', expected: '0' },
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  return -1;
}`,
      python: `def search(nums, target):
    # Write your solution here
    return -1
`,
      java: `public class Main {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}`,
      c: `#include <stdio.h>
int search(int* nums, int n, int target) {
    // Write your solution here
    return -1;
}`,
    },
  },
  {
    id: 26,
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    category: 'Linked Lists',
    tags: ['Linked List', 'Recursion'],
    functionName: 'reverseList',
    description: `Given the head array of a singly linked list, reverse the list, and return the reversed list array.`,
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
      { input: 'head = [1,2]', output: '[2,1]' },
    ],
    constraints: ['0 ≤ number of nodes ≤ 5000'],
    testCases: [
      { fn: 'JSON.stringify(reverseList([1,2,3,4,5]))', expected: '[5,4,3,2,1]' },
      { fn: 'JSON.stringify(reverseList([1,2]))', expected: '[2,1]' },
      { fn: 'JSON.stringify(reverseList([]))', expected: '[]' },
    ],
    starterCode: {
      javascript: `function reverseList(head) {
  // Write your solution here
  return [];
}`,
      python: `def reverseList(head):
    # Write your solution here
    return []
`,
      java: `public class Main {
    public static int[] reverseList(int[] head) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> reverseList(vector<int> head) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
int* reverseList(int* head, int n) {
    // Write your solution here
    return head;
}`,
    },
  },
  {
    id: 27,
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    category: 'Linked Lists',
    tags: ['Linked List', 'Two Pointers'],
    functionName: 'hasCycle',
    description: `Given an array representing a linked list and an index \`pos\` indicating where the tail points to (-1 for no cycle), determine if the linked list has a cycle in it.`,
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true' },
      { input: 'head = [1,2], pos = 0', output: 'true' },
      { input: 'head = [1], pos = -1', output: 'false' },
    ],
    constraints: ['0 ≤ number of nodes ≤ 10⁴'],
    testCases: [
      { fn: 'hasCycle([3,2,0,-4], 1)', expected: 'true' },
      { fn: 'hasCycle([1,2], 0)', expected: 'true' },
      { fn: 'hasCycle([1], -1)', expected: 'false' },
    ],
    starterCode: {
      javascript: `function hasCycle(head, pos) {
  // Write your solution here
  return false;
}`,
      python: `def hasCycle(head, pos):
    # Write your solution here
    return False
`,
      java: `public class Main {
    public static boolean hasCycle(int[] head, int pos) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool hasCycle(vector<int> head, int pos) {
    // Write your solution here
    return false;
}`,
      c: `#include <stdio.h>
int hasCycle(int* head, int n, int pos) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 28,
    title: 'Coin Change',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['DP', 'BFS'],
    functionName: 'coinChange',
    description: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\`. Return the fewest number of coins that you need to make up that amount. Return -1 if that amount of money cannot be made up.`,
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' },
      { input: 'coins = [2], amount = 3', output: '-1' },
      { input: 'coins = [1], amount = 0', output: '0' },
    ],
    constraints: ['1 ≤ coins.length ≤ 12', '1 ≤ coins[i] ≤ 2³¹ - 1', '0 ≤ amount ≤ 10⁴'],
    testCases: [
      { fn: 'coinChange([1,2,5], 11)', expected: '3' },
      { fn: 'coinChange([2], 3)', expected: '-1' },
      { fn: 'coinChange([1], 0)', expected: '0' },
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  return -1;
}`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    return -1
`,
      java: `public class Main {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return -1;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int coinChange(vector<int>& coins, int amount) {
    // Write your solution here
    return -1;
}`,
      c: `#include <stdio.h>
int coinChange(int* coins, int n, int amount) {
    // Write your solution here
    return -1;
}`,
    },
  },
  {
    id: 29,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    category: 'Sliding Window',
    tags: ['Sliding Window', 'Hash Table', 'String'],
    functionName: 'lengthOfLongestSubstring',
    description: `Given a string \`s\`, find the length of the longest substring without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc", with length 3.' },
      { input: 's = "bbbbb"', output: '1' },
      { input: 's = "pwwkew"', output: '3' },
    ],
    constraints: ['0 ≤ s.length ≤ 5×10⁴'],
    testCases: [
      { fn: 'lengthOfLongestSubstring("abcabcbb")', expected: '3' },
      { fn: 'lengthOfLongestSubstring("bbbbb")', expected: '1' },
      { fn: 'lengthOfLongestSubstring("pwwkew")', expected: '3' },
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  return 0;
}`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
#include <string.h>
int lengthOfLongestSubstring(char* s) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 30,
    title: 'Container With Most Water',
    difficulty: 'Medium',
    category: 'Two Pointers',
    tags: ['Two Pointers', 'Array', 'Greedy'],
    functionName: 'maxArea',
    description: `Given an integer array \`height\` of length n, find two lines that together with the x-axis form a container that holds the maximum amount of water. Return the maximum area.`,
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' },
      { input: 'height = [1,1]', output: '1' },
    ],
    constraints: ['2 ≤ height.length ≤ 10⁵', '0 ≤ height[i] ≤ 10⁴'],
    testCases: [
      { fn: 'maxArea([1,8,6,2,5,4,8,3,7])', expected: '49' },
      { fn: 'maxArea([1,1])', expected: '1' },
    ],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  return 0;
}`,
      python: `def maxArea(height):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int maxArea(int* height, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 31,
    title: '3Sum',
    difficulty: 'Medium',
    category: 'Two Pointers',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    functionName: 'threeSum',
    description: `Given an integer array \`nums\`, return all unique triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.`,
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', output: '[]' },
    ],
    constraints: ['3 ≤ nums.length ≤ 3000', '-10⁵ ≤ nums[i] ≤ 10⁵'],
    testCases: [
      { fn: 'JSON.stringify(threeSum([-1,0,1,2,-1,-4]))', expected: '[[-1,-1,2],[-1,0,1]]' },
      { fn: 'JSON.stringify(threeSum([0,1,1]))', expected: '[]' },
      { fn: 'JSON.stringify(threeSum([0,0,0]))', expected: '[[0,0,0]]' },
    ],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  return [];
}`,
      python: `def threeSum(nums):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
int** threeSum(int* nums, int n, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}`,
    },
  },
  {
    id: 32,
    title: 'Number of Islands',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Graph', 'DFS', 'BFS', 'Matrix'],
    functionName: 'numIslands',
    description: `Given an m x n 2D binary grid \`grid\` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.`,
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' },
    ],
    constraints: ['m == grid.length', 'n == grid[i].length', '1 ≤ m, n ≤ 300', 'grid[i][j] is \'0\' or \'1\'.'],
    testCases: [
      { fn: 'numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])', expected: '1' },
      { fn: 'numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])', expected: '3' },
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
  return 0;
}`,
      python: `def numIslands(grid):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int numIslands(vector<vector<char>>& grid) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int numIslands(char** grid, int rowSize, int colSize) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 33,
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    category: 'Searching',
    tags: ['Array', 'Binary Search'],
    functionName: 'searchRotated',
    description: `Given an integer array \`nums\` sorted in ascending order (with distinct values) that has been rotated at an unknown pivot index, and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or -1 if it is not.`,
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
    ],
    constraints: ['1 ≤ nums.length ≤ 5000', '-10⁴ ≤ nums[i] ≤ 10⁴'],
    testCases: [
      { fn: 'searchRotated([4,5,6,7,0,1,2], 0)', expected: '4' },
      { fn: 'searchRotated([4,5,6,7,0,1,2], 3)', expected: '-1' },
      { fn: 'searchRotated([1], 0)', expected: '-1' },
    ],
    starterCode: {
      javascript: `function searchRotated(nums, target) {
  // Write your solution here
  return -1;
}`,
      python: `def searchRotated(nums, target):
    # Write your solution here
    return -1
`,
      java: `public class Main {
    public static int searchRotated(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int searchRotated(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}`,
      c: `#include <stdio.h>
int searchRotated(int* nums, int n, int target) {
    // Write your solution here
    return -1;
}`,
    },
  },
  {
    id: 34,
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    category: 'Two Pointers',
    tags: ['Two Pointers', 'Stack', 'DP'],
    functionName: 'trap',
    description: `Given \`n\` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    constraints: ['n == height.length', '1 ≤ n ≤ 2×10⁴', '0 ≤ height[i] ≤ 10⁵'],
    testCases: [
      { fn: 'trap([0,1,0,2,1,0,1,3,2,1,2,1])', expected: '6' },
      { fn: 'trap([4,2,0,3,2,5])', expected: '9' },
    ],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
  return 0;
}`,
      python: `def trap(height):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int trap(int* height, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 35,
    title: 'Single Number',
    difficulty: 'Easy',
    category: 'Bit Manipulation',
    tags: ['Bit Manipulation', 'Array'],
    functionName: 'singleNumber',
    description: `Given a non-empty array of integers \`nums\`, every element appears twice except for one. Find that single element. You must implement a solution with a linear runtime complexity and use only constant extra space.`,
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
      { input: 'nums = [1]', output: '1' },
    ],
    constraints: ['1 ≤ nums.length ≤ 3×10⁴', '-3×10⁴ ≤ nums[i] ≤ 3×10⁴'],
    testCases: [
      { fn: 'singleNumber([2,2,1])', expected: '1' },
      { fn: 'singleNumber([4,1,2,1,2])', expected: '4' },
      { fn: 'singleNumber([1])', expected: '1' },
    ],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  return 0;
}`,
      python: `def singleNumber(nums):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int singleNumber(int* nums, int n) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 36,
    title: 'Kth Largest Element in an Array',
    difficulty: 'Medium',
    category: 'Sorting & Searching',
    tags: ['Heap', 'Sorting', 'Quickselect'],
    functionName: 'findKthLargest',
    description: `Given an integer array \`nums\` and an integer \`k\`, return the \`kth\` largest element in the array. Note that it is the kth largest element in sorted order, not the kth distinct element.`,
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' },
    ],
    constraints: ['1 ≤ k ≤ nums.length ≤ 10⁵', '-10⁴ ≤ nums[i] ≤ 10⁴'],
    testCases: [
      { fn: 'findKthLargest([3,2,1,5,6,4], 2)', expected: '5' },
      { fn: 'findKthLargest([3,2,3,1,2,4,5,5,6], 4)', expected: '4' },
    ],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  return 0;
}`,
      python: `def findKthLargest(nums, k):
    # Write your solution here
    return 0
`,
      java: `public class Main {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int findKthLargest(vector<int>& nums, int k) {
    // Write your solution here
    return 0;
}`,
      c: `#include <stdio.h>
int findKthLargest(int* nums, int n, int k) {
    // Write your solution here
    return 0;
}`,
    },
  },
  {
    id: 37,
    title: 'Word Break',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    tags: ['DP', 'Hash Table', 'String'],
    functionName: 'wordBreak',
    description: `Given a string \`s\` and a dictionary of strings \`wordDict\`, return \`true\` if \`s\` can be segmented into a space-separated sequence of one or more dictionary words.`,
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true' },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: 'true' },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: 'false' },
    ],
    constraints: ['1 ≤ s.length ≤ 300', '1 ≤ wordDict.length ≤ 1000'],
    testCases: [
      { fn: 'wordBreak("leetcode", ["leet", "code"])', expected: 'true' },
      { fn: 'wordBreak("applepenapple", ["apple", "pen"])', expected: 'true' },
      { fn: 'wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])', expected: 'false' },
    ],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {
  // Write your solution here
  return false;
}`,
      python: `def wordBreak(s, wordDict):
    # Write your solution here
    return False
`,
      java: `import java.util.*;
public class Main {
    public static boolean wordBreak(String s, List<String> wordDict) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool wordBreak(string s, vector<string>& wordDict) {
    // Write your solution here
    return false;
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
bool wordBreak(char* s, char** wordDict, int dictSize) {
    // Write your solution here
    return false;
}`,
    },
  },
  {
    id: 38,
    title: 'Course Schedule',
    difficulty: 'Medium',
    category: 'Graphs',
    tags: ['Graph', 'DFS', 'BFS', 'Topological Sort'],
    functionName: 'canFinish',
    description: `There are a total of \`numCourses\` courses you have to take, labeled from \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [a, b]\` indicates that you must take course b first if you want to take course a. Return \`true\` if you can finish all courses; otherwise, return \`false\`.`,
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false' },
    ],
    constraints: ['1 ≤ numCourses ≤ 2000', '0 ≤ prerequisites.length ≤ 5000'],
    testCases: [
      { fn: 'canFinish(2, [[1,0]])', expected: 'true' },
      { fn: 'canFinish(2, [[1,0],[0,1]])', expected: 'false' },
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
  return true;
}`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    return True
`,
      java: `public class Main {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return true;
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    // Write your solution here
    return true;
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
bool canFinish(int numCourses, int** prerequisites, int n, int* colSizes) {
    // Write your solution here
    return true;
}`,
    },
  },
  {
    id: 39,
    title: 'Min Stack',
    difficulty: 'Medium',
    category: 'Stacks & Queues',
    tags: ['Stack', 'Design'],
    functionName: 'minStackOps',
    description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Execute operations array and return the result array.`,
    examples: [
      { input: 'ops = ["push","push","push","getMin","pop","top","getMin"], vals = [[-2],[0],[-3],[],[],[],[]]', output: '[null,null,null,-3,null,0,-2]' },
    ],
    constraints: ['Methods pop, top and getMin will always be called on non-empty stacks.'],
    testCases: [
      { fn: 'JSON.stringify(minStackOps(["push","push","push","getMin","pop","top","getMin"], [[-2],[0],[-3],[],[],[],[]]))', expected: '[null,null,null,-3,null,0,-2]' },
    ],
    starterCode: {
      javascript: `function minStackOps(ops, vals) {
  // Write your solution here
  return [];
}`,
      python: `def minStackOps(ops, vals):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static List<Object> minStackOps(String[] ops, int[][] vals) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<string> minStackOps(vector<string> ops, vector<vector<int>> vals) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
void minStackOps() {
    // Write your solution here
}`,
    },
  },
  {
    id: 40,
    title: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    category: 'Linked Lists',
    tags: ['Linked List', 'Heap', 'Divide and Conquer'],
    functionName: 'mergeKLists',
    description: `You are given an array of \`k\` linked-lists arrays, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list array and return it.`,
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
      { input: 'lists = []', output: '[]' },
      { input: 'lists = [[]]', output: '[]' },
    ],
    constraints: ['k == lists.length', '0 ≤ k ≤ 10⁴', '0 ≤ lists[i].length ≤ 500'],
    testCases: [
      { fn: 'JSON.stringify(mergeKLists([[1,4,5],[1,3,4],[2,6]]))', expected: '[1,1,2,3,4,4,5,6]' },
      { fn: 'JSON.stringify(mergeKLists([]))', expected: '[]' },
      { fn: 'JSON.stringify(mergeKLists([[]]))', expected: '[]' },
    ],
    starterCode: {
      javascript: `function mergeKLists(lists) {
  // Write your solution here
  return [];
}`,
      python: `def mergeKLists(lists):
    # Write your solution here
    return []
`,
      java: `import java.util.*;
public class Main {
    public static int[] mergeKLists(int[][] lists) {
        // Write your solution here
        return new int[]{};
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> mergeKLists(vector<vector<int>>& lists) {
    // Write your solution here
    return {};
}`,
      c: `#include <stdio.h>
int* mergeKLists(int** lists, int k, int* colSizes, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
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
