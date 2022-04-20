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

    s = "aaacodedoc"
Expected Output:

    ""
</details>

<details>
  <summary> Test 2 </summary>
Input:

    s = "codesignal"
Expected Output:

    "codesignal"
</details>

<details>
  <summary> Test 3 </summary>
Input:

    s = ""
Expected Output:

    ""
</details>

<details>
  <summary> Test 4 </summary>
Input:

    s = "a"
Expected Output:

    "a"
</details>

<details>
  <summary> Test 5 </summary>
Input:

    s = "abbab"
Expected Output:

    "b"
</details>

<details>
  <summary> Test 6 </summary>
Input:

    s = "aaabba"
Expected Output:

    "a"
</details>

<details>
  <summary> Test 7 </summary>
Input:

    s = "aaaaaaab"
Expected Output:

    "b"
</details>

<details>
  <summary> Test 8 </summary>
Input:

    s = "abbaabbaabba"
Expected Output:

    ""
</details>

<details>
  <summary> Test 9 </summary>
Input:

    s = "abababaaab"
Expected Output:

    "b"
</details>

<details>
  <summary> Test 10 </summary>
Input:

    s = "bbabbaabaabbbbb"
Expected Output:

    ""
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