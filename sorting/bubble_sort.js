// Bubble Sort: It is one of the slowest sorting algorithms.
// The bubble sort algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one

// Creating the bubble sort function
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < array.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (array[j] > array[j + 1]) {
        // If the condition is true then swap them
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  console.log(array);
}

// This is our unsorted array
const array = [9, 40, 52, 73, 950, 123, 34, 90];

// Now pass this array to the bblSort() function
bubbleSort(array);
