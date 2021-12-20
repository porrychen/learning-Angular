Array.prototype.myReduce = function (callback, initialValue) {
    let total = initialValue;

    for (let i = 0; i < this.length; ++i) {
        if (total === undefined) {
            total = this[i];
        } else {
            total = callback(total, this[i], i, this);
        }
    }

    return total;
};

console.log("-------- Has an initialValue --------");

const arr = [175, 50, 25];
console.log(arr.myReduce((acc, cur) => {
    console.log('rounds for myReduce');
    return acc - cur;
}, 10));

console.log(arr.reduce((acc, cur) => {
    console.log('round for reduce');
    return acc - cur;
}, 10));

console.log("-------- No an initialValue! --------");

console.log(arr.myReduce((acc, cur) => {
    console.log('round for myReduce');
    return acc - cur;
}));

console.log(arr.reduce((acc, cur) => {
    console.log('round for reduce');
    return acc - cur;
}));

/* 1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223  */
const reverseNumber = num => {
    let res = 0;

    while (num != 0) {
        res = res * 10 + num % 10;
        num = num  > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
    }

    return res;
}
const num = -32243;
console.log("1. reverse a number: ", num, reverseNumber(num));

/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run. */
const isPalindrome = str => {
    if (str === undefined || str.length === 0) {
        return true;
    }
    let l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l++] != str[r--]) {
            return false;
        }
    }
    return true;
}

const str1 = "nurses", str2 = "madam";
console.log("2. checks string is palindrome: ", str1, isPalindrome(str1), str2, isPalindrome(str2));

/* 3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g */
const allCombinations = str => {
    let res = [];
    if (str === undefined || str.length === 0) {
        return res;
    }

    for (let i = 0; i < str.length; ++i) {
        for (let j = i + 1; j <= str.length; ++j) {
            res.push(str.slice(i, j));
        }
    }

    return res;
}

console.log("3. generates all combinations of a string:", allCombinations('dog').join(', '));

/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */
const alphaOrder = (str) => {
    if (str === undefined || str.length === 0) {
        return str;
    }

    return str.split('').sort().join('');
}

console.log("4. returns a passed string with letters in alphabetical order:", alphaOrder("webmaster"));

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox ' */
const titleCase = (str) => {
    if (str === undefined || str.length === 0) {
        return str;
    }

    let res = [];
    for (let word of str.split(" ")) {
        res.push(word[0].toUpperCase() + word.slice(1));
    }
    return res.join(' ');
}

console.log("5. converts the first letter of each word of the string in upper case:", titleCase("the quick brown fox"));

/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development' */
const longestWord = (str) => {
    if (str === undefined || str.length === 0) {
        return str;
    }

    return str.split(" ").reduce((acc, curr) => acc = acc.length < curr.length ? curr : acc);

    // let longest = "";
    // for (let word of str.split(" ")) {
    //     if (word.length > longest.length) {
    //         longest = word;
    //     }
    // }
    // return longest;
}

console.log("6. find the longest word within the string:", longestWord("Web Development Tutorial"));

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5 */
const countVowels = (str) => {
    if (str === undefined || str.length === 0) {
        return 0;
    }

    const vowels = "aeiou";
    let count = 0;
    for (let ch of str) {
        if (vowels.indexOf(ch.toLowerCase()) > -1) {
            count++;
        }
    }
    return count;
}

console.log("7. counts the number of vowels within the string:", countVowels("The quick brown fox"));

