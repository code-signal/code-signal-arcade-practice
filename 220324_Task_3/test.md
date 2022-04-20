---
layout: home
title: Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------

<details>
  <summary> Test 1 </summary>
Input:

    operations:
    ["TYPE Code", 
    "TYPE Signal", 
    "MOVE_CURSOR -3", 
    "SELECT 5 8", 
    "TYPE ou", 
    "UNDO", 
    "TYPE nio"]
Expected Output:

    "CodeSignaniol"
</details>

<details>
  <summary> Test 2 </summary>
Input:

    operations:
    ["TYPE MyCat", 
    "SELECT 2 3", 
    "MOVE_CURSOR -1", 
    "TYPE he", 
    "SELECT 0 1", 
    "TYPE His"]
Expected Output:

    "HisCheat"
</details>

<details>
  <summary> Test 3 </summary>
Input:

    operations:
    ["TYPE Nothing", 
    "TYPE Is", 
    "TYPE Permanent", 
    "UNDO", 
    "UNDO", 
    "UNDO", 
    "UNDO"]
Expected Output:

    ""
</details>

<details>
  <summary> Test 4 </summary>
Input:

    operations:
    ["TYPE hello", 
    "SELECT 0 1", 
    "MOVE_CURSOR -1", 
    "TYPE world"]
Expected Output:

    "hworldello"
</details>

<details>
  <summary> Test 5 </summary>
Input:

    operations:
    ["TYPE hello", 
    "SELECT 0 1", 
    "UNDO", 
    "TYPE world"]
Expected Output:

    "world"
</details>

<details>
  <summary> Test 6 </summary>
Input:

    operations:
    ["TYPE hello", 
    "MOVE_CURSOR -1", 
    "SELECT 0 1", 
    "UNDO", 
    "TYPE AAA"]
Expected Output:

    "helloAAA"
</details>

<details>
  <summary> Test 7 </summary>
Input:

    operations:
    ["TYPE hello", 
    "MOVE_CURSOR -1", 
    "SELECT 0 1", 
    "TYPE word", 
    "UNDO", 
    "TYPE AAA"]
Expected Output:

    "heAAAllo"
</details>

<details>
  <summary> Test 8 </summary>
Input:

    operations:
    ["TYPE hello", 
    "SELECT 0 1", 
    "TYPE word", 
    "UNDO", 
    "SELECT 0 1", 
    "TYPE another", 
    "UNDO", 
    "TYPE AAA"]
Expected Output:

    "heAAAllo"
</details>

<details>
  <summary> Test 9 </summary>
Input:

    operations:
    ["TYPE verylongtext", 
    "MOVE_CURSOR -4", 
    "SELECT 1 3", 
    "TYPE AA", 
    "TYPE SUB"]
Expected Output:

    "vAASUBlongtext"
</details>

<details>
  <summary> Test 10 </summary>
Input:

    operations:
    ["TYPE verylongtext", 
    "MOVE_CURSOR -4", 
    "SELECT 4 9", 
    "TYPE AAAAAA", 
    "TYPE B"]
Expected Output:

    "veryAAAAAABxt"
</details>

<details>
  <summary> Test 11 </summary>
Input:

    operations:
    ["TYPE verylongtext", 
    "MOVE_CURSOR -4", 
    "SELECT 9 10", 
    "TYPE A", 
    "TYPE B"]
Expected Output:

    "verylongtABt"
</details>

<details>
  <summary> Test 12 </summary>
Input:

    operations:
    ["TYPE Aba", 
    "MOVE_CURSOR -3", 
    "MOVE_CURSOR 10", 
    "TYPE AAA"]
Expected Output:

    "AbaAAA"
</details>

<details>
  <summary> Test 13 </summary>
Input:

    operations:
    ["TYPE Aba", 
    "MOVE_CURSOR -10", 
    "TYPE AAA"]
Expected Output:

    "AAAAba"
</details>

<details>
  <summary> Test 14 </summary>
Input:

    operations:
    ["TYPE Aba", 
    "MOVE_CURSOR 0", 
    "UNDO"]
Expected Output:

    ""
</details>

<details>
  <summary> Test 15 </summary>
Input:

    operations:
    ["TYPE HelloWorld", 
    "MOVE_CURSOR -2", 
    "TYPE aaa", 
    "MOVE_CURSOR -3", 
    "TYPE bbb"]
Expected Output:

    "HelloWorbbbaaald"
</details>

<details>
  <summary> Test 16 </summary>
Input:

    operations: ["UNDO"]
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