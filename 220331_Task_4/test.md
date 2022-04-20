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
n: 10
lights:
[[0,5], 
 [1,3], 
 [5,4], 
 [8,3]]
Expected Output:
2

Input:
n: 9
lights: [[5,3]]
Expected Output:
-1

Input:
n: 8
lights:
[[2,3], 
 [8,2]]
Expected Output:
-1

Input:
n: 10
lights:
[[0,5], 
 [1,3], 
 [5,4]]
Expected Output:
-1

Input:
n: 1
lights: [[0,100]]
Expected Output:
1

Input:
n: 15
lights:
[[14,4], 
 [12,5], 
 [4,4], 
 [14,5], 
 [9,1]]
Expected Output:
2

Input:
n: 15
lights:
[[6,5], 
 [1,2], 
 [15,3], 
 [3,2], 
 [14,2], 
 [6,4], 
 [12,3], 
 [1,3]]
Expected Output:
3

Input:
n: 20
lights:
[[0,1], 
 [3,4], 
 [5,4], 
 [3,1], 
 [0,4], 
 [18,2], 
 [4,1], 
 [13,2], 
 [2,4]]
Expected Output:
-1

Input:
n: 25
lights:
[[15,3], 
 [3,4], 
 [14,3], 
 [4,5], 
 [22,4], 
 [25,3], 
 [8,1], 
 [15,3], 
 [11,5], 
 [21,1]]
Expected Output:
4

Input:
n: 50
lights:
[[45,1], 
 [33,4], 
 [37,10], 
 [27,8], 
 [2,7], 
 [5,5], 
 [17,1], 
 [38,1], 
 [13,1], 
 [33,4]]
Expected Output:
-1

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>