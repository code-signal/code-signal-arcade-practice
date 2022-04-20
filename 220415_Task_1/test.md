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
numbers: [1, 2, 1, 3, 4]
Expected Output:
[1, 1, 0]

Input:
numbers: [1, 2, 3, 4]
Expected Output:
[0, 0]

Input:
numbers: [1000000000, 1000000000, 1000000000]
Expected Output:
[0]

Input:
numbers: [1, 2, 4, 3, 1]
Expected Output:
[0, 1, 0]

Input:
numbers: [3, 5, 2, 6, 10]
Expected Output:
[1, 1, 0]

Input:
numbers: [1, 3, 4, 5, 6, 14, 14]
Expected Output:
[0, 0, 0, 0, 0]

Input:
numbers: [1, 5, 7, 3, 10, 2, 4, 9, 8, 6]
Expected Output:
[0, 1, 1, 1, 1, 0, 1, 0]

Input:
numbers: [11, 14, 3, 17, 16, 13, 3, 7, 19, 8]
Expected Output:
[1, 1, 1, 0, 0, 1, 0, 1]


</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>