---
layout: home
title: Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

<details>
  <summary> Test 1 </summary>
Input:

    blocks: [1, 3, 1, 3, 3]
    height: 2
Expected Output:

    6
</details>

<details>
  <summary> Test 2 </summary>
Input:

    blocks: [2, 3, 1, 1, 1]
    height: 2
Expected Output:

    5
</details>

<details>
  <summary> Test 3 </summary>
Input:

    blocks: [4, 1, 1]
    height: 2
Expected Output:

    4
</details>

<details>
  <summary> Test 4 </summary>
Input:

    blocks: [3]
    height: 2
Expected Output:

    3
</details>

<details>
  <summary> Test 5 </summary>
Input:

    blocks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    height: 1
Expected Output:

    10
</details>

<details>
  <summary> Test 6 </summary>
Input:

    blocks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    height: 1000000000
Expected Output:

    1
</details>

<details>
  <summary> Test 7 </summary>
Input:

    blocks: [9999, 9997, 9995, 9997, 9998, 9995, 9995, 10000, 9999, 9999]
    height: 86
Expected Output:

    10000
</details>

<details>
  <summary> Test 8 </summary>
Input:

    blocks: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
    height: 1
Expected Output:

    200000
</details>

<details>
  <summary> Test 9 </summary>
Input:

    blocks: [6, 10, 1, 6, 8, 2, 7, 3, 2, 7]
    height: 2
Expected Output:

    29
</details>

<details>
  <summary> Test 10 </summary>
Input:

    blocks: [10, 3, 5, 4, 7, 8, 3, 2, 6, 8]
    height: 4
Expected Output:

    16
</details>

<details>
  <summary> Test 11 </summary>
Input:

    blocks: [9, 6, 5, 7, 1, 6, 2, 6, 10, 3]
    height: 7
Expected Output:

    11
</details>

<details>
  <summary> Test 12 </summary>
Input:

    blocks: [5, 4, 2, 5, 8, 3, 1, 5, 10, 9]
    height: 10
Expected Output:

    10
</details>

<details>
  <summary> Test 12 </summary>
Input:

    blocks: [5, 4, 2, 5, 9, 6, 9, 8, 10, 4]
    height: 7
Expected Output:

    14
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