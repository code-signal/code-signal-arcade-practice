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
a: [10, 2]
Expected Output:
1344

Input:
a: [8]
Expected Output:
88

Input:
a: [1, 2, 3]
Expected Output:
198

Input:
a: [1000000, 1000000, 1000000, 1000000]
Expected Output:
160000016000000

Input:
a: [987153, 239178, 389649, 469261, 130806]
Expected Output:
11080246080235

Input:
a: [393496, 920577, 155905, 238986, 131066, 785660, 359269, 545445]
Expected Output:
28243260243232

Input:
a: [1, 10, 100, 1000, 10000, 100000, 1000000]
Expected Output:
12345684320987

Input:
a: [9, 8, 7, 6, 5, 4, 3, 2, 1]
Expected Output:
4455

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>