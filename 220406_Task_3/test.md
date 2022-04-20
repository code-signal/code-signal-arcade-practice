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
matrix:
[[1,2,3,4,0], 
 [5,6,7,8,1], 
 [3,2,4,1,4], 
 [4,3,5,1,6]]
a: 2
b: 3
Expected Output:
36

Input:
matrix:
[[-2,3,5,-1], 
 [4,3,-10,10]]
a: 1
b: 1
Expected Output:
10

Input:
matrix:
[[-2,3], 
 [4,3]]
a: 1
b: 2
Expected Output:
7

Input:
matrix:
[[-1000,1000,-1000], 
 [1000,-1000,1000], 
 [-1000,1000,-1000]]
a: 1
b: 3
Expected Output:
-3000

Input:
matrix:
[[-6,-2,10,-7,0], 
 [8,-5,-10,3,3], 
 [-8,-7,-6,0,5], 
 [8,4,3,-4,-4], 
 [0,10,0,0,3]]
a: 3
b: 3
Expected Output:
-15

Input:
matrix:
[[11,80,66,62], 
 [51,10,26,73], 
 [31,4,25,12], 
 [10,24,32,88], 
 [97,36,39,88], 
 [32,20,79,15], 
 [2,34,90,29], 
 [28,73,30,7], 
 [1,82,79,38], 
 [35,17,88,82]]
a: 1
b: 4
Expected Output:
236

Input:
matrix:
[[32,66,82,47,9,71,25,61,96,45,10], 
 [11,41,80,100,5,78,6,89,64,44,34], 
 [18,4,67,-4,56,14,45,12,12,97,0]]
a: 2
b: 2
Expected Output:
370

Input:
matrix:
[[117,802,905,300,2,829,667,817,322,688,747,411,975,468,543,774,781,742,55,855], 
 [683,168,120,960,466,570,341,12,74,587,765,111,95,340,263,658,87,979,678,799]]
a: 1
b: 2
Expected Output:
1865

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>