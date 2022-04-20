---
layout: home
title: Task 3
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Test
------
Input:
operations:
["TYPE Great Britain is the capital of London", 
 "SELECT 0 12", 
 "COPY", 
 "SELECT 32 37", 
 "COPY", 
 "PASTE 2", 
 "SELECT 0 12", 
 "PASTE", 
 "MOVE_CURSOR 32", 
 "TYPE !"]
Expected Output:
"London is the capital of Great Britain!"

Input:
operations:
["TYPE My dog", 
 "SELECT 3 4", 
 "MOVE_CURSOR -1", 
 "TYPE ial", 
 "SELECT 0 1", 
 "TYPE His"]
Expected Output:
"His dialog"

Input:
operations:
["TYPE aba", 
 "SELECT 0 2", 
 "COPY", 
 "COPY", 
 "MOVE_CURSOR 1", 
 "TYPE c", 
 "PASTE 2"]
Expected Output:
"abacaba"

Input:
operations: ["TYPE HelloWorld"]
Expected Output:
"HelloWorld"

Input:
operations:
["COPY", 
 "TYPE hello", 
 "PASTE", 
 "SELECT 1 3", 
 "PASTE"]
Expected Output:
"hello"

Input:
operations:
["TYPE hello", 
 "SELECT 0 1", 
 "MOVE_CURSOR -1", 
 "TYPE world"]
Expected Output:
"hworldello"

Input:
operations:
["PASTE 1", 
 "PASTE 2", 
 "PASTE 3", 
 "COPY", 
 "PASTE 4", 
 "TYPE HEY"]
Expected Output:
"HEY"

Input:
operations:
["TYPE verylongtext 123", 
 "MOVE_CURSOR -4", 
 "SELECT 5 8", 
 "TYPE AA", 
 "TYPE SUB"]
Expected Output:
"verylAASUBext 123"

Input:
operations:
["TYPE verylongtext 456", 
 "MOVE_CURSOR -4", 
 "SELECT 8 13", 
 "TYPE AAAAAA", 
 "TYPE B"]
Expected Output:
"verylongAAAAAAB56"

Input:
operations:
["TYPE verylongtext .?!", 
 "MOVE_CURSOR -4", 
 "SELECT 13 14", 
 "TYPE A", 
 "TYPE B"]
Expected Output:
"verylongtext AB!"

Input:
operations:
["TYPE Aba", 
 "MOVE_CURSOR -3", 
 "MOVE_CURSOR 10", 
 "TYPE AAA"]
Expected Output:
"AbaAAA"

Input:
operations:
["TYPE Aba", 
 "MOVE_CURSOR -10", 
 "TYPE AAA", 
 "SELECT 0 0", 
 "COPY"]
Expected Output:
"AAAAba"

Input:
operations:
["TYPE HelloWorld", 
 "MOVE_CURSOR -2", 
 "TYPE aaa", 
 "MOVE_CURSOR -3", 
 "TYPE bbb"]
Expected Output:
"HelloWorbbbaaald"

Input:
operations:
["TYPE abc", 
 "SELECT 1 2", 
 "COPY", 
 "COPY", 
 "COPY", 
 "COPY", 
 "MOVE_CURSOR -3", 
 "PASTE 4", 
 "MOVE_CURSOR -10", 
 "PASTE"]
Expected Output:
"bcbcabc"

Input:
operations:
["COPY", 
 "COPY", 
 "TYPE FguoV8FWnFbB0JxXujr4qqaaABvvLO", 
 "SELECT 17 27", 
 "SELECT 5 27"]
Expected Output:
"FguoV8FWnFbB0JxXujr4qqaaABvvLO"

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>