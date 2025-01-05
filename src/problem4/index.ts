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