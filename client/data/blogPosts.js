// data/blogPosts.js

import { assets } from "@/assets/assets";

export const posts = [

  {
    slug: "first-post",
    title: "First Post",
    author: "shoc71",
    date: "2025-05-23",
    edited: "2025-09-02",
    particles: ["👋", "🌐", "🌊", "🌎", "🙋‍♀️", "🌍", "🙋"],
    content: [
      { 
        type: "text", 
        value: "I am saying something here." 
      },
      {
        type: "code",
        language: "javascript",
        code: `function sayingHello() {
  return "Hello World!";
}

console.log(sayingHello());`,
      },
      { type: "text", value: "Hello" },
      { type: "break" },
      
    ],
  },

  {
    slug: "nesting-joke",
    title: "Nesting and Markdown",
    author: "You",
    date: "2025-09-02",
    edited: "2025-09-02",
    particles: ["🪺", "🪹", "🧺", "📚", "🗃️"],
    content: [
        { type: "text", value: "This is a blog post with collapsibles and code." },
        {
            type: "image",
            src: assets.nesting_joke_1,
            alt: "Sample",
            width: 800,
            height: 640
        },
        {
        type: "collapse",
      title: "Expandable Section",
        // body: ["First **Markdown** block."],
        children: [
            {
            title: "Nested Level 2",
            // body: ["This is level 2"],
            children: [
                {
                title: "Nested Level 3",
                // body: ["Level 3 Markdown content"],
                children: [
                    {
                    title: "Nested Level 4",
                    // body: ["Level 4 Markdown content"],
                    children: [
                        {
                        title: "Nested Level 5",
                        body: ["No More"]
                        }
                    ]
                    }
                ]
                }
            ]
            }
        ]
        },
        { type: "break" }, // <-- you control exactly where it appears
        {
        type: "code",
        code: `function hello(name) {
console.log("Hello, " + name);
}
hello("Blog!");`,
        },
    ],
  },

  {
    slug: "8-design-pattern",
    title: "Eight Design Pattern",
    author: "shoc71",
    date: "2025-05-23",
    edited: "2025-09-02",
    particles: ["👋", "🌐", "🌊", "🌎", "🙋‍♀️", "🌍", "🙋"],
    content: [
      { 
        type: "text", 
        value: "This article isn't complete - as I am still reading and learning the various topics." 
      },
      {
        type: "code",
        language: "python",
        code: `def saying_hello():
  return "Hello World!"

print(saying_hello())`,
      },
      { type: "text", value: "Hello" },
      { type: "break" },
      
    ],
  },

  {
    slug: "sliding-window-pattern",
    title: "Sliding Window Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔍", "📊", "⏱", "🌐"],
    content: [
      { 
        type: "text", 
        value: "The Sliding Window pattern is a commonly used technique to solve problems that involve finding a subarray or substring with certain properties within a larger array or string. This method helps in optimizing problems where a brute force approach would be too slow." 
      },
      {
        type: "text", 
        value: "Here's a classic problem solved with the Sliding Window pattern: finding the maximum sum of a subarray of size `k`."
      },
      {
        type: "code",
        language: "python",
        code: `def max_sum_subarray(nums, k):
    max_sum = 0
    current_sum = 0
    
    for i in range(len(nums)):
        current_sum += nums[i]
        
        if i >= k - 1:
            max_sum = max(max_sum, current_sum)
            current_sum -= nums[i - (k - 1)]  # Slide the window
    
    return max_sum

# Example usage
nums = [2, 1, 5, 1, 3, 2]
k = 3
print(max_sum_subarray(nums, k))  # Output: 9
`,
      },
      { type: "text", value: "In this example, the `max_sum_subarray` function slides a window of size `k` across the array and computes the maximum sum efficiently by maintaining a running sum of the current window." },
      { type: "break" },
    ],
  },

  {
    slug: "two-pointers-pattern",
    title: "Two Pointers Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🧑‍🤝‍🧑", "🔍", "🚶", "⛓"],
    content: [
      { 
        type: "text", 
        value: "The Two Pointers pattern is a powerful technique for solving problems where you need to explore pairs of elements in a linear structure like an array or a string." 
      },
      {
        type: "text", 
        value: "Here’s a problem that can be solved using Two Pointers: finding if there is a pair in a sorted array that adds up to a target value."
      },
      {
        type: "code",
        language: "python",
        code: `def has_pair_with_sum(nums, target):
    left, right = 0, len(nums) - 1
    
    while left < right:
        total = nums[left] + nums[right]
        
        if total == target:
            return True
        elif total < target:
            left += 1
        else:
            right -= 1
    
    return False

# Example usage
nums = [1, 2, 4, 6, 10]
target = 8
print(has_pair_with_sum(nums, target))  # Output: True
`,
      },
      { type: "text", value: "In this solution, the two pointers (`left` and `right`) are used to explore the array from both ends, adjusting the pointers based on whether the sum of the elements is less than or greater than the target." },
      { type: "break" },
    ],
  },

  {
    slug: "fast-slow-pointers",
    title: "Fast and Slow Pointers (Tortoise and Hare) Pattern",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🐢", "🐇", "⚡️", "🔄"],
    content: [
      { 
        type: "text", 
        value: "The Fast and Slow Pointers pattern, often called the Tortoise and Hare algorithm, is used to solve problems involving cycles or repeated sequences in linked lists or arrays." 
      },
      {
        type: "text", 
        value: "Let’s use this pattern to detect a cycle in a linked list."
      },
      {
        type: "code",
        language: "python",
        code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True  # Cycle detected
    
    return False  # No cycle

# Example usage
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = head.next  # Cycle

print(has_cycle(head))  # Output: True
`,
      },
      { type: "text", value: "In this algorithm, two pointers move at different speeds: one moves one step at a time (slow pointer), and the other moves two steps at a time (fast pointer). If they meet, a cycle is detected." },
      { type: "break" },
    ],
  },

  {
    slug: "merge-intervals",
    title: "Merge Intervals Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["📅", "🕰", "🔁", "📈"],
    content: [
      { 
        type: "text", 
        value: "The Merge Intervals pattern is a common technique to solve problems where you need to combine or merge overlapping intervals, such as in scheduling or time series analysis." 
      },
      {
        type: "text", 
        value: "A classic problem solved with this technique is merging overlapping intervals."
      },
      {
        type: "code",
        language: "python",
        code: `def merge(intervals):
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for i in range(1, len(intervals)):
        current = intervals[i]
        last = merged[-1]
        
        if current[0] <= last[1]:
            last[1] = max(last[1], current[1])  # Merge
        else:
            merged.append(current)
    
    return merged

# Example usage
intervals = [[1, 3], [2, 4], [6, 8], [7, 9]]
print(merge(intervals))  # Output: [[1, 4], [6, 9]]
`,
      },
      { type: "text", value: "This algorithm sorts the intervals by their starting point and then merges any intervals that overlap by comparing the end of the current interval with the start of the next one." },
      { type: "break" },
    ],
  },

  {
    slug: "binary-search",
    title: "Binary Search Algorithm in Python",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔍", "📚", "🏃‍♂️", "🧠"],
    content: [
      { 
        type: "text", 
        value: "Binary Search is a highly efficient search algorithm that works on sorted arrays. It repeatedly divides the search interval in half to reduce the number of elements to search through." 
      },
      {
        type: "text", 
        value: "Here is an implementation of binary search in Python."
      },
      {
        type: "code",
        language: "python",
        code: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Target not found

# Example usage
nums = [1, 2, 3, 4, 5, 6]
target = 4
print(binary_search(nums, target))  # Output: 3
`,
      },
      { type: "text", value: "The binary search works by continually narrowing the search space in half. At each step, it checks the middle element of the array and adjusts the search bounds accordingly." },
      { type: "break" },
    ],
  },

  {
    slug: "backtracking-pattern",
    title: "Backtracking Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔄", "🚶", "🧩", "🧠"],
    content: [
      { 
        type: "text", 
        value: "Backtracking is a method of solving problems by trying to build solutions incrementally, abandoning solutions as soon as it is determined that they cannot be completed." 
      },
      {
        type: "text", 
        value: "Backtracking is often used for problems that involve decision making, such as solving mazes, puzzles, and optimization problems. A classic example is the N-Queens problem."
      },
      {
        type: "code",
        language: "python",
        code: `def solve_n_queens(n):
    def is_safe(board, row, col):
        for i in range(row):
            if board[i] == col or abs(board[i] - col) == row - i:
                return False
        return True

    def solve(board, row):
        if row == n:
            result.append(["".join(["Q" if c == col else "." for c in range(n)]) for col in board])
            return

        for col in range(n):
            if is_safe(board, row, col):
                board[row] = col
                solve(board, row + 1)
                board[row] = -1

    result = []
    solve([-1] * n, 0)
    return result

# Example usage
n = 4
solutions = solve_n_queens(n)
for solution in solutions:
    for row in solution:
        print(row)
    print()
`,
      },
      { type: "text", value: "In this solution, we use backtracking to explore all potential solutions for placing queens on the board. The `is_safe` function checks whether a queen can be placed safely in the current position without threatening any other queens." },
      { type: "break" },
    ],
  },

  {
    slug: "dynamic-programming-pattern",
    title: "Dynamic Programming (DP) in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["📉", "🧠", "⏳", "📚"],
    content: [
      { 
        type: "text", 
        value: "Dynamic Programming (DP) is a technique for solving problems by breaking them down into smaller subproblems and solving each subproblem only once, storing the results to avoid redundant calculations." 
      },
      {
        type: "text", 
        value: "DP is typically used to solve optimization problems where the solution involves making a sequence of decisions, such as the Fibonacci sequence."
      },
      {
        type: "code",
        language: "python",
        code: `def fib(n, memo={}):
    if n <= 1:
        return n
    if n not in memo:
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]

# Example usage
n = 10
print(fib(n))  # Output: 55
`,
      },
      { type: "text", value: "In the `fib` function, we use memoization (a form of dynamic programming) to store previously computed Fibonacci numbers, ensuring that each number is only calculated once." },
      { type: "break" },
    ],
  },

  {
    slug: "greedy-algorithm-pattern",
    title: "Greedy Algorithm Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["💰", "💡", "📊", "⏳"],
    content: [
      { 
        type: "text", 
        value: "A Greedy algorithm makes the locally optimal choice at each stage with the hope of finding a global optimum. Greedy algorithms are efficient and work well when the problem has an optimal substructure." 
      },
      {
        type: "text", 
        value: "A common problem that can be solved with a greedy approach is the Fractional Knapsack Problem."
      },
      {
        type: "code",
        language: "python",
        code: `def fractional_knapsack(items, capacity):
    items.sort(key=lambda x: x[1] / x[0], reverse=True)  # Sort by value/weight ratio
    max_value = 0
    for weight, value in items:
        if capacity == 0:
            break
        take_weight = min(weight, capacity)
        max_value += take_weight * (value / weight)
        capacity -= take_weight
    return max_value

# Example usage
items = [(10, 60), (20, 100), (30, 120)]  # (weight, value)
capacity = 50
print(fractional_knapsack(items, capacity))  # Output: 240.0
`,
      },
      { type: "text", value: "The `fractional_knapsack` function sorts the items by their value-to-weight ratio and then selects the item with the highest ratio, ensuring that the maximum value is obtained without exceeding the capacity." },
      { type: "break" },
    ],
  },

  {
    slug: "topological-sort-pattern",
    title: "Topological Sort Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔗", "🔀", "📅", "🎯"],
    content: [
      { 
        type: "text", 
        value: "Topological Sort is an ordering of the vertices in a Directed Acyclic Graph (DAG) such that for every directed edge `uv`, vertex `u` comes before `v` in the ordering." 
      },
      {
        type: "text", 
        value: "Topological sort is useful in problems that involve dependencies, such as scheduling tasks or processing graphs."
      },
      {
        type: "code",
        language: "python",
        code: `from collections import deque

def can_finish(num_courses, prerequisites):
    in_degree = [0] * num_courses
    graph = {i: [] for i in range(num_courses)}
    
    for dest, src in prerequisites:
        in_degree[dest] += 1
        graph[src].append(dest)
    
    queue = deque([i for i in range(num_courses) if in_degree[i] == 0])
    courses_taken = 0
    
    while queue:
        course = queue.popleft()
        courses_taken += 1
        
        for neighbor in graph[course]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return courses_taken == num_courses

# Example usage
num_courses = 2
prerequisites = [[1, 0]]
print(can_finish(num_courses, prerequisites))  # Output: True
`,
      },
      { type: "text", value: "In this solution, we use a topological sort to determine whether it's possible to complete all courses, given the prerequisites. If the number of courses taken equals the total number of courses, we return `True`, meaning all courses can be completed." },
      { type: "break" },
    ],
  },

  {
    slug: "union-find-pattern",
    title: "Union-Find (Disjoint Set Union) Pattern",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🌐", "🔀", "💥", "🔄"],
    content: [
      { 
        type: "text", 
        value: "Union-Find is a data structure that helps keep track of a collection of disjoint sets and efficiently supports operations like finding the set of an element and merging two sets." 
      },
      {
        type: "text", 
        value: "A classic problem where Union-Find is useful is cycle detection in an undirected graph."
      },
      {
        type: "code",
        language: "python",
        code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        
        if rootX != rootY:
            if self.rank[rootX] > self.rank[rootY]:
                self.parent[rootY] = rootX
            elif self.rank[rootX] < self.rank[rootY]:
                self.parent[rootX] = rootY
            else:
                self.parent[rootY] = rootX
                self.rank[rootX] += 1

# Example usage
uf = UnionFind(5)
uf.union(0, 1)
uf.union(1, 2)
uf.union(3, 4)

print(uf.find(0) == uf.find(2))  # Output: True
print(uf.find(0) == uf.find(3))  # Output: False
`,
      },
      { type: "text", value: "In this solution, the `UnionFind` class supports efficient `find` and `union` operations. It is used to manage disjoint sets and can help detect cycles by checking if two nodes belong to the same set." },
      { type: "break" },
    ],
  },

  {
    slug: "heap-pattern",
    title: "Heap Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔼", "🔽", "⏳", "💻"],
    content: [
      { 
        type: "text", 
        value: "A heap is a special tree-based data structure that satisfies the heap property. It is commonly used for implementing priority queues, which allow the efficient retrieval of the highest or lowest priority element." 
      },
      {
        type: "text", 
        value: "Let’s explore the problem of finding the `k` largest elements in an array using a heap."
      },
      {
        type: "code",
        language: "python",
        code: `import heapq

def k_largest_elements(nums, k):
    return heapq.nlargest(k, nums)

# Example usage
nums = [3, 2, 1, 5, 6, 4]
k = 2
print(k_largest_elements(nums, k))  # Output: [6, 5]
`,
      },
      { type: "text", value: "In this solution, we use Python's built-in `heapq` module to extract the `k` largest elements. The `nlargest` function efficiently retrieves the largest elements using a heap-based approach." },
      { type: "break" },
    ],
  },

  {
    slug: "trie-pattern",
    title: "Trie Data Structure and Pattern",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["📚", "🔠", "🔍", "🌳"],
    content: [
      { 
        type: "text", 
        value: "A Trie is a special tree-like data structure used to store a dynamic set of strings, where keys are usually strings. It’s mainly used for tasks like searching for words, autocomplete suggestions, and prefix matching." 
      },
      {
        type: "text", 
        value: "Let’s solve a problem where we need to insert words into a Trie and search for them."
      },
      {
        type: "code",
        language: "python",
        code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

# Example usage
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # Output: True
print(trie.search("app"))    # Output: False
`,
      },
      { type: "text", value: "The `Trie` class implements insert and search functions. Words are inserted by following the characters of the word along the tree’s edges, and searching for a word checks if it exists in the Trie." },
      { type: "break" },
    ],
  },

  {
    slug: "breadth-first-search-pattern",
    title: "Breadth-First Search (BFS) Pattern",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🌐", "🚶‍♂️", "🔄", "🔍"],
    content: [
      { 
        type: "text", 
        value: "Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or any arbitrary node in the graph) and explores all of the neighboring nodes at the present depth before moving on to nodes at the next depth level." 
      },
      {
        type: "text", 
        value: "A common problem solved using BFS is finding the shortest path in an unweighted graph."
      },
      {
        type: "code",
        language: "python",
        code: `from collections import deque

def bfs_shortest_path(graph, start, target):
    queue = deque([(start, [start])])  # Store nodes with the path to that node
    visited = set()
    
    while queue:
        node, path = queue.popleft()
        
        if node == target:
            return path
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    
    return None

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
start, target = 'A', 'F'
print(bfs_shortest_path(graph, start, target))  # Output: ['A', 'C', 'F']
`,
      },
      { type: "text", value: "In this solution, BFS is used to find the shortest path from the start node to the target node in an unweighted graph. We use a queue to explore nodes level by level, and a path list is used to track the sequence of nodes." },
      { type: "break" },
    ],
  },

  {
    slug: "depth-first-search-pattern",
    title: "Depth-First Search (DFS) Pattern",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🌲", "🔍", "🔄", "⛰️"],
    content: [
      { 
        type: "text", 
        value: "Depth-First Search (DFS) is another algorithm for traversing or searching tree or graph data structures. It starts at the root and explores as far down a branch as possible before backtracking." 
      },
      {
        type: "text", 
        value: "DFS is used in problems like finding connected components, topological sorting, and detecting cycles."
      },
      {
        type: "code",
        language: "python",
        code: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
print(dfs(graph, 'A'))  # Output: {'A', 'B', 'C', 'D', 'E', 'F'}
`,
      },
      { type: "text", value: "The `dfs` function uses recursion to explore each node in the graph, marking it as visited. It visits as far as possible along each branch before backtracking and continuing with the next unvisited node." },
      { type: "break" },
    ],
  },

  {
    slug: "top-k-elements-pattern",
    title: "Top K Elements Pattern",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔢", "📊", "🔥", "💥"],
    content: [
      { 
        type: "text", 
        value: "The Top K Elements problem is to find the `k` largest or smallest elements in an array or list. This is commonly solved using heaps, sorting, or quickselect." 
      },
      {
        type: "text", 
        value: "A simple way to approach this problem is by using the `heapq` module to find the `k` largest elements."
      },
      {
        type: "code",
        language: "python",
        code: `import heapq

def top_k_elements(nums, k):
    return heapq.nlargest(k, nums)

# Example usage
nums = [3, 1, 5, 12, 2, 11]
k = 3
print(top_k_elements(nums, k))  # Output: [12, 11, 5]
`,
      },
      { type: "text", value: "This solution uses Python’s built-in `heapq.nlargest` function to efficiently retrieve the `k` largest elements from the list. This is an optimal solution with a time complexity of `O(n log k)`." },
      { type: "break" },
    ],
  },

  {
    slug: "binary-search-pattern",
    title: "Binary Search Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔍", "💡", "📊", "📈"],
    content: [
      { 
        type: "text", 
        value: "Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one." 
      },
      {
        type: "text", 
        value: "It’s typically used for searching, but can also be applied to solving problems where you're looking for a condition that holds in a sorted array."
      },
      {
        type: "code",
        language: "python",
        code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1

# Example usage
arr = [1, 3, 5, 7, 9, 11]
target = 7
print(binary_search(arr, target))  # Output: 3
`,
      },
      { type: "text", value: "In the `binary_search` function, we start by defining the left and right pointers. We then repeatedly calculate the middle index and adjust the pointers based on whether the target is greater or smaller than the middle value." },
      { type: "break" },
    ],
  },

  {
    slug: "merge-sort-pattern",
    title: "Merge Sort Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🔀", "⚡", "📉", "🔨"],
    content: [
      { 
        type: "text", 
        value: "Merge Sort is a divide-and-conquer algorithm. It divides the input array into two halves, recursively sorts them, and then merges the two sorted halves to produce a sorted array." 
      },
      {
        type: "text", 
        value: "Merge Sort is an efficient algorithm with a time complexity of `O(n log n)`, making it a great choice for sorting large datasets."
      },
      {
        type: "code",
        language: "python",
        code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))  # Output: [3, 9, 10, 27, 38, 43, 82]
