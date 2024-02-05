// *********************** [1] *********************

function countVovels() {
  var vovelsCounts = 0;
  var string = prompt("Enter any word to count numbers of vovels:");

  if (string != "") {
    for (let i = 0; i < string.length; i++) {
      if (
        string.charAt(i) == "a" ||
        string.charAt(i) == "e" ||
        string.charAt(i) == "i" ||
        string.charAt(i) == "o" ||
        string.charAt(i) == "u"
      ) {
        vovelsCounts += 1;
      }
    }

    return vovelsCounts;
  } else {
    alert("Null input");
    return 0;
  }
}

alert(countVovels());
