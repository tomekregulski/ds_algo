function firstRecurringCharacter(arr) {
  const charMap = {};

  for (i = 0; i < arr.length; i++) {
    if (charMap[arr[i]]) {
      return arr[i];
    } else {
      charMap[arr[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([1, 2, 3, 2, 4, 5, 6, 5, 4, 3]));
