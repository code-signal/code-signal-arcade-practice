---
layout: home
title: April 6 2022 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home ](../README.md)

[Task 3](../220406_Task_3/README.html) | [Task 1](../220406_Task_1/README.md)

Given an array of integers `arr` and a positive integer `m`, your task is to find the frequency of the most common element within each `contiguous subarray` of length `m` in `arr`.

Return an array of these highest frequencies among subarray elements, ordered by their corresponding subarray's starting index. You can look at the examples section for a better understanding.

**Example**

-   For `arr = [1, 2]` and `m = 2`, the output should be `solution(arr, m) = [1]`.

    ![](https://codesignal.s3.amazonaws.com/tasks/occurrencesInSubarrays/img/example1.gif?_tm=1624836352483)

    `arr` contains only one contiguous subarray of length `m = 2` - `arr[0..1] = [1, 2]`. This subarray contains 2 most frequent elements - `1` and `2`, both having a frequency of `1`. So, the answer is `[1]`.

-   For arr = [1, 3, 2, 2, 3] and m = 4, the output should be solution(arr, m) = [2, 2].

    ![](https://codesignal.s3.amazonaws.com/tasks/occurrencesInSubarrays/img/example2.gif?_tm=1624836352799)

    `arr` contains two contiguous subarrays of length `m = 4`:

    -   `arr[0..3] = [1, 3, 2, 2]` contains only one most frequent element - `2`, and its frequency is `2`.
    -   `arr[1..4] = [3, 2, 2, 3]` contains two most frequent elements - `2` and `3`, both of them have a frequency of `2`.
    -   Putting the answers for both subarrays together, we obtain the array `[2, 2]`

-   For `arr = [2, 1, 2, 3, 3, 2, 2, 2, 2, 1]` and `m = 3`, the output should be `solution(arr, m) = [2, 1, 2, 2, 2, 3, 3, 2]`.

    ![](https://codesignal.s3.amazonaws.com/tasks/occurrencesInSubarrays/img/example3.gif?_tm=1624836354156)

    arr contains 8 contiguous subarrays of length `m = 3`:

-   arr`[0..2] = [2, 1, 2]` contains only one most frequent element - `2`, and its frequency is `2`.
-   `arr[1..3] = [1, 2, 3]` contains three most frequent elements - `1`, `2`, and `3`. All of them have frequency `1`.
-   `arr[2..4] = [2, 3, 3]` contains only one most frequent element - `3`, and its frequency is `2`.
-   `arr[3..5] = [3, 3, 2]` contains only one most frequent element - `3`, and its frequency is `2`.
-   `arr[4..6] = [3, 2, 2]` contains only one most frequent element - `2`, and its frequency is `2`.
-   `arr[5..7] = [2, 2, 2]` contains only one most frequent element - `2`, and its frequency is `3`.
-   `arr[6..8] = [2, 2, 2]` contains only one most frequent element - `2`, and its frequency is `3`.
-   `arr[7..9] = [2, 2, 1]` contains only one most frequent element - `1`, and its frequency is `2`.
-   Putting the answers for both subarrays together, we obtain the array `[2, 1, 2, 2, 2, 3, 3, 2]`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer arr**

    An array of integers.

    Guaranteed constraints:

    <code type='math/tex'>2 \leq arr.length \leq 10^5</code>. <br>
    <code type='math/tex'>-10^9 \leq arr[i] \leq 10^9</code>. 

* **[input] array.integer arr**

    An integer representing the length of each subarray.

    Guaranteed constraints:

    2 ≤ m ≤ arr.length.

* **[output] array.integer**

    An array of the highest frequencies in each contiguous subarray of length m in arr.

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