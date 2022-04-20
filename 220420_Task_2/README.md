---
layout: home
title: April 20 2022 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](../220420_Task_1/README.md) | [Next](../220420_Task_3/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given two strings `s` and `t`, both consisting of lowercase English letters and digits, your task is to calculate how many ways exactly one **digit** could be removed from one of the strings so that `s` is **lexicographically smaller** than `t` after the removal. Note that we are removing only a single instance of a single digit, rather than all instances (eg: removing `1` from the string `a11b1c` could result in `a1b1c` or `a11bc`, but not `abc`).

Also note that digits are considered lexicographically smaller than letters.

**Example**

-   For `s = "ab12c"` and `t = "1zz456"`, the output should be `solution(s, t) = 1`.

    Here are all the possible removals:

    -   We can remove the first digit from `s`, obtaining `"ab2c"`. `"ab2c" > "1zz456"`, so we don't count this removal    
    -   We can remove the second digit from `s`, obtaining `"ab1c"`. `"ab1c" > "1zz456"`, so we don't count this removal
    -   We can remove the first digit from `t`, obtaining `"zz456"`. `"ab12c" < "zz456"`, so we count this removal
    -   We can remove the second digit from `t`, obtaining `"1zz56"`. `"ab12c" > "1zz56"`, so we don't count this removal
    -   We can remove the third digit from `t`, obtaining `"1zz46"`. `"ab12c" > "1zz46"`, so we don't count this removal
    -   We can remove the fourth digit from `t`, obtaining `"1zz45"`. `"ab12c" > "1zz45"`, so we don't count this removal

    The only valid case where `s < t` after removing a digit is `"ab12c" < "zz456"`. Therefore, the answer is `1`.

-   For `s = "ab12c"` and `t = "ab24z"`, the output should be `solution(s, t) = 3`.

    There are 4 possible ways of removing the digit:

    -   `"ab1c" < "ab24z"`
    -   `"ab2c" > "ab24z"`
    -   `"ab12c" < "ab4z"`
    -   `"ab12c" < "ab2z"`

    Three of these cases match the requirement that `s < t`, so the answer is `3`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

    A string consisting of lowercase English letters and digits 0..9.

    *Guaranteed constraints:*
    
    <code type='math/tex'> 1 \leq s.length \leq 10^3</code>.

* **[input] string t**

    A string consisting of lowercase English letters and digits 0..9.

    *Guaranteed constraints:*
    
    <code type='math/tex'> 1 \leq t.length \leq 10^3</code>.

* **[output] integer**

    The number of ways to remove exactly one digit from one of the strings so that s is lexicographically smaller than t after the removal.

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