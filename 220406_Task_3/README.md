---
layout: home
title: April 6 2022 - Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home ](../README.md)

[Task 2](../220406_Task_2/README.md) | [Task 4](../220406_Task_4/README.md)

Given a matrix of integers, we'd like to consider the sum of the elements within the area of a 45° rotated rectangle. More formally, the area is bounded by two diagonals parallel to the `main diagonal` and two diagonals parallel to the `secondary diagonal`. The dimensions of the rotated rectangle are defined by the number of elements along the borders of the rectangle.

![](https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/dimensions.gif?_tm=1636921002683)

Given integers `a` and `b` representing the dimensions of the rotated rectangle, and matrix (a matrix of integers), your task is to find the greatest sum of integers contained within an `a x b` rotated rectangle.

**Note**: The order of the dimensions is not important - consider all `a x b` and `b x a` rectangles.

**Example**

-   For

    matrix = [[1, 2, 3, 4, 0],
            [5, 6, 7, 8, 1],
            [3, 2, 4, 1, 4],
            [4, 3, 5, 1, 6]]
    a = 2, and b = 3, the output should be solution(matrix, a, b) = 36.

    ![](https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/example.gif?_tm=1636921003174)

-   For

    matrix = [[-2, 3, 5, -1],
            [4, 3, -10, 10]]
    a = 1, and b = 1, the output should be solution(matrix, a, b) = 10.

    ![](https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/example2.gif?_tm=1636921003591)

    The rotated rectangle with dimensions 1x1 is just one element, so the answer is the maximal element in matrix.

-   For

    matrix = [[-2, 3],
            [4, 3]]
    a = 1, and b = 2, the output should be solution(matrix, a, b) = 7.

    ![](https://codesignal.s3.amazonaws.com/tasks/rotatedRectSum/img/example3.gif?_tm=1636921003853)

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.array.integer matrix**

    A matrix of integers.

    *Guaranteed constraints:*

    `1 ≤ matrix.length, matrix[i].length ≤ 50,` <br>
    <code type='math/tex'>0 \leq matrix[i][j] \leq 10^3</code>.   

* **[input] integer a**

    The first rotated rectangle dimension.

    *Guaranteed constraints:*

        1 ≤ a ≤ 25. 

* **[input] integer b**

    The second rotated rectangle dimension.
    It's guaranteed that at least one rotated rectangle will fit in the given matrix.

    *Guaranteed constraints:*

        1 ≤ a ≤ 25. 

* **[output] integer**

    The maximal sum of elements of a rotated rectangle with dimensions a and b.

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