`,
      },
      { type: "text", value: "In `merge_sort`, we recursively split the array until we have arrays of length 1 or 0. Then, the `merge` function combines the sorted halves into a fully sorted array." },
      { type: "break" },
    ],
  },

  {
    slug: "quick-sort-pattern",
    title: "Quick Sort Pattern in Algorithms",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["⚡", "🔨", "💥", "🔀"],
    content: [
      { 
        type: "text", 
        value: "Quick Sort is another divide-and-conquer algorithm. It selects a 'pivot' element, partitions the array into elements less than and greater than the pivot, and recursively sorts the subarrays." 
      },
      {
        type: "text", 
        value: "Quick Sort is faster than Merge Sort on average, with an expected time complexity of `O(n log n)` but a worst-case time complexity of `O(n^2)`."
      },
      {
        type: "code",
        language: "python",
        code: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
print(quick_sort(arr))  # Output: [3, 9, 10, 27, 38, 43, 82]
`,
      },
      { type: "text", value: "In `quick_sort`, we choose a pivot and divide the array into three parts: elements smaller than the pivot, the pivot itself, and elements greater than the pivot. We then recursively sort the left and right subarrays." },
      { type: "break" },
    ],
  },

  {
    slug: "dijkstra-pattern",
    title: "Dijkstra's Algorithm Pattern",
    author: "shoc71",
    date: "2025-09-20",
    edited: "2025-09-20",
    particles: ["🛣️", "💡", "⏳", "📍"],
    content: [
      { 
        type: "text", 
        value: "Dijkstra's algorithm finds the shortest path from a starting node to all other nodes in a weighted graph. It’s often used for routing and network analysis." 
      },
      {
        type: "text", 
        value: "The algorithm works by repeatedly selecting the vertex with the smallest tentative distance and updating the distances to its neighbors."
      },
      {
        type: "code",
        language: "python",
        code: `import heapq

def dijkstra(graph, start):
    queue = [(0, start)]
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))
    
    return distances

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
start = 'A'
print(dijkstra(graph, start))  # Output: {'A': 0, 'B': 1, 'C': 3, 'D': 4}
`,
      },
      { type: "text", value: "Dijkstra’s algorithm works by maintaining a priority queue of nodes to explore, each with its tentative shortest distance. The algorithm selects the node with the shortest distance, updates its neighbors, and repeats the process." },
      { type: "break" },
    ],
  },

  {
    slug: "intelligence-in-fiction",
    title: "Specific Ways to Accurately Represent Intelligence",
    author: "shoc71",
    date: "2025-10-21",
    edited: "2025-10-21",
    particles: ["👋", "🌐", "🌊", "🌎", "🙋‍♀️", "🌍", "🙋"],
    content: [
      { 
        type: "text", 
        value: "1. Pushing Boundaries" 
      },
      { type: "break" },
      { 
        type: "text", 
        value: "The character(s) like the audience first learn of the rules of the games and then actively test and see what they can get away with and what rules are enforced rigorously and what can they get away with. In fact, they exist from preventing the character from doing whatever they want right from the get go." 
      },
      { type: "break" },
      { 
        type: "2. Callbacks", 
        value: "This is where all the testing from earlier comes into play. We (the audience) needs to see how " 
      },
      { type: "break" },
      { 
        type: "text", 
        value: "3. Blocks" 
      },
      { type: "break" },
      { 
        type: "text", 
        value: "Hello" 
      },
      { type: "break" },
      { 
        type: "text", 
        value: "4. Control" 
      },
      { type: "break" },
      { 
        type: "text", 
        value: "they are the smartest one, there can never be more than one, one that stands above the rest. hence, the point of traps and deception. All out war about information." 
      },
      { 
        type: "text", 
        value: "5. Prep Time" 
      },
      { type: "break" },
      { 
        type: "text", 
        value: "Three things are needed here; 1. Improvization because nothing were goes perfectly, 2. The weaknesses need to be deeply exploited and abused as a crux of the strategy, 3. Prior knowledge needs to be established otherwise the overturn isn't earned." 
      },
    ],
  },

];
