The solutions for the following problems:

* You have an array of characters (string) that may be '1', '0' o '*'. e.g. 10*00*0. The program needs to generate an output of all the possible combinations by replacing with an 0 and 1. I.e. input> 10**0 output> 10000, 10010, 10100, 10110. Input > *0 output > 00, 10.

* You have an array of lists e.g.; [[1,3], ['a'], [4,5]]. We would like to obtain all the permutations between the lists. The answer for this example is: (1,a,4) (1,a,5) (3,a,4) (3,a,5). Code a program that does this for any quantity of lists and elements on them.

## Overview

The solution of the first problem uses function composition to get the final result. In this composition we use a solution for a second problem. 
At first we got small pieces of the future output, then we apply permutations on these pieces, then we join the permutation result into the array of strings.
The limitation of this solution is using a lot of loops. If we would like to work on performance budget, we'll probably need to avoid it (not avoid loops at all, just minimize an amount of them). Also the first version of permutation function uses generators, so the another limitation could be an old environment support.

Please check \__tests\__/combinations to see how the solution should be used.


The solution of the second problem got two versions. The first one uses generators, as I've mentioned before. The second one uses the reduce and map methods.

Please check \__tests\__/permutations.

Tests are writted with use of Jest. For running tests:

```
npm i
npm run test
```

