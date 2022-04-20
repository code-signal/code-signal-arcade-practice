---
layout: home
title: 22 Mar 2022 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


You are given a string `s`. Consider the following algorithm applied to this string:

1.  Take all the prefixes of the string, and choose the longest palindrome between them.
2.  If this chosen prefix contains at least two characters, cut this prefix from `s` and go back to the first step with the updated string. Otherwise, end the algorithm with the current string `s` as a result.

Your task is to implement the above algorithm and return its result when applied to string `s`.

**Note**: you can click on the **prefixes** and **palindrome** words to see the definition of the terms if you're not familiar with them.

**Example**

-   For `s = "aaacodedoc"`, the output should be `solution(s) = ""`.

    -   The initial string `s = "aaacodedoc"` contains only three prefixes which are also palindromes - `"a"`, `"aa"`, `"aaa"`. The longest one between them is `"aaa"`, so we cut if from `s`.
    -   Now we have string `"codedoc"`. It contains two prefixes which are also palindromes - `"c"` and `"codedoc"`. The longest one between them is `"codedoc"`, so we cut if from the current string and obtain the empty string.
    -   Finally the algorithm ends on the empty string, so the answer is "".

-   For `s = "codesignal"`, the output should be `solution(s) = "codesignal"`.

    The initial string `s = "codesignal"` contains the only prefix, which is also palindrome - `"c"`. This prefix is the longest, but doesn't contain two characters, so the algorithm ends with string `"codesignal"` as a result.

-   For `s = ""`, the output should be `solution(s) = ""`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    A string consisting of English lowercase letters.

* **[output] integer**

    Output integer.

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