---
layout: home
title: Task 2
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

<details>
  <summary> Test 1 </summary>
Input:

    a: [1, 3, 5, 6, 4, 2]
    
Expected Output:

    true
</details>

<details>
  <summary> Test 2 </summary>
Input:

  a: [1, 4, 5, 6, 3]

Expected Output:

  false
</details>

<details>
  <summary> Test 3 </summary>
Input:

  a: [1]

Expected Output:

  true
</details>

<details>
  <summary> Test 4 </summary>
Input:

  a: [1, 2]

Expected Output:

  true
</details>

<details>
  <summary> Test 5 </summary>
Input:

  a: [-89, -47, -38, 39, 82, 87, 40, -9, -41, -68]

Expected Output:

  true
</details>

<details>
  <summary> Test 6 </summary>
Input:

  a: [-92, -17, 71, 76, 54, -35]

Expected Output:

  true
</details>

<details>
  <summary> Test 7 </summary>
Input:

  a: [-52, 2, 31, 56, 47, 29, -35]
  
Expected Output:

  true
</details>

<details>
  <summary> Test 8 </summary>
Input:

  a: [-97, -51, -8, 25, 44, 70, 98, 77, 68, 31, -5, -36, -80]

Expected Output:

  true
</details>

<details>
  <summary> Test 9 </summary>
Input:

  a: [-86, -49, -26, -22, 22, 32, 44, 67, 38, 25, 13, -25, -42, -71]

Expected Output:

  true
</details>

<details>
  <summary> Test 10 </summary>
Input:

  a: [-92, -23, 0, 45, 89, 96, 99, 95, 89, 41, -17, -48]

Expected Output:

  false
</details>

<details>
  <summary> Test 11 </summary>
Input:

  a: [-37, -31, -8, 88, -10, -33]

Expected Output:

  true
</details>

<details>
  <summary> Test 12 </summary>
Input:

  a: [-87, -52, 83, 96, 98, 94, 68, -71]

Expected Output:

  true
</details>

<details>
  <summary> Test 13 </summary>
Input:

  a: [-92, 9, 41, 99, 29, -78]

Expected Output:

  true
</details>

<details>
  <summary> Test 14 </summary>
Input:

  a: [-91, -84, -67, -44, 9, 70, 88, 37, -11, -67, -72, -87]

Expected Output:

  false
</details>

<details>
  <summary> Test 15 </summary>
Input:

  a: [-44, -73, -24, 22, 91, 84, 2, -40, -56]

Expected Output:

  false
</details>

<details>
  <summary> Test 16 </summary>
Input:

  a: [-79, -48, -42, 4, 9, 55, 70, 84, 62, 40, 7, -28, -46, -74]

Expected Output:

  true
</details>

<details>
  <summary> Test 17 </summary>
Input:

  a: [-27, -81, -7, 21, 33, 52, 23, -6, -10, -71]

Expected Output:

  false
</details>

<details>
  <summary> Test 18 </summary>
Input:

  a: [-99, -29, -7, 17, 28, 71, 98, 86, 42, 22, 0, -29, -86]

Expected Output:

  false
</details>

<details>
  <summary> Test 19 </summary>
Input:

  a: [-86, 93, 4, 27, 49, 74, 74, -70, 60, 41, 14, -44, -80]

Expected Output:

  false
</details>

<details>
  <summary> Test 20 </summary>
Input:

  a: [42, -80, -72, -25, 18, -94, 99, 49, 37, 10, -45, -76, -87]

Expected Output:

  false
</details>

<details>
  <summary> Test 21 </summary>
Input:

  a: [-73, -27, 52, 60, 90, 91, 71, 55, 30, -56]

Expected Output:

  true
</details>

<details>
  <summary> Test 22 </summary>
Input:

  a: [-98, -82, -70, -49, 58, 26, -69, -79, -98]

Expected Output:

  false
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