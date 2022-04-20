---
layout: home
title: Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

Input:
a: [25, 2, 3, 57, 38, 41]
Expected Output:
[2, 3, 5]

Input:
a: [4, 5, 4, 2, 2, 25]
Expected Output:
[2]

Input:
a: [1, 10, 20, 10, 30]
Expected Output:
[0]

Input:
a: [33, 37, 25, 16, 6]
Expected Output:
[3]

Input:
a: [98]
Expected Output:
[8, 9]

Input:
a: [99]
Expected Output:
[9]

Input:
a: [90, 81, 22, 36, 41, 57, 58, 97, 40, 36]
Expected Output:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Input:
a: [31, 60, 53, 54, 25, 87, 33, 95]
Expected Output:
[3, 5]

Input:
a: [28, 12, 48, 23, 76, 64, 65, 50, 54, 98]
Expected Output:
[2, 4, 5, 6, 8]

Input:
a: [35, 72, 38, 58, 80, 74, 94, 47, 50, 99, 41, 70, 98, 33, 50]
Expected Output:
[0, 3, 4, 5, 7, 8, 9]

Input:
a: [47, 50, 63, 85, 64, 62, 92, 29, 18, 70, 96, 50, 87, 73, 90, 98, 55, 24, 13, 70, 30, 17, 22, 84, 13, 91, 35, 46, 21, 69, 30, 15, 77, 40, 35, 85, 91, 98, 60, 82, 64, 98, 56, 47, 84, 20, 16, 13, 74, 32]
Expected Output:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>