## Fun code challenges and extended learning- Forget crossword puzzles, I'd rather do a code challenge!
Interesting bit I read on a blog:
"As a developer, I see algorithms as they pertain to developing systems and applications. What’s interesting about this topic is that when one hears about it, it’s in usually two contexts:
- CS students that learn all about it and have no idea how to apply them.
- Developers that implement algorithms and later learn they’re based on already known ones."

### Algorithms
Algorithm: a set of rules for solving a problem in a finite number of steps, as for finding the greatest common divisor.  The Big O is basically a way to describe an algorithms “abstract” performance in operation as the operation’s inputs grow in size toward infinity.  Worst case scenario for time execution and space used to run algorithm.

#### Sorting Algorithms
- Bad: Insert, Selection
- Good: Merge, Quicksort

Quicksort - what JavaScript's native .sort() uses.  Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.(from Wikipedia)

Mergesort - also divide and conquer algorithm, comparison-based.  First divide the list into the smallest unit (1 element), then compare each element with the adjacent list to sort and merge the two adjacent lists. Finally all the elements are sorted and merged.

#### Big O Notation
- O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.
- O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.
- O(N2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N3), O(N4) etc.
- O(2N) denotes an algorithm whose growth doubles with each addition to the input data set. The growth curve of an O(2N) function is exponential - starting off very shallow, then rising meteorically. An example of an O(2N) function is the recursive calculation of Fibonacci numbers.
- O(log N). The iterative halving of data sets described in the binary search example produces a growth curve that peaks at the beginning and slowly flattens out as the size of the data sets increase e.g. an input data set containing 10 items takes one second to complete, a data set containing 100 items takes two seconds, and a data set containing 1000 items will take three seconds.

#### References
- https://antjanus.com/blog/web-development-tutorials/understanding-quicksort-js-native-implementation/
- Wikipedia: https://en.wikipedia.org/wiki/Merge_sort, https://en.wikipedia.org/wiki/Quicksort
- https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/