/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */
const isPrime = num => {
    if (num < 1) {
        return false;
    }
    for (let i = 2; i <= Math.floor(num / 2); ++i) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log("8. check the number is prime or not: ", isPrime(91), isPrime(37));

/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined. */
const getDataType = (value) => {
    return typeof value;
}
console.log("9. returns the type:", getDataType(function(){}));

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */
const identityMatrix = (n) => {
    let matrix = [];
    for (let i = 0; i < n; ++i) {
        matrix[i] = [];
        for (let j = 0; j < n; ++j) {
            matrix[i][j] = i === j ? 1 : 0;
        }
    }
    return matrix;
}

console.log("10. returns the n rows by n columns identity matrix:", identityMatrix(3));

/* 11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4  */
const findSecondLG = (arr) => {
    let res = [];
    if (arr == undefined || arr.length < 2) {
        return res;
    }

    let maxFirst = arr[0], maxSecond = Number.MIN_VALUE;
    let minFirst = arr[0], minSecond = Number.MAX_VALUE;

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > maxFirst) {
            maxSecond = maxFirst;
            maxFirst = arr[i];
        } else if (arr[i] > maxSecond) {
            maxSecond = arr[i];
        }
        if (arr[i] < minFirst) {
            minSecond = minFirst;
            minFirst = arr[i];
        } else if (arr[i] < minSecond) {
            minSecond = arr[i];
        }
    }
    res.push(minSecond, maxSecond);
    return res;
};

console.log("11. find the second lowest and second greatest numbers:", findSecondLG([1,2,3,4,5]), findSecondLG([5,1,6,3,4]));

/* 12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
perfect numbers 496 and 8128. */
const isPerfect = (num) => {
    if (num <= 2) {
        return false;
    }

    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); ++i) {
        if (num % i == 0) {
            sum += i;
        }
    }

    return sum === num;
}

console.log("12. says whether a number is perfect:", isPerfect(496), isPerfect(21));

/* 13. Write a JavaScript function to compute the factors of a positive integer.  */
const computeFactors = (num) => {
    let res = [];
    if (num < 1) {
        return res;
    }

    res.push(1);
    for (let i = 2; i <= Math.floor(num / 2); ++i) {
        if (num % i == 0) {
            res.push(i);
        }
    }
    res.push(num);
    return res;
}

console.log("13. compute the factors of a positive integer:", computeFactors(20));

/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1 */
const amountTocoins = (amount, coins) => {
    if (amount === 0 || coins.length === 0) {
        return [];
    }
    if (amount >= coins[0]) {
        amount -= coins[0];
        return [coins[0]].concat(amountTocoins(amount, coins));
    }
    coins.shift();
    return amountTocoins(amount, coins);
}

console.log("14. convert an amount to coins:", amountTocoins(46, [25, 10, 5, 2, 1]));

/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result. */
const exponent = (b, n) => {
    if (n === 0) {
        return 1;
    }
    if (b === 0) {
        return 0;
    }
    if (n < 0) {
        return 1 / exponent(b, -n);
    }

    let res = exponent(b , Math.floor(n / 2));
    res *= res;
    if (n % 2 == 1) {
        res *= b;
    }
    return res;
}

console.log("15. compute the value of bn:", exponent(2, 5));

/* 16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg" */
const uniqueCharacters = (str) => {
    if (str === undefined || str.length === 0) {
        return str;
    }

    let map = {};
    for (let ch of str) {
        if (isNaN(map[ch])) {
            map[ch] = 1;
        }
    }

    let res = "";
    for (let ch of str) {
        if (map[ch] == 1) {
            res += ch;
            map[ch]--;
        }
    }
    return res;
}

console.log("16. extract unique characters from a string:", uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. */
const numberOfLetter = (str) => {
    let map = {};
    if (str === undefined || str.length === 0) {
        return map;
    }

    for (let ch of str) {
        map[ch] = isNaN(map[ch]) ? 1 : map[ch] + 1;
    }
    return map;
}

console.log("17. get the number of occurrences of each letter in specified string:", numberOfLetter("thequickbrownfoxjumpsoverthelazydog"));

/* 18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value. */
const binarySearchInArray = (arr, target) => {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

console.log("18. searching JavaScript arrays with a binary search:", binarySearchInArray([1, 3, 5, 7, 9, 11, 12, 15], 11));

/* 19. Write a JavaScript function that returns array elements larger than a number. */
const largerElements = (arr, num) => {
    return arr.filter((value) => value > num);
}

console.log("19. returns array elements larger than a number:", largerElements([1, 13, 5, 7, 9, 11, 12, 15], 9));

/* 20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" */
const generateId = len => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < len; ++i) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

console.log("20. generates a string id (specified length) of random characters:", generateId(6));

/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]] */
const allSubsets = (arr, len) => {
    let res = [];

    for (let i = 0; i < Math.pow(2, arr.length); ++i) {
        let subset = [];
        let j = arr.length;

        while (i !== 0 && j-- > 0) {
            if ((i & (1 << j)) !== 0) {
                subset.push(arr[j]);
            }
        }

        if (subset.length === len) {
            res.push(subset);
        }
    }

    return res;
}

