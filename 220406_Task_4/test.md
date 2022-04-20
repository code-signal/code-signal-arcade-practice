---
layout: home
title: Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

Input:
arr: [1, 2]
m: 2
Expected Output:
[1]

Input:
arr: [1, 3, 2, 2, 3]
m: 4
Expected Output:
[2, 2]

Input:
arr: [2, 1, 2, 3, 3, 2, 2, 2, 2, 1]
m: 3
Expected Output:
[2, 1, 2, 2, 2, 3, 3, 2]

Input:
arr: [-1, -1, 1, 1, 1, -1, -1, -1, 1, -1, -1, -1]
m: 4
Expected Output:
[2, 3, 3, 2, 3, 3, 3, 3, 3]

Input:
arr: [5, 5, 7, 1, 3, 5, 5, 3, 3, 1, 1]
m: 5
Expected Output:
[2, 2, 2, 2, 3, 2, 2]

Input:
arr: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
m: 4
Expected Output:
[1, 1, 1, 1, 1, 1, 1, 1, 1]

Input:
arr: [10, 0, 20, 20, 20, 10, 0]
m: 5
Expected Output:
[3, 3, 3]

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>