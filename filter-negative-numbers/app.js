// ******************* [6] ********************

function filterNegativeNo() {
  var arr = [1, 2, 3, -4, -6, 10, -12, 20, -30];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(i, 1);
      i--;
    }

}
console.log(arr);
}

filterNegativeNo();