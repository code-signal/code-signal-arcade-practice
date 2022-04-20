---
layout: home
title: April 18 2022 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](../220418_Task_1/README.md) | [Next](../220418_Task_3/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given an array of integers `a`, your task is to calculate the digits that occur the most number of times in the array. Return the array of these digits in ascending order.

**Example**

For `a = [25, 2, 3, 57, 38, 41]`, the output should be `solution(a) = [2, 3, 5]`.

Here are the number of times each digit appears in the array:

    0 -> 0
    1 -> 1
    2 -> 2
    3 -> 2
    4 -> 1
    5 -> 2
    6 -> 0
    7 -> 1
    8 -> 1

The most number of times any number occurs in the array is `2`, and the digits which appear `2` times are `2`, `3` and `5`. So the answer is `[2, 3, 5]`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    An array of positive integers.

    Guaranteed constraints:

    <code type='math/tex'> 1 \leq a.length \leq 10^3</code>,
    
    1 ≤ a[i] < 100.

* **[output] array.integer**

    The array of most frequently occurring digits, sorted in ascending order.

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