console.log("21. get all possible subset with a fixed length combinations in an array:", allSubsets([1, 2, 3], 2));

/* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 */
const countLetter = (str, letter) => {
    // method: 1
    // return str.split("").reduce((acc, curr) => acc += curr == letter ? 1 : 0, 0);

    // method: 2
    let count = 0;

    for (let i = 0; i < str.length; ++i) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

console.log("22. count the number of occurrences of the specified letter within the string:", countLetter("microsoft.com", 'o'));

/* 23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' */
const findUniqueCharacter = (str) => {
    if (str === undefined || str.length === 0) {
        return str;
    }

    let map = {};
    for (let ch of str) {
        map[ch] = isNaN(map[ch]) ? 1 : map[ch] + 1;
    }

    for (let ch of str) {
        if (map[ch] === 1) {
            return ch;
        }
    }
    return '';
}

console.log("23. find the first not repeated character:", findUniqueCharacter("abacddbec"));

/* 24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] */
const bubbleSort = (arr) => {
    if (arr.length === 0) {
        return arr;
    }

    for (let i = 0; i < arr.length - 1; ++i) {
        let swapped = false;

        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
    return arr;
}

console.log("24. Bubble Sort algorithm:", bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/* 25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America" */
const longestCountryName = (countries) => {
    return countries.reduce((acc, curr) => acc = acc.length < curr.length ? curr : acc)
}

console.log("25. returns the longest country name as output:", longestCountryName(["Australia", "Germany", "United States of America"]));

/* 26. Write a JavaScript function to find longest substring in a given a string without repeating
characters. */
const longestSubstring = (str) => {
    if (str === undefined || str.length < 2) {
        return str;
    }

    let map = {};
    let res = "";
    for (let l = 0, r = 0; l < str.length && r < str.length; ++l) {
        while (r < str.length && (isNaN(map[str[r]]) || map[str[r]] === 0)) {
            map[str[r++]] = 1;
        }
        if (r - l > res.length) {
            res = str.substring(l, r);
        }
        map[str[l]]--;
    }
    return res;
}

console.log("26. find longest substring in a given a string without repeating characters:", longestSubstring("repeating"));

/* 27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring. */
const longestPalindrome = str => {
    if (str === undefined || str.length < 2) {
        return str;
    }

    let findPalindrome = (str, l, r) => {
        while (l >= 0 && r < str.length) {
            if (str[l] != str[r]) {
                break;
            }
            l--;
            r++;
        }
        return str.substring(l + 1, r);
    };

    let longest = "";
    for (let i = 0; i < str.length; ++i) {
        let substr = findPalindrome(str, i, i);
        if (substr.length > longest.length) {
            longest = substr;
        }
        substr = findPalindrome(str, i, i + 1);
        if (substr.length > longest.length) {
            longest = substr;
        }
    }
    return longest;
}

console.log("27. returns the longest palindrome in a given string:", longestPalindrome("bananas"), longestPalindrome("abracadabra"));

/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.  */
const functionParameter = (fn) => {
    return fn();
}

console.log("28. pass a 'JavaScript function' as parameter:", functionParameter(function() {return "function"}), functionParameter(() => "here!"));

/* 29. Write a JavaScript function to get the function name. */
function functionName() {
    return arguments.callee.name;
}

const getFunctionName = (fn) => {
    return fn.name;
}

console.log("29. get the function name:", functionName(), getFunctionName(functionName));
