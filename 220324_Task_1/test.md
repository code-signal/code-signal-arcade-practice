---
layout: home
title: Task 1
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

<details>
  <summary> Test 1 </summary>
Input:

    numbers: [8, 5, 6, 16, 5]
    left: 1
    right: 3
Expected Output:

    [false, false, true, false, true]
</details>

<details>
  <summary> Test 2 </summary>
Input:

    numbers: [100]
    left: 1
    right: 1000
Expected Output:

    [true]
</details>

<details>
  <summary> Test 3 </summary>
Input:

    numbers: [1, 2, 3, 4, 5]
    left: 1
    right: 1
Expected Output:

    [true, true, true, true, true]
</details>

<details>
  <summary> Test 4 </summary>
Input:

    numbers: [1, 2, 3, 4, 5]
    left: 2
    right: 10000
Expected Output:

    [false, false, false, false, false]
</details>

<details>
  <summary> Test 5 </summary>
Input:

    numbers: [1000000, 20000]
    left: 10000
    right: 10000
Expected Output:

    [false, true]
</details>

<details>
  <summary> Test 6 </summary>
Input:

    numbers: [65, 46, 60, 164, 243, 228, 231, 298, 231, 211]
    left: 20
    right: 50
Expected Output:

    [false, true, true, true, false, true, true, false, false, false]
</details>

<details>
  <summary> Test 7 </summary>
Input:

    numbers: [643, 531, 504, 224, 415, 360, 364, 84, 212, 587]
    left: 70
    right: 80
Expected Output:

    [false, false, false, false, false, false, false, false, false, false]
</details>

<details>
  <summary> Test 8 </summary>
Input:

    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
    left: 1
    right: 10000
Expected Output:

    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
</details>

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>