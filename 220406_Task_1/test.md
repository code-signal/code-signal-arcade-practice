---
layout: home
title: Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

Input:
n: 5
a: [4, 0, 1, -2, 3]
Expected Output:
[4, 5, -1, 2, 1]

Input:
n: 1
a: [9]
Expected Output:
[9]

Input:
n: 4
a: [1, 2, 3, 4]
Expected Output:
[3, 6, 9, 7]

Input:
n: 9
a: [-9, -8, 7, 7, 7, 6, -6, 4, 6]
Expected Output:
[-17, -10, 6, 21, 20, 7, 4, 4, 10]

Input:
n: 10
a: [6, -5, -5, 5, 10, 5, 1, 8, 6, -2]
Expected Output:
[1, -4, -5, 10, 20, 16, 14, 15, 12, 4]

Input:
n: 10
a: [1, 10, 10, -6, 5, -3, -7, 10, 9, 10]
Expected Output:
[11, 21, 14, 9, -4, -5, 0, 12, 29, 19]

Input:
n: 4
a: [-6, -5, -7, -1]
Expected Output:
[-11, -18, -13, -8]

Input:
n: 8
a: [-4, -5, 0, -6, -5, -4, -7, 9]
Expected Output:
[-9, -9, -11, -11, -15, -16, -2, 2]

Input:
n: 1
a: [-5]
Expected Output:
[-5]

Input:
n: 5
a: [-9, -6, 10, -6, -10]
Expected Output:
[-15, -5, -2, -6, -16]

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>