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
s: "ab12c"
t: "1zz456"
Expected Output:
1

Input:
s: "ab12c"
t: "ab24z"
Expected Output:
3

Input:
s: "96726"
t: "9z34c"
Expected Output:
8

Input:
s: "4u05q"
t: "ed0r7"
Expected Output:
4

Input:
s: "6"
t: "h"
Expected Output:
1

Input:
s: "d"
t: "6"
Expected Output:
0

Input:
s: "5"
t: "4"
Expected Output:
1

Input:
s: "d"
t: "q"
Expected Output:
0

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>