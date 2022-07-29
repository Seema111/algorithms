const checkDuplicate = function (numbers) {
  if (numbers.length === 0) return 0;
  return new Set(numbers).size !== numbers.length
};
