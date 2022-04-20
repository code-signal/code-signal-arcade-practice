---
layout: home
title: April 6 2022 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home ](../README.md)

[Task 1](../220406_Task_1/README.md) | [Task 3](../220406_Task_3/README.md)

You are given an array of non-negative integers `numbers`. You are allowed to choose any number from this array and swap any two digits in it. If after the swap operation the number contains leading zeros, they can be omitted and not considered (eg: `010` will be considered just `10`).

Your task is to check whether it is possible to apply the swap operation **at most once**, so that the elements of the resulting array are *strictly increasing*.

**Example**

-   For `numbers = [1, 5, 10, 20]`, the output should be `solution(numbers) = true`.

    The initial array is already strictly increasing, so no actions are required.

-   For `numbers = [1, 3, 900, 10]`, the output should be `solution(numbers) = true`.

    By choosing numbers[2] = 900 and swapping its first and third digits, the resulting number 009 is considered to be just 9. So the updated array will look like [1, 3, 9, 10], which is strictly increasing.

-   For `numbers = [13, 31, 30]`, the output should be `solution(numbers) = false`.

    -   The initial array elements are not increasing.
    -   By swapping the digits of `numbers[0] = 13`, the array becomes `[31, 31, 30]` which is not strictly increasing;
    -   By swapping the digits of `numbers[1] = 31`, the array becomes `[13, 13, 30]` which is not strictly increasing;
    -   By swapping the digits of `numbers[2] = 30`, the array becomes `[13, 31, 3]` which is not strictly increasing;

    So, it's not possible to obtain a strictly increasing array, and the answer is `false`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer numbers**

    An array of non-negative integers.

    Guaranteed constraints:

    <code type='math/tex'>1 ≤ numbers.length ≤ 10^3</code>, <br> 
       
    <code type='math/tex'>0 \leq numbers[i] \leq 10^3</code>.

* **[output] boolean**

    Return true if it is possible to obtain a strictly increasing array by applying the digit-swap operation at most once, and false otherwise.

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