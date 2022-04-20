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
arr: [1, 2, 5, 3]
pieces:
[[5], 
 [1,2], 
 [3]]
Expected Output:
true

Input:
arr: [1, 2, 5, 3, 6]
pieces:
[[1,2], 
 [5], 
 [6,3]]
Expected Output:
false

Input:
arr: [1, 5, 4, 3, 2, 8]
pieces:
[[4,3], 
 [1,5], 
 [2]]
Expected Output:
false

Input:
arr: [1, 5, 4, 3, 2, 8]
pieces:
[[1,5,5], 
 [3,2], 
 [8]]
Expected Output:
false

Input:
arr: [4, 5, 1, 0, 6, 1000000000]
pieces:
[[6,1000000000], 
 [0], 
 [4], 
 [5,1]]
Expected Output:
true

Input:
arr: [1000000000]
pieces: [[0]]
Expected Output:
false

Input:
arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
pieces:
[[1,5,6,7,8,9], 
 [2,3,4]]
Expected Output:
false

Input:
arr: [972423194, 776100481, 736859790, 844690424, 823033042, 944853776, 971324293, 162355436, 278987594, 723712501, 682605452, 911972023, 971678045, 109002521, 936442860]
pieces:
[[936442860], 
 [723712501,682605452,911972023,971678045,109002521], 
 [972423194,776100481,736859790,844690424,823033042], 
 [944853776,971324293,162355436,278987594]]
Expected Output:
true

Input:
arr: [214550964, 340273059, 671489747, 975640305, 731558186, 360314271, 352983155, 458886974, 99561939, 673970389, 556036783, 864990380, 903708004, 528402938, 434793495, 87473433]
pieces:
[[615479495,260535277,37685280,216698438], 
 [89927448], 
 [272110758,744573618], 
 [327559384,741150091,275718499], 
 [669968782], 
 [972474819], 
 [287283217], 
 [251212258,922465168,903194881]]
Expected Output:
false

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>