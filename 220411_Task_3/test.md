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
field:
[[false,true,true], 
 [true,false,true], 
 [false,false,true]]
x: 1
y: 1
Expected Output:
[[-1,-1,-1], 
 [-1,5,-1], 
 [-1,-1,-1]]

Input:
field:
[[true,false,true,true,false], 
 [true,false,false,false,false], 
 [false,false,false,false,false], 
 [true,false,false,false,false]]
x: 3
y: 2
Expected Output:
[[-1,-1,-1,-1,-1], 
 [-1,3,2,2,1], 
 [-1,2,0,0,0], 
 [-1,1,0,0,0]]


Input:
field:
[[false,true], 
 [false,false]]
x: 0
y: 0
Expected Output:
[[1,-1], 
 [-1,-1]]


Input:
field:
[[true,false,false], 
 [false,true,false]]
x: 0
y: 1
Expected Output:
[[-1,2,-1], 
 [-1,-1,-1]]


Input:
field:
[[false,false,false], 
 [false,false,false], 
 [false,false,false], 
 [false,true,true], 
 [false,false,false]]
x: 1
y: 0
Expected Output:
[[0,0,0], 
 [0,0,0], 
 [1,2,2], 
 [-1,-1,-1], 
 [-1,-1,-1]]


Input:
field:
[[false,false,false,false,false,false], 
 [false,false,false,false,false,false], 
 [false,false,false,false,false,false], 
 [false,false,false,false,false,false]]
x: 2
y: 5
Expected Output:
[[0,0,0,0,0,0], 
 [0,0,0,0,0,0], 
 [0,0,0,0,0,0], 
 [0,0,0,0,0,0]]


Input:
field:
[[false,false,true], 
 [true,false,true], 
 [false,true,false], 
 [true,false,false], 
 [false,true,false], 
 [false,true,false]]
x: 0
y: 0
Expected Output:
[[1,-1,-1], 
 [-1,-1,-1], 
 [-1,-1,-1], 
 [-1,-1,-1], 
 [-1,-1,-1], 
 [-1,-1,-1]]


Input:
field:
[[false,false,true,false], 
 [false,false,false,false], 
 [true,false,false,false], 
 [false,true,false,false], 
 [false,false,true,false], 
 [false,false,false,false], 
 [false,false,false,false], 
 [false,false,false,false]]
x: 3
y: 0
Expected Output:
[[-1,-1,-1,-1], 
 [-1,-1,-1,-1], 
 [-1,-1,-1,-1], 
 [2,-1,-1,-1], 
 [-1,-1,-1,-1], 
 [-1,-1,-1,-1], 
 [-1,-1,-1,-1], 
 [-1,-1,-1,-1]]


Input:
field:
[[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true], 
 [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
 [false,false,false,false,false,true,false,false,true,false,true,false,false,false,false,false,false,false,true,false], 
 [false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
 [false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false], 
 ...]
x: 8
y: 6
Expected Output:
[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,-1,-1,-1,2,1,1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,-1,-1,-1,1,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]


Input:
field:
[[true,false,true,false,false,true], 
 [true,false,false,false,false,false], 
 [false,false,false,false,false,true], 
 [false,false,false,false,true,false]]
x: 3
y: 1
Expected Output:
[[-1,-1,-1,-1,-1,-1], 
 [-1,3,1,1,-1,-1], 
 [1,1,0,1,-1,-1], 
 [0,0,0,1,-1,-1]]


Input:
field:
[[true,false,false,false,true,false], 
 [false,false,false,false,false,false], 
 [false,false,false,false,false,false], 
 [false,false,false,false,false,false], 
 [true,false,false,false,false,true], 
 [true,false,false,false,false,true], 
 [true,true,true,false,false,false]]
x: 2
y: 2
Expected Output:
[[-1,1,0,1,-1,-1], 
 [1,1,0,1,1,1], 
 [0,0,0,0,0,0], 
 [1,1,0,0,1,1], 
 [-1,2,0,0,2,-1], 
 [-1,5,2,1,2,-1], 
 [-1,-1,-1,-1,-1,-1]]


Input:
field:
[[true,false,true,false,false,false,false,false,false,false], 
 [false,false,false,false,false,false,false,false,false,false], 
 [false,false,false,false,true,false,false,false,false,false], 
 [false,false,false,true,false,false,false,false,false,true], 
 [true,false,false,false,false,false,false,true,false,false], 
 [true,false,false,false,false,false,true,false,false,false], 
 [false,false,false,false,false,false,true,false,false,false], 
 [false,true,false,false,false,false,false,false,false,false], 
 [false,false,false,false,false,false,false,false,false,false], 
 [false,true,false,false,false,true,false,false,false,false], 
 ...]
x: 8
y: 9
Expected Output:
[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], 
 [-1,2,1,1,1,1,-1,-1,2,1], 
 [-1,2,0,0,0,2,-1,3,1,0], 
 [-1,2,1,0,0,2,-1,2,0,0], 
 [-1,-1,1,0,0,1,1,1,0,0], 
 [-1,-1,2,0,1,1,1,0,0,0], 
 [-1,-1,1,0,1,-1,1,0,0,0]] 




</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>