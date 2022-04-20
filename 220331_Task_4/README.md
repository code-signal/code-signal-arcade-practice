---
layout: home
title: 31 Mar 2022 - Task 4
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[Home](../README.md)

[Before](..) | [Next](..)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)


You're walking down a long straight road at night, illuminated by street lights, and you're wondering how many of the lights are actually required to light up the whole street.

Let's represent the street as a number line, going from `0` to `n` (inclusive). Each street light has a different location (represented as an integer on the number line) and light radius (an integer representing how far the light shines in either direction).

Given `n` and `lights`, an array of 2-element arrays of the form `[location, radius]`, your task is to find the minimum number of these lights required to light up the whole street. Return `-1` if it's not possible to light the whole street with the given set of lights.

**Note**: Each radius includes its own border; in other words, each light covers the inclusive interval `[location - radius, location + radius]`.


**Example**

-   For n = 10 and lights = [[0, 5], [1, 3], [5, 4], [8, 3]], the output should be solution(n, lights) = 2.

    <p align="left" ><img src="https://codesignal.s3.amazonaws.com/tasks/streetLights/img/example1.gif?_tm=1636920985326" width="400" height="300" style="width: 400px; height: 300px;"></a></p> 

    -   lights[0] and lights[3] illuminate the whole street (segment [0, 10]).
    -   There's no way to light the whole street with fewer than 2 lights, so the answer is 2.
    
-   For n = 9 and lights = [[5, 3]], the output should be solution(n, lights) = -1.

    <p align="left" ><img src="https://codesignal.s3.amazonaws.com/tasks/streetLights/img/example2.gif?_tm=1636920985603" width="400" height="300" style="width: 400px; height: 300px;"></a></p> 

    It's not possible to light the whole street with this single light, because it lights only the segment [2, 8] and does not light the segments [0, 2) or (8, 9].

-   For n = 8 and lights = [[2, 3], [8, 2]], the output should be solution(n, lights) = -1.

    <p align="left" ><img src="https://codesignal.s3.amazonaws.com/tasks/streetLights/img/example3.gif?_tm=1636920985950" width="400" height="300" style="width: 400px; height: 300px;"></a></p> 

    The lights don't cover the space between points 5 and 6, and thus don't cover the whole segment [0, 10].

-   For n = 10 and lights = [[0, 5], [1, 3], [5, 4]], the output should be solution(n, lights) = -1.

    <p align="left" ><img src="https://codesignal.s3.amazonaws.com/tasks/streetLights/img/example4.gif?_tm=1636920986382" width="400" height="300" style="width: 400px; height: 300px;"></a></p>     

    There are no lights to cover the rightmost segment of the street from 9 to 10.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

    The length of the street.

    *Guaranteed constraints:*

        1 ≤ n ≤ 10^6.

* **[input] array.array.integer lights**

    An array of 2-element arrays representing the street lights - lights[i][0] represents the light's position, and lights[i][1] represents the radius of the light.

    *Guaranteed constraints:*

        1 ≤ lights.length ≤ 10^5,

        lights[i].length = 2,

        0 ≤ lights[i][0] ≤ n,
        
        1 ≤ lights[i][1] ≤ 500.

* **[output] integer**

    The minimal number of lights needed to light the whole street.

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>