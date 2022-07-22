/**
 * @param {number[]} number1
 * @param {number[]} number2
 * @return {number}
 */
const findMedianSortedArrays = (number1, number2) => {
  const sortFinalArray = [...number1, ...number2].sort((a, b) => a - b);
  const middle = Math.floor(sortFinalArray.length / 2);
  return sortFinalArray.length % 2 !== 0 ? sortFinalArray[middle] : (sortFinalArray[middle - 1] + sortFinalArray[middle]) / 2
};


console.log(findMedianSortedArrays([1,2], [3,4]))