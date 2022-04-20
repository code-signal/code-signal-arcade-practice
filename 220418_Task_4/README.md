---
layout: home
title: April 18 2022 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](../220418_Task_3/README.md) | [Next](../220420_Task_1/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given an array of positive integers `a`, your task is to calculate the sum of every possible `a[i] ∘ a[j]`, where `a[i] ∘ a[j]` is the concatenation of the string representations of `a[i]` and `a[j]` respectively.

**Example**

-   For `a = [10, 2]`, the output should be `solution(a) = 1344`.

    -   Fora[0] ∘ a[0] = 10 ∘ 10 = 1010,
    -   Aftera[0] ∘ a[1] = 10 ∘ 2 = 102,
    -   Aftera[1] ∘ a[0] = 2 ∘ 10 = 210,
    -   Aftera[1] ∘ a[1] = 2 ∘ 2 = 22.

    So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

-   For a = [8], the output should be solution(a) = 88.

    There is only one number in a, and a[0] ∘ a[0] = 8 ∘ 8 = 88, so the answer is 88.

-   For a = [1, 2, 3], the output should be solution(a) = 198.

    -   Fora[0] ∘ a[0] = 1 ∘ 1 = 11,
    -   Aftera[1] ∘[0] ∘ a[1] = 1 ∘ 2 = 12,
    -   Aftera[1] ∘[0] ∘ a[2] = 1 ∘ 3 = 13,
    -   Aftera[1] ∘ a[0] = 2 ∘ 1 = 21,
    -   Aftera[1] ∘ a[1] = 2 ∘ 2 = 22,
    -   Aftera[1] ∘ a[2] = 2 ∘ 3 = 23,
    -   Aftera[1] ∘[2] ∘ a[0] = 3 ∘ 1 = 31,
    -   Aftera[1] ∘[2] ∘ a[1] = 3 ∘ 2 = 32,
    -   Aftera[1] ∘[2] ∘ a[2] = 3 ∘ 3 = 33.

    The total result is 11 + 12 + 13 + 21 + 22 + 23 + 31 + 32 + 33 = 198.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    A non-empty array of positive integers.

    *Guaranteed constraints:*

    <code type='math/tex'> 1 \leq a.length \leq 10^5</code>.
    
    <code type='math/tex'> 1 \leq a[i] \leq 10^6</code>.

* **[output] integer64**

    The sum of all a[i] ∘ a[j]s. It's guaranteed that the answer is less than 253.

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