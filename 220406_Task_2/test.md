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
numbers: [1, 5, 10, 20]
Expected Output:
true

Input:
numbers: [1, 3, 900, 10]
Expected Output:
true

Input:
numbers: [13, 31, 30]
Expected Output:
false

Input:
numbers: [111]
Expected Output:
true

Input:
numbers: [1000, 10, 100]
Expected Output:
true

Input:
numbers: [527, 516, 216, 965, 951]
Expected Output:
false

Input:
numbers: [68, 105, 131, 396, 438, 754, 744, 817]
Expected Output:
true

Input:
numbers: [92, 121, 193, 293, 328, 345, 343, 475, 478, 154, 250, 706, 929]
Expected Output:
false

Input:
numbers: [64, 281, 219, 239, 291, 299, 308, 352, 371, 421, 405, 497, 875, 648, 725, 832, 877, 911, 925, 929, 954]
Expected Output:
false

Input:
numbers: [43, 46, 68, 79, 94, 109, 131, 140, 172, 192, 193, 195, 426, 294, 302, 359, 436, 439, 517, 520, 607, 619, 692, 807, 714, 753, 796, 803, 807, 879, 890, 899, 945, 962]
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