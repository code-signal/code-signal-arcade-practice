---
layout: home
title: April 20 2022 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](../220418_Task_4/README.md) | [Next](../220420_Task_2/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Let's say a triple `(a, b, c)` is a *zigzag* if either `a < b > c` or `a > b < c`.

Given an array of integers `numbers`, your task is to check all the triples of its consecutive elements for being a **zigzag**. More formally, your task is to construct an array of length numbers.`length - 2`, where the `ith` element of the output array equals `1` if the triple `(numbers[i], numbers[i + 1], numbers[i + 2])` is a *zigzag*, and `0` otherwise.

**Example**

-   For `numbers = [1, 2, 1, 3, 4]`, the output should be `solution(numbers) = [1, 1, 0]`.

    -   `(numbers[0], numbers[1], numbers[2]) = (1, 2, 1)` is a *zigzag*, because `1 < 2 > 1`;
    -   `(numbers[1], numbers[2] , numbers[3]) = (2, 1, 3)` is a *zigzag*, because `2 > 1 < 3`;
    -   `(numbers[2], numbers[3] , numbers[4]) = (1, 3, 4)` is not a *zigzag*, because `1 < 3 < 4`;

-   For `numbers = [1, 2, 3, 4]`, the output should be `solution(numbers) = [0, 0]`;

    Since all the elements of `numbers` are increasing, there are no zigzags.

-   For `numbers = [1000000000, 1000000000, 1000000000]`, the output should be `solution(numbers) = [0]`.

    Since all the elements of `numbers` are the same, there are no zigzags.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer numbers**

    An array of integers.

    *Guaranteed constraints:*

    3 ≤ numbers.length ≤ 100,
    
    <code type='math/tex'> 1 \leq numbers[i] \leq 10^9</code>.

* **[output] array.integer**

    Return an array, where the ith element equals 1 if the triple `(numbers[i], numbers[i + 1], numbers[i + 2])` is a *zigzag*, and `0` otherwise.

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