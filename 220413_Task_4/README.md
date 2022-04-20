---
layout: home
title: April 13 2022 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given an array of non-negative integers arr, your task is to find the number of ways it can be split into three non-empty contiguous subarrays such that the sum of the elements in the first subarray is less than or equal to the sum of the elements in the second subarray, and the sum of the elements in the second subarray is less than or equal to the sum of the elements in the third subarray.

Note:

Each element of arr must appear in exactly one of the three contiguous subarrays.
Although the given numbers are 32-bit integers, the sum of the elements may exceed the limits of the 32-bit integer type.

**Example**

For arr = [1, 1, 1], the output should be solution(arr) = 1.

The only way to split this array into three non-empty contiguous subarrays is [1], [1], [1]. This triple of subarrays satisfies the conditions (1 ≤ 1 ≤ 1), so the answer is 1.

For arr = [1, 2, 0], the output should be solution(arr) = 0.

The only way to split this array into three non-empty contiguous subarrays is [1], [2], [0]. This triple of subarrays doesn't satisfy the conditions (1 ≤ 2 > 0), so the answer is 0.

For arr = [1, 2, 2, 2, 5, 0], the output should be solution(arr) = 3.

If the first subarray is [1], there are 2 possibilities of choosing the second and the third one:
Choose [2] as the second subarray and [2, 2, 5, 0] as the third subarray (1 ≤ 2 ≤ 9).
Choose [2, 2] as the second subarray and [2, 5, 0] as the third subarray (1 ≤ 4 ≤ 7).
If we choose a bigger second subarray, the sum of its elements will be at least 2 + 2 + 2 = 6, which is greater than the sum of the elements in any possible third subarray in that case.
If the first subarray is [1, 2] there is only one way of choosing the other two subarrays:
Choose [2, 2] as the second subarray and [5, 0] as the third subarray (3 ≤ 4 ≤ 5),
If we choose a bigger or smaller subarray as the second one, the conditions won't be satisfied.
There are 2 + 1 = 3 ways of dividing arr into three subarrays that meet the conditions, so the answer is 3.



**Input/Output**

[input] array.integer arr

An array of non-negative integers.

Guaranteed constraints:
3 ≤ arr.length ≤ 105,
0 ≤ arr[i] ≤ 109.

[output] integer64

Return the number of ways to split the array into three non-empty contiguous subarrays, such that all the conditions are satisfied.



* **[execution time limit] 4 seconds (js)**

* **[input] array.integer sequence**

A 2-dimensional array of integers representing a rectangular matrix of the building.

*Guaranteed constraints*:

<code>1 ≤ matrix.length ≤ 5</code>,
<code>1 ≤ matrix[i].length ≤ 5</code>,
<code>0 ≤ matrix[i][j] ≤ 10</code>.

* **[output] integer**

The total price of all the rooms that are suitable for the CodeBots to live in.

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