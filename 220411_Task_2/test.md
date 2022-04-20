---
layout: home
title: Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

Input:
s: "xzxzx"
Expected Output:
5

Input:
s: "xzy"
Expected Output:
1

Input:
s: "xxx"
Expected Output:
0

Input:
s: "xzxzxzxzxz"
Expected Output:
30


Input:
s: "xxxxxxxxxx"
Expected Output:
24

Input:
s: "xyzxyzxyzx"
Expected Output:
35

Input:
s: "xzxzxxzzxx"
Expected Output:
36

Input:
s: "gggggggggggggggggggggggggggggg"
Expected Output:
366

Input:
s: "gfgfgfgfgfgfgfgfgfgfgfgfgfgfgf"
Expected Output:
387


</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>