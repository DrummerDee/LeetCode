class Solution {
    solve(tasks, people) {
        tasks.sort((a, b) => b - a)  // [13, 9, 3, 2]
        people.sort((a, b) => b - a) // [10, 5, 2, 1]
        let counter = 0
        for (let i = 0; i < tasks.length; i++) {
            if (people[counter] >= tasks[i]) counter++
        }
        return counter
    }
}