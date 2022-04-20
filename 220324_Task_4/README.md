---
layout: home
title: 24 Mar 2022 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

You're developing a new programming language with some unusual features for strings! Among these is a method that returns the longest palindrome that can be formed with the characters of a given string.

Given a string `s`, your task is to find this longest possible `palindrome`. You may use any number of the characters from `s`, and arrange them in any order (so long as it results in a palindrome).

If there are multiple longest palindromes that can be formed, return the one among them that's `lexicographically smallest`.

**Example**

-   For `s = "aaabb"`, the output should be `solution(s) = "ababa"`.

There are two possible palindromes of length `5` that can be obtained (`"ababa"` and `"baaab"`), but `"ababa"` is lexicographically smaller, thus it is the answer.

-   For `s = "aaabbbcc"`, the output should be `solution(s) = "abcacba"`.

It's not possible to form a palindrome of length `8`, but from several palindromes of length `7`, `"abcacba"` is the lexicographically smallest, thus it is the answer.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    The given string.

    *Guaranteed constraints:*

        1 ≤ s.length ≤ 105.

* **[output] integer**

    The lexicographically smallest palindrome with maximal length that can be built from the given string `s`.

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>