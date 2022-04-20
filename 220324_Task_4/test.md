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

    s: "aaabb"
Expected Output:

    "ababa"
</details>

<details>
  <summary> Test 2 </summary>
Input:

    s: "aaabbbcc"
Expected Output:

    "abcacba"
</details>

<details>
  <summary> Test 3 </summary>
Input:

    s: "a"
Expected Output:

    "a"
</details>

<details>
  <summary> Test 4 </summary>
Input:

    s: "lollipop"
Expected Output:

    "lopipol"
</details>

<details>
  <summary> Test 5 </summary>
Input:

    s: "cddhh"
Expected Output:

    "dhchd"
</details>

<details>
  <summary> Test 6 </summary>
Input:

    s: "gfagcaabdfdgfaabeabbage"
Expected Output:

    "aaabbdefggaggfedbbaaa"
</details>

<details>
  <summary> Test 7 </summary>
Input:

    s: "faciehfbijidhcichbgfeb"
Expected Output:

    "bcefhiiaiihfecb"
</details>

<details>
  <summary> Test 8 </summary>
Input:

    s: "hcibajf"
Expected Output:

    "a"
</details>

<details>
  <summary> Test 9 </summary>
Input:

    s: "aceggcccf"
Expected Output:

    "ccgagcc"
</details>

<details>
  <summary> Test 10 </summary>
Input:

    s: "cdfaedhghcdagfcegcbabafhce"
Expected Output:

    "aabccdefghchgfedccbaa"
</details>

<details>
  <summary> Test 11 </summary>
Input:

    s: "abbbababbbababaababababbbbaa"
Expected Output:

    "aaaaaabbbbbbbbbbbbbbbbaaaaaa"
</details>

<details>
  <summary> Test 12 </summary>
Input:

    s: "fbhhbachcdhefcghhhaebcbadgde"
Expected Output:

    "abbccdefghhhahhhgfedccbba"
</details>

<details>
  <summary> Test 13 </summary>
Input:

    s: "abcbdcbbcaabddab"
Expected Output:

    "aabbbcdcdcbbbaa"
</details>

<details>
  <summary> Test 14 </summary>
Input:

    s: "aaeaeccbb"
Expected Output:

    "abceaecba"
</details>

<details>
  <summary> Test 15 </summary>
Input:

    s: "aaaaaaa"
Expected Output:

    "aaaaaaa"
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