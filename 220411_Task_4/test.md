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
a: [2, 1, 2, 3, 3, 4]
Expected Output:
[[2,1,3], 
 [2,3,4]]

Input:
a: [1, 2, 2, 1]
Expected Output:
[[1,2], 
 [2,1]] 

Input:
a: [2, 2, 3, 3, 2, 2]
Expected Output:
[]

Input:
a: [1, 2]
Expected Output:
[[1], 
 [2]]

Input:
a: [1, 1]
Expected Output:
[[1], 
 [1]]

Input:
a: [1, 1, 1, 1]
Expected Output:
[]

Input:
a: [1, 2, 2, 1, 1, 2]
Expected Output:
[]

Input:
a: [1, 2, 3, 3, 1, 6, 2, 6]
Expected Output:
[[1,2,3,6], 
 [1,2,3,6]]

Input:
a: [1, 2, 3, 4, 5, 6, 7, 7]
Expected Output:
[[7,1,2,3], 
 [7,4,5,6]]


Input:
a: [1, 1, 2, 2, 3, 4, 5, 6, 7, 8]
Expected Output:
[[1,2,3,4,5], 
 [1,2,6,7,8]] 


Input:
a: [1, 10, 5, 6, 1, 7, 3, 8, 6, 10, 2, 5, 2, 7, 4, 3, 9, 8, 4, 9]
Expected Output:
[[1,2,3,4,5,6,7,8,9,10], 
 [1,2,3,4,5,6,7,8,9,10]]


Input:
a: [1, 10, 5, 6, 1, 7, 3, 8, 6, 10, 11, 2, 5, 2, 7, 4, 3, 9, 10, 8, 4, 9]
Expected Output:
[] 

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>