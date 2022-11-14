let array = ["труд", "мир", "май", "программа", "блок", "доля", "сток", "фон", "--", "дом!"];
let totalArray = [];

function getArrayOfStringLessOrEqualsThree(array) {
  let totalArray = [];
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i].length <= 3) {
      totalArray[j] = array[i];
      j++;
    }
  }

  return totalArray;
}

totalArray = getArrayOfStringLessORequalsThree(array);
console.log(totalArray);