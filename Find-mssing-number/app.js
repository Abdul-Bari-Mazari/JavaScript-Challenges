// ***************** [5] ****************

function findMissingNo() {
  var arr = [1, 2, 4, 5, 6, 8, 10];

    // arr[i] = arr[0] = 1 
    // arr[i] + 1 = arr[0] + 1 = 1 + 1 = 2
    // arr[i + 1] = arr[0 + 1] = arr[1] = 2

  for(let i = 0; i < arr.length - 1; i++) {
   if (arr[i + 1] - arr[i] === 2) {
     console.log("The missing number is: " + (arr[i] + 1));
   }
    }
  }

findMissingNo();
