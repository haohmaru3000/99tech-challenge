/**
 *  Iterative approach
 * 
 *  Time complexity: O(n)
 *  Space complexity: O(1)
 */
function sum_to_n_a(n: number): number {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

/**
 *  Recursive approach
 * 
 *  Time complexity: O(n)
 *  Space complexity: O(n)
 */
function sum_to_n_b(n: number): number {
    if (n === 0) return 0;
    return n + sum_to_n_b(n - 1);
}