/**
 * @param {number[]} numbers
 * @return {number}
 */
 const removeDuplicates = function(numbers) {
    if (numbers.length === 0) return 0
    let initial_array = 0
    let next_array = 1

    while (next_array < numbers.length) {
        if (numbers[next_array] !== numbers[initial_array]) {
            initial_array++
            numbers[initial_array] = numbers[next_array]
            next_array++
        } else next_array++
    }

    return initial_array + 1 
};

console.log(removeDuplicates([1,1,1,2,2,3,3,4]))