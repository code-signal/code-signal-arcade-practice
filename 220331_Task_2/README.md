---
layout: home
title: 31 Mar 2022 - Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

You are given two arrays of integers `a` and `b` of the same length, and an integer `k`. We will be iterating through array `a` from left to right, and simultaneously through array `b` from right to left, and looking at pairs `(x, y)`, where `x` is from `a` and `y` is from `b`. Such a pair is called tiny if the concatenation `xy` is strictly less than `k`.

Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through `a` and `b`.

**Example**

-   For `a = [1, 2, 3]`, `b = [1, 2, 3]`, and `k = 31`, the output should be

```
solution(a, b, k) = 2.
```

    We're considering the following pairs during iteration:

    -   `(1, 3)`. Their concatenation equals `13`, which is less than `31`, so the pair is tiny;
    -   `(2, 2)`. Their concatenation equals `22`, which is less than `31`, so the pair is tiny;
    -   `(3, 1)`. Their concatenation equals `31`, which is not less than `31`, so the pair is not tiny.

    As you can see, there are `2` tiny pairs during the iteration, so the answer is `2`.

-   For `a = [16, 1, 4, 2, 14]`, `b = [7, 11, 2, 0, 15]`, and `k = 743`, the output should be

```
solution(a, b, k) = 4.
```

    We're considering the following pairs during iteration:

    -   `(16, 15)`. Their concatenation equals `1615`, which is greater than `743`, so the pair is not tiny;
    -   `(1, 0)`. Their concatenation equals `10`, which is less than ``743``, so the pair is tiny;
    -   `(4, 2)`. Their concatenation equals `42`, which is less than `743`, so the pair is tiny.
    -   `(2, 11)`. Their concatenation equals `211`, which is less than `743`, so the pair is tiny;
    -   `(14, 7)`. Their concatenation equals `147`, which is less than `743`, so the pair is tiny.

    There are 4 tiny pairs during the iteration, so the answer is 4.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

    An array of non-negative integers.

    *Guaranteed constraints:*

        0 ≤ a.length ≤ 10^5,
        0 ≤ a[i] ≤ 10^4.

* **[input] array.integer b**

    An array of non-negative integers.

    *Guaranteed constraints:*

    b.length = a.length,

        0 ≤ b[i] ≤ 10^4.

* **[input] integer k**

    An integer to compare concatenated pairs with.

    *Guaranteed constraints:*

        0 ≤ k ≤ 10^9.

* **[output] integer**

    The number of tiny pairs during the iteration.

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