---
layout: home
title: Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

Input:
cntProducts: 2
quantities:
[[1,3], 
 [2,1], 
 [1,3]]
costs:
[[2,4], 
 [5,2], 
 [4,1]]
meals:
[[1,1], 
 [2,2], 
 [3,4]]
Expected Output:
[3, 8, 19]

Input:
cntProducts: 2
quantities:
[[1000,1000], 
 [1000,0]]
costs:
[[1,1], 
 [1000,1000]]
meals: [[2000,1000]]
Expected Output:
[1002000]

Input:
cntProducts: 3
quantities:
[[2,4,1], 
 [5,2,0]]
costs:
[[4,4,1], 
 [1,2,3]]
meals:
[[3,2,1], 
 [7,3,0], 
 [4,2,1], 
 [3,6,0]]
Expected Output:
[8, 21, 9, 23]

Input:
cntProducts: 2
quantities:
[[3,0], 
 [0,4], 
 [4,2]]
costs:
[[3,5], 
 [4,2], 
 [3,5]]
meals:
[[1,3], 
 [2,2], 
 [0,4], 
 [3,1], 
 [0,2]]
Expected Output:
[9, 10, 8, 11, 4]

Input:
cntProducts: 3
quantities:
[[6,7,8], 
 [0,2,1], 
 [7,8,5]]
costs:
[[1,1,5], 
 [1,1,3], 
 [3,1,3]]
meals:
[[12,0,3], 
 [8,0,2], 
 [11,4,4]]
Expected Output:
[33, 18, 37]

Input:
cntProducts: 4
quantities:
[[2,6,4,1], 
 [6,1,3,3], 
 [3,3,1,4]]
costs:
[[2,5,4,2], 
 [1,4,4,1], 
 [2,2,3,4]]
meals:
[[3,5,4,1], 
 [0,4,0,3], 
 [4,3,3,1], 
 [3,3,0,5]]
Expected Output:
[39, 13, 22, 20]

Input:
cntProducts: 4
quantities:
[[8,1,8,5], 
 [0,2,4,4]]
costs:
[[5,1,1,1], 
 [2,2,5,4]]
meals:
[[4,3,0,2], 
 [7,0,9,7], 
 [3,2,7,5], 
 [0,2,2,1], 
 [1,3,3,8], 
 [0,1,10,5]]
Expected Output:
[27, 61, 30, 6, 30, 24]

Input:
cntProducts: 2
quantities:
[[5,8], 
 [2,0], 
 [3,6], 
 [8,7]]
costs:
[[2,4], 
 [4,5], 
 [3,5], 
 [5,3]]
meals:
[[4,11], 
 [10,3], 
 [5,5], 
 [4,0], 
 [3,1], 
 [10,2], 
 [0,4]]
Expected Output:
[45, 44, 25, 8, 9, 41, 12]

Input:
cntProducts: 3
quantities:
[[1,2,5], 
 [4,3,5], 
 [1,2,4], 
 [4,1,2]]
costs:
[[3,1,4], 
 [1,5,1], 
 [4,4,4], 
 [5,1,2]]
meals:
[[1,3,3], 
 [2,1,3], 
 [0,3,6], 
 [2,0,3], 
 [1,4,4], 
 [2,1,2]]
Expected Output:
[11, 6, 16, 5, 17, 5]

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>