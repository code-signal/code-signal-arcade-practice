---
layout: home
title: Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

Test 1
Input:
a: [1, 2, 3]
b: [1, 2, 3]
k: 31
Expected Output:
2

Input:
a: [16, 1, 4, 2, 14]
b: [7, 11, 2, 0, 15]
k: 743
Expected Output:
4

Test 3
Input:
a: [1, 2, 3]
b: [1, 2, 3]
k: 32
Expected Output:
3

Input:
a: [1, 2, 3]
b: [3, 2, 1]
k: 30
Expected Output:
2

Input:
a: [1, 2, 3]
b: [1, 2, 3]
k: 12
Expected Output:
0

Input:
a: []
b: []
k: 0
Expected Output:
0

Input:
a: [0]
b: [0]
k: 0
Expected Output:
0

Input:
a: [37, 22, 19, 37, 40, 9, 35, 9, 7, 37]
b: [30, 40, 40, 29, 13, 23, 0, 0, 16, 8]
k: 1822
Expected Output:
6

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>