# Memory Optimization
There are quite a few things that have the potential to take up space in memory.

1. Memory leaks
  - If memory at one point in time had been allocated to a specific purpose, that same memory might not necessarily be reclaimed automatically, just because the `event listener` (or whatever it might have been) has been removed.

2. Data structures
  - Although `data structures` can help us make sense of it all on an abstract and/or conceptual level, they are rarely the best option for taking up the least amount of storage.
  - Arrays are, if possible, usually the better option.

3. Immutability
  - While immutability can be necessary at times, it isn't a good idea to keep saving a new version of an object, compared to the altering of the original.
