---
layout: home
title: April 6 2022 - Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home ](../README.md)

[Task 4](../220406_Task_4/README.md) | [Task 2](../220406_Task_2/README.md)

Given an integer `n` and an array `a` of length `n`, your task is to apply the following mutation to `a`:

Array `a` mutates into a new array `b` of length `n`.
For each `i` from `0` to `n - 1`, `b[i] = a[i - 1] + a[i] + a[i + 1]`.
If some element in the sum `a[i - 1] + a[i] + a[i + 1]` does not exist, it should be set to `0`. For example, `b[0]` should be equal to `0 + a[0] + a[1]`.


**Example**

-   For `n = 5` and `a = [4, 0, 1, -2, 3]`, the output should be `solution(n, a) = [4, 5, -1, 2, 1]`.

    -   b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
    -   b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
    -   b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
    -   b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
    -   b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1

    So, the resulting array after the mutation will be [4, 5, -1, 2, 1].

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    An integer representing the length of the given array.

    *Guaranteed constraints:*

    <code type='math/tex'>1 ≤ n ≤ 10^3</code>.

* **[input] array.integer a**

    An array of integers that needs to be mutated.

    Guaranteed constraints:

        a.length = n,
            
    <code type='math/tex'>-10^3 \leq arr[i] \leq 10^3</code>.

* **[output] array.integer**

    The resulting array after the mutation.

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