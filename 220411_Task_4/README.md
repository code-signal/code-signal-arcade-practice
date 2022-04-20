---
layout: home
title:  April 11 2022 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


Given an array of integers a of even length, your task is to split it into two arrays of equal length such that all the numbers are unique in each of them.

There may be more than one possible answer, in which case you may return any of them. If there are no possible answers, return an empty array.

Hint: Count the number of occurrences of each integer in a. If there are integers occurring more than twice, then there is no solution. Next, put the integers occurring twice into both answer arrays. Finally, put all other numbers in the answer arrays, following the condition that they should have equal sizes.



**Example**

For a = [2, 1, 2, 3, 3, 4], the output can be solution(a) = [[2, 1, 3], [2, 3, 4]].

Answers like [[1, 2, 3], [2, 3, 4]] or [[4, 2, 3], [3, 2, 1]] would also be considered correct.

For a = [1, 2, 2, 1], the output can be solution(a) = [[1, 2], [2, 1]].

Again, there are other possible answers.

For a = [2, 2, 3, 3, 2, 2], the output should be solution(a) = [].

No matter how we try to split this array, there will be at least two 2s in at least one of the resulting arrays. So the answer is [].


**Input/Output**

[input] array.integer a

An array of integers. It is guaranteed that a has even length.

Guaranteed constraints:
2 ≤ a.length ≤ 104,
1 ≤ a[i] ≤ 105.

[output] array.array.integer

Return an empty array if there is no solution. If a solution exists, return an array of two arrays - a distribution of a where each of these two arrays are of equal length and each contains unique elements.






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